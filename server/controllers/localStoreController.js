const asyncHandler = require('../middlewares/asyncHandler');
const LocalStore = require('../models/LocalStore');

exports.addLocalStores = asyncHandler(async (req, res, next) => {
  let localStores = await LocalStore.create(req.body);
  res.json({
    success: true,
    message: 'Local store/s added successfully.',
    data: localStores,
  });
});
