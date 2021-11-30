const asyncHandler = require('../middlewares/asyncHandler');
const User = require('../models/User');
const checkFields = require('../helpers/checkFields');
const checkModelFields = require('../helpers/checkModelFields');
const AppError = require('../utils/error');
const Product = require('../models/Product');

exports.updateUserInfo = asyncHandler(async (req, res, next) => {
  if (req.body.hasOwnProperty('password')) {
    delete req.body.password;
    return next(
      new AppError(
        'Password not applicable. Please use [change-password] option for changing password.'
      )
    );
  }

  let message = checkFields(req.body, ['email']);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let bodyFieldsArray = Object.keys(req.body);
  if (bodyFieldsArray.length === 1) {
    return next(
      new AppError('Please provide any {field: value} pair to be updated.')
    );
  }

  message = checkModelFields(User, bodyFieldsArray);
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
  let message = checkFields(req.body, ['email']);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let fields = [''];
  if (req.body.hasOwnProperty('fields')) {
    message = checkModelFields(User, req.body.fields);
    if (message.length > 0) {
      return next(new AppError(message));
    }
    fields = req.body.fields;
  }

  let { email } = req.body;
  let user = await User.findOne({ email }).select(fields);

  if (!user) {
    return next(new AppError(`No user found with the email ${email}.`));
  }

  if (fields.includes('cartItems')) {
    let cartItemsId = [];
    user.cartItems.forEach((item) => {
      cartItemsId.push(item.productId);
    });
    let items = await Product.find({
      _id: { $in: cartItemsId },
    }).populate('localStore', 'name address');

    let i = 0;
    user.cartItems.forEach((item) => {
      item['productDetails'] = items[i++];
    });
  }

  res.json({
    userInfo: user,
  });
});
