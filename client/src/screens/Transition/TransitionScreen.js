import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './transition.css';
import Footer from '../../components/Footer/Footer';
import { listDays } from '../../actions/dayActions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createWeekAction, listWeeks } from '../../actions/weekActions';
import Loading from '../../components/Loading/Loading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import axios from "axios";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


export default function TransitionScreen(history) {
  const [loading, setLoading] = useState(true);
const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <main className="LandingPage">

    {
      userInfo
      ?
      <div>
      <Loading />
      </div>
      :
      <Loading />
    }
        <Footer />
    </main>

  );
}
