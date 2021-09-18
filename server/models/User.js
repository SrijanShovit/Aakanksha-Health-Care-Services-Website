const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// generate json web token
const maxAge = 3 * 24 * 60 * 60;
UserSchema.methods.getJwtToken = async function () {
  return jwt.sign({ id: this._id }, 'secret', {
    expiresIn: maxAge,
  });
};

module.exports = mongoose.model('user', UserSchema);
