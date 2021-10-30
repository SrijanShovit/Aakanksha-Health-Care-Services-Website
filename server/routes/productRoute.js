const express = require('express');
const router = express.Router();
const {
  addProducts,
  addToCart,
  removeFromCart,
  changeQuantity,
  getProductDetail,
  searchProducts,
  createOrder,
  verifyAndAddOrder,
} = require('../controllers/productController');

router.route('/getProductDetail').post(getProductDetail);
router.route('/searchProducts').post(searchProducts);
router.route('/addProducts').post(addProducts);
router.route('/addToCart').post(addToCart);
router.route('/removeFromCart').post(removeFromCart);
router.route('/changeQuantity').post(changeQuantity);
router.route('/createOrder').post(createOrder);
router.route('/addOrder').post(verifyAndAddOrder);

module.exports = router;
