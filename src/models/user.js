const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    profilePhoto: Buffer,
    name: String,
    email: String,
    employeeId: String,
    phoneNumber: String
});

module.exports = mongoose.model('User', userSchema, 'sample');
