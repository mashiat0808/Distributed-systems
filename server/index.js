const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postrouter= require('./routes/posts');
const signup= require('./routes/signup');
const login= require('./routes/login');


const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cors= require('cors');
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.use('/', postrouter);
app.use('/',signup);
app.use('/',login);

mongoose
  .connect("mongodb://localhost:27017/linkedin?retryWrites=true&w=majority")
  .then((result) => {
    app.listen(3001, () => {
      console.log("Server is running");
    });
  });
