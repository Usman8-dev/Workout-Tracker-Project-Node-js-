const mongoose  = require("mongoose");

const userModel = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    createdAt: Date,
})

module.exports = mongoose.Model('user', userModel);
