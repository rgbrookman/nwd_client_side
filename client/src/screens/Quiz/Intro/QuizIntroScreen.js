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
import './quizintro.css';

export default function QuizScreen() {
  const [titleDiv, setTitleDiv] = useState(true);
  const [kickOff, setKickOff] = useState(false);
  const [sceneSet, setSceneSet] = useState(false);
  const [threeParts, setThreeParts] = useState(false);

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
  <h1>The Art of Looking</h1>
  <span><strong>Helping You Speedily and Safely Turn Your Insights into Greater Joy & Growth</strong></span>
  <hr className="dividingLine" />
  <span className="clickAnywhere">Click anywhere to start</span>
</motion.div>

    <motion.div
      animate={ kickOff ? "show" : "hide"}
      variants={showHideGrid}
      className="quizDiv">
      <div className="leftCol">
        <div className="colTitle">
          <h3 className="quizHeaderWhite">Kicking Off</h3>
        </div>
          <br />
          <span>
            The <strong>Insight</strong> section of NWD is about giving anyone who wants it a completely different perspective on their own life.
            <br />
            <br />
            The view we get of life from our own eyes is phenomenal. It is key in our connection with other humans, great for studying details in our
            immediate surroundings and generally directly experiencing the glory of being alive.
            <br />
            <br />
            However, this very same view is poorly adapted to
            break down our behaviours and reliably turn the best and worst of what we do into greater joy and growth.
          </span>
          <br />
            <br />
          <hr className="dividingLine" />
          <br />
          <span>
            all of the sections that compose NoWastedDays are especially designed to make many different perspectives possible.
            In the <strong>Insight</strong> section, you will find a host of graphs and charts that take your <strong>Today</strong> diary data
            and allow you, with a bit of time and understanding, to transform your level of self-awareness and self-assurance.
            However, not a single iota of insight, ounce of possiblility or plane of perspective can be created by simply playing back
            the data in a few simple charts.
          <br />
          <br />
            To open the door to safe, significant insight and action, there are two big buckets that need filling up first (see diagram).</span>
          <br />
          <br />
          <strong className='emphasis'>‘The Art of Looking’</strong>
            <span> is the digital faucet designed to help any user fill both buckets to the brim whilst their own dataset is getting sufficiently full.
          <br />
          <br />
            The 'Art of Looking' encompasses my own personal experience from <s>700</s> over 800 days of NoWastedDays
            diary inputs to all of the key mental and practical pillars that build a firm foundation from which you can reliably
             and resiliently find a new perspective that transforms your life.</span>
    </div>
  <div className="rightCol">
  <div className="rightContent">
  <Container>
  <Row>
  <Col>
  <div className="quizHeaderDiv">
    <span className="colLabel1">The Data Bucket</span>
    <span className="colLabel2"><strong>Key Components</strong></span>
      <h1 className="quizHeaderGreen">The Right Amount of the Right Information:</h1>
      <div className="introExplainer">
        <p>Dataset truly representative of a problem to be solved</p>
          <hr className="dividingLine" />
        <p>Significant sample size covering a more than sufficient period of time</p>
          <hr className="dividingLine" />
        <p>Highly trusted data provider</p>
      </div>
  </div>
  </Col>
  <Col >
  <div className="quizHeaderDiv">
  <span className="colLabel1">The Observer Bucket</span>
  <span className="colLabel2"><strong>Key Components</strong></span>
  <h1 className="quizHeaderGreen">A Reader that is Ready to Read It:</h1>
  <div className="introExplainer">
  <p>Knows what they are looking at</p>
  <hr className="dividingLine" />
  <p>Keeps the key to all Context</p>
  <hr className="dividingLine" />
    <p>Explores in the Open Mode</p>
    <hr className="dividingLine" />
    <p>Carries Healthy Skepticism</p>
    <hr className="dividingLine" />
    <p>Holds on to Sufficient Optimism</p>
    <hr className="dividingLine" />
    <p>...and is alive in the present moment</p>
  </div>
  </div>
  </Col>
  </Row>

  </Container>
  <div className="hoverText">
  <span>Hover to reveal the things that make up each bucket</span>
    </div>
  </div>

  </div>
  <div className="buttonRow">
        <Button className="quizButton" onClick={()=> {
            setTitleDiv(titleDiv => true);
              setKickOff(kickOff => false);
        }}>Previous</Button>
    <Button className="quizButton" onClick={()=> {
        setKickOff(kickOff => false);
        setSceneSet(sceneSet => true);
    }}>Next</Button>
  </div>
</motion.div>

<motion.div

animate={ sceneSet ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Why?!</h4>
    </div>
          <br />
    <span>
      Ever since I started to get a grasp for web development and data,
      it has frustrated me to the core just how infrequently either are unconditionally applied to any of our lives.
    </span>
      <br />
      <br />
      <span>
      We feel the forces of data and technology endlessly in our culture; through our devices, in our news media, in our sporting competitions,
      within our jobs, schools studies; online, offline - everywhere!
    <br />
    <br />
    Yet for all the causes data and technology can be a slave or a servant to, there seems to be a huge lack of provisions that are entirely
    centered on helping any human being healthily learn more about themselves, <strong>at a cost they can control</strong>, and
    , in doing so, speedily and safely translate this greater self-awareness into the experience of more
    <br /><strong>joy and more growth each day.</strong></span>
      <br />
      <br />
      <span>
    This predicament has three principle causes:
    </span>
      <br />
      <br />
      <span>
      <strong>
    a) knowing what data it is most worthwhile to collect is hard </strong><i className="aside">(and data is leveraged most
    in spaces where what is most worth measuring is very easy to perceive)</i>
      <br />
      <br />
      <strong>
    b) knowing how and to what end to bring all that data together is even harder </strong><i className="aside">(i.e. what are we optimising for?
    happiness? resilience? joy? great conditioning? wisdom? wealth?)</i>
      <br />
      <br />
      <strong>
    c) being able to present it in a way that can systemically and safely create a positive change for most people is even harder still as
    the last thing anyone wants is iatrogenic effects </strong><i className="aside">(a word for when medical interventions actually make the patient more sick)</i>
    </span>
      <br />
      <br />
      <span>
    This is a situation that NWD is trying to resolve and, in time, why that is a worth doing will take up more space on the site.
    In the meantime, our vision is to support people unconditionally with being alive,
    and providing this platform on a pay as you can (PAYC) model is one of many ways we hope to realise that vision.
    </span>
      <br />
      <br />
      <span>
    In the present, however, lets turn our eyes to the <br /><strong className="emphasis">'Art of Looking'!</strong>
    </span>

</div>
<div className="rightCol">
<div className="rightContent">
<span><strong>Cool Image Explaining What I Am Talking About</strong></span>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setKickOff(kickOff => true);
setSceneSet(sceneSet => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
setSceneSet(sceneSet => false);
setThreeParts(threeParts => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ threeParts ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h3 className="quizHeaderWhite">Contents</h3>
    </div>
    <br />
       <h1 className="quizHeaderWhite">The 'Art of Looking' has...<br /><br /><strong className="emphasis">five key chapters</strong></h1>

</div>
<div className="rightCol">
<div className="rightContentContent">
<h2 className="quizHeaderGreen">Contents</h2>
<span>1.<strong className="boldHeader">Looking at your Charts 101:</strong></span>
<span className="subtitle">Quickly yet Completely Teaching the 4 Core Data Views</span>
<span>2.<strong className="boldHeader">Harnessing the Wave:</strong></span>
<span className="subtitle">How to Best Use a Dynamic Hidden Deep in your Data</span>
<span>3.<strong className="boldHeader">Making of a Mindset</strong></span>
<span className="subtitle">Why how you look at your data matters more than any other single thing.</span>
<span>4.<strong className="boldHeader">Making the Data Deeply Representative</strong></span>
<span className="subtitle">Sharing the 3 Keys to Top Quality Data</span>
<span>5.<strong className="boldHeader">Getting Value from Any Outcome</strong></span>
<span className="subtitle">The best way to break down any event (and its completely free!)</span>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setThreeParts(threeParts => false);
setSceneSet(sceneSet => true);
}}>Previous</Button>
<Button className="quizButton" href='/insight/quiz/feeling'>Next</Button>
</div>
</motion.div>

    </>
  );
}
