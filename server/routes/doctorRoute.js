const express = require('express');
const {
  addDoctors,
  getDoctorDetail,
  addAppointment,
} = require('../controllers/doctorController');
const router = express.Router();

router.route('/getDoctorDetail').post(getDoctorDetail);
router.route('/addDoctors').post(addDoctors);
router.route('/addAppointment').post(addAppointment);

module.exports = router;
