import React from 'react';
import Register from '../../components/Register/Register';
import './register.css';

export default function RegisterScreen() {
  return (
    <main id="registerScreen">


    <Register />
      <span>Already have a NWD, login <a href="/login">here...</a></span>
    </main>
  );
}
