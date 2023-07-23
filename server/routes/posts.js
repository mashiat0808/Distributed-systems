const express = require("express");
const router= express.Router();
const {Post} = require('../models/Posts');
const authenticateToken = require('../middleware/auth');


router.get('/posts', authenticateToken,async(req, res)=>{
    // ekhane authenticate dhukbe somewhere
    console.log(req.user);
    const listOfPosts =await Post.find({ username: { $ne: req.user } }).lean();
    res.json(listOfPosts);
});

router.post('/posts', authenticateToken, async(req, res)=>{
    const post = req.body;
    console.log(post);
    const username= req.user;
    console.log(req.user);
    await Post.create({
        title: post.title,
        postText: post.postText,
        username: username,
    });
    res.json(post);
} );

module.exports = router;