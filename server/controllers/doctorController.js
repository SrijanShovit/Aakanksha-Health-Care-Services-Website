const Doctor = require('../models/Doctor');
const User = require('../models/User');
const asyncHandler = require('../middlewares/asyncHandler');
const checkFields = require('../middlewares/checkFields');

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
    res.json({
      message,
    });
    return next();
  }

  let doctor = await Doctor.findOne({ name: req.body.doctorName });
  if (!doctor) {
    res
      .status(200)
      .json({ message: `No doctor found with name ${req.body.doctorName}` });
    return next();
  }
  req.body.doctorName = undefined;

  await User.findOneAndUpdate(
    { email: req.body.email },
    {
      $push: { appointments: req.body },
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    message: 'Appointment added',
  });
});
