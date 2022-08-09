import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import './landingpage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ReducedFooter from '../../components/Footer/ReducedFooter';
import ControlledCarousel from '../../components/Carousel/Carousel';
import { listDays } from '../../actions/dayActions';
import { listYears } from '../../actions/yearActions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createWeekAction, listWeeks } from '../../actions/weekActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel, faPlugCircleBolt, faRepeat } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../components/Loading/Loading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import axios from "axios";
import logo from '../../NWD_Logo_White.png';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";


export default function LandingScreen(history) {
  const [clickBox, setClickBox] = useState(false);
  const [linkRefCreate, setLinkRefCreate] = useState(false);
  const [linkRefUpdate, setLinkRefUpdate] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const yearList = useSelector((state) => state.yearList);
  const { years } = yearList;

  const weekList = useSelector((state) => state.weekList);
  const { weeks } = weekList;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error,  days } = dayList;

  useEffect(() => {
dispatch(listYears());
  }, [dispatch, userInfo, history])

  useEffect(() => {
    dispatch(listWeeks());
  }, [dispatch, userInfo, history]);

  useEffect(() => {
    dispatch(listDays());
  }, [dispatch, userInfo, history]);

  const valueState = {
    hide: {
      display: "none",
    },
    show: {
      display: "block",
    },
  };

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);



  return (

    <>

      <Header />

    {
      userInfo
      ?
      <main className="landingPageLogInMain">
      <h1 className="landingPageHeaderText">
      {userInfo.name}, <br/>this is your NoWastedDays.</h1>



      <hr className="dividingLine" />
      <motion.div
      animate={ clickBox ? "show" : "hide"}
      variants={valueState}>

      <Container>
      <Row>
      <Col>
      <div className="landingPageBox"
      >
        <a href={linkRefCreate}>Create</a>
      </div>
        </Col>
        <Col>
        <div className="landingPageBox">
          <a href={linkRefUpdate}>Update</a>
        </div>
          </Col>
          <Col>
          <div className="landingPageBox">
            <a id="close" onClick={()=> {
              setClickBox(clickBox => !clickBox);
            }}>Close</a>
          </div>
            </Col>
        </Row>
      </Container>
        </motion.div>
  { vw > 800 ? null  :
      <Container className="selectionContainer mt-3">
      <Row>
      <Col>
        {years && years.map((year) =>
        <div key={year._id} className="landingPageBox inactive"
        onClick={()=> {
          setClickBox(clickBox => !clickBox);
          setLinkRefCreate('/year/create');
          setLinkRefUpdate(`/year/${year._id}`);
        }}>
          <h1>Year</h1>
        </div>
              )}
      </Col>
      <Col>
      {weeks && weeks
            .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
            .map((week) => (


      <div key={week._id} className="landingPageBox inactive"
      onClick={()=> {
        setClickBox(clickBox => !clickBox);
        setLinkRefCreate('/week/create');
        setLinkRefUpdate(`/week/${week._id}`);
      }}>
        <h1>Week</h1>
      </div>
        ))}

      </Col>
      </Row>
      <Row className="mt-3">
      <Col>
      {days && days
            .filter((day, i, days) => days.indexOf(day) === days.length -1 )
            .map((day) => (

      <div key={day._id} className="landingPageBox inactive"
      onClick={()=> {
        setClickBox(clickBox => !clickBox);
        setLinkRefCreate('/today');
        setLinkRefUpdate(`/today/${day._id}`);
      }}>
        <h1>Day</h1>
      </div>
        )  )}

      </Col>
      <Col>
        <div className="landingPageBox inactive"
        onClick={()=> {
          setClickBox(clickBox => !clickBox);
          setLinkRefCreate('/values');
          setLinkRefUpdate('');
        }}>
        <h1>Experiences</h1>
        </div>
      </Col>
      </Row>
      </Container>
      }
      </main>
      :
      <Container className="landingPageNoLogin" fluid>

      <Row className="text-center mx-3 my-4">
      <div className="landingPageRowHeader">
      <span className="landingPageHeaderText">Welcome to NoWastedDays</span>

          </div>
      <span className="strapLine">Organising your mind just got a little bit better</span>

        </Row>

        <Row className="landingPageRow mx-3 align-items-center">
        <Col className="benefitCol text-center mt-4" sm={12} md={4}>

        <FontAwesomeIcon
            className="planningIcon"
          icon={faSolarPanel}/>

        <h3 className="benefitHeader">Planning</h3>
        <span className="benefitExplainer">Simplify your day around 5 key moments & score your success.</span>
          </Col>
          <Col className="benefitCol text-center mt-4" sm={12} md={4}>
          <FontAwesomeIcon
              className="primingIcon"
            icon={faPlugCircleBolt}/>
        <h3 className="benefitHeader">Priming</h3>
          <span className="benefitExplainer">Walk through unique experiences to help you set up each day for maximum joy and growth.</span>
            </Col>
            <Col className="benefitCol text-center mt-4" sm={12} md={4}>
            <FontAwesomeIcon
                className="playbackIcon"
              icon={faRepeat}/>
            <h3 className="benefitHeader">Playback</h3>
              <span className="benefitExplainer">Look at your days from a healthy distance through your own graphs and charts.</span>
              </Col>
                  </Row>
      </Container>
    }

{ vw > 800 ? <Footer /> : <ReducedFooter /> }

</>
  );
}
