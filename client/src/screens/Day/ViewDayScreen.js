import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateDayAction, listDays } from '../../actions/dayActions';
import { Card, Button } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import PageLoading from '../../components/Loading/PageLoading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser, faCircleCheck, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import axios from "axios";
import Header from "../../components/Header/Header";
import PropagateLoader from "react-spinners/PropagateLoader";
import './day.css';

export default function ViewDayScreen({ history }) {

// Form State
const [startScore, setStartScore] = useState();
const [logDate, setLogDate] = useState();
const [thankYou, setThankYou] = useState();
const [selfLess, setSelfLess] = useState();
const [mindBody, setMindBody] = useState();
const [momentOne, setMomentOne] = useState();
const [momentOneScore, setMomentOneScore] = useState();
const [momentTwo, setMomentTwo] = useState();
const [momentTwoScore, setMomentTwoScore] = useState();
const [momentThree, setMomentThree] = useState();
const [momentThreeScore, setMomentThreeScore] = useState();
const [momentFour, setMomentFour] = useState();
const [momentFourScore, setMomentFourScore] = useState();
const [momentFive, setMomentFive] = useState();
const [momentFiveScore, setMomentFiveScore] = useState();
const [rememberToday, setRememberToday] = useState();
const [leaveBehind, setLeaveBehind] = useState();
const [endScore, setEndScore] = useState();

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

const [loadingAnimation, setLoadingAnimation] = useState(false);

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

const valueState = {
  hide: {
    display: "none",
  },
  show: {
    display: "block",
  },
};

const showHideMomentState = {
  hide: {
    display: "none",
  },
  show: {
    display: "flex",
  },
}

const dispatch = useDispatch();
const navigate = useNavigate();
  let { id } = useParams();

const userLogin = useSelector((state) => state.userLogin);
const { userInfo } = userLogin;

const dayList = useSelector((state) => state.dayList); //
const { loading, error, days } = dayList;

const dayUpdate = useSelector((state) => state.dayUpdate);
const { success: successUpdate } = dayUpdate;

useEffect(() => {
  dispatch(listDays());
}, [dispatch, userInfo, history]);

const resetHandler = () => {
  setLogDate();
  setStartScore(0);
  setThankYou('');
  setSelfLess('');
  setMindBody('');
  setMomentOne('');
  setMomentOneScore(null);
  setMomentTwo('');
  setMomentTwoScore(null);
  setMomentThree('');
  setMomentThreeScore(null);
  setMomentFour('');
  setMomentFourScore(null);
  setMomentFive('');
  setMomentFiveScore(null);
  setRememberToday('');
  setLeaveBehind('');
  setEndScore(0);
};

useEffect(() => {

  const fetching = async () => {
    try {
      const { data } = await axios.get(`https://nwd22-webapp.herokuapp.com/api/days/today/${id}`);
      setLogDate(data.logDate);
      setStartScore(data.startScore);
      setThankYou(data.thankYou);
      setSelfLess(data.selfLess);
      setMindBody(data.mindBody);
      setMomentOne(data.momentOne);
      setMomentOneScore(data.momentOneScore);
      setMomentTwo(data.momentTwo);
      setMomentTwoScore(data.momentTwoScore);
      setMomentThree(data.momentThree);
      setMomentThreeScore(data.momentThreeScore);
      setMomentFour(data.momentFour);
      setMomentFourScore(data.momentFourScore);
      setMomentFive(data.momentFive);
      setMomentFiveScore(data.momentFiveScore);
      setRememberToday(data.rememberToday);
      setLeaveBehind(data.leaveBehind);
      setEndScore(data.endScore);
} catch(error) {
  console.log(error);
}
    }
  fetching();
}, [id]);

const updateHandler = (e) => {
 e.preventDefault();
 dispatch(updateDayAction(id,
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
      endScore));

        resetHandler();
        window.location.reload();

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
        { pageLoading && !days ?
          <div className="pageLoading">
            <PropagateLoader color={"#fff"} size={30} /></div> :
          <form onSubmit={updateHandler}>

<main className="dayScreenMain">
<div className="topRow">
<div className="topRowLeft">
<input
type="date"
value={logDate}
onChange={(e) => setLogDate(e.target.value)}
required
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
  Tweak Day
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
              }}/>
            <FontAwesomeIcon
                className="eraseIcon"
              icon={faEraser}
              onClick={() => {
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
              <h5>Today, I would like to say thank you to {thankYou}</h5>
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
          }}/>
        <FontAwesomeIcon
            className="eraseIcon"
          icon={faEraser}
          onClick={()=> {
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
          <h5>I am priming myself for self-less exploration today by {selfLess}</h5>
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
              setSelfLess('');
            }} />
            <FontAwesomeIcon
                className="questionIcon"
              icon={faQuestion}
              onClick={() => {
                setVideoLink('TDBQ3qMxpOk');
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
          }}/>
        <FontAwesomeIcon
            className="eraseIcon"
          icon={faEraser}
          onClick={()=> {
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
          <h5>I am pleased to live in my mind and body today because {mindBody}</h5>
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
              setMindBody('');
            }} />
            <FontAwesomeIcon
                className="questionIcon"
              icon={faQuestion}
              onClick={() => {
                setVideoLink('');
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
      {momentOneScore == 0 ? <h5>Moment One is {momentOne}</h5> :   <h5>Moment One is {momentOne} - {momentOneScore}/10</h5>}

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
            setMomentOne('');
          }} />
          <FontAwesomeIcon
              className="questionIcon"
            icon={faQuestion}
            onClick={() => {
              setVideoLink('');
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
              setIsDisplay5(isDisplay5 => !isDisplay5);
            }} />
          <FontAwesomeIcon
    className="eraseIcon"
          icon={faEraser}
          onClick={() => {
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
    {momentTwoScore == 0 ? <h5>Moment Two is {momentTwo}</h5> :   <h5>Moment Two is {momentTwo} - {momentTwoScore}/10</h5>}
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
        setMomentTwo("");
      }} />
      <FontAwesomeIcon
          className="questionIcon"
        icon={faQuestion}
        onClick={() => {
          setVideoLink('');
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
              setIsDisplay6(isDisplay6 => !isDisplay6);
        }}
         />
      <FontAwesomeIcon
className="eraseIcon"
      icon={faEraser}
      onClick={()=> {
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
    {momentThreeScore == 0 ? <h5>Moment Three is {momentThree}</h5> :   <h5>Moment Three is {momentThree} - {momentThreeScore}/10</h5>}
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
        setMomentThree("");
      }} />
      <FontAwesomeIcon
          className="questionIcon"
        icon={faQuestion}
        onClick={() => {
          setVideoLink('');
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
          setIsDisplay7(isDisplay7 => !isDisplay7);
        }} />
      <FontAwesomeIcon
className="eraseIcon"
      icon={faEraser}
      onClick={()=> {
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
    {momentFourScore == 0 ? <h5>Moment Four is {momentFour}</h5> :   <h5>Moment Four is {momentFour} - {momentFourScore}/10</h5>}
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
        setMomentFour("");
      }} />
      <FontAwesomeIcon
          className="questionIcon"
        icon={faQuestion}
        onClick={() => {
          setVideoLink('');
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
          setIsDisplay8(isDisplay8 => !isDisplay8);
        }} />
      <FontAwesomeIcon
className="eraseIcon"
      icon={faEraser}
      onClick={()=> {
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
    {momentFiveScore == 0 ? <h5>Moment Five is {momentFive}</h5> :   <h5>Moment Five is {momentFive} - {momentFiveScore}/10</h5>}
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
        setMomentFive("");
      }} />
      <FontAwesomeIcon
          className="questionIcon"
        icon={faQuestion}
        onClick={() => {
          setVideoLink('');
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
          setIsDisplay9(isDisplay9 => !isDisplay9);
        }} />
      <FontAwesomeIcon
className="eraseIcon"
      icon={faEraser}
      onClick={()=> {
        setMomentFive("");
      }}  />
      </div>

          </motion.div>
</motion.div>



<div className="afterScoreContainer">
      <div className="beforeEndScoreWhat">
        <div className="questionTitle">
          <span>After the day described above, I felt...</span>
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
            }}/>
          <FontAwesomeIcon
              className="eraseIcon"
            icon={faEraser}
            onClick={()=> {
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
            <h5>The memories from today that will capture it forever are {rememberToday}</h5>
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
                  setRememberToday("");
              }} />
              <FontAwesomeIcon
                  className="questionIcon"
                icon={faQuestion}
                onClick={() => {
                  setVideoLink('');
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
            }}/>
          <FontAwesomeIcon
              className="eraseIcon"
            icon={faEraser}
            onClick={()=> {
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
            <h5>The thoughts and feelings from today I would like to leave behind are {leaveBehind}</h5>
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
                setLeaveBehind("");
              }} />
              <FontAwesomeIcon
                  className="questionIcon"
                icon={faQuestion}
                onClick={() => {
                  setVideoLink('');
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
