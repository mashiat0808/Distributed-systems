import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import '../App.css';


function CreatePost() {
  const initialValues ={
    title: "",
    postText: "",
    

  };

  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('You must provide a title'),
    postText: Yup.string().required(),
    
  });
  const onSubmit = (data) => {
    const config={
      headers: {
        Authorization: 'Bearer ' +localStorage.getItem('token'),
      },
    }
    axios.post("http://localhost:3001/posts", data, config)
    .then((response) => {
      console.log("it worked");
      
        navigate('/posts');
      

    });
  };

  return (
    <div>
      <Navbar />
         <div className='createPostPage'>

<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
  <Form className='formContainer'>
    <label><b>Title: </b> </label>
    <ErrorMessage name="title" component='span'/>
    <Field id="inputCreatePost" name="title" placeholder="Title of post"/>
    <label> <b>Post: </b></label>
    <ErrorMessage name="postText" component='span'/>
    <Field id="inputCreatePost" name="postText" placeholder="Post content"/>
    

    <button type="submit" > Create Post</button>


  </Form>

</Formik>
</div>
    </div>
   
  )
}

export default CreatePost