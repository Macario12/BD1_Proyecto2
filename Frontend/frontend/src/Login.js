import './Login.css';
import React from "react";
// Components
import LoginForm from './Components/LoginForm';
import Header from './Components/Header';

function Login() {
  return (
    <div className="App">
      <div className='header'>
        <Header/>
      </div>
      <div className='login'>
        <LoginForm/>
      </div>
    </div>
  );
}

export default Login;
