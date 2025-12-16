const mongoose = require('mongoose');
const debg = require('debug')('app: db');
mongoose
    .connect(`${process.env.MONGODB_URI}/Workout_Tracker`)
    .then(function () {
        debg('connected Successfully')
    })
    .catch(function (err) {

        debg('Connection error:', err.message)
    })

module.exports = mongoose.connection;