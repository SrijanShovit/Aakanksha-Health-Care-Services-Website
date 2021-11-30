const mongoose = require('mongoose');

const LocalStoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  products: [mongoose.Schema.ObjectId],
});

module.exports = mongoose.model('localStore', LocalStoreSchema);
