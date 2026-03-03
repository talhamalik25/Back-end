const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://backend:tLwUZLkP0zgVb0d2@backend.1mnx7c7.mongodb.net/talha");

    console.log("connect to DB");
    
    
}

module.exports = connectDB