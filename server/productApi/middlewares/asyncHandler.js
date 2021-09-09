/*
asyncHandler takes in controller functions as parameters and returns a 
function with three parameters which is assigned to the controller function
*/

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
