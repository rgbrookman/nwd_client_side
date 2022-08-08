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
import './quizrepresentative.css';

export default function QuizRepresentativeScreen() {
  const [titleDiv, setTitleDiv] = useState(true);
  const [kickOff, setKickOff] = useState(false);
  const [honesty, setHonesty] = useState(false);
  const [consistency, setConsistency] = useState(false);
  const [specificity, setSpecificity] = useState(false);

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
  <span>Making the Data Deeply Representative</span>
  <h1>Deeply Representative</h1>
  <span><strong>Guaranteeing You Top Quality Data</strong></span>
</motion.div>

<motion.div

animate={ kickOff ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Context</h4>
    </div>
    <br />
    <span>
As we explored in the opening of the 'Art of Looking', one of the key components of having the right information is being able to trust your data source,
and for the source to be full of data that is representative of the problem to be solved.
<br />
<br />
Obviously, the source of all the data on your NWD is <strong className="emphasis">you! :)</strong>
<br />
<br />
The question is then how we can ensure that the information you provide is of the most trustworthy, representative and valuable kind.
<br />
<br />
Here are 3 principles that are going to help us achieve just that.
</span>
<br />
<br />
<strong className="emphasis">Honesty</strong>
<br />
<br />
<strong className="emphasis">Specificity</strong>
<br />
<br />
<strong className="emphasis">Consistency</strong>
</div>
<div className="rightCol">
<div className="rightContent">
<p>Examples</p>

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setTitleDiv(titleDiv => true);
  setKickOff(kickOff = false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setKickOff(kickOff => false);
  setHonesty(honesty => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ honesty ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Honesty is the Best Policy</h4>
    </div>
<br />
<span>
Trust is the bedrock of a thriving civil society.
<br />
<br />
People can only act calmy and conscientiously if they know people will honour their commitments and speak openly and honestly to them, and adhere the codes - written and unwritten -
that perpetuate peace and co-operation.
<br />
<br />
Similarly, to get the efficiencies and opportunities that come with money, you have to trust that when you pay someone they will give you a product, and that the money is worth something.
<br />
<br />
The same is true with your entries.
<br />
<br />
Lay down your honest thoughts; the ones you trust that summarise what you felt and tried to do on any particularly day. This honesty, as in life generally, will pay you back
tenfold in calmness and confidence.
<br />
<br />
Don't hold something back to paint an a picture of the day as your diary entry was an instagram post; some curious highlight reel of your life.
<br />
<br />
Put your honest thoughts and feelings in, and reep the reward of better data and insight down the line.
</span>
</div>
<div className="rightCol">
<div className="rightContent">
<p>Ways of ensuring honesty</p>

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setTitleDiv(titleDiv => true);
  setHonesty(honesty => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setSpecificity(specificity => true);
  setHonesty(honesty => false);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ specificity ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Specificity</h4>
    </div>
    <br />
    <span>
      Specificity is like honesty in the sense that the most honest version of events is likely to include more details than less.
        <br />
        <br />
      However, it is important to single out specificity with some specificity as that little bit of extra detail each day will really tally up
      over time and contribute to a lot more not only data for insight.
        <br />
        <br />
      I find that when I have seen a signal and am looking through my diary as a result,
      the details on the page spark other memories from the day that I hadn't
      even written down. The days where I have been more specific with these details, the greater this memory spark power is.
      <br />
      <br />
      As we've mentioned many times in this course, being able to find an action or relationship that can be transformed courtesy of
      having this method of spotting signals and being able to delve through your written and unwritten contexts is a huge part of the power of NWD.
      <br />
      <br />
      As a result, the more context that springs to mind, the better placed you are to get to the most transformative decision; and this all starts with honesty and specificity.
    </span>
</div>
<div className="rightCol">
<div className="rightContent">
<p>Examples</p>

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setHonesty(honesty => true);
  setSpecificity(specificity => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setSpecificity(specificity => false);
  setConsistency(consistency => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ consistency ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Consistency</h4>
    </div>
<br />
    <span>
      One of the final points we mentioned in the upfront data bucket is over a 'more than sufficient period of time'.
        <br />
        <br />
      Doing your NWD inputs over an extended period is not only important as it will help you build lots of data.
      It is as important because it will give you the views of your habits that you are particularly interested in.
        <br />
        <br />
      How does my week look?
      <br />
      <br />
      How does a month look?
      <br />
      <br />
      How does this month differ from last month?
      <br />
      <br />
      This quarter from last quarter?
      <br />
      <br />
      This year from last year?
      <br />
      <br />
      This day this year from the same day last year?
      <br />
      <br />
      This ability to compare equivalent periods of time will give you extraordinary insights, and the only way to build it is this
      daily consistency; one day after the other of honest and specific inputs.
        </span>
</div>
<div className="rightCol">
<div className="rightContent">
<p>Examples</p>

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setSpecificity(specificity => true);
  setConsistency(consistency => false);
}}>Previous</Button>
<Button className="quizButton" href="/insight/quiz/real_quiz">Next</Button>
</div>
</motion.div>



    </>
  );
}
