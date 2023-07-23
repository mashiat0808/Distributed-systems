import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
    const initialValues ={
      username: "",
      password: "",
  
    };
  
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().min(3).max(20).required(),
    });
    
    const onSubmit = (data) => {
        console.log(data);
      axios.post("http://localhost:3001/login", data)
      .then((response) => {
        console.log(response.data);
        
  
      });
    };
  
    return (
      <div className='login'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form className='formContainer'>
            <label><b>Name: </b> </label>
            <ErrorMessage name="username" component='span'/>
            <Field id="inputSignup" name="username" placeholder="Username"/>
            
            <label><b> Password: </b></label>
            <ErrorMessage name="password" component='span'/>
            <Field id="inputSignup" name="password" placeholder="password"/>
  
            <button type="submit" > Login</button>
  
  
          </Form>
  
        </Formik>
      </div>
    )
  }
export default Login;