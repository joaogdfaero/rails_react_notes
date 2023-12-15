import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from "../pages/Home.jsx"
import Auth from "../pages/Auth.jsx"
import Dashboard from "../pages/Dashboard.jsx"
import Nav from "./Nav.jsx"
import { useAppState } from "../AppState.jsx" 

export const App = () => {
  const { state, dispatch } = useAppState();
  const navigate = useNavigate();

  React.useEffect(() => {
    const auth = JSON.parse(window.localStorage.getItem("auth"));

    console.log('Authentication Status:', auth);

    // Aparentemente funciona. Porém, como eu tenho autenticação meu storage, ele fica navegando para
    // a dashboard toda vez que clico em alguma coisa. Fazer um logout que nem aqui aos 28 min talvez
    // resolva:
    // https://youtu.be/t6trwLxgd3U?si=ghDK94EAdiD0q5sG

    // Check if the user is authenticated and navigate accordingly
    if (auth) {
      console.log('User is authenticated. Navigating to dashboard.');
      dispatch({ type: "auth", payload: auth });
      navigate("/dashboard");
    } else {
      console.log('User is not authenticated. Navigating to home.');
      navigate("/");
    }
  }, [navigate, dispatch]);

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/:form" exact element={<Auth />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};
