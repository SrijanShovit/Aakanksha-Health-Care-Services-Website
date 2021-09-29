const express = require('express');
const {
  getAppointments,
  getCartItems,
  updateUserInfo,
} = require('../controllers/userController');
const router = express.Router();

router.route('/getCartItems').post(getCartItems);
router.route('/getAppointments').post(getAppointments);
router.route('/updateUserInfo').patch(updateUserInfo);
module.exports = router;
