require('dotenv').config();
const express = require("express");
const router= express.Router();
const {User} = require('../models/users');
const jwt = require('jsonwebtoken');


router.post('/login', async(req, res)=>{
    const user = req.body;
    console.log(user);
    const founduser = await User.findOne({
        username: user.username,
        
    });
    if (founduser.password === user.password) {
        // res.json("loggedin");
        
        const accessToken= jwt.sign(founduser.username, process.env.ACCESS_TOKEN_SECRET)
        res.status(200).json({accessToken: accessToken});
    }
    else {
            res.json("wrong password");
        }
   
} );

module.exports = router; 
