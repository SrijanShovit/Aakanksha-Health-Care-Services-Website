const asyncHandler = require('./asyncHandler');

const sendTokenResponse = asyncHandler(async (user, res, statusCode) => {
  const token = await user.getJwtToken();
  const options = {
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    httpOnly: true,
  };
  res
    .cookie('token', token, options)
    .status(statusCode)
    .json({  user });
});

module.exports = sendTokenResponse;
