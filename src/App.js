import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from '../src/components/PrivateRoute';
import BubblePage from "./components/BubblePage";
import axios from "axios";

import {axiosWithAuth} from './helpers/axiosWithAuth'

// const handleLogOut= ()=> {
// const token = localStorage.getItem("token");
//   axiosWithAuth()
//   .post("/logout")
//   .then(res => {
//     console.log("this is the res", res)
//     localStorage.removeItem("token");
//     window.location.href = "/login";

//   })
//   .catch( err => {
//     console.log(err)
//   })


// }


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#">logout</a>
        </header> 
        <Switch>
        <PrivateRoute path ="/bubbles">
          <BubblePage />
        </PrivateRoute>
        <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.