const express = require('express');
const {
  addDoctors,
  getDoctorDetail,
  addAppointment,
  searchDoctors,
} = require('../controllers/doctorController');
const router = express.Router();

router.route('/getDoctorDetail').post(getDoctorDetail);
router.route('/addDoctors').post(addDoctors);
router.route('/addAppointment').post(addAppointment);
router.route('/searchDoctors').post(searchDoctors);

module.exports = router;
