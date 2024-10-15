const Payment = require('../models/Payment');

exports.processPayment = async (req, res) => {
  const { userId, cardNumber, branchName, bankName, cvv, pinCode } = req.body;
  const payment = new Payment({ userId, cardNumber, branchName, bankName, cvv, pinCode });
  await payment.save();
  res.status(200).json({ message: 'Payment successful' });
};
