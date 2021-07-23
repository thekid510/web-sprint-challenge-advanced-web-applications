import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'
const { worker } = require("./mocks/browser");

worker.start();

const rootElement = document.getElementById("root");
ReactDOM.render(<BrowserRouter><App /> </BrowserRouter>, rootElement);
