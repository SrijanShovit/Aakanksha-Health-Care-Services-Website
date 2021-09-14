const Product = require('../models/Product');
const asyncHandler = require('../middlewares/asyncHandler');

exports.addProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.bulkCreate(req.body);

  res.json({
    product,
    status: 200,
  });
});

exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.findAll({ where: req.query });

  res.json({
    numberOfProducts: products.length,
    products,
    status: 200,
  });
});
