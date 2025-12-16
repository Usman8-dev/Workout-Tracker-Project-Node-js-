const mongoose = require('mongoose');

const Workout_plan = mongoose.Schema({
    Name,
    description,
    CreatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        default: user,
    },
    
})