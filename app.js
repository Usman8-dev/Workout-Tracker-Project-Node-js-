const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');

// models 
const userModel = require('./Models/UserModel');

// db 
const db = require('./Config/mongoose-connection');

// routers 
const userRouter = require('./Routers/userRouter')


app.use(express.json());                    
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/user', userRouter);


app.get('/', function(req, res) {
    res.send('Workout tracker');
})


// app.listen(3000);
app.listen(3000, ()=>{
    console.log('server is running');  
});