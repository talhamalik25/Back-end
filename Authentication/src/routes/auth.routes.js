
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register',authController.register);

router.get("/login", (req, res) => {
    console.log("cookies: ", req.cookies)
    res.json({
        message: "Login route",
        cookies: req.cookies
    });
    
})

module.exports = router;