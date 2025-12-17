const mongoose = require('mongoose');

const Workout_plan = mongoose.Schema({
    Name: String,
    description: String,
    CreatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    Date: {
        type: Date,
        default: Date.now,
    }

})

module.exports = mongoose.model('workoutPlan', Workout_plan);