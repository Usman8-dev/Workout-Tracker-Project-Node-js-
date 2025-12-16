const express = require('express');
const router = express.Router();

const {RegisterUser, LoginUser, LogoutUser} = require('../Controllers/UserController');

router.post('/register', RegisterUser);
router.post('/login', LoginUser);
router.post('/logout', LogoutUser);


module.exports = router;