const express = require('express');
const router = express.Router();

const {Create} = require('../Controllers/workoutPlanController');

const {IsLoginUser} = require('../Middleware/IsLoginUser');


router.post('/create',IsLoginUser, Create);
// router.put('/update/:id');
// router.get('/showAll');
// router.delete('/delete/:id');


module.exports = router;