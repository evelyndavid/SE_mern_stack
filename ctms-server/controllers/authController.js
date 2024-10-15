// controllers/authController.js
const User = require('../models/User');


// Signup
exports.signup = async (req, res) => {
    const { email, password } = req.body; // Ensure email is used

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const pass = password;
        const newUser = new User({
            email,
            password: pass,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log("signup failed");
        res.status(500).json({ message: 'Signup failed' });

    }
};

// Login
exports.login = async (req, res) => {
    const { email, password } = req.body; // Use email

    try {
        const user = await User.findOne({ email }); // Use email
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', user: { email: user.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Login failed' });
    }
};
