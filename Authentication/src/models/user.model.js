const moongoose = require('mongoose');

const userSchema = new moongoose.Schema({
    username: String,
    email: String,
    password: String,

})

const userModel = moongoose.model('User', userSchema);
module.exports = userModel;