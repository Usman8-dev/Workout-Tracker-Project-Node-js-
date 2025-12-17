const express = require('express');
const router = express.Router();

const {Create, showAllData, Update} = require('../Controllers/workoutPlanController');

const {IsLoginUser} = require('../Middleware/IsLoginUser');

const {WorkOutPlanValidation} = require('../validators/WorkoutPlan');
const {validate} = require('../Middleware/validate')


router.post('/create',IsLoginUser, WorkOutPlanValidation,validate, Create);
router.put('/update/:id', IsLoginUser, Update);
router.get('/showAll', IsLoginUser,showAllData);
// router.delete('/delete/:id');


module.exports = router;