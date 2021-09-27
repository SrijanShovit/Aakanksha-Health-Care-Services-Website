const Product = require('../models/Product');
const User = require('../models/User');
const asyncHandler = require('../middlewares/asyncHandler');

exports.addProducts = asyncHandler(async (req, res, next) => {
  let product = await Product.create(req.body);

  res.status(200).json({
    product,
  });
});

exports.getProductDetail = asyncHandler(async (req, res, next) => {
  let products = await Product.find(req.body);

  res.status(200).json({
    numberOfProducts: products.length,
    products,
  });
});

exports.addToCart = asyncHandler(async (req, res, next) => {
  if (
    !req.body.hasOwnProperty('productName') ||
    !req.body.hasOwnProperty('email')
  ) {
    res.json({
      message: 'All properties namely {productName, email} are required.',
    });
    return next();
  }

  let productName = req.body.productName,
    email = req.body.email;
  let product = await Product.findOne({ name: productName }),
    user = await User.findOne({ email });

  if (!product) {
    res.status(400).json({
      message: `No product found with the name ${productName}.`,
    });
    return next();
  }

  if (!user) {
    res.status(400).json({
      message: `No user found with the email ${email}.`,
    });
    return next();
  }

  let cartItems = user.cartItems;
  let found = false;

  cartItems.forEach((item) => {
    if (
      JSON.stringify(item.productDetails._id) == JSON.stringify(product._id)
    ) {
      found = true;
    }
  });

  // if product found in the cart, increase the quantity by 1
  if (found) {
    await User.findOneAndUpdate(
      { _id: user._id, 'cartItems.productDetails._id': product._id },
      { $inc: { 'cartItems.$.quantity': 1 } }
    );
  } else {
    await User.findByIdAndUpdate(user._id, {
      $push: { cartItems: { productDetails: product } },
    });
  }

  res.status(200).json({
    message: `${productName} added to cart.`,
  });
});

exports.removeFromCart = asyncHandler(async (req, res, next) => {
  if (
    !req.body.hasOwnProperty('productName') ||
    !req.body.hasOwnProperty('email')
  ) {
    res.json({
      message: 'All properties namely {productName, email} are required.',
    });
    return next();
  }

  let productName = req.body.productName,
    email = req.body.email;
  let product = await Product.findOne({ name: productName }),
    user = await User.findOne({ email });

  if (!product) {
    res.status(400).json({
      message: `No product found with the name ${productName}.`,
    });
    return next();
  }

  if (!user) {
    res.status(400).json({
      message: `No user found with the email ${email}.`,
    });
    return next();
  }

  await User.findByIdAndUpdate(user._id, {
    $pull: { cartItems: { productDetails: product } },
  });

  res.status(200).json({
    message: `${productName} removed from cart.`,
  });
});

exports.changeQuantity = asyncHandler(async (req, res, next) => {
  if (
    !req.body.hasOwnProperty('productName') ||
    !req.body.hasOwnProperty('email') ||
    !req.body.hasOwnProperty('quantity')
  ) {
    res.json({
      message:
        'All properties namely {productName, email and quantity} are required.',
    });
    return next();
  }

  let productName = req.body.productName,
    email = req.body.email;
  let product = await Product.findOne({ name: productName }),
    user = await User.findOne({ email });

  if (!product) {
    res.status(400).json({
      message: `No product found with the name ${productName}.`,
    });
    return next();
  }

  if (!user) {
    res.status(400).json({
      message: `No user found with the email ${email}.`,
    });
    return next();
  }

  let quantity = req.body.quantity;

  await User.findOneAndUpdate(
    { _id: user._id, 'cartItems.productDetails._id': product._id },
    { $set: { 'cartItems.$.quantity': quantity } }
  );

  res.status(200).json({
    message: `${productName} quantity changed.`,
  });
});

exports.getCartItems = asyncHandler(async (req, res, next) => {
  if (!req.body.hasOwnProperty('email')) {
    res.json({
      message: 'Please provide a user email.',
    });
    return next();
  }

  let email = req.body.email;
  let user = await User.findOne({ email }).select('cartItems');

  if (!user) {
    res.status(400).json({
      message: `No user found with the email ${email}.`,
    });
    return next();
  }

  res.status(200).json({
    cartItems: user.cartItems,
  });
});
