const Booking = require('../models/Booking');

exports.bookBus = async (req, res) => {
  const { userId, bus } = req.body;
  const newBooking = new Booking({ userId, bus });
  await newBooking.save();
  res.status(201).json({ message: 'Bus booked successfully' });
};
