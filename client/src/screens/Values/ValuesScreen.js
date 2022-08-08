import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from '../../actions/dayActions';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser } from '@fortawesome/free-solid-svg-icons'
import './values.css';
import Intro from '../../components/ValuesProcess/Intro'

export default function ValuesScreen() {


  return (
<main>

<Intro />
</main>
  );
}
