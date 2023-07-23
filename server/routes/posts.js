const express = require("express");
const router= express.Router();
const {Post} = require('../models/Posts');


router.get('/posts', async(req, res)=>{
    // ekhane authenticate dhukbe somewhere
    console.log(req.body);
    const listOfPosts =await Post.find()
    res.json(listOfPosts);
});

router.post('/posts', async(req, res)=>{
    const post = req.body;
    console.log(post);
    await Post.create({
        title: post.title,
        postText: post.postText,
        username: post.username
    });
    res.json(post);
} );

module.exports = router;