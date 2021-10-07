const Doctor = require('../models/Doctor');
const User = require('../models/User');
const asyncHandler = require('../middlewares/asyncHandler');
const checkFields = require('../middlewares/checkFields');
const AppError = require('../utils/error');
const getSearchResults = require('../middlewares/getSearchResults');

exports.addDoctors = asyncHandler(async (req, res, next) => {
  let doctor = await Doctor.create(req.body);

  res.status(200).json({
    doctor,
  });
});

exports.getDoctorDetail = asyncHandler(async (req, res, next) => {
  let doctors = await Doctor.find(req.body);

  res.status(200).json({
    numberOfDoctors: doctors.length,
    doctors,
  });
});

exports.addAppointment = asyncHandler(async (req, res, next) => {
  let message = checkFields(req.body, ['doctorName', 'email']);
  if (message.length > 0) {
    return next(new AppError(message));
  }

  let user = await User.findOne({ email: req.body.email }),
    doctor = await Doctor.findOne({ name: req.body.doctorName });

  if (!user) {
    return next(new AppError(`No user found with email ${req.body.email}`));
  }

  if (!doctor) {
    return next(
      new AppError(`No doctor found with name ${req.body.doctorName}`)
    );
  }

  await User.findOneAndUpdate(
    { email: req.body.email },
    {
      $push: { appointments: req.body },
    }
  );

  res.status(200).json({
    message: 'Appointment added',
  });
});

exports.searchDoctors = asyncHandler(async (req, res, next) => {
  let response = await getSearchResults({ ...req.body }, Doctor);
  res.json(response);
});
