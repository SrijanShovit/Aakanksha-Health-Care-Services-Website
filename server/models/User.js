const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: { type: String, select: false, trim: true },
  profilePicUrl: String,
  cartItems: {
    type: [{ productDetails: Object, quantity: { type: Number, default: 1 } }],
    _id: false,
  },
});

// hash password before saving
UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, bcrypt.genSaltSync());
  next();
});

// match password
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('user', UserSchema);
