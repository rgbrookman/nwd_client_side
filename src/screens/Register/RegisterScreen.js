import React from 'react';
import Register from '../../components/Register/Register';
import { Helmet } from 'react-helmet';
import './register.css';

export default function RegisterScreen() {
  return (
    <main id="registerScreen">
    <Helmet>
       <title>Register</title>
     </Helmet>

    <Register />
      <span>Already have a NWD, login <a href="/login">here...</a></span>
    </main>
  );
}
