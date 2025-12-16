const express = require('express');
const router = express.Router();

const {RegisterUser} = require('../Controllers/');

router.get('/register', RegisterUser);


module.exports = router;