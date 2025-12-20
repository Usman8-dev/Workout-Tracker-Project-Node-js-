const mongoose = require('mongoose');
const { Schema } = mongoose;

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core'],
        trim: true
    },
    reps: Number,     
    sets: Number, 
    weight: String,
    CreatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    workoutPlan_id: {
        type: Schema.Types.ObjectId,
        ref: 'workoutPlan',
        required: true
    }
}, {
    timestamps: true // adds createdAt + updatedAt automatically
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;