const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  // Validation errors
  if (err.name === 'ValidationError') {
    error.message = Object.values(err.errors)
      .map((obj) => obj.message)
      .join(', ');
  }

  res.status(error.statusCode).json({
    message: error.message || err.message,
  });
};

module.exports = errorHandler;
