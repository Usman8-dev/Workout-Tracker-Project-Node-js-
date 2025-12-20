const ExerciseModel = require('../Models/ExerciseModel')

const Create = async (req, res) => {

    try {
        let { name, category, reps, sets, weight} = req.body;
        const { workoutPlanId } = req.params;  // Get from route param
        let createExercise = await ExerciseModel.create({
            name,
            category,
            reps, sets, weight,
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

const Update = async (req, res) => {
    try {
        let { name, category , reps, sets, weight} = req.body;
        let findData = await ExerciseModel.findById(req.params.id);

        if (!findData) {
            return res.status(201).json({
                success: true,
                message: "Exercise Not Found",
            });
        }

        let updateData = await ExerciseModel.findOneAndUpdate({
            _id: req.params.id,
        }, {
            name,
            category,
            reps, sets, weight,
        }, {
            new: true,
        }
        );
        return res.status(201).json({
            success: true,
            message: "Exercise Updated successful",
            data: updateData,
        });
    } catch (err) {
        res.send(err.message);
    }
}

const Delete = async (req, res) => {
    try {
        let findData = await ExerciseModel.findByIdAndDelete(req.params.id);

        if (!findData) {
            return res.status(201).json({
                success: true,
                message: "Workout plan Not found",
            });
        }

        return res.status(201).json({
            success: true,
            message: "Exercise deleted successful",
            data: findData,
        });
    } catch (err) {
        res.send(err.message);
    }
}
module.exports = { Create, showAllData, Update, Delete}