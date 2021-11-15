const express = require('express');
const {
  updateUserInfo,
  changePassword,
  getUserInfo,
} = require('../controllers/userController');
const router = express.Router();

router.route('/getUserInfo').post(getUserInfo);
router.route('/updateUserInfo').patch(updateUserInfo);
router.route('/changePassword').post(changePassword);
module.exports = router;
