const WorkoutPlan = require('../Models/WorkoutPlan')

const Create = async (req, res) => {

    try {
        let { Name, description, Date } = req.body;
        let createWorkOutPlan = await WorkoutPlan.create({
            Name,
            description,
            Date,
            CreatedBy: req.user.id,
        })

        await createWorkOutPlan.save();

        return res.status(201).json({
            success: true,
            message: "Workout plan created successful",
            data: createWorkOutPlan,
        });

    } catch (err) {
        res.send(err.message);
    }
}

const showAllData = async (req, res) => {
    try {
        let findData = await WorkoutPlan.find({ CreatedBy: req.user.id });
        return res.status(201).json({
            success: true,
            message: "Workout plan All Data",
            data: findData,
        });
    } catch (err) {
        res.send(err.message);
    }
}

module.exports = { Create, showAllData }