const express = require('express');
const router = express.Router();

const {Create, showAllData, Update, Delete} = require('../Controllers/ExerciseController');

const {IsLoginUser} = require('../Middleware/IsLoginUser');

const {WorkOutPlanValidation} = require('../validators/WorkoutPlan');
const {validate} = require('../Middleware/validate');


router.post('/:workoutPlanId/create/',IsLoginUser, Create);
router.put('/update/:id', IsLoginUser, Update);
router.get('/showAll', IsLoginUser,showAllData);
// router.delete('/delete/:id', IsLoginUser, Delete);


module.exports = router;