const express = require('express');
const router = express.Router();

const { addCamps, getCampDetail } = require('../controllers/campController');

router.route('/getCampDetail').get(getCampDetail);
router.route('/addCamps').post(addCamps);

module.exports = router;
