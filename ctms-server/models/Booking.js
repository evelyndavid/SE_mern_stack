

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
 
  bus: { type: String, required: true }, 
  
  dob: { type: Date, required: true }, 
  bookedOn: { type: Date, default: Date.now },
  
});


module.exports = mongoose.model('Booking', bookingSchema);
