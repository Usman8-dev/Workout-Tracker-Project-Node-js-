const mongoose  = require("mongoose");

const userModel = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('user', userModel);
