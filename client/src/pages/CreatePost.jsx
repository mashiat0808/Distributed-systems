import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";


function CreatePost() {
  const initialValues ={
    title: "",
    postText: "",
    username: "",

  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('You must provide a title'),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(20).required(),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data)
    .then((response) => {
      console.log("it worked");
    });
  };

  return (
    <div className='createPostPage'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='formContainer'>
          <label><b>Title: </b> </label>
          <ErrorMessage name="title" component='span'/>
          <Field id="inputCreatePost" name="title" placeholder="Title of post"/>
          <label> <b>Post: </b></label>
          <ErrorMessage name="postText" component='span'/>
          <Field id="inputCreatePost" name="postText" placeholder="Post content"/>
          <label><b> Username: </b></label>
          <ErrorMessage name="username" component='span'/>
          <Field id="inputCreatePost" name="username" placeholder="Title of post"/>

          <button type="submit"> Create Post</button>


        </Form>

      </Formik>
    </div>
  )
}

export default CreatePost