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

        const accessToken= jwt.sign(founduser, process.env.ACCESS_TOKEN_SECRET)
        res.json({accessToken: accessToken});
    }
    else {
            res.json("wrong password");
        }
   
} );

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token= authHeader && authHeader.split(' ')[1]
    if(token== null) return res.sendStatus(401);

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,founduser)=>{
            if(err) return res.sendStatus(403);
            req.founduser = founduser;
            next();
        })

}
module.exports = router; 
