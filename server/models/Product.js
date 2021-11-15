const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  category: String,
  brand: String,
  price: Number,
  imageUrl: String,
  description: String,
});

ProductSchema.index({
  name: 'text',
  description: 'text',
  category: 'text',
  brand: 'text',
});

module.exports = mongoose.model('product', ProductSchema);
