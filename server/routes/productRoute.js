const express = require('express');
const router = express.Router();
const verifyLogin = require('../middlewares/verifyLogin');
const {
  addProducts,
  getProducts,
  addToCart,
  removeFromCart,
  changeQuantity,
} = require('../controllers/productController');

router.route('/').get(getProducts);
router.route('/:productName/addToCart').get(verifyLogin, addToCart);
router.route('/:productName/removeFromCart').get(verifyLogin, removeFromCart);
router
  .route('/:productName/changeQuantity/:quantity')
  .get(verifyLogin, changeQuantity);
router.route('/add').post(addProducts);

module.exports = router;
