const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/User'); // Assuming you have a User model

function generateToken(user) {
    const payload = {
        userId: user._id,
        username: user.username,
        // Add more payload fields as needed
    };

    const options = {
        expiresIn: '1h', // Token expiration time
    };

    return jwt.sign(payload, config.jwtSecret, options);
}

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        return decoded;
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return null;
    }
}

async function authenticateUser(username, password) {
    try {
        const user = await User.findOne({ username });

        if (!user) {
            return { error: 'User not found' };
        }

        // Assuming you have a method to compare passwords in your User model
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return { error: 'Invalid password' };
        }

        const token = generateToken(user);

        return { token };
    } catch (error) {
        console.error('Authentication error:', error.message);
        return { error: 'Internal Server Error' };
    }
}

module.exports = {
    generateToken,
    verifyToken,
    authenticateUser,
};
