import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, ToggleButton } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import PropagateLoader from "react-spinners/PropagateLoader";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "../../components/Header/Header";
import { faPenToSquare, faEraser, faCirclePlus, faCircleMinus, faBullseye} from '@fortawesome/free-solid-svg-icons'
import '../../screens/Values/values.css';

function Intro() {
  const [myValues_1, setMyValues_1] = useState("");
  const [myValues_1_Text, setMyValues_1_Text] = useState("");
  const [myValues_2, setMyValues_2] = useState("");
  const [myValues_2_Text, setMyValues_2_Text] = useState("");
  const [myValues_3, setMyValues_3] = useState("");
  const [myValues_3_Text, setMyValues_3_Text] = useState("");
  const [myValues_4, setMyValues_4] = useState("");
  const [myValues_4_Text, setMyValues_4_Text] = useState("");
  const [myValues_5, setMyValues_5] = useState("");
  const [myValues_5_Text, setMyValues_5_Text] = useState("");

  const [inputValues_1, setInputValues_1] = useState(false);
  const [inputValues_2, setInputValues_2] = useState(false);
  const [inputValues_3, setInputValues_3] = useState(false);
  const [inputValues_4, setInputValues_4] = useState(false);
  const [inputValues_5, setInputValues_5] = useState(false);
  const [inputValues_1_Text, setInputValues_1_Text] = useState(false);
  const [inputValues_2_Text, setInputValues_2_Text] = useState(false);
  const [inputValues_3_Text, setInputValues_3_Text] = useState(false);
  const [inputValues_4_Text, setInputValues_4_Text] = useState(false);
  const [inputValues_5_Text, setInputValues_5_Text] = useState(false);

  const [ispageState, setIsPageState] = useState(true);
  const [isclearState, setIsClearState] = useState(true);
  const [isScroll, setIsScrollState] = useState(false);
  const [isScroll2, setIsScrollState2] = useState(false);
  const [isTitle, setIsTitle] = useState(true);
  const [isTitle2, setIsTitle2] = useState(true);
  const [isIntro, setIsIntro] = useState(true);
  const [isExplanation, setIsExplanation] = useState(false);
  const [isFoundation, setIsFoundation] = useState(false);
  const [isConsistency, setIsConsistency] = useState(false);
  const [isExperience, setIsExperience] = useState(false);
  const [isSpecificity, setIsSpecificity] = useState(false);
  const [isDisplayContainer, setIsDisplayContainer] = useState(false);

  const [isFourthInput, setIsFourthInput] = useState(false);
  const [isFourthButton, setIsFourthButton] = useState(true);
  const [isFifthInput, setIsFifthInput] = useState(false);
  const [isFifthButton, setIsFifthButton] = useState(true);

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

  const scrollState = {
    hidden: {
      display: "none",
    },
  scrollFlash: {
    display: "block",
    color: "#EBF4FA",
    transition: {
      duration: 0.5,
      ease: "linear",
      repeat: 20,
    }
  },
};

const titleState = {
  titleOff: {
    display: "none",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: 5,
    },
  },
titleOn: {
  display: "block",
  color: "#46A46C",
},
};

  const introState = {
    hidden: {
      opacity: 0,
      scale: 0.1,
          width: "50%",
      x: "50%",
    },
  open: {
    opacity: 1,
    scale: 1,
    width: "50%",
    x: "50%",
    y: "30vh",
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

const introStateMob = {
  hidden: {
    opacity: 0,
    scale: 0.1,
        width: "50%",
    x: "50%",
  },
open: {
  opacity: 1,
  scale: 1,
  width: "95%",
  x: "2.5%",
  y: "30vh",
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

const explanationState = {
  hidden: {
    opacity: 0,
    scale: 0.1,
    x: "50%",
    width: "50%",
  },
open: {
  opacity: 1,
  scale: 1,
  x: "50%",
  width: "50%",
  transition: {
    duration: 2,
    ease: "easeInOut",
  },
},
closed: {
  opacity: 0,
  scale: 1,
  x: "-100%",
  y: "100%",
  width: "50%",
  transition: {
    duration: 6,
    ease: "easeInOut",
    delay: 0.25,
  },
},
};

const explanationStateMob = {
  hidden: {
    opacity: 0,
    scale: 0.1,
    x: "50%",
    width: "50%",
  },
open: {
  opacity: 1,
  scale: 1,
  x: "2.5%",
  width: "95%",
  transition: {
    duration: 2,
    ease: "easeInOut",
  },
},
closed: {
  opacity: 0,
  scale: 1,
  x: "-100%",
  y: "100%",
  width: "50%",
  transition: {
    duration: 6,
    ease: "easeInOut",
    delay: 0.25,
  },
},
};

const foundationState = {
  hidden: {
    opacity: 0,
    x: "-100%",
    y: "100%",
    width: "50%",
  },
  open: {
    opacity: 1,
    x: "50%",
    width: "50%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
  closed: {
    opacity: 0,
    width: "50%",
    x: "200%",
    y: "-200%",
    transition: {
      duration: 6,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const foundationStateMob = {
  hidden: {
    opacity: 0,
    x: "-100%",
    y: "100%",
    width: "50%",
  },
  open: {
    opacity: 1,
    x: "2.5%",
    width: "95%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
  closed: {
    opacity: 0,
    width: "50%",
    x: "200%",
    y: "-200%",
    transition: {
      duration: 6,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const consistencyState = {
  hidden: {
    opacity: 0,
    x: "-100%",
    y: "-100%",
    width: "50%",
  },
  open: {
    opacity: 1,
    width: "50%",
    x: "50%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
  closed: {
    opacity: 0,
    width: "50%",
    x: "-100%",
    y:"-100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const consistencyStateMob = {
  hidden: {
    opacity: 0,
    x: "-100%",
    y: "-100%",
    width: "50%",
  },
  open: {
    opacity: 1,
    width: "95%",
    x: "2.5%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
  closed: {
    opacity: 0,
    width: "50%",
    x: "-100%",
    y:"-100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const experienceState = {
  hidden: {
    opacity: 0,
    x: "-100%",
        width: "50%",
    y: "200",
  },
  open: {
    opacity: 1,
    width: "50%",
    x: "50%",
    y: "-10vh",
    transition: {
      duration: 2,
      ease: 'easeInOut',
      delay: 0.25,
    },
  },
  closed: {
    opacity: 0,
    width: "50%",
    x: "-200%",
    y: "-100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const experienceStateMob = {
  hidden: {
    opacity: 0,
    x: "-100%",
        width: "50%",
    y: "200",
  },
  open: {
    opacity: 1,
    width: "95%",
    x: "2.5%",
    y: "-10vh",
    transition: {
      duration: 2,
      ease: 'easeInOut',
      delay: 0.25,
    },
  },
  closed: {
    opacity: 0,
    width: "50%",
    x: "-200%",
    y: "-100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const specificityState = {
  hidden: {
    opacity: 0,
    x: 200,
    width: "50%",
    y: -200,
  },
  open: {
    opacity: 1,
    width: "50%",
    x: "50%",
        y: "-50vh",
        transition: {
          duration: 2,
          ease: 'easeInOut',
          delay: 0.25,
        },
  },
  closed: {
    opacity: 0,
    width: "50%",
    x: "-100%",
    y: "-100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const specificityStateMob = {
  hidden: {
    opacity: 0,
    x: 200,
    width: "50%",
    y: -200,
  },
  open: {
    opacity: 1,
    width: "95%",
    x: "2.5%",
        y: "-50vh",
        transition: {
          duration: 2,
          ease: 'easeInOut',
          delay: 0.25,
        },
  },
  closed: {
    opacity: 0,
    width: "50%",
    x: "-100%",
    y: "-100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const finalDisplayState = {
  hidden: {
    opacity: 0,
    x: 200,
    width: "50%",
    y: -200,
  },
  open: {
    opacity: 1,
    width: "50%",
    x: "50%",
        y: "-200vh",
        transition: {
          duration: 2,
          ease: 'easeInOut',
          delay: 0.25,
        },
  },
  closed: {
    opacity: 0,
    width: "50%",
    x: "-100%",
    y: "-100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const finalDisplayStateMob = {
  hidden: {
    opacity: 0,
    x: 200,
    width: "50%",
    y: -200,
  },
  open: {
    opacity: 1,
    width: "95%",
    x: "2.5%",
        y: "-200vh",
        transition: {
          duration: 2,
          ease: 'easeInOut',
          delay: 0.25,
        },
  },
  closed: {
    opacity: 0,
    width: "50%",
    x: "-100%",
    y: "-100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const valueState = {
  hide: {
    display: "none",
  },
  show: {
    display: "block",
  },
};

const valuesState = {
  hide: {
    display: "none",
  },
  show: {
    display: "flex",
  },
};

  return (
    <AnimateSharedLayout>
      <AnimatePresence>

      {
        vw > 800 ?
        <motion.div
          className="introStageMain">
            <Header />
            <motion.div
              className="introContainer"
              variants={introState}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial="hidden"
              animate={ isIntro ? "open" : "closed" }
              onClick={() => {
              setIsIntro(isIntro => false);
              setIsExplanation(isExplanation => true);}}>
                <h1>Thinking about your Values</h1>
                <p>Making a tricky little topic a bit easier to explore</p>
                <span><strong>Click this box to get started.</strong></span>
            </motion.div>


                        <motion.div
                          className="explanationContainer"
                          whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          initial="hidden"
                          animate={ isExplanation ? "open" : "closed" }
                          variants={explanationState}
                          onClick={() => {
                            setIsExplanation(isExplanation => false);
                            setIsFoundation(isFoundation => !isFoundation);
                            setIsTitle(isTitle => false);
                              setIsScrollState(isScroll => true);
                            setTimeout(()=> {
                              setIsScrollState(isScroll => false);
                            },4000);
                          }}
                          >
                          <motion.h1
                              initial="hidden"
                              animate={isScroll ? "scrollFlash" : "hidden"}
                                variants={scrollState}>
                              Scroll Down to the First Stage
                              </motion.h1>
                            <motion.div>

            <div className="explanationTitle">
                <motion.h1
                initial="titleOn"
                animate={isTitle ? "titleOn" : "titleOff"}
                variants={titleState}
                >How does this work</motion.h1>
                </div>
                <motion.div>

                <ol className="stepsList">
                  <li>
                    We are going to set a foundation of 3-5 traits that are important to you.
                  </li>
                  <li>
                    <span>Then we are going to go through 3 stages that will help test that foundation...</span>
                    <ul>
                      <li>The 'Everyday' Stage</li>
                      <li>The 'Special' Stage</li>
                      <li>The 'Specific' Stage</li>
                    </ul>
                  </li>
                  <li>
                    Finally, you will see them all together and have a chance to make any tweaks.
                  </li>
                </ol>

                </motion.div>
                  <span><strong>Ready? Click on the box to create your foundation</strong></span>
                    </motion.div>

                      </motion.div>

                <motion.div
                className="foundationContainer"
                    initial="hidden"
                animate={ isFoundation ? "open" : "closed" }
                variants={foundationState}
                >
                <motion.h1
                initial="hidden"
                animate={isScroll2 ? "scrollFlash" : "hidden"}
                  variants={scrollState}>
                    Scroll Up to Second Stage
                    </motion.h1>

                <motion.h1
                initial="titleOn"
                animate={isTitle2 ? "titleOn" : "titleOff"}
                variants={titleState}
                >Laying the Foundation</motion.h1>
                <p>Write down 3 - 5 traits that you would like to embody as a person simply because they are particularly important to you.</p>
                <motion.div
                className="fourFiveDiv">
                <input
                className="textInput"
                  type="text"
                  value={myValues_1}
                  placeholder=""
                  onChange={(e) => setMyValues_1(e.target.value)}
                />
                <FontAwesomeIcon
                  className="bullseyeIcon"
                  icon={faBullseye}
                  />
                </motion.div>

                <motion.div
                className="fourFiveDiv">
                <input
                className="textInput"
                  type="text"
                  value={myValues_2}
                  placeholder=""
                  onChange={(e) => setMyValues_2(e.target.value)}
                />
                <FontAwesomeIcon
                  className="bullseyeIcon"
                  icon={faBullseye}
                  />
                </motion.div>

                <motion.div
                className="fourFiveDiv">
                <input
                className="textInput"
                  type="text"
                  value={myValues_3}
                  placeholder=""
                  onChange={(e) => setMyValues_3(e.target.value)}
                />
                <FontAwesomeIcon
                  className="bullseyeIcon"
                  icon={faBullseye}
                  />
                </motion.div>

            <motion.div
                  animate={ isFourthButton ? "show" : "hide" }
                  variants={valuesState}>
                <FontAwesomeIcon
                  className="addIcon"
                  icon={faCirclePlus}

                  onClick={()=> {
                    setIsFourthInput(isFourthInput => !isFourthInput);
                    setIsFifthButton(isFifthButton => !isFifthButton);
                    setIsFourthButton(isFourthButton => false);
                  }}/>
                  </motion.div>

            <motion.div
            className="fourFiveDiv"
            initial="hide"
            animate={ isFourthInput ? "show" : "hide" }
            variants={valuesState}>
                <motion.input
                  className="textInput"
                  type="text"
                  value={myValues_4}
                  placeholder=""
                  onChange={(e) => setMyValues_4(e.target.value)}
                />
                <FontAwesomeIcon
                  className="minusIcon"
                  icon={faCircleMinus}
                  onClick={()=> {
                    setIsFourthInput(isFourthInput => !isFourthInput);
                    setIsFourthButton(isFourthButton => true);
                    setIsFifthButton(isFifthButton => true);
                  }}/>

            </motion.div>

                <motion.div
                      animate={ isFifthButton ? "hide" : "show" }
                      variants={valuesState}
                >
                <FontAwesomeIcon
                  className="addIcon"
                  icon={faCirclePlus}
                  onClick={()=> {
                    setIsFifthInput(isFifthInput => !isFifthInput);
                    setIsFifthButton(isFifthButton => true);
                  }}/>
            </motion.div>

            <motion.div
              className="fiveDiv"
              initial="hide"
              animate={ isFifthInput ? "show" : "hide" }
              variants={valuesState}>
                <motion.input
                  className="textInput"
                  type="text"
                  value={myValues_5}
                  placeholder=""
                  onChange={(e) => setMyValues_5(e.target.value)}
                />

                <FontAwesomeIcon
                  className="minusIcon"
                  icon={faCircleMinus}
                  onClick={()=> {
                    setIsFifthInput(isFifthInput => !isFifthInput);
                    setIsFifthButton(isFifthButton => false);
                  }}/>
              </motion.div>

                <Button
                className="valuesButton"
                onClick={() => {
                  setIsFoundation(isFoundation => !isFoundation);
                  setIsConsistency(isConsistency => !isConsistency);
                  setIsScrollState2(isScroll2 => true);
                  setIsTitle2(isTitle2 => false);
                  setTimeout(()=> {
                  setIsScrollState2(isScroll2 => false);
                },6000);
                }}

              >Ready? Let's move to the first progression!</Button>
                </motion.div>

                <motion.div
                className="consistencyContainer"
                whileHover={{ scale: 1.05 }}
                initial="hidden"
                animate={ isConsistency ? "open" : "closed" }
                variants={consistencyState}>
                <h1>Stage One: Consistency</h1>
                <p>For these traits that you have just written down to speak powerfully and positively to other people, you have to authentically embody them in every decision you make; every detail, every word, every moment.</p>
                <p>Does this knowledge change what you have written down? (Feel free to edit and tweak if so)</p>
                <motion.div
                className="fourFiveDiv">
                <input
                className="textInput"
                  type="text"
                  value={myValues_1}
                  placeholder=""
                  onChange={(e) => setMyValues_1(e.target.value)}
                />
                <FontAwesomeIcon
                  className="bullseyeIcon"
                  icon={faBullseye}
                  />
                </motion.div>

                <motion.div
                className="fourFiveDiv">
                <input
                className="textInput"
                  type="text"
                  value={myValues_2}
                  placeholder=""
                  onChange={(e) => setMyValues_2(e.target.value)}
                />
                <FontAwesomeIcon
                  className="bullseyeIcon"
                  icon={faBullseye}
                  />
                </motion.div>

                <motion.div
                className="fourFiveDiv">
                <input
                className="textInput"
                  type="text"
                  value={myValues_3}
                  placeholder=""
                  onChange={(e) => setMyValues_3(e.target.value)}
                />
                <FontAwesomeIcon
                  className="bullseyeIcon"
                  icon={faBullseye}
                  />
                </motion.div>

            <motion.div
                  animate={ isFourthButton ? "show" : "hide" }
                  variants={valuesState}>
                <FontAwesomeIcon
                  className="addIcon"
                  icon={faCirclePlus}

                  onClick={()=> {
                    setIsFourthInput(isFourthInput => !isFourthInput);
                    setIsFifthButton(isFifthButton => !isFifthButton);
                    setIsFourthButton(isFourthButton => false);
                  }}/>
                  </motion.div>

            <motion.div
            className="fourFiveDiv"
            initial="hide"
            animate={ isFourthInput ? "show" : "hide" }
            variants={valuesState}>
                <motion.input
                  className="textInput"
                  type="text"
                  value={myValues_4}
                  placeholder=""
                  onChange={(e) => setMyValues_4(e.target.value)}
                />
                <FontAwesomeIcon
                  className="minusIcon"
                  icon={faCircleMinus}
                  onClick={()=> {
                    setIsFourthInput(isFourthInput => !isFourthInput);
                    setIsFourthButton(isFourthButton => true);
                    setIsFifthButton(isFifthButton => true);
                  }}/>

            </motion.div>

                <motion.div
                      animate={ isFifthButton ? "hide" : "show" }
                      variants={valuesState}
                >
                <FontAwesomeIcon
                  className="addIcon"
                  icon={faCirclePlus}
                  onClick={()=> {
                    setIsFifthInput(isFifthInput => !isFifthInput);
                    setIsFifthButton(isFifthButton => true);
                  }}/>
            </motion.div>

            <motion.div
              className="fiveDiv"
              initial="hide"
              animate={ isFifthInput ? "show" : "hide" }
              variants={valuesState}>
                <motion.input
                  className="textInput"
                  type="text"
                  value={myValues_5}
                  placeholder=""
                  onChange={(e) => setMyValues_5(e.target.value)}
                />

                <FontAwesomeIcon
                  className="minusIcon"
                  icon={faCircleMinus}
                  onClick={()=> {
                    setIsFifthInput(isFifthInput => !isFifthInput);
                    setIsFifthButton(isFifthButton => false);
                  }}/>
              </motion.div>

                <Button
                className="valuesButton"
                onClick={() => {

                  setIsConsistency(isConsistency => !isConsistency);
                 setIsExperience(isExperience => !isExperience);

               }}>Next Stage</Button>
                </motion.div>

                <motion.div
                className="experienceContainer"
                whileHover={{ scale: 1.05 }}
                animate={ isExperience ? "open" : "closed" }
                initial="hidden"
                variants={experienceState}>
                <h1>Stage Two: Transcendency</h1>
                <p>The traits you are considering not only have to optimise your performance and communicate clearly to others but they also, when authentically and consistently embodied, need to contribute to a special experience and environment for others.</p>
                <p>Does that change what you have written down? (Have a tweak, have a play. Sit with the question for a minute)</p>
                <motion.div
                className="fourFiveDiv">
                <input
                className="textInput"
                  type="text"
                  value={myValues_1}
                  placeholder=""
                  onChange={(e) => setMyValues_1(e.target.value)}
                />
                <FontAwesomeIcon
                  className="bullseyeIcon"
                  icon={faBullseye}
                  />
                </motion.div>

                <motion.div
                className="fourFiveDiv">
                <input
                className="textInput"
                  type="text"
                  value={myValues_2}
                  placeholder=""
                  onChange={(e) => setMyValues_2(e.target.value)}
                />
                <FontAwesomeIcon
                  className="bullseyeIcon"
                  icon={faBullseye}
                  />
                </motion.div>

                <motion.div
                className="fourFiveDiv">
                <input
                className="textInput"
                  type="text"
                  value={myValues_3}
                  placeholder=""
                  onChange={(e) => setMyValues_3(e.target.value)}
                />
                <FontAwesomeIcon
                  className="bullseyeIcon"
                  icon={faBullseye}
                  />
                </motion.div>

            <motion.div
                  animate={ isFourthButton ? "show" : "hide" }
                  variants={valuesState}>
                <FontAwesomeIcon
                  className="addIcon"
                  icon={faCirclePlus}

                  onClick={()=> {
                    setIsFourthInput(isFourthInput => !isFourthInput);
                    setIsFifthButton(isFifthButton => !isFifthButton);
                    setIsFourthButton(isFourthButton => false);
                  }}/>
                  </motion.div>

            <motion.div
            className="fourFiveDiv"
            initial="hide"
            animate={ isFourthInput ? "show" : "hide" }
            variants={valuesState}>
                <motion.input
                  className="textInput"
                  type="text"
                  value={myValues_4}
                  placeholder=""
                  onChange={(e) => setMyValues_4(e.target.value)}
                />
                <FontAwesomeIcon
                  className="minusIcon"
                  icon={faCircleMinus}
                  onClick={()=> {
                    setIsFourthInput(isFourthInput => !isFourthInput);
                    setIsFourthButton(isFourthButton => true);
                    setIsFifthButton(isFifthButton => true);
                  }}/>

            </motion.div>

                <motion.div
                      animate={ isFifthButton ? "hide" : "show" }
                      variants={valuesState}
                >
                <FontAwesomeIcon
                  className="addIcon"
                  icon={faCirclePlus}
                  onClick={()=> {
                    setIsFifthInput(isFifthInput => !isFifthInput);
                    setIsFifthButton(isFifthButton => true);
                  }}/>
            </motion.div>

            <motion.div
              className="fiveDiv"
              initial="hide"
              animate={ isFifthInput ? "show" : "hide" }
              variants={valuesState}>
                <motion.input
                  className="textInput"
                  type="text"
                  value={myValues_5}
                  placeholder=""
                  onChange={(e) => setMyValues_5(e.target.value)}
                />

                <FontAwesomeIcon
                  className="minusIcon"
                  icon={faCircleMinus}
                  onClick={()=> {
                    setIsFifthInput(isFifthInput => !isFifthInput);
                    setIsFifthButton(isFifthButton => false);
                  }}/>
              </motion.div>



                <Button
                className="valuesButton"
                onClick={() => {

                 setIsExperience(isExperience => !isExperience);
                   setIsSpecificity(isSpecificity => !isSpecificity);

                }}>Next Stage</Button>
                </motion.div>

                <motion.div
                className="specificityContainer"
                whileHover={{ scale: 1.05 }}
                animate={ isSpecificity ? "open" : "closed" }
                initial="hidden"
                variants={specificityState}>
                <h1>Stage Three: Specificity</h1>
                <p>Single words are inherently ambigious, yet you have pick these traits because they mean something specifically to your experience of life.</p>
                <p>Add a short phrase next to each trait that would help you explain it to someone else.</p>
                <motion.div
                className="fourFiveDiv">
                <div className="valuesIntBox">
                <input
                  className="valueText"
                  type="text"
                  value={myValues_1}
                  placeholder=""
                  onChange={(e) => setMyValues_1(e.target.value)}
                />
                <input
                  className="valueExplainer"
                  type="text"
                  value={myValues_1_Text}
                  placeholder=""
                  onChange={(e) => setMyValues_1_Text(e.target.value)}
                />

                  </div>
                  <FontAwesomeIcon
                    className="bullseyeIcon"
                    icon={faBullseye}
                    />
                  </motion.div>
                  <motion.div
                  className="fourFiveDiv">
                    <div className="valuesIntBox">
                <input
                  type="text"
                  value={myValues_2}
                  placeholder=""
                  onChange={(e) => setMyValues_2(e.target.value)}
                />
                <input
                  type="text"
                  value={myValues_2_Text}
                  placeholder=""
                  onChange={(e) => setMyValues_2_Text(e.target.value)}
                />
              </div>
              <FontAwesomeIcon
                className="bullseyeIcon"
                icon={faBullseye}
                />
                </motion.div>

                <motion.div
                className="fourFiveDiv">
                  <div className="valuesIntBox">
                <input
                  type="text"
                  value={myValues_3}
                  placeholder=""
                  onChange={(e) => setMyValues_3(e.target.value)}
                />
                <input
                  type="text"
                  value={myValues_3_Text}
                  placeholder=""
                  onChange={(e) => setMyValues_3_Text(e.target.value)}
                />
              </div>
              <FontAwesomeIcon
                className="bullseyeIcon"
                icon={faBullseye}
                />
                </motion.div>


              <motion.div
                    animate={ isFourthButton ? "show" : "hide" }
                    variants={valuesState}>
                  <FontAwesomeIcon
                    className="addIcon"
                    icon={faCirclePlus}
                    onClick={()=> {
                      setIsFourthInput(isFourthInput => !isFourthInput);
                      setIsFifthButton(isFifthButton => !isFifthButton);
                      setIsFourthButton(isFourthButton => false);
                    }}/>
                    </motion.div>

              <motion.div
              className="fourFiveDiv"
              initial="hide"
              animate={ isFourthInput ? "show" : "hide" }
              variants={valuesState}>
              <div className="valuesIntBox">
            <input
              type="text"
              value={myValues_4}
              placeholder=""
              onChange={(e) => setMyValues_4(e.target.value)}
            />
            <input
              type="text"
              value={myValues_4_Text}
              placeholder=""
              onChange={(e) => setMyValues_4_Text(e.target.value)}
            />
            </div>
                  <FontAwesomeIcon
                    className="minusIcon"
                    icon={faCircleMinus}
                    onClick={()=> {
                      setIsFourthInput(isFourthInput => !isFourthInput);
                      setIsFourthButton(isFourthButton => true);
                      setIsFifthButton(isFifthButton => true);
                    }}/>
              </motion.div>

                  <motion.div
                        animate={ isFifthButton ? "hide" : "show" }
                        variants={valuesState}
                  >
                  <FontAwesomeIcon
                    className="addIcon"
                    icon={faCirclePlus}
                    onClick={()=> {
                      setIsFifthInput(isFifthInput => !isFifthInput);
                      setIsFifthButton(isFifthButton => true);
                    }}/>
              </motion.div>

              <motion.div
                className="fiveDiv"
                initial="hide"
                animate={ isFifthInput ? "show" : "hide" }
                variants={valuesState}>
                <div className="valuesIntBox">
              <input
                type="text"
                value={myValues_5}
                placeholder=""
                onChange={(e) => setMyValues_5(e.target.value)}
              />
              <input
                type="text"
                value={myValues_5_Text}
                placeholder=""
                onChange={(e) => setMyValues_5_Text(e.target.value)}
              />
            </div>

                  <FontAwesomeIcon
                    className="minusIcon"
                    icon={faCircleMinus}
                    onClick={()=> {
                      setIsFifthInput(isFifthInput => !isFifthInput);
                      setIsFifthButton(isFifthButton => false);
                    }}/>
                </motion.div>



              <Button
              className="valuesButton"
              onClick={() => {

               setIsSpecificity(isSpecificity => !isSpecificity);
               setIsDisplayContainer(isDisplayContainer => !isDisplayContainer);

              }}>Let's take a little look.</Button>
                </motion.div>


                <motion.div
                className="finalDisplayContainer"
                animate={ isDisplayContainer ? "open" : "closed" }
                initial="hidden"
                variants={finalDisplayState}>

                <h1>Your Values</h1>
                <p>How do these feel? Continue to play with the traits and explanations. Then, when you are happy, add them into your 'Year' view</p>

                <motion.div className="valuesIntBox1">
                  <motion.div className="editDeleteValues1">
                      <FontAwesomeIcon
                        className="editIcon"
                        icon={faPenToSquare}
                        onClick={()=> {
                          setInputValues_1(inputValues_1 => !inputValues_1);
                        }}/>
                    </motion.div>

                    <motion.input
                      className="valueText"
                      animate={ inputValues_1 ? "show": "hide"}
                      variants={valueState}
                      type="text"
                      value={myValues_1}
                      placeholder=""
                      onChange={(e) => setMyValues_1(e.target.value)}
                    />

                <motion.span
                className="valueName"
                animate={inputValues_1 ? "hide": "show"}
                variants={valueState}>{myValues_1}: </motion.span>

                <motion.span
                className="valueExplanation"
                animate={ inputValues_1_Text ? "hide": "show"}
                variants={valueState}>
                {myValues_1_Text}
                </motion.span>


                <motion.input
                  className="valueExplainer"
                  type="text"
                  value={myValues_1_Text}
                  animate={ inputValues_1_Text ? "show": "hide"}
                  variants={valueState}
                  placeholder=""
                  onChange={(e) => setMyValues_1_Text(e.target.value)}
                />

                <motion.div className="editDeleteValuesText1">
                    <FontAwesomeIcon
                      className="editIcon"
                      icon={faPenToSquare}
                      onClick={()=> {
                        setInputValues_1_Text(inputValues_1_Text => !inputValues_1_Text);
                      }}/>
                  </motion.div>
                  </motion.div>

                  <motion.div className="valuesIntBox2">
                    <motion.div className="editDeleteValues2">
                        <FontAwesomeIcon
                          className="editIcon"
                          icon={faPenToSquare}
                          onClick={()=> {
                            setInputValues_2(inputValues_2 => !inputValues_2);
                          }}/>
                      </motion.div>

                      <motion.input
                        className="valueText"
                        animate={ inputValues_2 ? "show": "hide"}
                        variants={valueState}
                        type="text"
                        value={myValues_2}
                        placeholder=""
                        onChange={(e) => setMyValues_2(e.target.value)}
                      />

                  <motion.span
                  className="valueName"
                  animate={inputValues_2 ? "hide": "show"}
                  variants={valueState}>{myValues_2}: </motion.span>

                  <motion.span
                  className="valueExplanation"
                  animate={ inputValues_2_Text ? "hide": "show"}
                  variants={valueState}>
                  {myValues_2_Text}
                  </motion.span>


                  <motion.input
                    className="valueExplainer"
                    type="text"
                    value={myValues_2_Text}
                    animate={ inputValues_2_Text ? "show": "hide"}
                    variants={valueState}
                    placeholder=""
                    onChange={(e) => setMyValues_2_Text(e.target.value)}
                  />

                  <motion.div className="editDeleteValuesText2">
                      <FontAwesomeIcon
                        className="editIcon"
                        icon={faPenToSquare}
                        onClick={()=> {
                          setInputValues_2_Text(inputValues_2_Text => !inputValues_2_Text);
                        }}/>
                    </motion.div>
                    </motion.div>

                    <motion.div className="valuesIntBox3">
                      <motion.div className="editDeleteValues3">
                          <FontAwesomeIcon
                            className="editIcon"
                            icon={faPenToSquare}
                            onClick={()=> {
                              setInputValues_3(inputValues_3 => !inputValues_3);
                            }}/>
                        </motion.div>

                        <motion.input
                          className="valueText"
                          animate={ inputValues_3 ? "show": "hide"}
                          variants={valueState}
                          type="text"
                          value={myValues_3}
                          placeholder=""
                          onChange={(e) => setMyValues_3(e.target.value)}
                        />

                    <motion.span
                    className="valueName"
                    animate={inputValues_3 ? "hide": "show"}
                    variants={valueState}>{myValues_3}: </motion.span>

                    <motion.span
                    className="valueExplanation"
                    animate={ inputValues_3_Text ? "hide": "show"}
                    variants={valueState}>
                    {myValues_3_Text}
                    </motion.span>


                    <motion.input
                      className="valueExplainer"
                      type="text"
                      value={myValues_3_Text}
                      animate={ inputValues_3_Text ? "show": "hide"}
                      variants={valueState}
                      placeholder=""
                      onChange={(e) => setMyValues_3_Text(e.target.value)}
                    />

                    <motion.div className="editDeleteValuesText3">
                        <FontAwesomeIcon
                          className="editIcon"
                          icon={faPenToSquare}
                          onClick={()=> {
                            setInputValues_3_Text(inputValues_3_Text => !inputValues_3_Text);
                          }}/>
                      </motion.div>
                      </motion.div>

            { myValues_4 ?
                      <motion.div className="valuesIntBox4">
                        <motion.div className="editDeleteValues4">
                            <FontAwesomeIcon
                              className="editIcon"
                              icon={faPenToSquare}
                              onClick={()=> {
                                setInputValues_4(inputValues_4 => !inputValues_4);
                              }}/>
                          </motion.div>

                          <motion.input
                            className="valueText"
                            animate={ inputValues_4 ? "show": "hide"}
                            variants={valueState}
                            type="text"
                            value={myValues_4}
                            placeholder=""
                            onChange={(e) => setMyValues_4(e.target.value)}
                          />

                      <motion.span
                      className="valueName"
                      animate={inputValues_4 ? "hide": "show"}
                      variants={valueState}>{myValues_4}: </motion.span>

                      <motion.span
                      className="valueExplanation"
                      animate={ inputValues_4_Text ? "hide": "show"}
                      variants={valueState}>
                      {myValues_4_Text}
                      </motion.span>


                      <motion.input
                        className="valueExplainer"
                        type="text"
                        value={myValues_4_Text}
                        animate={ inputValues_4_Text ? "show": "hide"}
                        variants={valueState}
                        placeholder=""
                        onChange={(e) => setMyValues_4_Text(e.target.value)}
                      />

                      <motion.div className="editDeleteValuesText4">
                          <FontAwesomeIcon
                            className="editIcon"
                            icon={faPenToSquare}
                            onClick={()=> {
                              setInputValues_4_Text(inputValues_4_Text => !inputValues_4_Text);
                            }}/>
                        </motion.div>
                        </motion.div>
                        : null }


            { myValues_5 ?
                        <motion.div className="valuesIntBox5">
                          <motion.div className="editDeleteValues5">
                              <FontAwesomeIcon
                                className="editIcon"
                                icon={faPenToSquare}
                                onClick={()=> {
                                  setInputValues_5(inputValues_5 => !inputValues_5);
                                }}/>
                            </motion.div>

                            <motion.input
                              className="valueText"
                              animate={ inputValues_5 ? "show": "hide"}
                              variants={valueState}
                              type="text"
                              value={myValues_5}
                              placeholder=""
                              onChange={(e) => setMyValues_5(e.target.value)}
                            />

                        <motion.span
                        className="valueName"
                        animate={inputValues_5 ? "hide": "show"}
                        variants={valueState}>{myValues_5}: </motion.span>

                        <motion.span
                        className="valueExplanation"
                        animate={ inputValues_5_Text ? "hide": "show"}
                        variants={valueState}>
                        {myValues_5_Text}
                        </motion.span>


                        <motion.input
                          className="valueExplainer"
                          type="text"
                          value={myValues_5_Text}
                          animate={ inputValues_5_Text ? "show": "hide"}
                          variants={valueState}
                          placeholder=""
                          onChange={(e) => setMyValues_5_Text(e.target.value)}
                        />

                        <motion.div className="editDeleteValuesText5">
                            <FontAwesomeIcon
                              className="editIcon"
                              icon={faPenToSquare}
                              onClick={()=> {
                                setInputValues_5_Text(inputValues_5_Text => !inputValues_5_Text);
                              }}/>
                          </motion.div>
                          </motion.div>

                          : null }

                </motion.div>

              </motion.div>

            :
            // ===========================================================================================
            <motion.div
              className="introStageMain">
                <motion.div
                  className="introContainer"
                  variants={introStateMob}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial="hidden"
                  animate={ isIntro ? "open" : "closed" }
                  onClick={() => {
                  setIsIntro(isIntro => false);
                  setIsExplanation(isExplanation => true);}}>
                    <h1>Thinking about your Values</h1>
                    <p>Making a tricky little topic a bit easier to explore{vw}</p>
                    <span><strong>Click this box to get started.</strong></span>
                </motion.div>


                            <motion.div
                              className="explanationContainer"
                              whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              initial="hidden"
                              animate={ isExplanation ? "open" : "closed" }
                              variants={explanationStateMob}
                              onClick={() => {
                                setIsExplanation(isExplanation => false);
                                setIsFoundation(isFoundation => !isFoundation);
                                setIsTitle(isTitle => false);
                                  setIsScrollState(isScroll => true);
                                setTimeout(()=> {
                                  setIsScrollState(isScroll => false);
                                },4000);
                              }}
                              >
                              <motion.h1
                                  initial="hidden"
                                  animate={isScroll ? "scrollFlash" : "hidden"}
                                    variants={scrollState}>
                                  Scroll Down to the First Stage
                                  </motion.h1>
                                <motion.div>

                <div className="explanationTitle">
                    <motion.h1
                    initial="titleOn"
                    animate={isTitle ? "titleOn" : "titleOff"}
                    variants={titleState}
                    >How does this work</motion.h1>
                    </div>
                    <motion.div>

                    <ol className="stepsList">
                      <li>
                        We are going to set a foundation of 3-5 traits that are important to you.
                      </li>
                      <li>
                        <span>Then we are going to go through 3 stages that will help test that foundation...</span>
                        <ul>
                          <li>The 'Everyday' Stage</li>
                          <li>The 'Special' Stage</li>
                          <li>The 'Specific' Stage</li>
                        </ul>
                      </li>
                      <li>
                        Finally, you will see them all together and have a chance to make any tweaks.
                      </li>
                    </ol>

                    </motion.div>
                      <span><strong>Ready? Click on the box to create your foundation</strong></span>
                        </motion.div>

                          </motion.div>

                    <motion.div
                    className="foundationContainer"
                        initial="hidden"
                    animate={ isFoundation ? "open" : "closed" }
                    variants={foundationStateMob}
                    >
                    <motion.h1
                    initial="hidden"
                    animate={isScroll2 ? "scrollFlash" : "hidden"}
                      variants={scrollState}>
                        Scroll Up to Second Stage
                        </motion.h1>

                    <motion.h1
                    initial="titleOn"
                    animate={isTitle2 ? "titleOn" : "titleOff"}
                    variants={titleState}
                    >Laying the Foundation</motion.h1>
                    <p>Write down 3 - 5 traits that you would like to embody as a person simply because they are particularly important to you.</p>
                    <motion.div
                    className="fourFiveDiv">
                    <input
                    className="textInput"
                      type="text"
                      value={myValues_1}
                      placeholder=""
                      onChange={(e) => setMyValues_1(e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="bullseyeIcon"
                      icon={faBullseye}
                      />
                    </motion.div>

                    <motion.div
                    className="fourFiveDiv">
                    <input
                    className="textInput"
                      type="text"
                      value={myValues_2}
                      placeholder=""
                      onChange={(e) => setMyValues_2(e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="bullseyeIcon"
                      icon={faBullseye}
                      />
                    </motion.div>

                    <motion.div
                    className="fourFiveDiv">
                    <input
                    className="textInput"
                      type="text"
                      value={myValues_3}
                      placeholder=""
                      onChange={(e) => setMyValues_3(e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="bullseyeIcon"
                      icon={faBullseye}
                      />
                    </motion.div>

                <motion.div
                      animate={ isFourthButton ? "show" : "hide" }
                      variants={valuesState}>
                    <FontAwesomeIcon
                      className="addIcon"
                      icon={faCirclePlus}

                      onClick={()=> {
                        setIsFourthInput(isFourthInput => !isFourthInput);
                        setIsFifthButton(isFifthButton => !isFifthButton);
                        setIsFourthButton(isFourthButton => false);
                      }}/>
                      </motion.div>

                <motion.div
                className="fourFiveDiv"
                initial="hide"
                animate={ isFourthInput ? "show" : "hide" }
                variants={valuesState}>
                    <motion.input
                      className="textInput"
                      type="text"
                      value={myValues_4}
                      placeholder=""
                      onChange={(e) => setMyValues_4(e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="minusIcon"
                      icon={faCircleMinus}
                      onClick={()=> {
                        setIsFourthInput(isFourthInput => !isFourthInput);
                        setIsFourthButton(isFourthButton => true);
                        setIsFifthButton(isFifthButton => true);
                      }}/>

                </motion.div>

                    <motion.div
                          animate={ isFifthButton ? "hide" : "show" }
                          variants={valuesState}
                    >
                    <FontAwesomeIcon
                      className="addIcon"
                      icon={faCirclePlus}
                      onClick={()=> {
                        setIsFifthInput(isFifthInput => !isFifthInput);
                        setIsFifthButton(isFifthButton => true);
                      }}/>
                </motion.div>

                <motion.div
                  className="fiveDiv"
                  initial="hide"
                  animate={ isFifthInput ? "show" : "hide" }
                  variants={valuesState}>
                    <motion.input
                      className="textInput"
                      type="text"
                      value={myValues_5}
                      placeholder=""
                      onChange={(e) => setMyValues_5(e.target.value)}
                    />

                    <FontAwesomeIcon
                      className="minusIcon"
                      icon={faCircleMinus}
                      onClick={()=> {
                        setIsFifthInput(isFifthInput => !isFifthInput);
                        setIsFifthButton(isFifthButton => false);
                      }}/>
                  </motion.div>

                    <Button
                    className="valuesButton"
                    onClick={() => {
                      setIsFoundation(isFoundation => !isFoundation);
                      setIsConsistency(isConsistency => !isConsistency);
                      setIsScrollState2(isScroll2 => true);
                      setIsTitle2(isTitle2 => false);
                      setTimeout(()=> {
                      setIsScrollState2(isScroll2 => false);
                    },6000);
                    }}

                  >Ready? Let's move to the first progression!</Button>
                    </motion.div>

                    <motion.div
                    className="consistencyContainer"
                    whileHover={{ scale: 1.05 }}
                    initial="hidden"
                    animate={ isConsistency ? "open" : "closed" }
                    variants={consistencyStateMob}>
                    <h1>Stage One: Consistency</h1>
                    <p>For these traits that you have just written down to speak powerfully and positively to other people, you have to authentically embody them in every decision you make; every detail, every word, every moment.</p>
                    <p>Does this knowledge change what you have written down? (Feel free to edit and tweak if so)</p>
                    <motion.div
                    className="fourFiveDiv">
                    <input
                    className="textInput"
                      type="text"
                      value={myValues_1}
                      placeholder=""
                      onChange={(e) => setMyValues_1(e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="bullseyeIcon"
                      icon={faBullseye}
                      />
                    </motion.div>

                    <motion.div
                    className="fourFiveDiv">
                    <input
                    className="textInput"
                      type="text"
                      value={myValues_2}
                      placeholder=""
                      onChange={(e) => setMyValues_2(e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="bullseyeIcon"
                      icon={faBullseye}
                      />
                    </motion.div>

                    <motion.div
                    className="fourFiveDiv">
                    <input
                    className="textInput"
                      type="text"
                      value={myValues_3}
                      placeholder=""
                      onChange={(e) => setMyValues_3(e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="bullseyeIcon"
                      icon={faBullseye}
                      />
                    </motion.div>

                <motion.div
                      animate={ isFourthButton ? "show" : "hide" }
                      variants={valuesState}>
                    <FontAwesomeIcon
                      className="addIcon"
                      icon={faCirclePlus}

                      onClick={()=> {
                        setIsFourthInput(isFourthInput => !isFourthInput);
                        setIsFifthButton(isFifthButton => !isFifthButton);
                        setIsFourthButton(isFourthButton => false);
                      }}/>
                      </motion.div>

                <motion.div
                className="fourFiveDiv"
                initial="hide"
                animate={ isFourthInput ? "show" : "hide" }
                variants={valuesState}>
                    <motion.input
                      className="textInput"
                      type="text"
                      value={myValues_4}
                      placeholder=""
                      onChange={(e) => setMyValues_4(e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="minusIcon"
                      icon={faCircleMinus}
                      onClick={()=> {
                        setIsFourthInput(isFourthInput => !isFourthInput);
                        setIsFourthButton(isFourthButton => true);
                        setIsFifthButton(isFifthButton => true);
                      }}/>

                </motion.div>

                    <motion.div
                          animate={ isFifthButton ? "hide" : "show" }
                          variants={valuesState}
                    >
                    <FontAwesomeIcon
                      className="addIcon"
                      icon={faCirclePlus}
                      onClick={()=> {
                        setIsFifthInput(isFifthInput => !isFifthInput);
                        setIsFifthButton(isFifthButton => true);
                      }}/>
                </motion.div>

                <motion.div
                  className="fiveDiv"
                  initial="hide"
                  animate={ isFifthInput ? "show" : "hide" }
                  variants={valuesState}>
                    <motion.input
                      className="textInput"
                      type="text"
                      value={myValues_5}
                      placeholder=""
                      onChange={(e) => setMyValues_5(e.target.value)}
                    />

                    <FontAwesomeIcon
                      className="minusIcon"
                      icon={faCircleMinus}
                      onClick={()=> {
                        setIsFifthInput(isFifthInput => !isFifthInput);
                        setIsFifthButton(isFifthButton => false);
                      }}/>
                  </motion.div>

                    <Button
                    className="valuesButton"
                    onClick={() => {

                      setIsConsistency(isConsistency => !isConsistency);
                     setIsExperience(isExperience => !isExperience);

                   }}>Next Stage</Button>
                    </motion.div>

                    <motion.div
                    className="experienceContainer"
                    whileHover={{ scale: 1.05 }}
                    animate={ isExperience ? "open" : "closed" }
                    initial="hidden"
                    variants={experienceStateMob}>
                    <h1>Stage Two: Transcendency</h1>
                    <p>The traits you are considering not only have to optimise your performance and communicate clearly to others but they also, when authentically and consistently embodied, need to contribute to a special experience and environment for others.</p>
                    <p>Does that change what you have written down? (Have a tweak, have a play. Sit with the question for a minute)</p>
                    <motion.div
                    className="fourFiveDiv">
                    <input
                    className="textInput"
                      type="text"
                      value={myValues_1}
                      placeholder=""
                      onChange={(e) => setMyValues_1(e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="bullseyeIcon"
                      icon={faBullseye}
                      />
                    </motion.div>

                    <motion.div
                    className="fourFiveDiv">
                    <input
                    className="textInput"
                      type="text"
                      value={myValues_2}
                      placeholder=""
                      onChange={(e) => setMyValues_2(e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="bullseyeIcon"
                      icon={faBullseye}
                      />
                    </motion.div>

                    <motion.div
                    className="fourFiveDiv">
                    <input
                    className="textInput"
                      type="text"
                      value={myValues_3}
                      placeholder=""
                      onChange={(e) => setMyValues_3(e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="bullseyeIcon"
                      icon={faBullseye}
                      />
                    </motion.div>

                <motion.div
                      animate={ isFourthButton ? "show" : "hide" }
                      variants={valuesState}>
                    <FontAwesomeIcon
                      className="addIcon"
                      icon={faCirclePlus}

                      onClick={()=> {
                        setIsFourthInput(isFourthInput => !isFourthInput);
                        setIsFifthButton(isFifthButton => !isFifthButton);
                        setIsFourthButton(isFourthButton => false);
                      }}/>
                      </motion.div>

                <motion.div
                className="fourFiveDiv"
                initial="hide"
                animate={ isFourthInput ? "show" : "hide" }
                variants={valuesState}>
                    <motion.input
                      className="textInput"
                      type="text"
                      value={myValues_4}
                      placeholder=""
                      onChange={(e) => setMyValues_4(e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="minusIcon"
                      icon={faCircleMinus}
                      onClick={()=> {
                        setIsFourthInput(isFourthInput => !isFourthInput);
                        setIsFourthButton(isFourthButton => true);
                        setIsFifthButton(isFifthButton => true);
                      }}/>

                </motion.div>

                    <motion.div
                          animate={ isFifthButton ? "hide" : "show" }
                          variants={valuesState}
                    >
                    <FontAwesomeIcon
                      className="addIcon"
                      icon={faCirclePlus}
                      onClick={()=> {
                        setIsFifthInput(isFifthInput => !isFifthInput);
                        setIsFifthButton(isFifthButton => true);
                      }}/>
                </motion.div>

                <motion.div
                  className="fiveDiv"
                  initial="hide"
                  animate={ isFifthInput ? "show" : "hide" }
                  variants={valuesState}>
                    <motion.input
                      className="textInput"
                      type="text"
                      value={myValues_5}
                      placeholder=""
                      onChange={(e) => setMyValues_5(e.target.value)}
                    />

                    <FontAwesomeIcon
                      className="minusIcon"
                      icon={faCircleMinus}
                      onClick={()=> {
                        setIsFifthInput(isFifthInput => !isFifthInput);
                        setIsFifthButton(isFifthButton => false);
                      }}/>
                  </motion.div>



                    <Button
                    className="valuesButton"
                    onClick={() => {

                     setIsExperience(isExperience => !isExperience);
                       setIsSpecificity(isSpecificity => !isSpecificity);

                    }}>Next Stage</Button>
                    </motion.div>

                    <motion.div
                    className="specificityContainer"
                    whileHover={{ scale: 1.05 }}
                    animate={ isSpecificity ? "open" : "closed" }
                    initial="hidden"
                    variants={specificityStateMob}>
                    <h1>Stage Three: Specificity</h1>
                    <p>Single words are inherently ambigious, yet you have pick these traits because they mean something specifically to your experience of life.</p>
                    <p>Add a short phrase next to each trait that would help you explain it to someone else.</p>
                    <motion.div
                    className="fourFiveDiv">
                    <div className="valuesIntBox">
                    <input
                      className="valueText"
                      type="text"
                      value={myValues_1}
                      placeholder=""
                      onChange={(e) => setMyValues_1(e.target.value)}
                    />
                    <input
                      className="valueExplainer"
                      type="text"
                      value={myValues_1_Text}
                      placeholder=""
                      onChange={(e) => setMyValues_1_Text(e.target.value)}
                    />

                      </div>
                      <FontAwesomeIcon
                        className="bullseyeIcon"
                        icon={faBullseye}
                        />
                      </motion.div>
                      <motion.div
                      className="fourFiveDiv">
                        <div className="valuesIntBox">
                    <input
                      type="text"
                      value={myValues_2}
                      placeholder=""
                      onChange={(e) => setMyValues_2(e.target.value)}
                    />
                    <input
                      type="text"
                      value={myValues_2_Text}
                      placeholder=""
                      onChange={(e) => setMyValues_2_Text(e.target.value)}
                    />
                  </div>
                  <FontAwesomeIcon
                    className="bullseyeIcon"
                    icon={faBullseye}
                    />
                    </motion.div>

                    <motion.div
                    className="fourFiveDiv">
                      <div className="valuesIntBox">
                    <input
                      type="text"
                      value={myValues_3}
                      placeholder=""
                      onChange={(e) => setMyValues_3(e.target.value)}
                    />
                    <input
                      type="text"
                      value={myValues_3_Text}
                      placeholder=""
                      onChange={(e) => setMyValues_3_Text(e.target.value)}
                    />
                  </div>
                  <FontAwesomeIcon
                    className="bullseyeIcon"
                    icon={faBullseye}
                    />
                    </motion.div>


                  <motion.div
                        animate={ isFourthButton ? "show" : "hide" }
                        variants={valuesState}>
                      <FontAwesomeIcon
                        className="addIcon"
                        icon={faCirclePlus}
                        onClick={()=> {
                          setIsFourthInput(isFourthInput => !isFourthInput);
                          setIsFifthButton(isFifthButton => !isFifthButton);
                          setIsFourthButton(isFourthButton => false);
                        }}/>
                        </motion.div>

                  <motion.div
                  className="fourFiveDiv"
                  initial="hide"
                  animate={ isFourthInput ? "show" : "hide" }
                  variants={valuesState}>
                  <div className="valuesIntBox">
                <input
                  type="text"
                  value={myValues_4}
                  placeholder=""
                  onChange={(e) => setMyValues_4(e.target.value)}
                />
                <input
                  type="text"
                  value={myValues_4_Text}
                  placeholder=""
                  onChange={(e) => setMyValues_4_Text(e.target.value)}
                />
                </div>
                      <FontAwesomeIcon
                        className="minusIcon"
                        icon={faCircleMinus}
                        onClick={()=> {
                          setIsFourthInput(isFourthInput => !isFourthInput);
                          setIsFourthButton(isFourthButton => true);
                          setIsFifthButton(isFifthButton => true);
                        }}/>
                  </motion.div>

                      <motion.div
                            animate={ isFifthButton ? "hide" : "show" }
                            variants={valuesState}
                      >
                      <FontAwesomeIcon
                        className="addIcon"
                        icon={faCirclePlus}
                        onClick={()=> {
                          setIsFifthInput(isFifthInput => !isFifthInput);
                          setIsFifthButton(isFifthButton => true);
                        }}/>
                  </motion.div>

                  <motion.div
                    className="fiveDiv"
                    initial="hide"
                    animate={ isFifthInput ? "show" : "hide" }
                    variants={valuesState}>
                    <div className="valuesIntBox">
                  <input
                    type="text"
                    value={myValues_5}
                    placeholder=""
                    onChange={(e) => setMyValues_5(e.target.value)}
                  />
                  <input
                    type="text"
                    value={myValues_5_Text}
                    placeholder=""
                    onChange={(e) => setMyValues_5_Text(e.target.value)}
                  />
                </div>

                      <FontAwesomeIcon
                        className="minusIcon"
                        icon={faCircleMinus}
                        onClick={()=> {
                          setIsFifthInput(isFifthInput => !isFifthInput);
                          setIsFifthButton(isFifthButton => false);
                        }}/>
                    </motion.div>



                  <Button
                  className="valuesButton"
                  onClick={() => {

                   setIsSpecificity(isSpecificity => !isSpecificity);
                   setIsDisplayContainer(isDisplayContainer => !isDisplayContainer);

                  }}>Let's take a little look.</Button>
                    </motion.div>


                    <motion.div
                    className="finalDisplayContainer"
                    animate={ isDisplayContainer ? "open" : "closed" }
                    initial="hidden"
                    variants={finalDisplayState}>

                    <h1>Your Values</h1>
                    <p>How do these feel? Continue to play with the traits and explanations. Then, when you are happy, add them into your 'Year' view</p>

                    <motion.div className="valuesIntBox1">
                      <motion.div className="editDeleteValues1">
                          <FontAwesomeIcon
                            className="editIcon"
                            icon={faPenToSquare}
                            onClick={()=> {
                              setInputValues_1(inputValues_1 => !inputValues_1);
                            }}/>
                        </motion.div>

                        <motion.input
                          className="valueText"
                          animate={ inputValues_1 ? "show": "hide"}
                          variants={valueState}
                          type="text"
                          value={myValues_1}
                          placeholder=""
                          onChange={(e) => setMyValues_1(e.target.value)}
                        />

                    <motion.span
                    className="valueName"
                    animate={inputValues_1 ? "hide": "show"}
                    variants={valueState}>{myValues_1}: </motion.span>

                    <motion.span
                    className="valueExplanation"
                    animate={ inputValues_1_Text ? "hide": "show"}
                    variants={valueState}>
                    {myValues_1_Text}
                    </motion.span>


                    <motion.input
                      className="valueExplainer"
                      type="text"
                      value={myValues_1_Text}
                      animate={ inputValues_1_Text ? "show": "hide"}
                      variants={valueState}
                      placeholder=""
                      onChange={(e) => setMyValues_1_Text(e.target.value)}
                    />

                    <motion.div className="editDeleteValuesText1">
                        <FontAwesomeIcon
                          className="editIcon"
                          icon={faPenToSquare}
                          onClick={()=> {
                            setInputValues_1_Text(inputValues_1_Text => !inputValues_1_Text);
                          }}/>
                      </motion.div>
                      </motion.div>

                      <motion.div className="valuesIntBox2">
                        <motion.div className="editDeleteValues2">
                            <FontAwesomeIcon
                              className="editIcon"
                              icon={faPenToSquare}
                              onClick={()=> {
                                setInputValues_2(inputValues_2 => !inputValues_2);
                              }}/>
                          </motion.div>

                          <motion.input
                            className="valueText"
                            animate={ inputValues_2 ? "show": "hide"}
                            variants={valueState}
                            type="text"
                            value={myValues_2}
                            placeholder=""
                            onChange={(e) => setMyValues_2(e.target.value)}
                          />

                      <motion.span
                      className="valueName"
                      animate={inputValues_2 ? "hide": "show"}
                      variants={valueState}>{myValues_2}: </motion.span>

                      <motion.span
                      className="valueExplanation"
                      animate={ inputValues_2_Text ? "hide": "show"}
                      variants={valueState}>
                      {myValues_2_Text}
                      </motion.span>


                      <motion.input
                        className="valueExplainer"
                        type="text"
                        value={myValues_2_Text}
                        animate={ inputValues_2_Text ? "show": "hide"}
                        variants={valueState}
                        placeholder=""
                        onChange={(e) => setMyValues_2_Text(e.target.value)}
                      />

                      <motion.div className="editDeleteValuesText2">
                          <FontAwesomeIcon
                            className="editIcon"
                            icon={faPenToSquare}
                            onClick={()=> {
                              setInputValues_2_Text(inputValues_2_Text => !inputValues_2_Text);
                            }}/>
                        </motion.div>
                        </motion.div>

                        <motion.div className="valuesIntBox3">
                          <motion.div className="editDeleteValues3">
                              <FontAwesomeIcon
                                className="editIcon"
                                icon={faPenToSquare}
                                onClick={()=> {
                                  setInputValues_3(inputValues_3 => !inputValues_3);
                                }}/>
                            </motion.div>

                            <motion.input
                              className="valueText"
                              animate={ inputValues_3 ? "show": "hide"}
                              variants={valueState}
                              type="text"
                              value={myValues_3}
                              placeholder=""
                              onChange={(e) => setMyValues_3(e.target.value)}
                            />

                        <motion.span
                        className="valueName"
                        animate={inputValues_3 ? "hide": "show"}
                        variants={valueState}>{myValues_3}: </motion.span>

                        <motion.span
                        className="valueExplanation"
                        animate={ inputValues_3_Text ? "hide": "show"}
                        variants={valueState}>
                        {myValues_3_Text}
                        </motion.span>


                        <motion.input
                          className="valueExplainer"
                          type="text"
                          value={myValues_3_Text}
                          animate={ inputValues_3_Text ? "show": "hide"}
                          variants={valueState}
                          placeholder=""
                          onChange={(e) => setMyValues_3_Text(e.target.value)}
                        />

                        <motion.div className="editDeleteValuesText3">
                            <FontAwesomeIcon
                              className="editIcon"
                              icon={faPenToSquare}
                              onClick={()=> {
                                setInputValues_3_Text(inputValues_3_Text => !inputValues_3_Text);
                              }}/>
                          </motion.div>
                          </motion.div>

                { myValues_4 ?
                          <motion.div className="valuesIntBox4">
                            <motion.div className="editDeleteValues4">
                                <FontAwesomeIcon
                                  className="editIcon"
                                  icon={faPenToSquare}
                                  onClick={()=> {
                                    setInputValues_4(inputValues_4 => !inputValues_4);
                                  }}/>
                              </motion.div>

                              <motion.input
                                className="valueText"
                                animate={ inputValues_4 ? "show": "hide"}
                                variants={valueState}
                                type="text"
                                value={myValues_4}
                                placeholder=""
                                onChange={(e) => setMyValues_4(e.target.value)}
                              />

                          <motion.span
                          className="valueName"
                          animate={inputValues_4 ? "hide": "show"}
                          variants={valueState}>{myValues_4}: </motion.span>

                          <motion.span
                          className="valueExplanation"
                          animate={ inputValues_4_Text ? "hide": "show"}
                          variants={valueState}>
                          {myValues_4_Text}
                          </motion.span>


                          <motion.input
                            className="valueExplainer"
                            type="text"
                            value={myValues_4_Text}
                            animate={ inputValues_4_Text ? "show": "hide"}
                            variants={valueState}
                            placeholder=""
                            onChange={(e) => setMyValues_4_Text(e.target.value)}
                          />

                          <motion.div className="editDeleteValuesText4">
                              <FontAwesomeIcon
                                className="editIcon"
                                icon={faPenToSquare}
                                onClick={()=> {
                                  setInputValues_4_Text(inputValues_4_Text => !inputValues_4_Text);
                                }}/>
                            </motion.div>
                            </motion.div>
                            : null }


                { myValues_5 ?
                            <motion.div className="valuesIntBox5">
                              <motion.div className="editDeleteValues5">
                                  <FontAwesomeIcon
                                    className="editIcon"
                                    icon={faPenToSquare}
                                    onClick={()=> {
                                      setInputValues_5(inputValues_5 => !inputValues_5);
                                    }}/>
                                </motion.div>

                                <motion.input
                                  className="valueText"
                                  animate={ inputValues_5 ? "show": "hide"}
                                  variants={valueState}
                                  type="text"
                                  value={myValues_5}
                                  placeholder=""
                                  onChange={(e) => setMyValues_5(e.target.value)}
                                />

                            <motion.span
                            className="valueName"
                            animate={inputValues_5 ? "hide": "show"}
                            variants={valueState}>{myValues_5}: </motion.span>

                            <motion.span
                            className="valueExplanation"
                            animate={ inputValues_5_Text ? "hide": "show"}
                            variants={valueState}>
                            {myValues_5_Text}
                            </motion.span>


                            <motion.input
                              className="valueExplainer"
                              type="text"
                              value={myValues_5_Text}
                              animate={ inputValues_5_Text ? "show": "hide"}
                              variants={valueState}
                              placeholder=""
                              onChange={(e) => setMyValues_5_Text(e.target.value)}
                            />

                            <motion.div className="editDeleteValuesText5">
                                <FontAwesomeIcon
                                  className="editIcon"
                                  icon={faPenToSquare}
                                  onClick={()=> {
                                    setInputValues_5_Text(inputValues_5_Text => !inputValues_5_Text);
                                  }}/>
                              </motion.div>
                              </motion.div>

                              : null }

                    </motion.div>

                  </motion.div>
      }

    </AnimatePresence>
        </AnimateSharedLayout>
  );
}

export default Intro;
