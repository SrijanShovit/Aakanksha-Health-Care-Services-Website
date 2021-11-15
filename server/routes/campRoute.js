const express = require('express');
const router = express.Router();

const {
  addCamps,
  getCampDetail,
  searchCamps,
} = require('../controllers/campController');

router.route('/getCampDetail').post(getCampDetail);
router.route('/addCamps').post(addCamps);
router.route('/searchCamps').post(searchCamps);

module.exports = router;
