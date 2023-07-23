import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const initialValues ={
      username: "",
      email: "",
      password: "",
  
    };
  
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
      username: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().min(3).max(20).required(),
    });
    
    const onSubmit = (data) => {
        console.log(data);
      axios.post("http://localhost:3001/signup", data)
      .then((response) => {
        console.log("it worked");

  
      });
    };
  
    return (
      <div className='SignupPage'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form className='formContainer'>
            <label><b>Name: </b> </label>
            <ErrorMessage name="username" component='span'/>
            <Field id="inputSignup" name="username" placeholder="Username"/>
            <label> <b>Email: </b></label>
            <ErrorMessage name="email" component='span'/>
            <Field id="inputSignup" name="email" placeholder="email"/>
            <label><b> Password: </b></label>
            <ErrorMessage name="password" component='span'/>
            <Field id="inputSignup" name="password" placeholder="password"/>
  
            <button type="submit" > Create Account</button>
            
  
          </Form>
  
        </Formik>
      </div>
      
    )
  }
export default Signup;