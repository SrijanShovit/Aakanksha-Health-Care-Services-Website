const express = require('express');
const router = express.Router();
const {
  addProducts,
  addToCart,
  removeFromCart,
  changeQuantity,
  getProductDetail,
} = require('../controllers/productController');

router.route('/getProductDetail').post(getProductDetail);
router.route('/addProducts').post(addProducts);
router.route('/addToCart').post(addToCart);
router.route('/removeFromCart').post(removeFromCart);
router.route('/changeQuantity').post(changeQuantity);

module.exports = router;
