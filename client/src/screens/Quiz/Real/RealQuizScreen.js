import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { updateProfile } from '../../../actions/dayActions';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import Loading from '../../../components/Loading/Loading';
import { ErrorMessage } from '../../../components/Error/ErrorMessage';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../NWD_Logo_White.png';
import realquiz from '../../../realquiz.gif';
import './realquiz.css';

export default function RealQuizScreen() {

  const [selected1, is1Selected]= useState(false);
  const [selected2, is2Selected]= useState(false);
  const [selected3, is3Selected]= useState(false);
  const [selected4, is4Selected]= useState(false);

  const [correctCounter, isCorrectCounter] = useState(0);

  const incrementCounter = () => {
    isCorrectCounter(prevCorrectCounter => prevCorrectCounter + 1);
  }

  const [rightAnswer, isRightAnswer]= useState(null);
  const [wrongAnswer, isWrongAnswer]= useState(null);

  const [titleDiv, setTitleDiv] = useState(true);
  const [kickOff, setKickOff] = useState(false);

  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);
  const [q6, setQ6] = useState(false);
  const [q7, setQ7] = useState(false);
  const [q8, setQ8] = useState(false);
  const [q9, setQ9] = useState(false);
  const [q10, setQ10] = useState(false);
  const [q11, setQ11] = useState(false);
  const [q12, setQ12] = useState(false);
  const [q13, setQ13] = useState(false);
  const [q14, setQ14] = useState(false);
  const [q15, setQ15] = useState(false);
  const [q16, setQ16] = useState(false);
  const [q17, setQ17] = useState(false);
  const [q18, setQ18] = useState(false);
  const [q19, setQ19] = useState(false);
  const [q20, setQ20] = useState(false);
  const [q21, setQ21] = useState(false);
  const [q22, setQ22] = useState(false);
  const [q23, setQ23] = useState(false);
  const [q24, setQ24] = useState(false);
  const [q25, setQ25] = useState(false);
  const [q26, setQ26] = useState(false);



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

  const selectedAnimation = {
    unselected: {
      backgroundColor: "#EBF4FA",
      margin: '8px 12px 8px 12px',
      padding: "6px 10px 6px 10px",
      borderRadius: "10px",
      fontSize: "0.8em",
      color: "#000",
    },
    selected: {
      backgroundColor: "green",
      margin: '8px 12px 8px 12px',
      padding: "6px 10px 6px 10px",
      borderRadius: "10px",
      fontSize: "0.8em",
      color: "#fff",
    },
  }

  const rightAnswerAnimation = {
    hidden: {
      border: "none",
    },
    wrong: {
      border: "none",
    },
    right: {
border: "2px solid green",
    },
  }

  const wrongAnswerAnimation = {
    hidden: {
      border: "none",
    },
    wrong: {
      color: "#fff",
    },
    right: {
color: "red",
    },
  }

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
  <span>Testing your Knowledge:</span>
  <h1>The Real Quiz</h1>
  <span><strong>Click Anywhere to Start</strong></span>
</motion.div>

<motion.div
animate={ kickOff ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Ready?</h4>
    </div>
    <br />
    <span>
      Time to put what you've learned to the test!
    </span>
<br />
<br />
<span>
  You are going to get quizzed on each of the sections you've been learning about.
</span>
</div>
<div className="rightCol">
<div className="rightContent">
<img src={realquiz} width="65%" />

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setTitleDiv(titleDiv => true);
  setKickOff(kickOff => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setKickOff(kickOff => false);
  setQ1(q1 => true);
}}>Let's Go!</Button>
</div>
</motion.div>


<motion.div
animate={ q1 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">What is your feeling score?</h1>
  </motion.div>
  <div className="optionContainer">
    <motion.div
      className="answerCheck"
      animate = { rightAnswer ? "right" : "wrong"}
      variants={rightAnswerAnimation}>

  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Simply your own numerical assessment of how you felt on average across any particular day since your inputs earlier that respective morning.</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>A damning indictment on your current existence and worth as a human being.</span>
  </motion.div>


  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>The thing that elevates you above all other people and reveals your pre-destined greatness and divinity.</span>
  </motion.div>


  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>A pile of old shit.</span>
  </motion.div>

  </div>

{ selected1 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setKickOff(kickOff => true);
  setQ1(q1 => false);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setKickOff(kickOff => true);
    setQ1(q1 => false);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ1(q1 => false);
  setQ2(q2 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>












<motion.div
animate={ q2 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">When turn into a metric or a graph, what is the feeling score then?</h1>
  </motion.div>
  <div className="optionContainer">

    <motion.div
      className="answerCheck"
      animate = { rightAnswer ? "right" : "wrong"}
      variants={rightAnswerAnimation}>
  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>A provider of objective, unemotional signals in the present</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>The be all and end all of everything in the moment you are looking at it; if it is up, you are sky high; if it is down, you are crushed.</span>
  </motion.div>



  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>The thing that elevates you above all other people and reveals your pre-destined greatness and divinity.</span>
  </motion.div>



  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>A pile of old shit.</span>
  </motion.div>


  </div>

{ selected1 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ1(q1 => true);
  setQ2(q2 => false);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ1(q1 => true);
    setQ2(q2 => false);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ2(q2 => false);
  setQ3(q3 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>












<motion.div
animate={ q3 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">Why do we use a 0 - 5 scale instead of a 0 - 10? </h1>
    </motion.div>

  <div className="optionContainer">

    <motion.div
      className="answerCheck"
      animate = { rightAnswer ? "right" : "wrong"}
      variants={rightAnswerAnimation}>
  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Because the less familiar scale encourages people to think a bit more and provide a more indicative result</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Because I couldn’t be bothered to code all the way up to 10</span>
  </motion.div>



  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>The thing that elevates you above all other people and reveals your pre-destined greatness and divinity.</span>
  </motion.div>



  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>A pile of old shit.</span>
  </motion.div>


  </div>

{ selected1 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ1(q1=> true);
  setQ2(q2 => false);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ1(q1=> true);
    setQ2(q2 => false);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ3(q3 => false);
  setQ4(q4=> true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>












<motion.div
animate={ q4 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
    className="answerCheck"
    animate = { wrongAnswer ? "right" : "wrong"}
    variants={wrongAnswerAnimation}>
      <h1 className="question">
        What do we call it when bringing numbers together hides information?
      </h1>
  </motion.div>
  <div className="optionContainer">


  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Trip Hop</span>
  </motion.div>



  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Signal</span>
  </motion.div>


  <motion.div
  className="answerCheck"
  animate = { rightAnswer ? "right" : "wrong"}
  variants={rightAnswerAnimation}>
  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Noise</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Silence</span>
  </motion.div>


  </div>

{ selected3 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected3 ?
<Button className="quizButton" onClick={()=> {
  setQ4(q4 => false);
  setQ3(q3 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ4(q4 => false);
    setQ3(q3 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected3 ?
<Button className="quizButton" onClick={()=> {
  setQ4(q4 => false);
  setQ5(q5 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>













<motion.div
animate={ q5 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
    className="answerCheck"
    animate = { wrongAnswer ? "right" : "wrong"}
    variants={wrongAnswerAnimation}>
  <h1 className="question">What do we call any metric, change in a graph or combination of the above?</h1>
  </motion.div>

  <div className="optionContainer">
  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Trip Hop</span>
  </motion.div>


  <motion.div
  className="answerCheck"
  animate = { rightAnswer ? "right" : "wrong"}
  variants={rightAnswerAnimation}>
  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Signal</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Noise</span>
  </motion.div>



  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Silence</span>
  </motion.div>


  </div>

{ selected2 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected2 ?
<Button className="quizButton" onClick={()=> {
  setQ5(q5 => false);
  setQ4(q4 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ5(q5 => false);
    setQ4(q4 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected2 ?
<Button className="quizButton" onClick={()=> {
  setQ5(q5 => false);
  setQ6(q6 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q6 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
    className="answerCheck"
    animate = { wrongAnswer ? "right" : "wrong"}
    variants={wrongAnswerAnimation}>
  <h1 className="question">
    Which parts of your Today diary may provide insight into how such a day can be emulated and improved upon in the future?
  </h1>
  </motion.div>
  <div className="optionContainer">


  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Evening Questions</span>
  </motion.div>



  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Your Moments</span>
  </motion.div>


  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Morning Questions</span>
  </motion.div>


  <motion.div
  className="answerCheck"
  animate = { rightAnswer ? "right" : "wrong"}
  variants={rightAnswerAnimation}>
  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>All of the Above, and the Week & Year Pages</span>
  </motion.div>
  </motion.div>

  </div>

{ selected4 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected4 ?
<Button className="quizButton" onClick={()=> {
  setQ6(q6 => false);
  setQ5(q5 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ6(q6 => false);
    setQ5(q5 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected4 ?
<Button className="quizButton" onClick={()=> {
  setQ6(q6 => false);
  setQ7(q7 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ6(q6 => false);
  setQ7(q7 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q7 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">What is your total moment score?</h1>
  </motion.div>

  <div className="optionContainer">


  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>The total moments you momented in any given moment</span>
  </motion.div>


  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>The average across the different moments you attempted </span>
  </motion.div>


  <motion.div
    className="answerCheck"
    animate = { rightAnswer ? "right" : "wrong"}
    variants={rightAnswerAnimation}>
  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>The value of all your 0 - 10 scores added up</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>A most momentous of all moments</span>
  </motion.div>


  </div>

{ selected3 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected3 ?
<Button className="quizButton" onClick={()=> {
  setQ7(q7 => false);
  setQ6(q6 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ7(q7 => false);
    setQ6(q6 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected3 ?
<Button className="quizButton" onClick={()=> {
  setQ7(q7 => false);
  setQ8(q8 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ7(q7 => false);
  setQ8(q8 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q8 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">What is your attempted moment score ?</h1>
  </motion.div>
  <div className="optionContainer">

    <motion.div
      className="answerCheck"
      animate = { rightAnswer ? "right" : "wrong"}
      variants={rightAnswerAnimation}>
  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>A count of the moments you listed on any given day</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>The average across the different moments you attempted </span>
  </motion.div>


  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>The total attempts you made at life that day</span>
  </motion.div>


  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>The total attempts you made at life that day</span>
  </motion.div>

  </div>

{ selected1 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ8(q8 => false);
  setQ7(q7 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ8(q8 => false);
    setQ7(q7 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ8(q8 => false);
  setQ9(q9 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ8(q8 => false);
  setQ9(q9 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q9 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
    className="answerCheck"
    animate = { wrongAnswer ? "right" : "wrong"}
    variants={wrongAnswerAnimation}>
  <h1 className="question">What is your mr%</h1>
</motion.div>
  <div className="optionContainer">



  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>The average across the different moments you attempted </span>
  </motion.div>


  <motion.div
    className="answerCheck"
    animate = { rightAnswer ? "right" : "wrong"}
    variants={rightAnswerAnimation}>
  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>A count of the moments you listed on any given day2</span>
  </motion.div>
  </motion.div>

  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>The total attempts you made at life that day</span>
  </motion.div>


  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Answer #4</span>
  </motion.div>


  </div>

{ selected2 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected2 ?
<Button className="quizButton" onClick={()=> {
  setQ9(q9 => false);
  setQ8(q8 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ9(q9 => false);
    setQ8(q8 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected2 ?
<Button className="quizButton" onClick={()=> {
  setQ9(q9 => false);
  setQ10(q10 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ9(q9 => false);
  setQ10(q10 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>



<motion.div
animate={ q10 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">When turn into a metric or a graph, what are any of the moment scores?</h1>
  </motion.div>
  <div className="optionContainer">


  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #1</span>
  </motion.div>



  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>The be all and end all of everything in the moment you are looking at it; if it is up, you are sky high; if it is down, you are crushed.2</span>
  </motion.div>


  <motion.div
    className="answerCheck"
    animate = { rightAnswer ? "right" : "wrong"}
    variants={rightAnswerAnimation}>
  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>A provider of objective, emotional signals in the present</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Answer #4</span>
  </motion.div>

  </div>

{ selected3 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected3 ?
<Button className="quizButton" onClick={()=> {
  setQ10(q10 => false);
  setQ9(q9 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ10(q10 => false);
    setQ9(q9 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected3 ?
<Button className="quizButton" onClick={()=> {
  setQ10(q10 => false);
  setQ11(q11 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ10(q10 => false);
  setQ11(q11 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>










<motion.div
animate={ q11 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">Which of the following levels of balance is likely to draw out the most joy and growth for the most people?</h1>
    </motion.div>

  <div className="optionContainer">

  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>All Activity</span>
  </motion.div>



  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>All Recovery</span>
  </motion.div>



  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>None of Either</span>
  </motion.div>


  <motion.div
    className="answerCheck"
    animate = { rightAnswer ? "right" : "wrong"}
    variants={rightAnswerAnimation}>
  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>A Balance of Both</span>
  </motion.div>
  </motion.div>

  </div>

{ selected4 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected4 ?
<Button className="quizButton" onClick={()=> {
  setQ11(q11 => false);
  setQ10(q10 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ11(q11 => false);
    setQ10(q10 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected4 ?
<Button className="quizButton" onClick={()=> {
  setQ11(q11 => false);
  setQ12(q12 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ11(q11 => false);
  setQ12(q12 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>










<motion.div
animate={ q12 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">Is failing to do the things you have said you should do always a bad thing?</h1>
    </motion.div>

  <div className="optionContainer">
    <motion.div
      className="answerCheck"
      animate = { rightAnswer ? "right" : "wrong"}
      variants={rightAnswerAnimation}>

  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Yes, I am a piece of shit</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>No, because you may find that the thing you didn’t do because of it was something that actually you should be optimising life around</span>
  </motion.div>


  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #3</span>
  </motion.div>


  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Answer #4</span>
  </motion.div>


  </div>

{ selected1 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ12(q12 => false);
  setQ11(q11 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ12(q12 => false);
    setQ11(q11 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ12(q12 => false);
  setQ13(q13 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ12(q12 => false);
  setQ13(q13 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>












<motion.div
animate={ q13 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">What is your Wave?</h1>
    </motion.div>

  <div className="optionContainer">
    <motion.div
      className="answerCheck"
      animate = { rightAnswer ? "right" : "wrong"}
      variants={rightAnswerAnimation}>

  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>- A way of monitoring the things you tried to do so you can climb to new levels of condition and survive the inevitable struggle to the next</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #2</span>
  </motion.div>



  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #3</span>
  </motion.div>



  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Answer #4</span>
  </motion.div>


  </div>

{ selected1 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ13(q13 => false);
  setQ12(q12 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ13(q13 => false);
    setQ12(q12 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ13(q13 => false);
  setQ14(q14 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ13(q13 => false);
  setQ14(q14 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q14 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">

  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">Why is the right head space/mindset helpful?</h1>
  </motion.div>

  <div className="optionContainer">


  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Tolerate Discomfort</span>
  </motion.div>



  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Ask Better Questions</span>
  </motion.div>


  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Stay Positive</span>
  </motion.div>


  <motion.div
    className="answerCheck"
    animate = { rightAnswer ? "right" : "wrong"}
    variants={rightAnswerAnimation}>
  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>All of the Above</span>
  </motion.div>
  </motion.div>

  </div>

{ selected4 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected4 ?
<Button className="quizButton" onClick={()=> {
  setQ14(q14 => false);
  setQ13(q13 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ14(q14 => false);
    setQ13(q13 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected4 ?
<Button className="quizButton" onClick={()=> {
  setQ14(q14 => false);
  setQ15(q15 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ14(q14 => false);
  setQ15(q15 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q15 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">

  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">Spot the right combination that creates the Open Mode</h1>
  </motion.div>

  <div className="optionContainer">
  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Time & Space > Time > Creativity</span>
  </motion.div>



  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Time > Space > Continuum </span>
  </motion.div>


  <motion.div
    className="answerCheck"
    animate = { rightAnswer ? "right" : "wrong"}
    variants={rightAnswerAnimation}>
  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Time & Space > Time > Confidence</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Answer #4</span>
  </motion.div>


  </div>

{ selected3 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected3 ?
<Button className="quizButton" onClick={()=> {
  setQ15(q15 => false);
  setQ14(q14 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ15(q15 => false);
    setQ14(q14 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected3 ?
<Button className="quizButton" onClick={()=> {
  setQ15(q15 => false);
  setQ16(q16 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ15(q15 => false);
  setQ16(q16 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q16 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">Why be Scepticism?</h1>
    </motion.div>

  <div className="optionContainer">

    <motion.div
      className="answerCheck"
      animate = { rightAnswer ? "right" : "wrong"}
      variants={rightAnswerAnimation}>
  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Because it will help get to a deeper truth</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #2</span>
  </motion.div>



  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #3</span>
  </motion.div>



  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Answer #4</span>
  </motion.div>


  </div>

{ selected1 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ16(q16 => false);
  setQ15(q15 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ16(q16 => false);
    setQ15(q15 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ16(q16 => false);
  setQ17(q17 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ16(q16 => false);
  setQ17(q17 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q17 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">If you can get there, what is powerful about the Present Moment?</h1>
  </motion.div>
  <div className="optionContainer">


  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #1</span>
  </motion.div>



  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #2</span>
  </motion.div>



  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #3</span>
  </motion.div>


  <motion.div
    className="answerCheck"
    animate = { rightAnswer ? "right" : "wrong"}
    variants={rightAnswerAnimation}>
  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>All of the Above</span>
  </motion.div>
  </motion.div>

  </div>

{ selected4 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected4 ?
<Button className="quizButton" onClick={()=> {
  setQ17(q17 => false);
  setQ16(q16 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ17(q17 => false);
    setQ16(q16 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected4 ?
<Button className="quizButton" onClick={()=> {
  setQ17(q17 => false);
  setQ18(q18 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ17(q17 => false);
  setQ18(q18 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q18 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">Why is not naive and shallow to be Optimistic?</h1>
    </motion.div>

  <div className="optionContainer">

    <motion.div
      className="answerCheck"
      animate = { rightAnswer ? "right" : "wrong"}
      variants={rightAnswerAnimation}>
  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Right Answer</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #2</span>
  </motion.div>


  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #3</span>
  </motion.div>



  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Answer #4</span>
  </motion.div>


  </div>

{ selected1 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ18(q18 => false);
  setQ17(q17 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ18(q18 => false);
    setQ17(q17 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ18(q18 => false);
  setQ19(q19 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ18(q18 => false);
  setQ19(q19 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q19 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">What is the primary value of writing down the 'Positive & In Your Control'?</h1>
  </motion.div>

  <div className="optionContainer">

    <motion.div
      className="answerCheck"
      animate = { rightAnswer ? "right" : "wrong"}
      variants={rightAnswerAnimation}>
  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Consolidate Confidence</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Give Gratitude</span>
  </motion.div>



  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Constructively Comment</span>
  </motion.div>



  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Generate Forgiveness</span>
  </motion.div>


  </div>

{ selected1 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ19(q19 => false);
  setQ18(q18 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ19(q19 => false);
    setQ18(q18 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ19(q19 => false);
  setQ20(q20 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ19(q19 => false);
  setQ20(q20 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q20 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">What is the primary value of writing down the 'Positive & Out of Your Control'?</h1>
  </motion.div>

  <div className="optionContainer">


  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Consolidate Confidence</span>
  </motion.div>


  <motion.div
    className="answerCheck"
    animate = { rightAnswer ? "right" : "wrong"}
    variants={rightAnswerAnimation}>
  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Give Gratitude</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Constructively Comment</span>
  </motion.div>



  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Generate Forgiveness</span>
  </motion.div>


  </div>

{ selected2 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected2 ?
<Button className="quizButton" onClick={()=> {
  setQ20(q20 => false);
  setQ19(q19 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ20(q20 => false);
    setQ19(q19 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected2 ?
<Button className="quizButton" onClick={()=> {
  setQ20(q20 => false);
  setQ21(q21 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ20(q20 => false);
  setQ21(q21 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q21 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">What is the primary value of writing down the 'Negative & In Your Control'?</h1>
  </motion.div>

  <div className="optionContainer">


  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Consolidate Confidence</span>
  </motion.div>



  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Give Gratitude</span>
  </motion.div>


  <motion.div
    className="answerCheck"
    animate = { rightAnswer ? "right" : "wrong"}
    variants={rightAnswerAnimation}>
  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Constructively Comment</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Generate Forgiveness</span>
  </motion.div>


  </div>

{ selected3 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected3 ?
<Button className="quizButton" onClick={()=> {
  setQ21(q21 => false);
  setQ20(q20 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ21(q21 => false);
    setQ20(q20 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected3 ?
<Button className="quizButton" onClick={()=> {
  setQ21(q21 => false);
  setQ22(q22 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ21(q21 => false);
  setQ22(q22 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q22 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">What is the primary value of writing down the 'Negative & Out of Your Control'?</h1>
  </motion.div>

  <div className="optionContainer">


  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Consolidate Confidence</span>
  </motion.div>



  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Give Gratitude</span>
  </motion.div>



  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Constructively Comment</span>
  </motion.div>


  <motion.div
    className="answerCheck"
    animate = { rightAnswer ? "right" : "wrong"}
    variants={rightAnswerAnimation}>
  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Generate Forgiveness</span>
  </motion.div>
  </motion.div>

  </div>

{ selected4 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected4 ?
<Button className="quizButton" onClick={()=> {
  setQ22(q22 => false);
  setQ21(q21 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ22(q22 => false);
    setQ21(q21 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected4 ?
<Button className="quizButton" onClick={()=> {
  setQ22(q22 => false);
  setQ23(q23 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ22(q22 => false);
  setQ23(q23 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q23 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <h1 className="question">What are the 3 components of the best data?</h1>
  </motion.div>
  <div className="optionContainer">
    <motion.div
      className="answerCheck"
      animate = { rightAnswer ? "right" : "wrong"}
      variants={rightAnswerAnimation}>

  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Honesty > Specificity > Consistency</span>
  </motion.div>
  </motion.div>


  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Tequila > Lemon > Salt</span>
  </motion.div>


  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Tea > Milk > Sugar</span>
  </motion.div>


  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Honesty > Specificity > Creativity</span>
  </motion.div>


  </div>

{ selected1 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => false);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
        isWrongAnswer(wrongAnswer => true);
      setTimeout(()=>{
            isWrongAnswer(wrongAnswer => false);
      }, 750);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ23(q23 => false);
  setQ22(q22 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ23(q23 => false);
    setQ22(q22 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected1 ?
<Button className="quizButton" href="/insight/quiz/real_quiz/end">Next Question</Button>
:
<Button className="quizButton" href="/insight/quiz/real_quiz/end">Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q24 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <h1 className="question">Question 24 +{correctCounter}</h1>

  <div className="optionContainer">
    <motion.div
      className="answerCheck"
      animate = { rightAnswer ? "right" : "wrong"}
      variants={rightAnswerAnimation}>

  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff", cursor: "pointer"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #1</span>
  </motion.div>
  </motion.div>

  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #2</span>
  </motion.div>
  </motion.div>

  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #3</span>
  </motion.div>
  </motion.div>

  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Answer #4</span>
  </motion.div>
  </motion.div>

  </div>

{ selected1 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => true);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
      isWrongAnswer(wrongAnswer => true);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ24(q24 => false);
  setQ23(q23 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ24(q24 => false);
    setQ23(q23 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ24(q24 => false);
  setQ25(q25 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ24(q24 => false);
  setQ25(q25 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>











<motion.div
animate={ q25 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">

  <div className="questionContainer">
  <h1 className="question">Question 25 +{correctCounter}</h1>

  <div className="optionContainer">
    <motion.div
      className="answerCheck"
      animate = { rightAnswer ? "right" : "wrong"}
      variants={rightAnswerAnimation}>

  <motion.div
  className="optionOne option"
  animate={ selected1 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => true);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #1</span>
  </motion.div>
  </motion.div>

  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <motion.div
  className="optionTwo option"
  animate={ selected2 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => true);
    is3Selected(selected2 => false);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #2</span>
  </motion.div>
  </motion.div>

  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <motion.div
  className="optionThree option"
  animate={ selected3 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => true);
    is4Selected(selected2 => false);
  }}>
  <span>Answer #3</span>
  </motion.div>
  </motion.div>

  <motion.div
  className="answerCheck"
  animate = { wrongAnswer ? "right" : "wrong"}
  variants={wrongAnswerAnimation}>
  <motion.div
  className="optionFour option"
  animate={ selected4 ? "selected": "unselected"}
  variants = {selectedAnimation}
  whileHover ={{backgroundColor: "green", color: "#fff"}}
  onClick={()=> {
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected2 => false);
    is4Selected(selected2 => true);
  }}>
  <span>Answer #4</span>
  </motion.div>
  </motion.div>

  </div>

{ selected1 ?
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => true);
      isWrongAnswer(wrongAnswer => true);
    }}>
  Check Answer</Button>
  :
  <Button
    className="checkAnswerButton" onClick={()=>{
      isRightAnswer(rightAnswer => false);
      isWrongAnswer(wrongAnswer => true);
    }}>
  Check Answer</Button>
}

</div>


<div className="buttonRow">
{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ25(q25 => false);
  setQ24(q24 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Previous</Button>
  :
  <Button className="quizButton" onClick={()=> {
    setQ25(q25 => false);
    setQ24(q24 => true);
    isRightAnswer(rightAnswer => null);
    isWrongAnswer(rightAnswer => null);
    is1Selected(selected1 => false);
    is2Selected(selected2 => false);
    is3Selected(selected3 => false);
    is4Selected(selected4 => false);
  }}>Previous</Button>
}


{ selected1 ?
<Button className="quizButton" onClick={()=> {
  setQ25(q25 => false);
  setQ26(q26 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  incrementCounter();
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button>
:
<Button className="quizButton" onClick={()=> {
  setQ25(q25 => false);
  setQ26(q26 => true);
  isRightAnswer(rightAnswer => null);
  isWrongAnswer(rightAnswer => null);
  is1Selected(selected1 => false);
  is2Selected(selected2 => false);
  is3Selected(selected3 => false);
  is4Selected(selected4 => false);
}}>Next Question</Button> }

</div>
</motion.div>


    </>
  );
}
