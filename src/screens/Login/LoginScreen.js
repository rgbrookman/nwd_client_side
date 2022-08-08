import React from 'react';
import Login from '../../components/Login/Login';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './login.css';

export default function LoginScreen() {
  return (
    <main id="login-screen" className="loginPageScreen">
    <Helmet>
       <title>Login</title>
     </Helmet>
     <h1 className="loginHeader">Login</h1>
    <Login />
    <span>If you haven't already registered, click <a href="/register">here...</a></span>

    </main>
  );
}
