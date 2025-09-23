// models/user.js
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
    // passport-local-mongoose will automatically add username, hash, and salt fields
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);