import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { listDays } from '../../../actions/dayActions';
import { listYears } from '../../../actions/yearActions';
import { listWeeks } from '../../../actions/weekActions';
import { updateProfile } from '../../../actions/dayActions';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import Loading from '../../../components/Loading/Loading';
import { ErrorMessage } from '../../../components/Error/ErrorMessage';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../NWD_Logo_White.png';
import realquiz from '../../../realquiz.gif';
import * as d3 from 'd3';
import './realquiz.css';

export default function FinalQuizScreen(history) {
  const [titleDiv, setTitleDiv] = useState(true);
  const [kickOff, setKickOff] = useState(false);
  const [q1, setQ1] = useState(false);


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

  const showHideState = {
    hide: {
      display: "none",
    },
    show: {
      display: "flex",
    },
  }

  const showHideGrid = {
    hide: {
      display: "none",
    },
    show: {
      display: "grid",
    },
  }

  	const parseDate = d3.timeParse('%Y-%m-%d')

    days && days.forEach(day => {
      let sum = day.momentOneScore + day.momentTwoScore + day.momentThreeScore + day.momentFourScore + day.momentFiveScore;
      day.total = sum;

      let count = (day.momentOneScore / day.momentOneScore === 1 ? 1 : 0) + (day.momentTwoScore / day.momentTwoScore === 1 ? 1 : 0) + (day.momentThreeScore / day.momentThreeScore === 1 ? 1 : 0) + (day.momentFourScore / day.momentFourScore === 1 ? 1 : 0) + (day.momentFiveScore / day.momentFiveScore === 1 ? 1 : 0);
      day.tasksAttempted = count;

      let tcr = ((day.total / 10) / day.tasksAttempted)
        day.taskCompletionRate = tcr;
    });

    const avgArray = [];

    days && days.map(each => avgArray.push(each.taskCompletionRate));

    const zeroRemove = () => {
      let lastItem = avgArray.length - 1;

      if (avgArray[lastItem] === 0) {
        return avgArray.pop();
      } else {
        return avgArray;
      }
    }

    zeroRemove();
    console.log(avgArray);

    const daysLogged = d3.count(avgArray, d => d);

    const daysRemaining = 10 - daysLogged;

  return (
    <>

<Header />

<motion.div
  className="titleDiv"
  animate={ titleDiv ? "show" : "hide"}
  variants={showHideState}
  onClick={()=> {
  setTitleDiv(titleDiv => false);
  setKickOff(kickOff => true);
}}>
  <span>You Have a Finished the Quiz!</span>
  <h1>Well Done</h1>
  <span><strong>Click Anywhere to Celebrate</strong></span>
</motion.div>

<motion.div
animate={ kickOff ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">The Facts</h4>
    </div>
    <br />
    <span>
      Awesome work! That is a really good effort to put in the time and effort to smash through that quiz.
    </span>
    <br />
    <br />
    <span>
      I really hope you know feel like you have a better understanding and more confidence than when you started.
    </span>
    <br />
    <br />
    <span>
    If you have logged more than 10 days of data now, you can dive into your insights right away. If you are still building up to that,
    keep logging and maybe have another revisit of some key quiz content before you get going.
    </span>
    <br />
    <br />
    <span>
    Also, we have a set of emerging experiences on the site including a process that helps you think about your personal values.
    Maybe give it a look if you have a moment. <br /><strong className="emphasis"><a href='/values'>Values Help</a></strong>
    </span>
</div>
<div className="rightCol">
<div className="rightContent">
  <h2>Quiz Complete!</h2>
  <hr className="dividingLine" />
  <h2>Days Logged: {daysLogged}</h2>
  <h2>Days Needed to Unlock Insights: {daysRemaining}</h2>

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setTitleDiv(titleDiv => true);
  setKickOff(kickOff => false);
}}>Year Page</Button>
<Button className="quizButton" onClick={()=> {
  setKickOff(kickOff => false);
  setQ1(q1 => true);
}}>Today Page</Button>
</div>
</motion.div>




    </>
  );
}
