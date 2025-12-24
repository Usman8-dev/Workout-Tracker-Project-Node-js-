const mongoose = require('mongoose');
const ExerciseModel = require('../Models/ExerciseModel');

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
// Middleware: When a WorkoutPlan is deleted, delete all its associated exercises

// Handle findOneAndDelete (triggered by findByIdAndDelete)
Workout_plan.pre('findOneAndDelete', async function() {
    try {
        const docToDelete = await this.model.findOne(this.getQuery());
        if (docToDelete) {
            await ExerciseModel.deleteMany({ workoutPlan_id: docToDelete._id });
            console.log(`Deleted all exercises for WorkoutPlan: ${docToDelete._id}`);
        }
    } catch (error) {
        console.error('Error in cascade delete:', error);
        throw error;
    }
});

// Handle deleteOne (for direct deleteOne calls)
Workout_plan.pre('deleteOne', { query: true, document: false }, async function() {
    try {
        const docToDelete = await this.model.findOne(this.getQuery());
        if (docToDelete) {
            await ExerciseModel.deleteMany({ workoutPlan_id: docToDelete._id });
            console.log(`Deleted all exercises for WorkoutPlan: ${docToDelete._id}`);
        }
    } catch (error) {
        console.error('Error in cascade delete:', error);
        throw error;
    }
});

// Handle deleteMany (for bulk deletions)
Workout_plan.pre('deleteMany', async function() {
    try {
        const docsToDelete = await this.model.find(this.getQuery());
        for (const doc of docsToDelete) {
            await ExerciseModel.deleteMany({ workoutPlan_id: doc._id });
            console.log(`Deleted all exercises for WorkoutPlan: ${doc._id}`);
        }
    } catch (error) {
        console.error('Error in cascade delete:', error);
        throw error;
    }
});

module.exports = mongoose.model('workoutPlan', Workout_plan);
