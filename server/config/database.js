const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGO_URI);

module.exports = db;
