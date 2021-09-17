const Product = require('../models/Product');
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
