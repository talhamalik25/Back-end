const userModel = require('../models/user.model');

async function register(req, res) {
    const { username, email, password } = req.body;
}

module.exports = {
    register
}