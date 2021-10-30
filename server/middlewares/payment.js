const Razorpay = require('Razorpay');

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

exports.getOrderDetails = async (amount, currency) => {
  try {
    let order = await razorpayInstance.orders.create({ amount, currency });
    return {
      key: process.env.RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      name: process.env.COMPANY_NAME,
      order_id: order.id,
    };
  } catch (err) {
    return { error: err };
  }
};

exports.verifyOrder = (order_id, payment_id, razorpay_signature) => {
  let hmac = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET);
  hmac.update(order_id + '|' + payment_id);
  const generated_signature = hmac.digest('hex');

  return razorpay_signature === generated_signature;
};
