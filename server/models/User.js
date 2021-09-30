const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: { type: String, select: false, trim: true },
  number: String,
  profilePicUrl: String,
  cartItems: {
    type: [{ productDetails: Object, quantity: { type: Number, default: 1 } }],
    _id: false,
  },
  appointments: {
    type: [Object],
    _id: false,
  },
  orders: {
    type: [Object],
    _id: false,
  },
  savedCards: {
    type: [Object],
    _id: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
  next();
});

// match password
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Hash token and save it in db
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 mins

  return resetToken;
};

module.exports = mongoose.model('user', UserSchema);
