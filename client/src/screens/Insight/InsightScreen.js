// eslint
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { listDays } from './../../actions/dayActions';

//Feeling Score
import FeelingScore from '../../components/Charts/FeelingScore/FeelingScore.js';
import FeelingScoreAverage from '../../components/Charts/FeelingScore/FeelingScoreAverage.js';
import FeelingScoreVariance from '../../components/Charts/FeelingScore/FeelingScoreVariance.js';

//Tasks Completed
import TasksCompleted from '../../components/Charts/TasksCompleted/TasksCompleted.js';
import TasksCompletedAverage from '../../components/Charts/TasksCompleted/TasksCompletedAverage.js';
import TasksCompletedVariance from '../../components/Charts/TasksCompleted/TasksCompletedVariance.js';

//Tasks Attempted
import TasksAttempted from '../../components/Charts/TasksAttempted/TasksAttempted.js';
import TasksAttemptedAverage from '../../components/Charts/TasksAttempted/TasksAttemptedAverage.js';
import TasksAttemptedVariance from '../../components/Charts/TasksAttempted/TasksAttemptedVariance.js';

//Tasks Completion Rate
import TasksCompletionRate from '../../components/Charts/TaskCompletionRate/TaskCompletionRate.js'
import TasksCompletionRateAverage from '../../components/Charts/TaskCompletionRate/TaskCompletionRateAverage.js'
import TasksCompletionRateVariance from '../../components/Charts/TaskCompletionRate/TaskCompletionRateVariance.js'


//Loading
import Loading from '../../components/Loading/Loading';
import PageLoading from '../../components/Loading/PageLoading';
import PropagateLoader from "react-spinners/PropagateLoader";


import Header from "../../components/Header/Header";

import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import axios from "axios";
import * as d3 from "d3";
import './insight.css'

export default function InsightScreen({ history }) {
  const [isFeelingScoreDiv, setFeelingScoreDiv] = useState(true);
  const [isFeelingScoreGraph, setFeelingScoreGraph] = useState(false);
  const [isTasksCompletedDiv, setTasksCompletedDiv] = useState(true);
  const [isTasksCompletedGraph, setTasksCompletedGraph] = useState(false);
  const [isTasksAttemptedDiv, setTasksAttemptedDiv] = useState(true);
  const [isTasksAttemptedGraph, setTasksAttemptedGraph] = useState(false);
  const [isTasksCompletionRateDiv, setTasksCompletionRateDiv] = useState(true);
  const [isTasksCompletionRateGraph, setTasksCompletionRateGraph] = useState(false);

  const [isIntro, setIsIntro] = useState(true);
  const [isRow, setIsRow] = useState(false);

  const [pageLoading, setPageLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

  useEffect(() => {
    dispatch(listDays());
  }, [dispatch, userInfo, history]);


  const parseDate = d3.timeParse('%Y-%m-%d')

  const showHideState = {
    hide: {
      display: "none",
    },
    show: {
      display: "flex",
    },
  }

  const introState = {
    hidden: {
      opacity: 0,
      scale: 0.1,
    },
  open: {
    opacity: 1,
    scale: 1,
    display: "block",
    position: "absolute",
    top: "200px",
    width: "50%",
    x: "50%",
    transition: {
      duration: 2,
      ease: "easeInOut",
    }
  },
  closed: {
    opacity: 0,
    scale: 1,
    x: "100%",
    width: "50%",
    y: "-200%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const loadingTimeout = () => {
  setTimeout(()=> {
    setPageLoading(false)
  }, 3000)
}

useEffect(()=> {
  loadingTimeout();
})

  return (
  <>
    <Header />
      { pageLoading && !days ? <div className="pageLoading"><PropagateLoader color={"#fff"} size={30} /></div> :
  <Container fluid>

<Row>

<Col>
<Row>

<Col className="text-center" >
<h3 className="chartTitle">Your Feeling Score over Time:</h3>
       <FeelingScore />
       </Col>

       <Col id="colBorder" className="d-flex-col align-self-end">
         <Row className="justify-content-center align-center text-start mt-3 mb-4">
       <h3 className="insightHeader">Average</h3>
       <FeelingScoreAverage />

       <h3 className="insightHeader">Deviation</h3>
       <FeelingScoreVariance />
       </Row>
        </Col>
       </Row>
</Col>

<Col>
<Row>

<Col className="text-center" >
<h3 className="chartTitle">Moments Completed Over Time</h3>
       <TasksCompleted />
       </Col>
       <Col id="colBorder" className="d-flex-col align-self-end">
           <Row className="justify-content-start align-start text-start mt-3 mb-4">
       <h3 className="insightHeader">Average</h3>
       <TasksCompletedAverage />



       <h3 className="insightHeader">Deviation</h3>
       <TasksCompletedVariance />
       </Row>

        </Col>
       </Row>
</Col>




</Row>


<Row>




<Col>
<Row className="mt-3">

<Col className="text-center">
<h3 className="chartTitle">Moments Attempted Over Time</h3>
       <TasksAttempted />
       </Col>
       <Col id="colBorder" className="d-flex-col align-self-end">
       <Row className="justify-content-start align-start text-start mt-3 mb-4">
       <h3 className="insightHeader">Average</h3>
<TasksAttemptedAverage />



       <h3 className="insightHeader">Deviation</h3>
<TasksAttemptedVariance />
       </Row>

        </Col>
       </Row>
</Col>




<Col>
<Row className="mt-3">

<Col className="text-center">
<h3 className="chartTitle">The Moment Realisation Rate Over Time</h3>
       <TasksCompletionRate />
       </Col>
       <Col id="colBorder" className="d-flex-col align-self-end">
       <Row className="justify-content-start align-start text-start mt-3 mb-4">
       <h3 className="insightHeader">Average</h3>
       <TasksCompletionRateAverage />



       <h3 className="insightHeader">Deviation</h3>
       <TasksCompletionRateVariance />
       </Row>

        </Col>
       </Row>
</Col>





</Row>
        </Container>



      }
        </>

  );
}
