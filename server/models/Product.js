const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  imageUrl: String,
  description: String,
});

module.exports = mongoose.model('product', ProductSchema);
