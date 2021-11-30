const express = require('express');
const router = express.Router();

const { addLocalStores } = require('../controllers/localStoreController');

router.route('/add').post(addLocalStores);

module.exports = router;
