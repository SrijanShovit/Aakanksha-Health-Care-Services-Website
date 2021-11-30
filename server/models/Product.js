const mongoose = require('mongoose');
const LocalStore = require('../models/LocalStore');

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
  localStore: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'localStore',
  },
});

ProductSchema.index({
  name: 'text',
  description: 'text',
  category: 'text',
  brand: 'text',
});

ProductSchema.post('save', async function () {
  await LocalStore.findByIdAndUpdate(this.localStore, {
    $push: { products: this._id },
  });
});

module.exports = mongoose.model('product', ProductSchema);
