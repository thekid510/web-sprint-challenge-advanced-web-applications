import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialValues=  {username:"", password:""};

const Login = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const { push } = useHistory();


  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login', formValues)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      push("/bubbles")
    })
    .catch(err => {
      console.log(err)
    })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input data-testid="username"
          id="username"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input data-testid="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
 
        <button>login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a password and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="password" and data-testid="password"
//4. If either the password or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the password / password is equal to Lambda / i<3Lambd4, save that token to localStorage.