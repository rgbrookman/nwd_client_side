import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { login } from "../../actions/userActions";
import Footer from '../../components/Footer/Footer';
import PropagateLoader from "react-spinners/PropagateLoader";

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {

    if (userInfo) {
      navigate('/');
    }
  }, [history, userInfo]);


const override = {
  display: "block",
  margin: 0,
  borderColor: "red",
};

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email,password));
    setLoadingSpinner(true);
    setTimeout(()=> {
      setLoadingSpinner(false);
    }, 1500);
    navigate('/today');
  };

  return (
  <>
    <section
    className="loginContainer"
    >

    <Form
    onSubmit={submitHandler}>

      <Form.Group className="emailContainer" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        type="email"
        className="loginInput"
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        />

      </Form.Group>

      <Form.Group className="passwordContainer" controlId="formBasicPassword">

        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        className="loginInput"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button className="submitButton" type="submit">
        Submit
      </Button>

    </Form>

  </section>
  <Footer />
</>
  );
}

export default Login;
