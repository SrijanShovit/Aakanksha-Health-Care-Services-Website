const express = require('express');
const router = express.Router();

const { addCamps, getCampDetail } = require('../controllers/campController');

router.route('/getCampDetail').post(getCampDetail);
router.route('/addCamps').post(addCamps);

module.exports = router;
