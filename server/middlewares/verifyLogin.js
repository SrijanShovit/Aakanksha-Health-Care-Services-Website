const jwt = require('jsonwebtoken');

const verifyLogin = (req, res, next) => {
  const token = req.cookies.token;
  try {
    const decodedToken = jwt.verify(token, 'secret');
    req.user = decodedToken;
    next();
  } catch (err) {
    res.status(401).json({ message: 'No user logged in. Please login first.' });
  }
};

module.exports = verifyLogin;
