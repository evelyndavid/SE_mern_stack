const express = require('express');
const { bookBus } = require('../controllers/bookingController');
const router = express.Router();

router.post('/book', bookBus);

module.exports = router;
