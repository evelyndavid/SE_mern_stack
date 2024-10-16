const express = require('express');
const { bookBus } = require('../controllers/bookingController');
const userRoutes = express.Router();

userRoutes.post('/book', bookBus);

module.exports = userRoutes;


