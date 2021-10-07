const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: String,
  about: String,
  address: String,
  imageUrl: String,
});

DoctorSchema.index({
  name: 'text',
  about: 'text',
  address: 'text',
});

module.exports = mongoose.model('doctor', DoctorSchema);
