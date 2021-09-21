const Product = require('../models/Product');
const User = require('../models/User');
const asyncHandler = require('../middlewares/asyncHandler');

exports.addProducts = asyncHandler(async (req, res, next) => {
  let product = await Product.create(req.body);

  res.status(200).json({
    product,
  });
});

exports.getProducts = asyncHandler(async (req, res, next) => {
  let products = await Product.find(req.query);

  res.status(200).json({
    numberOfProducts: products.length,
    products,
  });
});

exports.addToCart = asyncHandler(async (req, res, next) => {
  let productName = req.params.productName;
  let product = await Product.findOne({ name: productName });

  if (!product) {
    res.status(400).json({
      message: `No product found with the name ${productName}.`,
    });
    return next();
  }

  let user = await User.findById(req.user.id).select('cartItems');
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
      { _id: req.user.id, 'cartItems.productDetails._id': product._id },
      { $inc: { 'cartItems.$.quantity': 1 } }
    );
  } else {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { cartItems: { productDetails: product } },
    });
  }

  res.status(200).json({
    message: `${productName} added to cart.`,
  });
});

exports.removeFromCart = asyncHandler(async (req, res, next) => {
  let productName = req.params.productName;
  let product = await Product.findOne({ name: productName });
  if (!product) {
    res.status(400).json({
      message: `No product found with the name ${productName}.`,
    });
    return next();
  }

  await User.findByIdAndUpdate(req.user.id, {
    $pull: { cartItems: { productDetails: product } },
  });

  res.status(200).json({
    message: `${productName} removed from cart.`,
  });
});

exports.changeQuantity = asyncHandler(async (req, res, next) => {
  let productName = req.params.productName;
  let product = await Product.findOne({ name: productName });
  if (!product) {
    res.status(400).json({
      message: `No product found with the name ${productName}.`,
    });
    return next();
  }

  let quantity = req.params.quantity;

  await User.findOneAndUpdate(
    { _id: req.user.id, 'cartItems.productDetails._id': product._id },
    { $set: { 'cartItems.$.quantity': quantity } }
  );

  res.status(200).json({
    message: `${productName} quantity changed.`,
  });
});
