const express = require('express');
const router = express.Router();

const { addCampDetail, getCampDetail } = require('../controllers/campController');

router.route('/getCampDetail').get(getCampDetail);
router.route('/addCampDetail').post(addCampDetail);

module.exports = router;