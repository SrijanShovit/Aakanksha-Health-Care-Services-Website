const asyncHandler = require('../middlewares/asyncHandler');
const User = require('../models/User');
const checkFields = require('../middlewares/checkFields');

exports.updateUserInfo = asyncHandler(async (req, res, next) => {
  req.body.password = undefined;

  let message = checkFields(req.body, ['email']);
  if (message.length > 0) {
    res.json({
      message,
    });
    return next();
  }

  let email = req.body.email;

  let user = await User.findOneAndUpdate({ email }, req.body, {
    new: true,
  });

  if (!user) {
    res.status(400).json({
      message: `No user found with the email ${email}.`,
    });
    return next();
  }

  res.json({
    message: 'Profile updated successfully',
    user,
  });
});

exports.getCartItems = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['email']);
  if (message.length > 0) {
    res.json({
      message,
    });
    return next();
  }

  let email = req.body.email;
  let user = await User.findOne({ email }).select('cartItems');

  if (!user) {
    res.status(400).json({
      message: `No user found with the email ${email}.`,
    });
    return next();
  }

  res.status(200).json({
    cartItems: user.cartItems,
  });
});

exports.getAppointments = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['email']);
  if (message.length > 0) {
    res.json({
      message,
    });
    return next();
  }

  let email = req.body.email;
  let user = await User.findOne({ email }).select('appointments');

  if (!user) {
    res.status(400).json({
      message: `No user found with the email ${email}.`,
    });
    return next();
  }

  res.json({
    appointments: user.appointments,
  });
});

exports.changePassword = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['email']);
  if (message.length > 0) {
    res.json({
      message,
    });
    return next();
  }

  let email = req.body.email;
  let user = await User.findOne({ email }).select('password');

  if (!user) {
    res.status(400).json({
      message: `No user found with the email ${email}.`,
    });
    return next();
  }

  if (!(await user.matchPassword(req.body.currentPassword))) {
    res.json({
      message: 'Wrong password.',
    });
    return next();
  }

  user.password = req.body.newPassword;
  await user.save();

  res.json({
    message: 'Password changed successfully.',
  });
});
