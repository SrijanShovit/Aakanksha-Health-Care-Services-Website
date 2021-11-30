const Product = require('../models/Product');
const User = require('../models/User');
const asyncHandler = require('../middlewares/asyncHandler');
const checkFields = require('../helpers/checkFields');
const AppError = require('../utils/error');
const getSearchResults = require('../helpers/getSearchResults');
const { verifyOrder, getOrderDetails } = require('../helpers/payment');
require('../models/LocalStore');

exports.addProducts = asyncHandler(async (req, res, next) => {
  let products = await Product.create(req.body);
  res.status(200).json({
    message: `${products.length} products added.`,
    products,
  });
});

exports.getProductDetail = asyncHandler(async (req, res, next) => {
  if (req.body.hasOwnProperty('brand')) {
    if (req.body.brand.length == 0) {
      delete req.body.brand;
    }
  }

  if (req.body.hasOwnProperty('category')) {
    if (req.body.category.length == 0) {
      delete req.body.category;
    }
  }

  let query = Product.find(req.body);

  if (req.body.hasOwnProperty('priceRange')) {
    if (req.body.priceRange.length != 2) {
      res.json({
        message: 'priceRange array should have 2 elements.',
      });
      return next();
    }

    let minPrice = req.body.priceRange[0],
      maxPrice = req.body.priceRange[1];
    query = query.find({
      $and: [{ price: { $gte: minPrice } }, { price: { $lte: maxPrice } }],
    });
  }

  let products = await query.populate('localStore', 'name address');

  res.status(200).json({
    numberOfProducts: products.length,
    message:
      products.length == 0
        ? 'No products found.'
        : `${products.length} products found`,
    products,
  });
});

exports.addToCart = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['email', 'productName']);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let productName = req.body.productName,
    email = req.body.email;
  let product = await Product.findOne({ name: productName }),
    user = await User.findOne({ email });

  if (!product) {
    return next(new AppError(`No product found with the name ${productName}.`));
  }

  if (!user) {
    return next(new AppError(`No user found with the email ${email}.`));
  }

  let cartItems = user.cartItems;
  let found = false;

  cartItems.forEach((item) => {
    if (JSON.stringify(item.productId) == JSON.stringify(product._id)) {
      found = true;
    }
  });

  // if product found in the cart, increase the quantity by 1
  if (found) {
    await User.findOneAndUpdate(
      { _id: user._id, 'cartItems.productId': product._id },
      { $inc: { 'cartItems.$.quantity': 1 } }
    );
  } else {
    await User.findByIdAndUpdate(user._id, {
      $push: { cartItems: { productId: product._id } },
    });
  }

  res.status(200).json({
    message: `${productName} added to cart.`,
  });
});

exports.removeFromCart = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['email', 'productName']);
  if (message.length > 0) {
    res.json({
      message,
    });
    return next();
  }

  let productName = req.body.productName,
    email = req.body.email;
  let product = await Product.findOne({ name: productName }),
    user = await User.findOne({ email });

  if (!product) {
    return next(new AppError(`No product found with the name ${productName}.`));
  }
  if (!user) {
    return next(new AppError(`No user found with the email ${email}.`));
  }

  await User.findByIdAndUpdate(user._id, {
    $pull: { cartItems: { productId: product._id } },
  });

  res.status(200).json({
    message: `${productName} removed from cart.`,
  });
});

exports.changeQuantity = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['email', 'productName', 'quantity']);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let productName = req.body.productName,
    email = req.body.email;
  let product = await Product.findOne({ name: productName }).select('_id');
  let user = await User.findOne({ email });

  if (!product) {
    return next(new AppError(`No product found with the name ${productName}.`));
  }

  if (!user) {
    return next(new AppError(`No user found with the email ${email}.`));
  }

  let quantity = req.body.quantity;

  await User.findOneAndUpdate(
    { _id: user._id, 'cartItems.productId': product._id },
    { $set: { 'cartItems.$.quantity': quantity } }
  );

  res.status(200).json({
    message: `${productName} quantity changed.`,
  });
});

exports.searchProducts = asyncHandler(async (req, res, next) => {
  let response = await getSearchResults({ ...req.body }, Product);
  res.json(response);
});

exports.createOrder = asyncHandler(async (req, res, next) => {
  let message = checkFields({ ...req.body }, ['totalPrice', 'currency']);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let orderDetails = await getOrderDetails(
    req.body.totalPrice,
    req.body.currency
  );
  if (orderDetails.hasOwnProperty('error')) {
    if (orderDetails.error.hasOwnProperty('error')) {
      return next(new AppError(`${orderDetails.error.error.description}`));
    }
    return next(
      new AppError(
        `Error creating order. Please check payment credentials or try again later.`
      )
    );
  }
  res.json(orderDetails);
});

exports.verifyAndAddOrder = asyncHandler(async (req, res, next) => {
  let message = checkFields({ ...req.body }, [
    'email',
    'order_id',
    'payment_id',
    'totalPrice',
  ]);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return `No user found with the email ${req.body.email}.`;
  }

  const { order_id, payment_id, totalPrice } = req.body;

  if (!req.headers.hasOwnProperty('x-razorpay-signature')) {
    return next(
      new AppError(
        `Please provide the razorpay signature in header as {x-razorpay-signature: .....}`
      )
    );
  }
  const razorpay_signature = req.headers['x-razorpay-signature'];
  if (verifyOrder(order_id, payment_id, razorpay_signature)) {
    // add order to database
    let productDetails = [];
    user.cartItems.forEach((item) => {
      productDetails.push({
        productId: item.productId,
        quantity: item.quantity,
      });
    });

    let productIds = user.cartItems.map((item) => item.productId);
    let productPrices = await Product.find({ _id: productIds }).select('price');

    let i = 0;
    productDetails.forEach((item) => {
      item.subPrice = item.quantity * productPrices[i++].price;
    });

    let order = {
      orderId: order_id,
      totalPrice: totalPrice,
      productDetails,
    };

    await User.findOneAndUpdate(
      { email: req.body.email },
      { $push: { ongoingOrders: order } },
      { $set: { cartItems: [] } },
      { new: true }
    );

    res.json({ success: true, message: 'Payment has been verified.' });
  } else {
    res.json({ success: false, message: 'Payment verification failed.' });
  }
});
