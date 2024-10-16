// controllers/authController.js
const User = require('../models/User');


// Signup
const signup = async (req, res) => {
    console.log("Request body:", req.body);  // Check the incoming data
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ email, password });
        await newUser.save();
        console.log("created successfully");
        res.status(201).json({ message: 'User created successfully' });
    } 
    catch (error) {
        console.error("Signup failed due to error:", error);
        res.status(500).json({ message: 'Signup failed' });
    }
};


// Login
const login = async (req, res) => {
    const { email, password } = req.body; // Use email

    try {
        const user = await User.findOne({ email }); // Use email
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', user: { email: user.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Login failed' });
    }
};

module.exports = {
    signup,
    login,
  };