const express = require('express');
const router = express.Router();

const {
  addProducts,
  getProducts,
} = require('../controllers/productController');

router.route('/').get(getProducts);
router.route('/add').post(addProducts);

module.exports = router;
