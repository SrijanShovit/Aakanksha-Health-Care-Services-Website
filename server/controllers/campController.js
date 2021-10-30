const Camp = require('../models/Camp');
const asyncHandler = require('../middlewares/asyncHandler');
const getSearchResults = require('../helpers/getSearchResults');

exports.addCamps = asyncHandler(async (req, res, next) => {
  // Insert multiple camps data, input should be an array
  const camps = await Camp.create(req.body);

  res.status(200).json({
    camps,
  });
});

exports.getCampDetail = asyncHandler(async (req, res, next) => {
  const camps = await Camp.find(req.body);

  res.status(200).json({
    numberOfCamps: camps.length,
    camps,
  });
});

exports.searchCamps = asyncHandler(async (req, res, next) => {
  let response = await getSearchResults({ ...req.body }, Camp);
  res.json(response);
});
