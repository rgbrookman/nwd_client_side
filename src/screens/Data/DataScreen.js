import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { createWeekAction } from '../../actions/weekActions';
import Loading from '../../components/Loading';
import { ErrorMessage } from '../../components/ErrorMessage';
import './week.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from "../../components/Header/Header";

export default function DataScreen() {
  const [objectiveOne_text, setObjectiveOne_text] = useState("");

  return (


  );
}
