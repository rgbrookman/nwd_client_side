import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from '../../actions/userActions';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser } from '@fortawesome/free-solid-svg-icons'
import './profile.css';

export default function ProfileScreen({ history }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);


const dispatch = useDispatch();
const navigate = useNavigate();

const userLogin = useSelector((state) => state.userLogin);
const { userInfo } = userLogin;

const userUpdate = useSelector((state) => state.userUpdate);
const { loading, error, success } = userUpdate;

useEffect(() => {
  if (!userInfo) {
    navigate("/");
  } else {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }
}, [history, userInfo]);

const submitHandler = (e) => {
  e.preventDefault();
  dispatch(updateProfile({


name,
email,
password,
confirmPassword
  }
  ));
  navigate('/today');
};



  return (
    <>
    <Header />
<Container fluid className="mainProfileScreen mt-5" >

<Row>
<Col sm={12} md={12} lg={8}>
<form className="updateProfileForm" onSubmit={submitHandler} >
<div className="profileContainer">
<div className="nameContainer">
<label for="updateName">Name</label>
<input
  id="updateName"
  type="text"
  className="textInput"
  value={name}
  placeholder="name"
  onChange={(e) => setName(e.target.value)}
  />
  </div>
  <div className="emailContainer">
<label for="email">Email</label>
<input
id="email"
className="textInput"
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
className="textInput"
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
className="textInput"
type="password"
value={confirmPassword}
placeholder=" Confirm password"
onChange={(e) => setConfirmPassword(e.target.value)}
/>
</div>
<div className="profileButtonDiv">
<Button className="updateProfileButton" type="submit">
  Update
</Button>
</div>
</div>

</form>
</Col>
<Col id="quoteCol" sm={12} md={12} lg={4} className="align-self-center text-center">
<h2 className="quoteTextText">"I try all things. I achieve what I can."</h2>
<h2 className="quoteTextAuthor">Herman Melville</h2>
</Col>
</Row>
<Footer/>
</Container>
</>
  );
}
