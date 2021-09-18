const express = require('express');
const router = express.Router();
const verifyLogin = require('../middlewares/verifyLogin');
const {
  addProducts,
  getProducts,
  addToCart,
} = require('../controllers/productController');

router.route('/').get(getProducts);
router.route('/:productName/addToCart').get(verifyLogin, addToCart);
router.route('/add').post(addProducts);

module.exports = router;
