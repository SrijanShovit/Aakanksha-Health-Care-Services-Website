const asyncHandler = require('../middlewares/asyncHandler');
const sendEmail = require('../middlewares/sendEmail');
const checkFields = require('../middlewares/checkFields');
const User = require('../models/User');
const crypto = require('crypto');

exports.register = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['email', 'username', 'password']);
  if (message.length > 0) {
    res.json({
      message,
    });
    return next();
  }

  let username = req.body.username,
    email = req.body.email,
    password = req.body.password;
  let user = await User.findOne({ email }); // return null if not found

  // if user already registered
  if (user) {
    res.status(400).json({
      message: 'User already registered, please login with your credentials',
    });
    return next();
  }
  user = await User.create({ username, email, password });
  // password should'nt be given as response, so delete it from user object
  user.password = undefined;

  res.status(200).json({
    message: 'User registered successfully!',
    user,
  });
});

exports.login = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['email', 'password']);
  if (message.length > 0) {
    res.json({
      message,
    });
    return next();
  }

  let password = req.body.password,
    email = req.body.email;

  // returns null if not found
  let user = await User.findOne({ email }).select('+password');

  // if user not found or password is wrong
  if (!user || !(await user.matchPassword(password))) {
    res.status(200).json({
      message: 'Wrong login credentials',
    });
    return next();
  }

  // password should not be given in response, so remove it from user object
  user.password = undefined;
  res.status(200).json({ user });
});

exports.forgotPassword = asyncHandler(async (req, res, nest) => {
  let message = checkFields(req.body, ['email']);
  if (message.length > 0) {
    res.json({
      message,
    });
    return next();
  }

  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.json({
      message: `No user found with email ${req.body.email}`,
    });
  }

  const resetToken = user.getResetPasswordToken();

  // save reset token in database
  await user.save();

  //Create reset url
  const resetUrl = `${req.protocol}://${req.get(
    'host'
  )}/resetPassword/${resetToken}`;

  try {
    await sendEmail({
      organisationName: 'AAKANKSHA HEALTHCARE SERVICES',
      organisationEmail: 'noreply@aakanksha.com',
      userEmail: user.email,
      subject: 'Password reset link',
      message: `You are receiving this email because you (or someone else) has requested the reset of password for your account on AAKANKSHA HEALTHCARE SERVICES. Please click this link for password reset, it's valid for 10 minutes - ${resetUrl}`,
    });
    res.json({
      message: 'Email sent successfully.',
    });
  } catch (err) {
    console.log(err);

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.json({
      message: 'Email could not be sent',
    });
  }
});

exports.resetPassword = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['token', 'newPassword']);
  if (message.length > 0) {
    res.json({
      message,
    });
    return next();
  }

  let { newPassword, token } = req.body;

  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    res.json({
      message: 'Link has expired.',
    });
    return next();
  }

  user.password = newPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  res.json({
    message: 'Password reset successfull',
  });
});
