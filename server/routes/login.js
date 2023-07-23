const express = require("express");
const router= express.Router();
const {User} = require('../models/users');

router.post('/login', async(req, res)=>{
    const user = req.body;
    console.log(user);
    const founduser = await User.findOne({
        username: user.username,
        
    });
    if (founduser.password === user.password) {
        res.json("loggedin");
    }
    else {
            res.json("wrong password");
        }
   
} );
module.exports = router; 
