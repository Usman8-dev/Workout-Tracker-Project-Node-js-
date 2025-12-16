const UserModel = require("../Models/UserModel");
const generateToken = require("../utils/generateToken");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const RegisterUser = async function (req, res) {
    try {
        let { name, age, email, password, createdAt } = req.body;

        // if use check
        let finduser = await UserModel.findOne({ email: email });
        if (finduser) {
            return res.status(201).json({
                success: false,
                message: "Your Account Already Register. Please login!!!",
            });
        } else {

            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, async (err, hash) => {
                    if (err) {
                        return res.send(err.message);
                    }
                    else {
                        let user = await UserModel.create({
                            name,
                            age,
                            email,
                            password: hash,
                            createdAt,
                        })

                        let token = generateToken(user);
                        res.cookie('token', token);

                        return res.status(201).json({
                            success: true,
                            message: "Registration successful",
                            user: user,
                        });

                    }

                });
            });
        }
    }
    catch (err) {
        res.send(err.message);
    }


}

const LoginUser = async function (req, res) {
       try {
        let { email, password } = req.body;

        let finduserLogin = await UserModel.findOne({ email: email });
        if (!finduserLogin) {
            return res.status(401).json({
                success: false,
                message: "Email or Password is Invalid",
            });
        } else {
            bcrypt.compare(password, finduserLogin.password, function (err, result) {
                if (result) {
                    let token = generateToken(finduserLogin);
                    res.cookie('token', token);

                    return res.status(201).json({
                        success: true,
                        message: "Login successfully",
                        user: finduserLogin,
                    });
                } else {
                    return res.status(401).json({
                        success: false,
                        message: "Email or Password is Invalid",
                    });
                }
            });
        }
    }
    catch (err) {
        res.send(err.message);
    }
}

const LogoutUser = async (req, res) => {
    try {
        res.cookie('token', "");
        return res.status(201).json({
                        success: true,
                        message: "Logout successfully",
                    });
        
    } catch (err) {
        res.send(err.message);
    }

}

module.exports = { RegisterUser, LoginUser, LogoutUser };