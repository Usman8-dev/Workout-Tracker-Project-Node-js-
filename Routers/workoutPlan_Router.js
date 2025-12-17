const express = require('express');
const router = express.Router();

const {Create, showAllData} = require('../Controllers/workoutPlanController');

const {IsLoginUser} = require('../Middleware/IsLoginUser');


router.post('/create',IsLoginUser, Create);
// router.put('/update/:id');
router.get('/showAll', IsLoginUser,showAllData);
// router.delete('/delete/:id');


module.exports = router;