// takes error object and returns error message in response

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.statusCode = 200 || err.status;

  // Validation errors
  if (err.name === 'ValidationError') {
    error.message = Object.values(err.errors)
      .map((obj) => obj.message)
      .join(', ');
    if (error.message.startsWith('Validation failed:')) {
      error.message = error.message.replace('Validation failed: ', '');
    }
  }
  console.log(err);
  res.status(error.statusCode).json({
    message: error.message || err.message,
  });
};

module.exports = errorHandler;
