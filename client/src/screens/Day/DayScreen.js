import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { createDayAction } from '../../actions/dayActions';
import { Card, Button } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import PageLoading from '../../components/Loading/PageLoading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser, faCircleCheck, faQuestion  } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Header from "../../components/Header/Header";
import './day.css';

export default function DayScreen({ history }) {

// Form State
const [startScore, setStartScore] = useState(localStorage.startScore ? localStorage.startScore : 0);
const [logDate, setLogDate] = useState(0);
const [thankYou, setThankYou] = useState(localStorage.thankYou ? localStorage.thankYou : "");
const [selfLess, setSelfLess] = useState(localStorage.selfLess ? localStorage.selfLess : "");
const [mindBody, setMindBody] = useState(localStorage.mindBody ? localStorage.mindBody : "");
const [momentOne, setMomentOne] = useState(localStorage.momentOne ? localStorage.momentOne : "");
const [momentOneScore, setMomentOneScore] = useState(localStorage.momentOneScore ? localStorage.momentOneScore : null);
const [momentTwo, setMomentTwo] = useState(localStorage.momentTwo ? localStorage.momentTwo : "");
const [momentTwoScore, setMomentTwoScore] = useState(localStorage.momentTwoScore ? localStorage.momentTwoScore : null);
const [momentThree, setMomentThree] = useState(localStorage.momentThree ? localStorage.momentThree : "");
const [momentThreeScore, setMomentThreeScore] = useState(localStorage.momentThreeScore ? localStorage.momentThreeScore : null);
const [momentFour, setMomentFour] = useState(localStorage.momentFour ? localStorage.momentFour : "");
const [momentFourScore, setMomentFourScore] = useState(localStorage.momentFourScore ? localStorage.momentFourScore : null);
const [momentFive, setMomentFive] = useState(localStorage.momentFive ? localStorage.momentFive : "");
const [momentFiveScore, setMomentFiveScore] = useState(localStorage.momentFiveScore ? localStorage.momentFiveScore : null);
const [rememberToday, setRememberToday] = useState(localStorage.rememberToday ? localStorage.rememberToday : "");
const [leaveBehind, setLeaveBehind] = useState(localStorage.leaveBehind ? localStorage.leaveBehind : "");
const [endScore, setEndScore] = useState(localStorage.endScore ? localStorage.endScore : 0);

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

const dayCreate = useSelector((state) => state.dayCreate); //
const { loading, error, day } = dayCreate;


const submitHandler = (e) => {
  e.preventDefault();
  dispatch(createDayAction(
    logDate,
    startScore,
    thankYou,
    selfLess,
    mindBody,
    momentOne,
    momentOneScore,
    momentTwo,
    momentTwoScore,
    momentThree,
    momentThreeScore,
    momentFour,
    momentFourScore,
    momentFive,
    momentFiveScore,
    rememberToday,
    leaveBehind,
    endScore
  ));
  navigate('/');
  localStorage.removeItem('thankYou');
  localStorage.removeItem('selfLess');
  localStorage.removeItem('mindBody');
  localStorage.removeItem('momentOne');
  localStorage.removeItem('momentTwo');
  localStorage.removeItem('momentThree');
  localStorage.removeItem('momentFour');
  localStorage.removeItem('momentFive');
  localStorage.removeItem('rememberToday');
  localStorage.removeItem('leaveBehind');
  localStorage.removeItem('startScore');
  localStorage.removeItem('endScore');
  localStorage.removeItem('momentOneScore');
  localStorage.removeItem('momentTwoScore');
  localStorage.removeItem('momentThreeScore');
  localStorage.removeItem('momentFourScore');
  localStorage.removeItem('momentFiveScore');
};

const resetHandler = () => {
  localStorage.removeItem('thankYou');
  localStorage.removeItem('selfLess');
  localStorage.removeItem('mindBody');
  localStorage.removeItem('momentOne');
  localStorage.removeItem('momentTwo');
  localStorage.removeItem('momentThree');
  localStorage.removeItem('momentFour');
  localStorage.removeItem('momentFive');
  localStorage.removeItem('rememberToday');
  localStorage.removeItem('leaveBehind');
  localStorage.removeItem('startScore');
  localStorage.removeItem('endScore');
  localStorage.removeItem('momentOneScore');
  localStorage.removeItem('momentTwoScore');
  localStorage.removeItem('momentThreeScore');
  localStorage.removeItem('momentFourScore');
  localStorage.removeItem('momentFiveScore');
  setLogDate();
  setStartScore(0);
  setThankYou('');
  setSelfLess('');
  setMindBody('');
  setMomentOne('');
  setMomentOneScore(0);
  setMomentTwo('');
  setMomentTwoScore(0);
  setMomentThree('');
  setMomentThreeScore(0);
  setMomentFour('');
  setMomentFourScore(0);
  setMomentFive('');
  setMomentFiveScore(0);
  setRememberToday('');
  setLeaveBehind('');
  setEndScore(0);
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
        { pageLoading ? <div className="pageLoading"><PageLoading color={"#fff"} size={30} /></div> :

<form onSubmit={submitHandler}>
<main className="dayScreenMain">
<div className="topRow">
<div className="topRowLeft">
<input
type="date"
value={logDate}
onChange={(e) => setLogDate(e.target.value)}
/>
<div className="resetDiv">
<FontAwesomeIcon
    className="eraseIconUpper"
  icon={faEraser}
  onClick={resetHandler} />
  </div>
<span className="eiExplain">Reset</span>
  </div>
  <Button className="explainerButton d-none d-sm-flex"
  onClick={()=> {
    setVideoDisplay(videoDisplay => !videoDisplay);
  }}>
  Learn About Your Today Page.
  </Button>
<Button className="submitDayContainer" type="submit">
  Log Day in the Diary
</Button>
</div>

    <section className="dayScreenContainer">
    <motion.div
    animate={videoDisplay ? "hide" : "show"}
    variants={valueState}
    className="videoContainer">
    </motion.div>
      <div className="boxA">

        <motion.div className="thankYouInput"
          animate={isDisplay ? "hide" : "show"}
          variants={showHideState}>
          <div className="questionTitleButtons">
            <span>Today, I would like to say thank you to...</span>
          <div className="editDelete">
            <FontAwesomeIcon
              className="editIcon"
              icon={faCircleCheck}
              onClick={()=> {
                setIsDisplay(isDisplay => !isDisplay);
                localStorage.setItem('thankYou', thankYou);
              }}/>
            <FontAwesomeIcon
                className="eraseIcon"
              icon={faEraser}
              onClick={() => {
                localStorage.removeItem('thankYou');
                setThankYou('');
              }} />
          </div>
        </div>
          <textarea
          id="thankYouInput"
          wrap="soft"
          autoComplete="off"
          value={thankYou}
          placeholder=""
          onChange={(e) => setThankYou(e.target.value)}
          />
          </motion.div>


          <motion.div
            className="thankYouDisplay"
            animate={isDisplay ? "show" : "hide"}
            variants={showHideState}>
            <div className="questionTitleButtonsDisplay">
              <h5>Today, I would like to say thank you to {localStorage.thankYou}</h5>
            <div className="editDelete">
              <FontAwesomeIcon
                className="editIcon"
                icon={faPenToSquare}
                onClick={()=> {
                  setIsDisplay(isDisplay => !isDisplay);
                }}/>
              <FontAwesomeIcon
                  className="eraseIcon"
                icon={faEraser}
                onClick={()=> {
                  localStorage.removeItem('thankYou');
                  setThankYou('');
                }}/>
                <FontAwesomeIcon
                    className="questionIcon"
                  icon={faQuestion}
                  onClick={() => {
                    setVideoLink('4oGXepCXM6g');
                    setVideoDisplay(videoDisplay => !videoDisplay);
                  }} />
                </div>
              </div>
            </motion.div>


    <hr className="dividingLine"/>

    <motion.div className="selfLessInput"
      animate={isDisplay1 ? "hide" : "show"}
      variants={showHideState}>
      <div className="questionTitleButtons">
        <span>I am priming myself for self-less exploration today by..</span>
      <div className="editDelete">
        <FontAwesomeIcon
          className="editIcon"
          icon={faCircleCheck}
          onClick={()=> {
            setIsDisplay1(isDisplay1 => !isDisplay1);
            localStorage.setItem('selfLess', selfLess);
          }}/>
        <FontAwesomeIcon
            className="eraseIcon"
          icon={faEraser}
          onClick={()=> {
            localStorage.removeItem('selfLess');
            setSelfLess('');
          }} />
      </div>
    </div>
      <textarea
      id="selfLessInput"
      wrap="soft"
      autoComplete="off"
      value={selfLess}
      placeholder=""
      onChange={(e) => setSelfLess(e.target.value)}
      />
      </motion.div>

      <motion.div
        className="selfLessDisplay"
        animate={isDisplay1 ? "show" : "hide"}
        variants={showHideState}>
        <div className="questionTitleButtonsDisplay">
          <h5>I am priming myself for self-less exploration today by {localStorage.selfLess}</h5>
        <div className="editDelete">
          <FontAwesomeIcon
            className="editIcon"
            icon={faPenToSquare}
            onClick={()=> {
              setIsDisplay1(isDisplay1 => !isDisplay1);
            }}/>
          <FontAwesomeIcon
              className="eraseIcon"
            icon={faEraser}
            onClick={()=> {
              localStorage.removeItem('selfLess');
              setSelfLess('');
            }} />
            <FontAwesomeIcon
                className="questionIcon"
              icon={faQuestion}
              onClick={() => {
                setVideoLink('4oGXepCXM6g');
                setVideoDisplay(videoDisplay => !videoDisplay);
              }} />
            </div>
          </div>
        </motion.div>

    <hr className="dividingLine"/>

    <motion.div className="mindBodyInput"
      animate={isDisplay2 ? "hide" : "show"}
      variants={showHideState}>
      <div className="questionTitleButtons">
        <span>I am pleased to live in my mind and body today because...</span>
      <div className="editDelete">
        <FontAwesomeIcon
          className="editIcon"
          icon={faCircleCheck}
          onClick={()=> {
            setIsDisplay2(isDisplay2 => !isDisplay2);
            localStorage.setItem('mindBody', mindBody);
          }}/>
        <FontAwesomeIcon
            className="eraseIcon"
          icon={faEraser}
          onClick={()=> {
            localStorage.removeItem('mindBody');
            setMindBody('');
          }} />
      </div>
    </div>
      <textarea
      id="mindBodyInput"
      wrap="soft"
      autoComplete="off"
      value={mindBody}
      placeholder=""
      onChange={(e) => setMindBody(e.target.value)}
      />
      </motion.div>

      <motion.div
        className="mindBodyDisplay"
        animate={isDisplay2 ? "show" : "hide"}
        variants={showHideState}>
        <div className="questionTitleButtonsDisplay">
          <h5>I am pleased to live in my mind and body today because {localStorage.mindBody}</h5>
        <div className="editDelete">
          <FontAwesomeIcon
            className="editIcon"
            icon={faPenToSquare}
            onClick={()=> {
              setIsDisplay2(isDisplay2 => !isDisplay2);
            }}/>
          <FontAwesomeIcon
              className="eraseIcon"
            icon={faEraser}
            onClick={()=> {
              localStorage.removeItem('mindBody');
              setMindBody('');
            }} />
            <FontAwesomeIcon
                className="questionIcon"
              icon={faQuestion}
              onClick={() => {
                setVideoLink('4oGXepCXM6g');
                setVideoDisplay(videoDisplay => !videoDisplay);
              }} />
            </div>
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
                  <label htmlFor="beforeScoreID">{startScore}</label>
          <input
          id="beforeScoreID"
          className="slider"
          type="range"
          min="0.0"
          max="5.0"
          step="0.1"
          value={startScore}
          placeholder=""
          onChange={(e) => {
            setStartScore(e.target.value);
            localStorage.setItem('startScore',startScore)
          }}
          />

        </div>
      </div>

    </div>

    <motion.div
      className="momentDisplay"
      animate={isDisplay5 ? "show" : "hide"}
      variants={showHideMomentState}>
      <div className="questionTitleButtonsDisplay">
      {momentOneScore == 0 || momentOneScore === null
      ? <h5>Moment One is {localStorage.momentOne}</h5> 
       : <h5>Moment One is {localStorage.momentOne} - {localStorage.momentOneScore}/10</h5>}

      <div className="editDelete">
        <FontAwesomeIcon
          className="editIcon"
          icon={faPenToSquare}
          onClick={()=> {
            setIsDisplay5(isDisplay5 => !isDisplay5);
          }}/>
        <FontAwesomeIcon
            className="eraseIcon"
          icon={faEraser}
          onClick={()=> {
            localStorage.removeItem('momentOne');
            setMomentOne('');
          }} />
          <FontAwesomeIcon
              className="questionIcon"
            icon={faQuestion}
            onClick={() => {
              setVideoLink('4oGXepCXM6g');
              setVideoDisplay(videoDisplay => !videoDisplay);
            }} />
          </div>
        </div>
      </motion.div>

    <motion.div
    className="momentInputContainer"
    animate={isDisplay5 ? "hide" : "show"}
    variants={showHideMomentState}>

      <textarea
      wrap="soft"
      value={momentOne}
      autoComplete="off"
      placeholder=""
      onChange={(e) => setMomentOne(e.target.value)}
      />

  <motion.div className="scoreButtons">

      <motion.div className="momentScore">
      <input
      id="m1ID"
      type="number"
      min="0"
      max="10"
      value={momentOneScore}
      placeholder=""
      onChange={(e) => setMomentOneScore(e.target.value)}
      />
        <label className="momentNumLabel" htmlFor="m1ID">/ 10</label>
      </motion.div>

          <div className="editDeleteMoment">
            <FontAwesomeIcon
              className="editIcon"
            icon={faCircleCheck}
            onClick={() => {
              localStorage.setItem('momentOne', momentOne);
              localStorage.setItem('momentOneScore', momentOneScore);
              setIsDisplay5(isDisplay5 => !isDisplay5);
            }} />
          <FontAwesomeIcon
    className="eraseIcon"
          icon={faEraser}
          onClick={() => {
            localStorage.removeItem('momentOne')
            setMomentOne("");
          }} />
          </div>

              </motion.div>
</motion.div>

<hr className="dividingLine"/>

<motion.div
  className="momentDisplay"
  animate={isDisplay6 ? "show" : "hide"}
  variants={showHideMomentState}>
  <div className="questionTitleButtonsDisplay">
    {momentTwoScore == 0 || momentTwoScore === null ?
     <h5>Moment Two is {localStorage.momentTwo}</h5>  :   <h5>Moment Two is {localStorage.momentTwo} - {localStorage.momentTwoScore}/10</h5>}
  <div className="editDelete">
    <FontAwesomeIcon
      className="editIcon"
      icon={faPenToSquare}
      onClick={()=> {
        setIsDisplay6(isDisplay6 => !isDisplay6);
      }}/>
    <FontAwesomeIcon
        className="eraseIcon"
      icon={faEraser}
      onClick={()=> {
        localStorage.removeItem('momentTwo');
        setMomentTwo("");
      }} />
      <FontAwesomeIcon
          className="questionIcon"
        icon={faQuestion}
        onClick={() => {
          setVideoLink('4oGXepCXM6g');
          setVideoDisplay(videoDisplay => !videoDisplay);
        }} />
      </div>
    </div>
  </motion.div>

<motion.div
className="momentInputContainer"
animate={isDisplay6 ? "hide" : "show"}
variants={showHideMomentState}>

  <textarea
  wrap="soft"
  value={momentTwo}
  autoComplete="off"
  placeholder=""
  onChange={(e) => setMomentTwo(e.target.value)}
  />

<motion.div className="scoreButtons">

  <motion.div className="momentScore">
  <input
  id="m2ID"
  type="number"
  min="0"
  max="10"
  value={momentTwoScore}
  placeholder=""
  onChange={(e) => setMomentTwoScore(e.target.value)}
  />
    <label className="momentNumLabel" htmlFor="m2ID">/ 10</label>
  </motion.div>

      <div className="editDeleteMoment">
        <FontAwesomeIcon
          className="editIcon"
        icon={faCircleCheck}
        onClick={() => {
          localStorage.setItem('momentTwo', momentTwo);
          localStorage.setItem('momentTwoScore', momentTwoScore);
              setIsDisplay6(isDisplay6 => !isDisplay6);
        }}
         />
      <FontAwesomeIcon
className="eraseIcon"
      icon={faEraser}
      onClick={()=> {
        localStorage.removeItem('momentTwo');
        setMomentTwo("");
      }}  />
      </div>

          </motion.div>
</motion.div>

<hr className="dividingLine"/>

<motion.div
  className="momentDisplay"
  animate={isDisplay7 ? "show" : "hide"}
  variants={showHideMomentState}>
  <div className="questionTitleButtonsDisplay">
    {momentThreeScore == 0 || momentThreeScore === null ? <h5>Moment Three is {localStorage.momentThree}</h5> :   <h5>Moment Three is {localStorage.momentThree} - {localStorage.momentThreeScore}/10</h5>}
  <div className="editDelete">
    <FontAwesomeIcon
      className="editIcon"
      icon={faPenToSquare}
      onClick={()=> {
        setIsDisplay7(isDisplay7 => !isDisplay7);
      }}/>
    <FontAwesomeIcon
        className="eraseIcon"
      icon={faEraser}
      onClick={()=> {
        localStorage.removeItem('momentThree');
        setMomentThree("");
      }} />
      <FontAwesomeIcon
          className="questionIcon"
        icon={faQuestion}
        onClick={() => {
          setVideoLink('4oGXepCXM6g');
          setVideoDisplay(videoDisplay => !videoDisplay);
        }} />
      </div>
    </div>
  </motion.div>

<motion.div
className="momentInputContainer"
animate={isDisplay7 ? "hide" : "show"}
variants={showHideMomentState}>

  <textarea
  wrap="soft"
  value={momentThree}
  autoComplete="off"
  placeholder=""
  onChange={(e) => setMomentThree(e.target.value)}
  />

<motion.div className="scoreButtons">

  <motion.div className="momentScore">
  <input
  id="m3ID"
  type="number"
  min="0"
  max="10"
  value={momentThreeScore}
  placeholder=""
  onChange={(e) => setMomentThreeScore(e.target.value)}
  />
    <label className="momentNumLabel" htmlFor="m3ID">/ 10</label>
  </motion.div>

      <div className="editDeleteMoment">
        <FontAwesomeIcon
          className="editIcon"
        icon={faCircleCheck}
        onClick={() => {
          localStorage.setItem('momentThree', momentThree);
          localStorage.setItem('momentThreeScore', momentThreeScore);
          setIsDisplay7(isDisplay7 => !isDisplay7);
        }} />
      <FontAwesomeIcon
className="eraseIcon"
      icon={faEraser}
      onClick={()=> {
        localStorage.removeItem('momentThree');
        setMomentThree("");
      }}  />
      </div>

          </motion.div>
</motion.div>

<hr className="dividingLine"/>

<motion.div
  className="momentDisplay"
  animate={isDisplay8 ? "show" : "hide"}
  variants={showHideMomentState}>
  <div className="questionTitleButtonsDisplay">
    {momentFourScore == 0 || momentFourScore === null? <h5>Moment Four is {localStorage.momentFour}</h5> :   <h5>Moment Four is {localStorage.momentFour} - {localStorage.momentFourScore}/10</h5>}
  <div className="editDelete">
    <FontAwesomeIcon
      className="editIcon"
      icon={faPenToSquare}
      onClick={()=> {
        setIsDisplay8(isDisplay8 => !isDisplay8);
      }}/>
    <FontAwesomeIcon
        className="eraseIcon"
      icon={faEraser}
      onClick={()=> {
        localStorage.removeItem('momentFour');
        setMomentFour("");
      }} />
      <FontAwesomeIcon
          className="questionIcon"
        icon={faQuestion}
        onClick={() => {
          setVideoLink('4oGXepCXM6g');
          setVideoDisplay(videoDisplay => !videoDisplay);
        }} />
      </div>
    </div>
  </motion.div>

<motion.div
className="momentInputContainer"
animate={isDisplay8 ? "hide" : "show"}
variants={showHideMomentState}>

  <textarea
  wrap="soft"
  value={momentFour}
  autoComplete="off"
  placeholder=""
  onChange={(e) => setMomentFour(e.target.value)}
  />

<motion.div className="scoreButtons">

  <motion.div className="momentScore">
  <input
  id="m4ID"
  type="number"
  min="0"
  max="10"
  value={momentFourScore}
  placeholder=""
  onChange={(e) => setMomentFourScore(e.target.value)}
  />
    <label className="momentNumLabel" htmlFor="m4ID">/ 10</label>
  </motion.div>

      <div className="editDeleteMoment">
        <FontAwesomeIcon
          className="editIcon"
        icon={faCircleCheck}
        onClick={() => {
          localStorage.setItem('momentFour', momentFour);
          localStorage.setItem('momentFourScore', momentFourScore);
          setIsDisplay8(isDisplay8 => !isDisplay8);
        }} />
      <FontAwesomeIcon
className="eraseIcon"
      icon={faEraser}
      onClick={()=> {
        localStorage.removeItem('momentFour');
        setMomentFour("");
      }}  />
      </div>

          </motion.div>
</motion.div>

<hr className="dividingLine"/>

<motion.div
  className="momentDisplay"
  animate={isDisplay9 ? "show" : "hide"}
  variants={showHideMomentState}>
  <div className="questionTitleButtonsDisplay">
    {momentFiveScore == 0 || momentFiveScore === null ? <h5>Moment Five is {localStorage.momentFive}</h5> :   <h5>Moment Five is {localStorage.momentFive} - {localStorage.momentFiveScore}/10</h5>}
  <div className="editDelete">
    <FontAwesomeIcon
      className="editIcon"
      icon={faPenToSquare}
      onClick={()=> {
        setIsDisplay9(isDisplay9 => !isDisplay9);
      }}/>
    <FontAwesomeIcon
        className="eraseIcon"
      icon={faEraser}
      onClick={()=> {
        localStorage.removeItem('momentFive');
        setMomentFive("");
      }} />
      <FontAwesomeIcon
          className="questionIcon"
        icon={faQuestion}
        onClick={() => {
          setVideoLink('4oGXepCXM6g');
          setVideoDisplay(videoDisplay => !videoDisplay);
        }} />
      </div>
    </div>
  </motion.div>

<motion.div
className="momentInputContainer"
animate={isDisplay9 ? "hide" : "show"}
variants={showHideMomentState}>

  <textarea
  wrap="soft"
  value={momentFive}
  autoComplete="off"
  placeholder=""
  onChange={(e) => setMomentFive(e.target.value)}
  />

<motion.div className="scoreButtons">

  <motion.div className="momentScore">
  <input
  id="m5ID"
  type="number"
  min="0"
  max="10"
  value={momentFiveScore}
  placeholder=""
  onChange={(e) => setMomentFiveScore(e.target.value)}
  />
    <label className="momentNumLabel" htmlFor="m5ID">/ 10</label>
  </motion.div>

      <div className="editDeleteMoment">
        <FontAwesomeIcon
          className="editIcon"
        icon={faCircleCheck}
        onClick={() => {
          localStorage.setItem('momentFive', momentFive);
          localStorage.setItem('momentFiveScore', momentFiveScore);
          setIsDisplay9(isDisplay9 => !isDisplay9);
        }} />
      <FontAwesomeIcon
className="eraseIcon"
      icon={faEraser}
      onClick={()=> {
        localStorage.removeItem('momentFive');
        setMomentFive("");
      }}  />
      </div>

          </motion.div>
</motion.div>



<div className="afterScoreContainer">
      <div className="beforeEndScoreWhat">
        <div className="questionTitle">
          <span>After the day described above, I felt..</span>
        </div>
        <div className="afterScoreInput">
          <label htmlFor="afterScoreID">{endScore}</label>
            <input
            id="afterScoreID"
            className="slider"
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={endScore}
            onChange={(e) => {
              setEndScore(e.target.value);
              localStorage.setItem("endScore", endScore);
            }}
            />
        </div>
      </div>
    </div>
    </div>

    <div className="boxB">

      <motion.div className="rememberTodayInput"
        animate={isDisplay3 ? "hide" : "show"}
        variants={showHideState}>
        <div className="questionTitleButtons">
          <span>The memories from today that will capture it forever are...</span>
        <div className="editDelete">
          <FontAwesomeIcon
            className="editIcon"
            icon={faCircleCheck}
            onClick={()=> {
              setIsDisplay3(isDisplay3 => !isDisplay3);
              localStorage.setItem('rememberToday', rememberToday);
            }}/>
          <FontAwesomeIcon
              className="eraseIcon"
            icon={faEraser}
            onClick={()=> {
              localStorage.removeItem('rememberToday');
              setRememberToday("");
            }} />
        </div>
      </div>
        <textarea
        id="rememberTodayInput"
        wrap="soft"
        autoComplete="off"
        value={rememberToday}
        placeholder=""
        onChange={(e) => setRememberToday(e.target.value)}
        />
        </motion.div>

        <motion.div
          className="rememberTodayDisplay"
          animate={isDisplay3 ? "show" : "hide"}
          variants={showHideState}>
          <div className="questionTitleButtonsDisplay">
            <h5>The memories from today that will capture it forever are {localStorage.rememberToday}</h5>
          <div className="editDelete">
            <FontAwesomeIcon
              className="editIcon"
              icon={faPenToSquare}
              onClick={()=> {
                setIsDisplay3(isDisplay3 => !isDisplay3);
              }}/>
            <FontAwesomeIcon
                className="eraseIcon"
              icon={faEraser}
              onClick={()=> {
                localStorage.removeItem('rememberToday');
                  setRememberToday("");
              }} />
              <FontAwesomeIcon
                  className="questionIcon"
                icon={faQuestion}
                onClick={() => {
                  setVideoLink('4oGXepCXM6g');
                  setVideoDisplay(videoDisplay => !videoDisplay);
                }} />
              </div>
            </div>
          </motion.div>

    <hr className="dividingLine"/>
      <motion.div className="leaveBehindInput"
        animate={isDisplay4 ? "hide" : "show"}
        variants={showHideState}>
        <div className="questionTitleButtons">
          <span>The thoughts and feelings from today I would like to leave behind are...</span>
        <div className="editDelete">
          <FontAwesomeIcon
            className="editIcon"
            icon={faCircleCheck}
            onClick={()=> {
              setIsDisplay4(isDisplay4 => !isDisplay4);
              localStorage.setItem('leaveBehind', leaveBehind);
            }}/>
          <FontAwesomeIcon
              className="eraseIcon"
            icon={faEraser}
            onClick={()=> {
              localStorage.removeItem('leaveBehind');
              setLeaveBehind("");
            }} />
        </div>
      </div>
        <textarea
        id="rememberTodayInput"
        wrap="soft"
        autoComplete="off"
        value={leaveBehind}
        placeholder=""
        onChange={(e) => setLeaveBehind(e.target.value)}
        />
        </motion.div>

        <motion.div
          className="leaveBehindDisplay"
          animate={isDisplay4 ? "show" : "hide"}
          variants={showHideState}>
          <div className="questionTitleButtonsDisplay">
            <h5>The thoughts and feelings from today I would like to leave behind are {localStorage.leaveBehind}</h5>
          <div className="editDelete">
            <FontAwesomeIcon
              className="editIcon"
              icon={faPenToSquare}
              onClick={()=> {
                setIsDisplay4(isDisplay4 => !isDisplay4);
              }}/>
            <FontAwesomeIcon
                className="eraseIcon"
              icon={faEraser}
              onClick={()=> {
                localStorage.removeItem('leaveBehind');
                setLeaveBehind("");
              }} />
              <FontAwesomeIcon
                  className="questionIcon"
                icon={faQuestion}
                onClick={() => {
                  setVideoLink('4oGXepCXM6g');
                  setVideoDisplay(videoDisplay => !videoDisplay);
                }} />
              </div>
            </div>
          </motion.div>

    </div>
    </section>
    </main>
    </form>
  }
    </>
  );
}
