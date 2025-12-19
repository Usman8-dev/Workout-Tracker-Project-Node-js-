const mongoose = require('mongoose');
require('dotenv').config(); // if you use .env for mongo uri

const Exercise = require('../Models/ExerciseModel');
const WorkoutPlan = require('../Models/WorkoutPlan');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/workout_tracker';

const seedExercises = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB:', MONGO_URI);

    // First – pick one existing WorkoutPlan (or create a dummy one)
    let plan = await WorkoutPlan.findOne();
    if (!plan) {
      // Use 'Name' (capital N) to match the WorkoutPlan model
      plan = await WorkoutPlan.create({ 
        Name: 'Beginner Full Body Plan',
        description: 'A comprehensive workout plan for beginners'
      });
      console.log('Created dummy plan →', plan.Name);
    }

    // Delete old exercises (optional – only if you want fresh start)
    await Exercise.deleteMany({});

    // 10 beautiful, realistic exercises + categories
    const exercises = [
      { name: 'Bench Press', category: 'Chest', workoutPlan_id: plan._id },
      { name: 'Bent Over Row', category: 'Back', workoutPlan_id: plan._id },
      { name: 'Overhead Press', category: 'Shoulders', workoutPlan_id: plan._id },
      { name: 'Bicep Curl', category: 'Arms', workoutPlan_id: plan._id },
      { name: 'Tricep Dips', category: 'Arms', workoutPlan_id: plan._id },
      { name: 'Squat', category: 'Legs', workoutPlan_id: plan._id },
      { name: 'Deadlift', category: 'Legs', workoutPlan_id: plan._id },
      { name: 'Lunges', category: 'Legs', workoutPlan_id: plan._id },
      { name: 'Plank', category: 'Core', workoutPlan_id: plan._id },
      { name: 'Russian Twists', category: 'Core', workoutPlan_id: plan._id }
    ];

    const insertedExercises = await Exercise.insertMany(exercises);
    console.log('Successfully seeded 10 exercises!');
    console.log('Exercises:', insertedExercises.map(e => e.name));

    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err);
    console.error('Error details:', err.message);
    process.exit(1);
  }
};

seedExercises();
