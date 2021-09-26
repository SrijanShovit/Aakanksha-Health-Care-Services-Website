const Doctor = require('../models/Doctor');
const asyncHandler = require('../middlewares/asyncHandler');

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
  if (!req.body.hasOwnProperty('doctorName') || req.body.doctorName === '') {
    res.json({
      message: 'doctorName is required',
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

  doctor = await Doctor.findByIdAndUpdate(
    doctor._id,
    {
      $push: { appointments: req.body },
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    message: 'Appointment added',
    appointments: doctor,
  });
});