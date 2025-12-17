const express = require('express');
const router = express.Router();

const {Create, showAllData, Update, Delete} = require('../Controllers/workoutPlanController');

const {IsLoginUser} = require('../Middleware/IsLoginUser');

const {WorkOutPlanValidation} = require('../validators/WorkoutPlan');
const {validate} = require('../Middleware/validate')


router.post('/create',IsLoginUser, WorkOutPlanValidation,validate, Create);
router.put('/update/:id', IsLoginUser,WorkOutPlanValidation, Update);
router.get('/showAll', IsLoginUser,showAllData);
router.delete('/delete/:id', IsLoginUser, Delete);


module.exports = router;