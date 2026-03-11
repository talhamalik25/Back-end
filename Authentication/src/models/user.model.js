const moongoose = require('mongoose');

const userSchema = new moongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String,

})

const userModel = moongoose.model('User', userSchema);
module.exports = userModel;