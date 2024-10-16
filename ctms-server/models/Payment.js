const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  cardNumber: String,
  branchName: String,
  bankName: String,
  expirydate:Date,
  cvv: String,
  pinCode: String,
});

module.exports = mongoose.model('Payment', paymentSchema);
