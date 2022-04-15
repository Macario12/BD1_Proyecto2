import './Login.css';
import { Link } from "react-router-dom";
import React, { Component } from "react";
// Components
import LoginForm from './Components/LoginForm';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

function Login() {
  return (
    <div className="App">
      <Header/>
      <div className='login'>
        <LoginForm/>
      </div>
    </div>
  );
}

export default Login;
