const asyncHandler = require('../middlewares/asyncHandler');
const User = require('../models/User');
const sendTokenResponse = require('../middlewares/sendTokenResponse');

exports.register = asyncHandler(async (req, res, next) => {
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
    user
  });
});

exports.login = asyncHandler(async (req, res, next) => {
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
  sendTokenResponse(user, res, 200);
});

exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie('token', '', { maxAge: 1 });
  res.status(200).json({ message: 'Logged out successfully.' });
});
