import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { register } from "../../actions/userActions";
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer/Footer';
import { Button  } from 'react-bootstrap';

export default function Register({ history }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
  if (userInfo) {
     navigate('/login');
  }
}, [history, userInfo]);


  const submitHandler = async (e) => {
    e.preventDefault();

   if (password !== confirmPassword) {
     setMessage("Passwords do not match");
   } else {
     await dispatch(register(name, email, password ));
     await navigate('/login');
   }
    };

  return (
    <>

    <section className="registerContainer">
        <h1 className="registerHeader">Register</h1>
    <form className="register" onSubmit={submitHandler}>
    <div className="nameContainer">
    <label for="regName">Name</label>
    <input
      id="regName"
      className="registerInput"
      type="text"
      value={name}
      placeholder="name"
      onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div className="emailContainer">
    <label for="email">Email</label>
    <input
    id="email"
    className="registerInput"
    type="text"
    value={email}
    placeholder="email"
    onChange={(e) => setEmail(e.target.value)}
    />
      </div>
      <div className="passwordContainer">
    <label for="password">Password</label>
    <input
    id="password"
    className="registerInput"
    type="password"
    value={password}
    placeholder="password"
    onChange={(e) => setPassword(e.target.value)}
    />
      </div>
        <div className="confirmPasswordContainer">
    <label for="confPassword">Confirm Password</label>
    <input
    id="confPassword"
    className="registerInput"
    type="password"
    value={confirmPassword}
    placeholder=" Confirm password"
    onChange={(e) => setConfirmPassword(e.target.value)}
    />
    </div>
    <Button className="submitContainer" type="submit">
      Submit
    </Button>
    </form>
    </section>
    <Footer />
    </>
  );
}
