const asyncHandler = require('../middlewares/asyncHandler');
const User = require('../models/User');
const checkFields = require('../middlewares/checkFields');
const AppError = require('../utils/error');

exports.updateUserInfo = asyncHandler(async (req, res, next) => {
  req.body.password = undefined;

  let message = checkFields(req.body, ['email']);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let email = req.body.email,
    user = await User.findOneAndUpdate({ email }, req.body, {
      new: true,
    });

  if (!user) {
    return next(new AppError(`No user found with the email ${email}.`));
  }

  res.json({
    message: 'Profile updated successfully',
    user,
  });
});

exports.getCartItems = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['email']);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let email = req.body.email;
  let user = await User.findOne({ email }).select('cartItems');

  if (!user) {
    return next(new AppError(`No user found with the email ${email}.`));
  }

  res.status(200).json({
    cartItems: user.cartItems,
  });
});

exports.getAppointments = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['email']);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let email = req.body.email;
  let user = await User.findOne({ email }).select('appointments');

  if (!user) {
    return next(new AppError(`No user found with the email ${email}.`));
  }

  res.json({
    appointments: user.appointments,
  });
});

exports.changePassword = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, [
    'email',
    'currentPassword',
    'newPassword',
  ]);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let email = req.body.email;
  let user = await User.findOne({ email }).select('password');

  if (!user) {
    return next(new AppError(`No user found with the email ${email}.`));
  }

  if (!(await user.matchPassword(req.body.currentPassword))) {
    return next(new AppError('Wrong password.'));
  }

  user.password = req.body.newPassword;
  await user.save();

  res.json({
    message: 'Password changed successfully.',
  });
});
