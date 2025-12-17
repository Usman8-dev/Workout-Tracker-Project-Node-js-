const express = require('express');
const router = express.Router();

const {RegisterUser, LoginUser, LogoutUser} = require('../Controllers/UserController');
const {RegisterValidator, loginValidator} = require('../validators/UserValidator');
const {validate} = require('../Middleware/validate')

router.post('/register',RegisterValidator,validate, RegisterUser);
router.post('/login',loginValidator,validate, LoginUser);
router.post('/logout', LogoutUser);


module.exports = router;