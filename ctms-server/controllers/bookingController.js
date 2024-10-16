// const Booking = require('../models/Booking');

// exports.bookBus = async (req, res) => {
//   const { userId, bus } = req.body;
//   const newBooking = new Booking({ userId, bus });
//   await newBooking.save();
//   res.status(201).json({ message: 'Bus booked successfully' });
// };



const Booking = require('../models/Booking');

const bookBus = async (req, res) => {
   
  console.log(req.body)
  const { bus, dob } = req.body; 
    try {
        const newBooking = new Booking({ 
            bus:bus, 
            dob: dob 
        });
        await newBooking.save();
        res.status(201).json({ message: 'Bus booked successfully' });
    } catch (error) {
        console.error('Error booking bus:', error);
        res.status(500).json({ message: 'Booking failed', error: error.message });
    }
};


module.exports = {
  bookBus,
};