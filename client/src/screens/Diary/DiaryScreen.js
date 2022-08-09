// eslint-disable
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { createDayAction, listDays } from '../../actions/dayActions';
import { Card, Button } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import Header from '../../components/Header/Header';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import './diary.css';

export default function DiaryScreen({ history }) {

// Form State
const [startScore, setStartScore] = useState(0);
const [datePicker, setDatePicker] = useState();
const [logDate, setLogDate] = useState(0);
const [thankYou, setThankYou] = useState('');
const [selfLess, setSelfLess] = useState('');
const [mindBody, setMindBody] = useState('');
const [momentOne, setMomentOne] = useState('');
const [momentOneScore, setMomentOneScore] = useState(0);
const [momentTwo, setMomentTwo] = useState("");
const [momentTwoScore, setMomentTwoScore] = useState(0);
const [momentThree, setMomentThree] = useState("");
const [momentThreeScore, setMomentThreeScore] = useState(0);
const [momentFour, setMomentFour] = useState("");
const [momentFourScore, setMomentFourScore] = useState(0);
const [momentFive, setMomentFive] = useState("");
const [momentFiveScore, setMomentFiveScore] = useState(0);
const [rememberToday, setRememberToday] = useState("");
const [leaveBehind, setLeaveBehind] = useState("");
const [endScore, setEndScore] = useState(0);

// Layout & Animation State
const [isDisplay, setIsDisplay] = useState(true);
const [isDisplay1, setIsDisplay1] = useState(true);
const [isDisplay2, setIsDisplay2] = useState(true);
const [isDisplay3, setIsDisplay3] = useState(true);
const [isDisplay4, setIsDisplay4] = useState(true);
const [isDisplay5, setIsDisplay5] = useState(true);
const [isDisplay6, setIsDisplay6] = useState(true);
const [isDisplay7, setIsDisplay7] = useState(true);
const [isDisplay8, setIsDisplay8] = useState(true);
const [isDisplay9, setIsDisplay9] = useState(true);
const [isDisplay10, setIsDisplay10] = useState(true);

const [videoDisplay, setVideoDisplay] = useState(true);

const [videoLink, setVideoLink] = useState('TpLVtoE6bFg');

const [pageLoading, setPageLoading] = useState(true);


const showHideState = {
  hide: {
    display: "none",
  },
  show: {
    display: "block",
  },
}

const showHideMomentState = {
  hide: {
    display: "none",
  },
  show: {
    display: "flex",
  },
}

const valueState = {
  hide: {
    display: "none",
  },
  show: {
    display: "block",
  },
};

const dispatch = useDispatch();
const navigate = useNavigate();

const userLogin = useSelector((state) => state.userLogin);
const { userInfo } = userLogin;

const dayList = useSelector((state) => state.dayList);
const { loading, error, days } = dayList;

useEffect(() => {
  dispatch(listDays());
}, [dispatch, userInfo, history])

  return (
    <>
    <Header />
<main className="dayScreenMain">

<div className="topRow">

<input
type="date"
value={datePicker}
onChange={(e) => setDatePicker(e.target.value)}
/>

<Button className="explainerButton d-none d-sm-flex"
onClick={()=> {
  setVideoDisplay(videoDisplay => !videoDisplay);
}}>
Learn About Your Diary Page.
</Button>

<Button className="submitDayContainer" href="/insight">
  Check More Insights
</Button>
</div>

    <section className="dayScreenContainer">
    <motion.div
    className="videoContainer"
    animate={videoDisplay ? "hide" : "show"}
    variants={valueState}
    >
   
    </motion.div>
      <div className="boxA">

          <motion.div
            className="thankYouDisplay">
            <div className="questionTitleButtonsDisplay">
{ days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
    <h5 key={day._id}>Today, I would like to say thank you to {day.thankYou}</h5>
)}

              </div>
            </motion.div>


    <hr className="dividingLine"/>



      <motion.div
        className="selfLessDisplay"
        animate={isDisplay1 ? "show" : "hide"}
        variants={showHideState}>
        <div className="questionTitleButtonsDisplay">
          { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
              <h5 key={day._id}>I am priming myself for self-less exploration today by {day.selfLess}</h5>
          )}
          </div>
        </motion.div>

    <hr className="dividingLine"/>


      <motion.div
        className="mindBodyDisplay"
        animate={isDisplay2 ? "show" : "hide"}
        variants={showHideState}>
        <div className="questionTitleButtonsDisplay">
          <h5></h5>
          { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
              <h5 key={day._id}>I am pleased to live in my mind and body today because {day.mindBody}</h5>
          )}


          </div>
        </motion.div>

    </div>




    <div className="boxC">

    <div className="beforeScoreContainer">
      <div className="beforeEndScoreWhat">
        <div className="questionTitle">
          <span>Before filling in my NWD today, I feel...</span>
        </div>
        <div className="beforeScoreInput">
        { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
                  <label key={day._id} htmlFor="beforeScoreID">{day.startScore}</label>
    )}

  { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
          <input
          key={day._id}
          id="beforeScoreID"
          className="slider"
          type="range"
          min="0.0"
          max="5.0"
          step="0.1"
          value={day.startScore}
          />
                )}

        </div>
      </div>

    </div>

    <motion.div
      className="momentDisplay"
      animate={isDisplay5 ? "show" : "hide"}
      variants={showHideMomentState}>
      <div className="questionTitleButtonsDisplay">
      { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
    <h5 key={day._id}>Moment One is {day.momentOne} - {day.momentOneScore} / 10</h5>
        )}
        </div>
      </motion.div>

<hr className="dividingLine"/>

<motion.div
  className="momentDisplay"
  animate={isDisplay6 ? "show" : "hide"}
  variants={showHideMomentState}>
  <div className="questionTitleButtonsDisplay">
  { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
<h5 key={day._id}>Moment Two is {day.momentTwo} - {day.momentTwoScore} / 10</h5>
    )}
    </div>
  </motion.div>



<hr className="dividingLine"/>

<motion.div
  className="momentDisplay"
  animate={isDisplay7 ? "show" : "hide"}
  variants={showHideMomentState}>
  <div className="questionTitleButtonsDisplay">
  { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
<h5 key={day._id}>Moment Three is {day.momentThree} - {day.momentThreeScore} / 10</h5>
    )}
    </div>
  </motion.div>


<hr className="dividingLine"/>

<motion.div
  className="momentDisplay"
  animate={isDisplay8 ? "show" : "hide"}
  variants={showHideMomentState}>
  <div className="questionTitleButtonsDisplay">
  { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
<h5 key={day._id}>Moment Four is {day.momentFour} - {day.momentFourScore} / 10</h5>
    )}
    </div>
  </motion.div>

<hr className="dividingLine"/>

<motion.div
  className="momentDisplay"
  animate={isDisplay9 ? "show" : "hide"}
  variants={showHideMomentState}>
  <div className="questionTitleButtonsDisplay">
  { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
<h5 key={day._id}>Moment Five is {day.momentFive} - {day.momentFiveScore} / 10</h5>
    )}
    </div>
  </motion.div>

<div className="afterScoreContainer">
      <div className="beforeEndScoreWhat">
        <div className="questionTitle">
          <span>After the day described above, I felt...</span>
        </div>
        <div className="afterScoreInput">
          { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
          <label key={day._id} htmlFor="afterScoreID">{day.endScore}</label>
              )}
                { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
            <input
            id="afterScoreID"
            className="slider"
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={day.endScore}
            />
                )}
        </div>
      </div>
    </div>
    </div>

    <div className="boxB">

        <motion.div
          className="rememberTodayDisplay"
          animate={isDisplay3 ? "show" : "hide"}
          variants={showHideState}>
          <div className="questionTitleButtonsDisplay">
            { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
            <h5 key={day._id}>The memories from today that will capture it forever are {day.rememberToday}</h5>
            )}
            </div>
          </motion.div>

    <hr className="dividingLine"/>


        <motion.div
          className="leaveBehindDisplay"
          animate={isDisplay4 ? "show" : "hide"}
          variants={showHideState}>
          <div className="questionTitleButtonsDisplay">
            { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
            <h5 key={day._id}>The thoughts and feelings from today I would like to leave behind are {day.leaveBehind}</h5>
)}
            </div>
          </motion.div>

    </div>
    </section>
    </main>
    </>
  );
}
