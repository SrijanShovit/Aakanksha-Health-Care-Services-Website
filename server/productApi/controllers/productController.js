const Product = require('../models/Product');
const asyncHandler = require('../middlewares/asyncHandler');
const AppError = require('../utils/error');

exports.addProduct = asyncHandler(async (req, res, next) => {
  const name = req.body.name,
    price = req.body.price,
    description = req.body.description,
    imageUrl = req.body.imageUrl;
  console.log(name, price);

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
