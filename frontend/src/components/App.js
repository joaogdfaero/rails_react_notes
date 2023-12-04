import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Home from "../pages/Home.jsx"
import Auth from "../pages/Auth.jsx"
import Dashboard from "../pages/Dashboard.jsx"
import Nav from "./Nav.jsx" 

export const App = (props) => {
  return <>
  <Nav/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path = "/auth/:form" component={Auth}/>
    <Route exact path = "/dashboard" component={Dashboard}/>
  </Routes>
  </>;
};