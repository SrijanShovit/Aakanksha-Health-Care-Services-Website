const asyncHandler = require('../middlewares/asyncHandler');
const User = require('../models/User');
const checkFields = require('../middlewares/checkFields');
const checkModelFields = require('../middlewares/checkModelFields');
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

exports.getUserInfo = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['email', 'fields']);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let { email, fields } = req.body;

  message = checkModelFields(User, req.body.fields);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let user = await User.findOne({ email }).select(fields);
  if (!user) {
    return next(new AppError(`No user found with the email ${email}.`));
  }

  res.json({
    userInfo: user,
  });
});
