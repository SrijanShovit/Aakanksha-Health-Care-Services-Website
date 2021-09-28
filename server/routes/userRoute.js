const express = require('express');
const {
  getAppointments,
  getCartItems,
} = require('../controllers/userController');
const router = express.Router();

router.route('/getCartItems').post(getCartItems);
router.route('/getAppointments').post(getAppointments);
module.exports = router;
