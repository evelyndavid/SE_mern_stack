const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bus: String,
  bookedOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
