


const Payment = require('../models/Payment'); // Adjust the path as necessary

exports.processPayment = async (req, res) => {
    const { cardNumber, branchName, bankName, expiryDate, cvv, pinCode } = req.body; // Destructure the request body

    // Create a new payment instance
    const payment = new Payment({
        cardNumber,
        branchName, // Use the correct variable name
        bankName, // Use the correct variable name
        expiryDate, // Use the correct variable name
        cvv,
        pinCode // Use the correct variable name
    });

    try {
        // Save the payment to the database
        await payment.save();
        return res.status(200).json({ message: 'Payment successful' });
    } catch (error) {
        console.error('Payment error:', error);
        return res.status(500).json({ message: 'Payment processing failed' });
    }
};
