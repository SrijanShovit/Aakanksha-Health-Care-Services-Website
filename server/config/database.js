const mongoose = require('mongoose');

const db = mongoose.connect(
  'mongodb+srv://shubham:test1234@cluster0.jicuf.mongodb.net/healthcaredb?retryWrites=true&w=majority'
);

module.exports = db;
