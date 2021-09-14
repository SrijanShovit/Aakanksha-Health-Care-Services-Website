const asyncHandler = require('../middlewares/asyncHandler');
const User = require('../models/User');

exports.register = asyncHandler(async (req, res, next) => {
  let username = req.body.username,
    email = req.body.email,
    password = req.body.password;

  let user = await User.findAll({ where: { email } });
  if (Object.keys(user).length != 0) {
    res.status(400).json({
      message: 'User already registered, please login with your credentials',
    });
    return next();
  }
  user = await User.create({ username, email, password });

  // password should'nt be given as response, so delete it from user object
  delete user.dataValues.password;

  res.status(200).json({
    message: 'User registered successfully!',
    user,
  });
});

exports.login = asyncHandler(async (req, res, next) => {
  let password = req.body.password,
    email = req.body.email;

  let user = await User.findAll({ where: { email } });
  // 'findAll' gives an array with only one user object which is the first one

  // if user not found or password is wrong
  if (Object.keys(user).length === 0 || user[0].password != password) {
    res.status(401).json({
      message: 'Wrong login credentials',
    });
    return next();
  }

  // password should not be given in response, so remove it from user object
  delete user[0].dataValues.password;

  res.status(200).json({
    message: 'Login Successfull',
    user: user[0],
  });
});
