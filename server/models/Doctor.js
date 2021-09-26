const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: String,
  about: String,
  adrress: String,
  imageUrl: String,
  appointments: [
    {
      firstName: String,
      lastName: String,
      reason: String,
      date: String,
      slot: String,
    },
  ],
});

module.exports = mongoose.model('doctor', DoctorSchema);
