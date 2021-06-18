import axios from "axios";
import React, { useEffect, useState } from "react";

const initialValues= {username:"Lambda", password:"School" };

const Login = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {

    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login',initialValues)
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  

  const error = '';
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
       <form onSubmit={handleSubmit}>
         <label htmlFor="username">Username </label>
        <input 
        id="username"
        name="username"
        value={formValues.username}
        onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input 
         id="password"
         name="password"
         value={formValues.password}
         onChange={handleChange}
         />
         <button>Login</button>
       </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.