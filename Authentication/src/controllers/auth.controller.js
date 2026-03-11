const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

async function register(req, res) {

    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
        return res.status(409).json({
            message: 'User already exists'
        });
    }

    // Create user
    const user = await userModel.create({
        username,
        email,
        password
    });

    // Generate token
    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET
    );

    // Set cookie
    res.cookie('token', token);

    // Send response
    res.status(201).json({
        message: 'User registered successfully',
        user,
        token
    });
}

module.exports = {
    register
};