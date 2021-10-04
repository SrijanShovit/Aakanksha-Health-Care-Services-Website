const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: [true, 'Please provide username.'] },
  email: { type: String, required: [true, 'Please provide email.'] },
  password: {
    type: String,
    select: false,
    trim: true,
    required: [true, 'Please provide password.'],
  },
  number: String,
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message:
        'Please give one of these values for gender - {male, female, other}',
    },
  },
  DOB: String,
  profilePicUrl: String,
  cartItems: {
    type: [{ productDetails: Object, quantity: { type: Number, default: 1 } }],
    _id: false,
  },
  appointments: {
    type: [Object],
    _id: false,
  },
  orderHistory: {
    type: [Object],
    _id: false,
  },
  ongoingOrders: {
    type: [
      {
        productDetails: {
          _id: false,
          required: [true, 'Please provide productDetails in orderDetails.'],
          type: [
            {
              productName: {
                type: String,
                required: [
                  true,
                  'Please provide productName for all products in productDetails',
                ],
              },
              price: {
                type: Number,
                required: [
                  true,
                  'Please provide price for all products in productDetails',
                ],
              },
              quantity: {
                type: Number,
                required: [
                  true,
                  'Please provide quantity for all products in productDetails',
                ],
              },
              subPrice: {
                type: Number,
                required: [
                  true,
                  'Please provide subPrice for all products in productDetails',
                ],
              },
            },
          ],
        },
        totalPrice: {
          type: Number,
          required: [true, 'Please provide totalPrice'],
        },
        deliveryDate: String,
      },
    ],
    _id: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// hash password before saving
UserSchema.pre('save', async function (next) {
  this.runValidators = true;

  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
  }
  next();
});

UserSchema.pre('findOneAndUpdate', async function (next) {
  this.options.runValidators = true;
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
