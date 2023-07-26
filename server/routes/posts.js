const express = require("express");
const router= express.Router();
const {Post} = require('../models/Posts');
const authenticateToken = require('../middleware/auth');
const multer= require('multer');
const minio = require('minio');
const fs = require('fs'); 

const minioClient = new minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'linkedin',
    secretKey: 'hello123',
  });
  
  const upload = multer({ dest: 'uploads/' });
  
  async function uploadToMinio(file) {
    const bucketName = 'linkedinbucket';
    const objectKey = Date.now() + ' ' + file.originalname;
    const metaData = {
      'Content-Type': file.mimetype,
    };
  
    await minioClient.fPutObject(bucketName, objectKey, file.path, metaData, (err, etag) => {
      if (err) {
        console.log(err);
        return null;
      }
      // Remove the temporary file after successful upload
      fs.unlink(file.path, (err) => {
        if (err) {
          console.log('Failed to remove temporary file:', file.path);
        }
      });
    });
  
    return objectKey;
  }


router.get('/posts', authenticateToken,async(req, res)=>{
    // ekhane authenticate dhukbe somewhere
    console.log(req.user);
    const listOfPosts =await Post.find({ username: { $ne: req.user } }).lean();
    res.json(listOfPosts);
});


router.post('/posts', authenticateToken, upload.single('image'), async (req, res) => {
    const post = req.body;
    console.log(post);
    const username = req.user;
    console.log(req.user);
  
    // Handle image upload here
    let imageUrl = '';
    if (req.file) {
      imageUrl = await uploadToMinio(req.file);
    }
  
    await Post.create({
      title: post.title,
      postText: post.postText,
      username: username,
      image: imageUrl, // Save the Minio object key in the image field
    });
    res.json(post);
  });
module.exports = router;
