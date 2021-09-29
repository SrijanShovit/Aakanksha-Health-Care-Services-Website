const asyncHandler = require('../middlewares/asyncHandler');
const User = require('../models/User');

exports.updateUserInfo = asyncHandler(async (req, res, next) => {
  if (!req.body.hasOwnProperty('email')) {
    res.json({
      message: 'Please provide a user email.',
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
  if (!req.body.hasOwnProperty('email')) {
    res.json({
      message: 'Please provide a user email.',
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
  if (!req.body.hasOwnProperty('email')) {
    res.json({
      message: 'Please provide a user email.',
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
