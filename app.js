const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

// models 
const userModel = require('./Models/UserModel');

// db 
const db = require('./Config/mongoose-connection');


app.get('/', function(req, res) {
    res.send('Workout tracker');
})


app.listen(3000);