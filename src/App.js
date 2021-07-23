import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute"
import BubblePage from "./components/BubblePage"
import axios from 'axios'
import { useHistory } from "react-router-dom";

const App= () => {
  const history = useHistory();
  const logout = (props)=> {
    console.log(useHistory)
    localStorage.removeItem("token")
    history.push("/login")
  }

  
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logout} data-testid="logoutButton" href="#">logout  </a>
        </header> 
        <Switch>
        <PrivateRoute path ="/bubbles">
          <BubblePage/>
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