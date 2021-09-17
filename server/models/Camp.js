const mongoose = require('mongoose');

// import mongoose double dataType
require('mongoose-double')(mongoose);
const SchemaTypes = mongoose.Schema.Types;

const CampSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  city: String,
  latitude: SchemaTypes.Double,
  longitude: SchemaTypes.Double,
  description: String,
});

module.exports = mongoose.model('camp', CampSchema);
