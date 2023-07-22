const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postrouter= require('./routes/posts');

const cors= require('cors');

app.use(express.json());
app.use(cors());
// //app.listen(3001, ()=>{
//     console.log('Server is running on port 3001');
// });

app.use('/', postrouter);

mongoose
  .connect("mongodb://localhost:27017/linkedin?retryWrites=true&w=majority")
  .then((result) => {
    app.listen(3001, () => {
      console.log("Server is running");
    });
  });
