const ExerciseModel = require('../Models/ExerciseModel')

const Create = async (req, res) => {

    try {
        let { name, category} = req.body;
        const { workoutPlanId } = req.params;  // Get from route param
        let createExercise = await ExerciseModel.create({
            name,
            category,
            CreatedBy: req.user.id,
            workoutPlan_id: workoutPlanId,
        })
        // await workoutPlanId.populate();
        await createExercise.populate("workoutPlan_id", 'Name');

        return res.status(201).json({
            success: true,
            message: "Exercise created successful",
            data: createExercise,
        });

    } catch (err) {
        res.send(err.message);
    }
}

const showAllData = async (req, res) => {
    try {
        let findData = await ExerciseModel.find({ CreatedBy: req.user.id });
        return res.status(201).json({
            success: true,
            message: "Workout plan All Data",
            data: findData,
        });
    } catch (err) {
        res.send(err.message);
    }
}

module.exports = { Create, showAllData}