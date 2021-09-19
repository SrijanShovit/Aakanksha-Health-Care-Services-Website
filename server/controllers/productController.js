const Product = require('../models/Product');
const User = require('../models/User');
const asyncHandler = require('../middlewares/asyncHandler');

exports.addProducts = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    product,
  });
});

exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find(req.query);

  res.status(200).json({
    numberOfProducts: products.length,
    products,
  });
});

exports.addToCart = asyncHandler(async (req, res, next) => {
  const productName = req.params.productName;
  const product = await Product.findOne({ name: productName });

  if (!product) {
    res.status(400).json({
      message: `No product found with the name ${productName}.`,
    });
    return next();
  }

  await User.findByIdAndUpdate(req.user.id, {
    $push: { cartItems: { productDetails: product } },
  });

  res.status(200).json({
    message: `${productName} added to cart.`,
  });
});
