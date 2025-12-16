const express = require('express');
const router = express.Router();

const {RegisterUser} = require('../Controllers/UserController');

router.post('/register', RegisterUser);


module.exports = router;