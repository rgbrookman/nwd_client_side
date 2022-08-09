import React, { useState, useEffect } from 'react';
import './about.css';
import { motion, AnimatePresence } from "framer-motion";
import { Container } from 'react-bootstrap';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


function AboutScreen() {
  const [title, setTitle] = useState('Life: What is it really?');
  const [headerQuestion, setheaderQuestion] = useState();

  const [fortuneAnswer, setFortuneAnswer] = useState(false);
  const [difficultAnswer, setDifficultAnswer] = useState(false);

  const [missionContainer, setMissionContainer] = useState(false);

  const [fortCounter, setFortCounter] = useState(0);
  const [diffCounter, setDiffCounter] = useState(0);
  const [niceanswer, setNiceAnswer] = useState('');
  const [toughanswer, setToughAnswer] = useState('');

  const [clickCount, setClickCount] = useState(0);


  const headerState = {
    hidden: {
      opacity: 0,
    },
    active: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
    exit: {
      opacity: 1,
    },
  }

  const buttonState = {
    hidden: {
      opacity: 0,
      scale: 0.1,

    },
  open: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    }
  },
  closed: {
    opacity: 0,

  },
};

const hiddenDivState = {
  hidden: {
    opacity: 0,
    scale: 0.1,
    zIndex: -5,
  },
open: {
  opacity: 1,
  scale: 1,
  zIndex: 5,
  transition: {
    duration: 1,
    ease: "easeInOut",
  }
},
closed: {
  opacity: 0,
},
};

const hiddenMissionState = {
  hidden: {
    opacity: 0,
    scale: 0.1,
    zIndex: -5,
  },
open: {
  opacity: 1,
  scale: 1,
  zIndex: 5,
  transition: {
    duration: 2,
    delay: 0.5,
    ease: "easeInOut",
    when: "beforeChildren",
    staggerChildren: 1,
  }
},
closed: {
  opacity: 0,
},
};


  return (
    <>
    <Header />
    <Container fluid className="aboutScreenMain">


    <div className="itemA">
    <motion.h1
    className="aboutHeader"
    initial="hidden"
    animate="active"
    variants={headerState}
    >
    {title}
    </motion.h1>
    <motion.span
    className="indicateAction"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 1 }}
    >Click to cast your answer below.</motion.span>
    </div>


    <motion.div
    className="fortuneDiv"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.8 }}
    variants={buttonState}
    initial="hidden"
    animate="open"
    onClick={() => {
        setNiceAnswer(niceanswer => 'You are right. Life is an unparalleled opportunity for joy, love and many other kinds of fulfilling lived experiences.');
        setFortuneAnswer(fortuneAnswer => true);
        setClickCount(prevCount => prevCount + 1);
      }}>

    <h1 style={{fontSize: "26px"}}>An extremely fortuitous experience.</h1>
    </motion.div>

    <motion.div
    className="fortuneAnswerDiv"
    initial="hidden"
    variants={hiddenDivState}
    animate={ fortuneAnswer ? "open" : "hidden" }>
    <h1
    >You are correct!</h1>
    <h6
    >Life is an unparalleled opportunity for joy, love and many other kinds of fulfilling lived experiences.</h6>
    </motion.div>


    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      variants={buttonState}
      initial="hidden"
      animate="open"
      className="itemC"
      onClick={() => {
          setToughAnswer(toughanswer => 'You are right. Life can be a crushing, crippling confiscation of a whole world of anxiety, stress, pain and tragedy.');
          setDifficultAnswer(difficultAnswer => true);
          setClickCount(prevCount => prevCount + 1);
        }}>
      <h1 style={{fontSize: "26px"}}>A difficult, complicated, confusing experience</h1>
    </motion.div>

    <motion.div
    className="difficultDiv"
    initial="hidden"
    variants={hiddenDivState}
    animate={ difficultAnswer ? "open" : "hidden" }>
    <h1
    >You are correct!</h1>
    <h6>Life can be crushing, destructive and tragic where your world can feel overrun by anxiety, stress and pain.</h6>
    </motion.div>

    <motion.div
    className="missionContainer"
    initial="hidden"
    variants={hiddenMissionState}
    animate={ clickCount > 1 ? "open" : "hidden" }>
    <motion.span className="existStatement">NWD exists because both of these responses are correct.</motion.span>
    <motion.h1 className="missionHeader">Our mission is to unconditionally support people with being alive.</motion.h1>
        </motion.div>
          <Footer />
    </Container>
        </>
  );
}

export default AboutScreen;
