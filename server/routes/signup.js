const express = require("express");
const router= express.Router();
const {User} = require('../models/users');
const{Notifications} = require('../models/notification');

router.post('/signup', async(req, res)=>{
    const user = req.body;
    console.log(user);
    await User.create({
        username: user.username,
        email: user.email,
        password: user.password
    });

    await Notifications.create({
        notification: user.username +' has been created',
    })
    res.json(user);
} );
module.exports = router; 




// router.post('/signup', async (req, res) => {
//     const { username, email, password } = req.body;
//     console.log(req.body);
//     try {
//       // Check if the user already exists
//       const existingUser = await User.findOne({ email });
//       if (existingUser) {
//         return res.status(409).json({ message: 'User already exists' });
//       }
  
//       // Hash the password
//       const saltRounds = 10;
//       const hashedPassword = await bcrypt.hash(password, saltRounds);
  
//       // Create a new user
//       const newUser = new User({ username, email, password: hashedPassword });
//       console.log(newUser);
//       await newUser.save();
  
//       return res.status(201).json({ message: 'User created successfully' });
//     } catch (err) {
//       return res.status(500).json({ message: 'Something went wrong' });
//     }
//   });
//   module.exports = router; 

//   const secretKey = 'your-secret-key';

// // Function to generate JWT token
// const generateToken = (userId) => {
//   return jwt.sign({ id: userId }, secretKey, { expiresIn: '1h' });
// };

// // Middleware to verify JWT token
// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Invalid token' });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// };

// // Use the middleware for protected routes
// app.get('/protected', verifyToken, (req, res) => {
//   return res.status(200).json({ message: 'Protected route accessed' });
// });

