const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: { type: String, select: false, trim: true },
  profilePicUrl: String,
  cartItems: {
    type: [mongoose.Schema.ObjectId],
    ref: 'Product',
  },
});

module.exports = mongoose.model('user', UserSchema);
