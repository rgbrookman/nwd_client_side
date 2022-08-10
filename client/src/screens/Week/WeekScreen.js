import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createWeekAction, listWeeks, updateWeekAction } from '../../actions/weekActions';
import Loading from '../../components/Loading/Loading';
import PageLoading from '../../components/Loading/PageLoading';
import Header from '../../components/Header/Header';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import './week.css';
import axios from "axios";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export default function WeekScreen({ history }) {

  // Form State
  const [objectiveOne_text, setObjectiveOne_text] = useState();
  const [objectiveOne_score, setObjectiveOne_score] = useState();
  const [objectiveTwo_text, setObjectiveTwo_text] = useState();
  const [objectiveTwo_score, setObjectiveTwo_score] = useState();
  const [objectiveThree_text, setObjectiveThree_text] = useState();
  const [objectiveThree_score, setObjectiveThree_score] = useState();
  const [objectiveFour_text, setObjectiveFour_text] = useState();
  const [objectiveFour_score, setObjectiveFour_score] = useState();
  const [objectiveFive_text, setObjectiveFive_text] = useState();
  const [objectiveFive_score, setObjectiveFive_score] = useState();
  const [objectiveSix_text, setObjectiveSix_text] = useState();
  const [objectiveSix_score, setObjectiveSix_score] = useState();
  const [objectiveSeven_text, setObjectiveSeven_text] = useState();
  const [objectiveSeven_score, setObjectiveSeven_score] = useState();
  const [objectiveEight_text, setObjectiveEight_text] = useState();
  const [objectiveEight_score, setObjectiveEight_score] = useState();
  const [objectiveNine_text, setObjectiveNine_text] = useState();
  const [objectiveNine_score, setObjectiveNine_score] = useState();
  const [objectiveTen_text, setObjectiveTen_text] = useState();
  const [objectiveTen_score, setObjectiveTen_score] = useState();

// Hide/Display State
const [isInput1, setIsInput1] = useState(true);
const [isCircleCheck1, setCircleCheck1] = useState(false);
const [isEditIcon1, setEditIcon1] = useState(true);

const [isInput2, setIsInput2] = useState(true);
const [isCircleCheck2, setCircleCheck2] = useState(false);
const [isEditIcon2, setEditIcon2] = useState(true);

const [isInput3, setIsInput3] = useState(true);
const [isCircleCheck3, setCircleCheck3] = useState(false);
const [isEditIcon3, setEditIcon3] = useState(true);

const [isInput4, setIsInput4] = useState(true);
const [isCircleCheck4, setCircleCheck4] = useState(false);
const [isEditIcon4, setEditIcon4] = useState(true);

const [isInput5, setIsInput5] = useState(true);
const [isCircleCheck5, setCircleCheck5] = useState(false);
const [isEditIcon5, setEditIcon5] = useState(true);

const [isInput6, setIsInput6] = useState(true);
const [isCircleCheck6, setCircleCheck6] = useState(false);
const [isEditIcon6, setEditIcon6] = useState(true);

const [isInput7, setIsInput7] = useState(true);
const [isCircleCheck7, setCircleCheck7] = useState(false);
const [isEditIcon7, setEditIcon7] = useState(true);

const [isInput8, setIsInput8] = useState(true);
const [isCircleCheck8, setCircleCheck8] = useState(false);
const [isEditIcon8, setEditIcon8] = useState(true);

const [isInput9, setIsInput9] = useState(true);
const [isCircleCheck9, setCircleCheck9] = useState(false);
const [isEditIcon9, setEditIcon9] = useState(true);

const [isInput10, setIsInput10] = useState(true);
const [isCircleCheck10, setCircleCheck10] = useState(false);
const [isEditIcon10, setEditIcon10] = useState(true);

const [videoDisplay, setVideoDisplay] = useState(true);

  const [pageLoading, setPageLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const weekList = useSelector((state) => state.weekList);
  const { loading, error, weeks } = weekList;

  const weekUpdate = useSelector((state) => state.weekUpdate);
  const { success: successUpdate } = weekUpdate;


  useEffect(() => {
    dispatch(listWeeks());
  }, [dispatch, userInfo, history]);


  useEffect(() => {

    const fetching = async () => {
      try {
        const { data } = await axios.get(`https://nwd22-webapp.herokuapp.com/api/weeks/week/${id}`);
          setObjectiveOne_text(data.objectiveOne_text);
          setObjectiveOne_score(data.objectiveOne_score);
          setObjectiveTwo_text(data.objectiveTwo_text);
          setObjectiveTwo_score(data.objectiveTwo_score);
          setObjectiveThree_text(data.objectiveThree_text);
          setObjectiveThree_score(data.objectiveThree_score);
          setObjectiveFour_text(data.objectiveFour_text);
          setObjectiveFour_score(data.objectiveFour_score);
          setObjectiveFive_text(data.objectiveFive_text);
          setObjectiveFive_score(data.objectiveFive_score);
          setObjectiveSix_text(data.objectiveSix_text);
          setObjectiveSix_score(data.objectiveSix_score);
          setObjectiveSeven_text(data.objectiveSeven_text);
          setObjectiveSeven_score(data.objectiveSeven_score);
          setObjectiveEight_text(data.objectiveEight_text);
          setObjectiveEight_score(data.objectiveEight_score);
          setObjectiveNine_text(data.objectiveNine_text);
          setObjectiveNine_score(data.objectiveNine_score);
          setObjectiveTen_text(data.objectiveTen_text);
          setObjectiveTen_score(data.objectiveTen_score);
  } catch(error) {
    console.log(error);
  }
      }
    fetching();
  }, [id]);


  const resetHandler = () => {
    setObjectiveOne_text("");
    setObjectiveOne_score("");
    setObjectiveTwo_text("");
    setObjectiveTwo_score("");
    setObjectiveThree_text("");
    setObjectiveThree_score("");
    setObjectiveFour_text("");
    setObjectiveFour_score("");
    setObjectiveFive_text("");
    setObjectiveFive_score("");
    setObjectiveSix_text("");
    setObjectiveSix_score("");
    setObjectiveSeven_text("");
    setObjectiveSeven_score("");
    setObjectiveEight_text("");
    setObjectiveEight_score("");
    setObjectiveNine_text("");
    setObjectiveNine_score("");
    setObjectiveTen_text("");
    setObjectiveTen_score("");
};

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateWeekAction(id,
      objectiveOne_text,
      objectiveOne_score,
      objectiveTwo_text,
      objectiveTwo_score,
      objectiveThree_text,
      objectiveThree_score,
      objectiveFour_text,
      objectiveFour_score,
      objectiveFive_text,
      objectiveFive_score,
      objectiveSix_text,
      objectiveSix_score,
      objectiveSeven_text,
      objectiveSeven_score,
      objectiveEight_text,
      objectiveEight_score,
      objectiveNine_text,
      objectiveNine_score,
      objectiveTen_text,
      objectiveTen_score));

      if (!objectiveOne_text ||
          !objectiveOne_score ||
          !objectiveTwo_text ||
          !objectiveTwo_score ||
          !objectiveThree_text ||
          !objectiveThree_score ||
          !objectiveFour_text ||
          !objectiveFour_score ||
          !objectiveFive_text ||
          !objectiveFive_score ||
          !objectiveSix_text ||
          !objectiveSix_score ||
          !objectiveSeven_text ||
          !objectiveSeven_score ||
          !objectiveEight_text ||
          !objectiveEight_score ||
          !objectiveNine_text ||
          !objectiveNine_score ||
          !objectiveTen_text ||
          !objectiveTen_score) return;
      resetHandler();
      setTimeout(()=> {
        window.location.reload();
      }, 250);
  };

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
{ pageLoading ? <div className="pageLoading"><PageLoading /></div> :
<Container className="weekScreenMain" fluid>

<motion.div
animate={videoDisplay ? "hide" : "show"}
variants={valueState}
className="videoContainer">
<h1>Video</h1>
</motion.div>

  <Form onSubmit={updateHandler}>

  <Row id="buttonRow">

      <Button className="submitWeekButton" type="submit">
        Update
      </Button>

      <Button className="explainerButton"
      onClick={()=> {
        setVideoDisplay(videoDisplay => !videoDisplay);
      }}>
      Learn About Your Week Page
      </Button>

      <Button className="submitWeekButton" href='/week/create'>
        Create New Week
      </Button>
  </Row>
 
<Row>
<Col sm={12} md={6} lg={6} xl={6}>

    <Row id="objectiveRow" className="rowOne mb-4 align-items-center">

      <Col className="mb-1" sm={12} md={7} xl={7}>

        <Form.Group>
          <div className="labelButtonDiv">
            <Form.Label className="objectiveLabel">Objective #1</Form.Label>
            <div className="weekEditDelete">
            <motion.div
            className="weekEditIconDiv"
            animate={ isEditIcon1 ? "show" : "hide"}
            variants={showHideState}
            >
              <FontAwesomeIcon
                className="weekEditIcon"
                icon={faPenToSquare}
                onClick={() => {
                  setIsInput1(isInput1 => false);
                  setCircleCheck1(isCircleCheck1 => true);
                  setEditIcon1(isEditIcon1 => false);
                }}/>
                  </motion.div>
                <motion.div
                className="updateButtonDiv"
                animate={ isCircleCheck1 ? "show" : "hide"}
                variants={showHideState}
                >
                <FontAwesomeIcon
                  className="weekUpdateIcon"
                  icon={faCircleCheck}
                  onClick={() => {
                    setIsInput1(isInput1 => true);
                    setEditIcon1(isEditIcon1 => true);
                      setCircleCheck1(isCircleCheck1 => false);
                  }}/>
                  </motion.div>
                </div>
              </div>

        <motion.span
        className="weekObjectiveText"
        animate={ isInput1 ? "show" : "hide"}
          variants={showHideState}
        >
        {objectiveOne_text}
        </motion.span>


            <motion.div
            animate={ isInput1 ? "hide" : "show"}
            variants={showHideState} >

            <Form.Control
              className="form-control"
              as="textarea"
              rows={3}
              value={objectiveOne_text}
              onChange={(e) => setObjectiveOne_text(e.target.value)} />
                </motion.div>
        </Form.Group>
      </Col>

<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress</Form.Label>
<input
id="objectiveSlider"
className="slider"
type="range"
min="0"
max="10"
step="1"
value={objectiveOne_score}
onChange={(e) => setObjectiveOne_score(e.target.value)}
/>
</Form.Group>
</Col>
</Row>

<Row id="objectiveRow" className="rowTwo mb-4 align-items-center">

  <Col className="mb-1" sm={12} md={7} xl={7}>

    <Form.Group>
      <div className="labelButtonDiv">
        <Form.Label className="objectiveLabel">Objective #2</Form.Label>
        <div className="weekEditDelete">
        <motion.div
        className="weekEditIconDiv"
        animate={ isEditIcon2 ? "show" : "hide"}
        variants={showHideState}
        >
          <FontAwesomeIcon
            className="weekEditIcon"
            icon={faPenToSquare}
            onClick={() => {
              setIsInput2(isInput2 => false);
              setCircleCheck2(isCircleCheck2 => true);
              setEditIcon2(isEditIcon2 => false);
            }}/>
              </motion.div>
            <motion.div
            className="updateButtonDiv"
            animate={ isCircleCheck2 ? "show" : "hide"}
            variants={showHideState}
            >
            <FontAwesomeIcon
              className="weekUpdateIcon"
              icon={faCircleCheck}
              onClick={() => {
                setIsInput2(isInput2 => true);
                setEditIcon2(isEditIcon2 => true);
                  setCircleCheck2(isCircleCheck2 => false);
              }}/>
              </motion.div>
            </div>
          </div>

    <motion.span
    className="weekObjectiveText"
    animate={ isInput2 ? "show" : "hide"}
      variants={showHideState}
    >
    {objectiveTwo_text}
    </motion.span>


        <motion.div
        animate={ isInput2 ? "hide" : "show"}
        variants={showHideState} >

        <Form.Control
          className="form-control"
          as="textarea"
          rows={3}
          value={objectiveTwo_text}
          onChange={(e) => setObjectiveTwo_text(e.target.value)} />
            </motion.div>
    </Form.Group>
  </Col>

<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress</Form.Label>
<input
id="objectiveSlider"
className="slider"
type="range"
min="0"
max="10"
step="1"
value={objectiveTwo_score}
onChange={(e) => setObjectiveTwo_score(e.target.value)}
/>
</Form.Group>
</Col>
</Row>

<Row id="objectiveRow" className="rowThree mb-4 align-items-center">

  <Col className="mb-1" sm={12} md={7} xl={7}>

    <Form.Group>
      <div className="labelButtonDiv">
        <Form.Label className="objectiveLabel">Objective #3</Form.Label>
        <div className="weekEditDelete">
        <motion.div
        className="weekEditIconDiv"
        animate={ isEditIcon3 ? "show" : "hide"}
        variants={showHideState}
        >
          <FontAwesomeIcon
            className="weekEditIcon"
            icon={faPenToSquare}
            onClick={() => {
              setIsInput3(isInput3 => false);
              setCircleCheck3(isCircleCheck3 => true);
              setEditIcon3(isEditIcon3 => false);
            }}/>
              </motion.div>
            <motion.div
            className="updateButtonDiv"
            animate={ isCircleCheck3 ? "show" : "hide"}
            variants={showHideState}
            >
            <FontAwesomeIcon
              className="weekUpdateIcon"
              icon={faCircleCheck}
              onClick={() => {
                setIsInput3(isInput3 => true);
                setEditIcon3(isEditIcon3 => true);
                  setCircleCheck3(isCircleCheck3 => false);
              }}/>
              </motion.div>
            </div>
          </div>

    <motion.span
    className="weekObjectiveText"
    animate={ isInput3 ? "show" : "hide"}
      variants={showHideState}
    >
    {objectiveThree_text}
    </motion.span>


        <motion.div
        animate={ isInput3 ? "hide" : "show"}
        variants={showHideState} >

        <Form.Control
          className="form-control"
          as="textarea"
          rows={3}
          value={objectiveThree_text}
          onChange={(e) => setObjectiveThree_text(e.target.value)} />
            </motion.div>
    </Form.Group>
  </Col>

<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress</Form.Label>
<input
id="objectiveSlider"
className="slider"
type="range"
min="0"
max="10"
step="1"
value={objectiveThree_score}
onChange={(e) => setObjectiveThree_score(e.target.value)}
/>
</Form.Group>
</Col>
</Row>




<Row id="objectiveRow" className="rowFour mb-4 align-items-center">

  <Col className="mb-1" sm={12} md={7} xl={7}>

    <Form.Group>
      <div className="labelButtonDiv">
        <Form.Label className="objectiveLabel">Objective #4</Form.Label>
        <div className="weekEditDelete">
        <motion.div
        className="weekEditIconDiv"
        animate={ isEditIcon4 ? "show" : "hide"}
        variants={showHideState}
        >
          <FontAwesomeIcon
            className="weekEditIcon"
            icon={faPenToSquare}
            onClick={() => {
              setIsInput4(isInput4 => false);
              setCircleCheck4(isCircleCheck4 => true);
              setEditIcon4(isEditIcon4 => false);
            }}/>
              </motion.div>
            <motion.div
            className="updateButtonDiv"
            animate={ isCircleCheck4 ? "show" : "hide"}
            variants={showHideState}
            >
            <FontAwesomeIcon
              className="weekUpdateIcon"
              icon={faCircleCheck}
              onClick={() => {
                setIsInput4(isInput4 => true);
                setEditIcon4(isEditIcon4 => true);
                  setCircleCheck4(isCircleCheck4 => false);
              }}/>
              </motion.div>
            </div>
          </div>

    <motion.span
    className="weekObjectiveText"
    animate={ isInput4 ? "show" : "hide"}
      variants={showHideState}
    >
    {objectiveFour_text}
    </motion.span>


        <motion.div
        animate={ isInput4 ? "hide" : "show"}
        variants={showHideState} >

        <Form.Control
          className="form-control"
          as="textarea"
          rows={3}
          value={objectiveFour_text}
          onChange={(e) => setObjectiveFour_text(e.target.value)} />
            </motion.div>
    </Form.Group>
  </Col>

<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress</Form.Label>
<input
id="objectiveSlider"
className="slider"
type="range"
min="0"
max="10"
step="1"
value={objectiveFour_score}
onChange={(e) => setObjectiveFour_score(e.target.value)}
/>
</Form.Group>
</Col>
</Row>

<Row id="objectiveRow" className="rowFive mb-4 align-items-center">

  <Col className="mb-1" sm={12} md={7} xl={7}>

    <Form.Group>
      <div className="labelButtonDiv">
        <Form.Label className="objectiveLabel">Objective #5</Form.Label>
        <div className="weekEditDelete">
        <motion.div
        className="weekEditIconDiv"
        animate={ isEditIcon5 ? "show" : "hide"}
        variants={showHideState}
        >
          <FontAwesomeIcon
            className="weekEditIcon"
            icon={faPenToSquare}
            onClick={() => {
              setIsInput5(isInput5 => false);
              setCircleCheck5(isCircleCheck5 => true);
              setEditIcon5(isEditIcon5 => false);
            }}/>
              </motion.div>
            <motion.div
            className="updateButtonDiv"
            animate={ isCircleCheck5 ? "show" : "hide"}
            variants={showHideState}
            >
            <FontAwesomeIcon
              className="weekUpdateIcon"
              icon={faCircleCheck}
              onClick={() => {
                setIsInput5(isInput5 => true);
                setEditIcon5(isEditIcon5 => true);
                setCircleCheck5(isCircleCheck5 => false);
              }}/>
              </motion.div>
            </div>
          </div>

    <motion.span
    className="weekObjectiveText"
    animate={ isInput5 ? "show" : "hide"}
      variants={showHideState}
    >
    {objectiveFive_text}
    </motion.span>


        <motion.div
        animate={ isInput5 ? "hide" : "show"}
        variants={showHideState} >

        <Form.Control
          className="form-control"
          as="textarea"
          rows={3}
          value={objectiveFive_text}
          onChange={(e) => setObjectiveFive_text(e.target.value)} />
            </motion.div>
    </Form.Group>
  </Col>

<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress</Form.Label>
<input
id="objectiveSlider"
className="slider"
type="range"
min="0"
max="10"
step="1"
value={objectiveFive_score}
onChange={(e) => setObjectiveFive_score(e.target.value)}
/>
</Form.Group>
</Col>
</Row>
</Col>

<Col sm={12} md={6} lg={6} xl={6}>

<Row id="objectiveRow" className="rowSix mb-4 align-items-center">

  <Col className="mb-1" sm={12} md={7} xl={7}>

    <Form.Group>
      <div className="labelButtonDiv">
        <Form.Label className="objectiveLabel">Objective #6</Form.Label>
        <div className="weekEditDelete">
        <motion.div
        className="weekEditIconDiv"
        animate={ isEditIcon6 ? "show" : "hide"}
        variants={showHideState}
        >
          <FontAwesomeIcon
            className="weekEditIcon"
            icon={faPenToSquare}
            onClick={() => {
              setIsInput6(isInput6 => false);
              setCircleCheck6(isCircleCheck6 => true);
              setEditIcon6(isEditIcon6 => false);
            }}/>
              </motion.div>
            <motion.div
            className="updateButtonDiv"
            animate={ isCircleCheck6 ? "show" : "hide"}
            variants={showHideState}
            >
            <FontAwesomeIcon
              className="weekUpdateIcon"
              icon={faCircleCheck}
              onClick={() => {
                setIsInput6(isInput6 => true);
                setEditIcon6(isEditIcon6 => true);
                setCircleCheck6(isCircleCheck6 => false);
              }}/>
              </motion.div>
            </div>
          </div>

    <motion.span
    className="weekObjectiveText"
    animate={ isInput6 ? "show" : "hide"}
      variants={showHideState}
    >
    {objectiveSix_text}
    </motion.span>


        <motion.div
        animate={ isInput6 ? "hide" : "show"}
        variants={showHideState} >

        <Form.Control
          className="form-control"
          as="textarea"
          rows={3}
          value={objectiveSix_text}
          onChange={(e) => setObjectiveSix_text(e.target.value)} />
            </motion.div>
    </Form.Group>
  </Col>

<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress</Form.Label>
<input
id="objectiveSlider"
className="slider"
type="range"
min="0"
max="10"
step="1"
value={objectiveSix_score}
onChange={(e) => setObjectiveSix_score(e.target.value)}
/>
</Form.Group>
</Col>
</Row>

<Row id="objectiveRow" className="rowSeven mb-4 align-items-center">

  <Col className="mb-1" sm={12} md={7} xl={7}>

    <Form.Group>
      <div className="labelButtonDiv">
        <Form.Label className="objectiveLabel">Objective #7</Form.Label>
        <div className="weekEditDelete">
        <motion.div
        className="weekEditIconDiv"
        animate={ isEditIcon7 ? "show" : "hide"}
        variants={showHideState}
        >
          <FontAwesomeIcon
            className="weekEditIcon"
            icon={faPenToSquare}
            onClick={() => {
              setIsInput7(isInput7 => false);
              setCircleCheck7(isCircleCheck7 => true);
              setEditIcon7(isEditIcon7 => false);
            }}/>
              </motion.div>
            <motion.div
            className="updateButtonDiv"
            animate={ isCircleCheck7 ? "show" : "hide"}
            variants={showHideState}
            >
            <FontAwesomeIcon
              className="weekUpdateIcon"
              icon={faCircleCheck}
              onClick={() => {
                setIsInput7(isInput7 => true);
                setEditIcon7(isEditIcon7 => true);
                setCircleCheck7(isCircleCheck7 => false);
              }}/>
              </motion.div>
            </div>
          </div>

    <motion.span
    className="weekObjectiveText"
    animate={ isInput7 ? "show" : "hide"}
      variants={showHideState}
    >
    {objectiveSeven_text}
    </motion.span>


        <motion.div
        animate={ isInput7 ? "hide" : "show"}
        variants={showHideState} >

        <Form.Control
          className="form-control"
          as="textarea"
          rows={3}
          value={objectiveSeven_text}
          onChange={(e) => setObjectiveSeven_text(e.target.value)} />
            </motion.div>
    </Form.Group>
  </Col>

<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress</Form.Label>
<input
id="objectiveSlider"
className="slider"
type="range"
min="0"
max="10"
step="1"
value={objectiveSeven_score}
onChange={(e) => setObjectiveSeven_score(e.target.value)}
/>
</Form.Group>
</Col>
</Row>

<Row id="objectiveRow" className="rowEight mb-4 align-items-center">

  <Col className="mb-1" sm={12} md={7} xl={7}>

    <Form.Group>
      <div className="labelButtonDiv">
        <Form.Label className="objectiveLabel">Objective #8</Form.Label>
        <div className="weekEditDelete">
        <motion.div
        className="weekEditIconDiv"
        animate={ isEditIcon8 ? "show" : "hide"}
        variants={showHideState}
        >
          <FontAwesomeIcon
            className="weekEditIcon"
            icon={faPenToSquare}
            onClick={() => {
              setIsInput8(isInput8 => false);
              setCircleCheck8(isCircleCheck8 => true);
              setEditIcon8(isEditIcon8 => false);
            }}/>
              </motion.div>
            <motion.div
            className="updateButtonDiv"
            animate={ isCircleCheck8 ? "show" : "hide"}
            variants={showHideState}
            >
            <FontAwesomeIcon
              className="weekUpdateIcon"
              icon={faCircleCheck}
              onClick={() => {
                setIsInput8(isInput8 => true);
                setEditIcon8(isEditIcon8 => true);
                setCircleCheck8(isCircleCheck8 => false);
              }}/>
              </motion.div>
            </div>
          </div>

    <motion.span
    className="weekObjectiveText"
    animate={ isInput8 ? "show" : "hide"}
      variants={showHideState}
    >
    {objectiveEight_text}
    </motion.span>


        <motion.div
        animate={ isInput8 ? "hide" : "show"}
        variants={showHideState} >

        <Form.Control
          className="form-control"
          as="textarea"
          rows={3}
          value={objectiveEight_text}
          onChange={(e) => setObjectiveEight_text(e.target.value)} />
            </motion.div>
    </Form.Group>
  </Col>

<Col sm={12} md={5} xl={5}>
<Form.Group>
<Form.Label className="objectiveLabel">Progress</Form.Label>
<input
id="objectiveSlider"
className="slider"
type="range"
min="0"
max="10"
step="1"
value={objectiveEight_score}
onChange={(e) => setObjectiveEight_score(e.target.value)}
/>
</Form.Group>
</Col>
</Row>

<Row id="objectiveRow" className="rowNine mb-4 align-items-center">

  <Col className="mb-1" sm={12} md={7} xl={7}>

    <Form.Group>
      <div className="labelButtonDiv">
        <Form.Label className="objectiveLabel">Objective #9</Form.Label>
        <div className="weekEditDelete">
        <motion.div
        className="weekEditIconDiv"
        animate={ isEditIcon9 ? "show" : "hide"}
        variants={showHideState}
        >
          <FontAwesomeIcon
            className="weekEditIcon"
            icon={faPenToSquare}
            onClick={() => {
              setIsInput9(isInput9 => false);
              setCircleCheck9(isCircleCheck9 => true);
              setEditIcon9(isEditIcon9 => false);
            }}/>
              </motion.div>
            <motion.div
            className="updateButtonDiv"
            animate={ isCircleCheck9 ? "show" : "hide"}
            variants={showHideState}
            >
            <FontAwesomeIcon
              className="weekUpdateIcon"
              icon={faCircleCheck}
              onClick={() => {
                setIsInput9(isInput9 => true);
                setEditIcon9(isEditIcon9 => true);
                setCircleCheck9(isCircleCheck9 => false);
              }}/>
              </motion.div>
            </div>
          </div>

    <motion.span
    className="weekObjectiveText"
    animate={ isInput9 ? "show" : "hide"}
      variants={showHideState}
    >
    {objectiveNine_text}
    </motion.span>


        <motion.div
        animate={ isInput9 ? "hide" : "show"}
        variants={showHideState} >

        <Form.Control
          className="form-control"
          as="textarea"
          rows={3}
          value={objectiveNine_text}
          onChange={(e) => setObjectiveNine_text(e.target.value)} />
            </motion.div>
    </Form.Group>
  </Col>

<Col sm={12} md={5} xl={5}>
<Form.Group>
<Form.Label className="objectiveLabel">Progress</Form.Label>
<input
id="objectiveSlider"
className="slider"
type="range"
min="0"
max="10"
step="1"
value={objectiveNine_score}
onChange={(e) => setObjectiveNine_score(e.target.value)}
/>
</Form.Group>
</Col>
</Row>

<Row id="objectiveRow" className="rowTen mb-4 align-items-center">

  <Col className="mb-1" sm={12} md={7} xl={7}>

    <Form.Group>
      <div className="labelButtonDiv">
        <Form.Label className="objectiveLabel">Objective #10</Form.Label>
        <div className="weekEditDelete">
        <motion.div
        className="weekEditIconDiv"
        animate={ isEditIcon10 ? "show" : "hide"}
        variants={showHideState}
        >
          <FontAwesomeIcon
            className="weekEditIcon"
            icon={faPenToSquare}
            onClick={() => {
              setIsInput10(isInput10 => false);
              setCircleCheck10(isCircleCheck10 => true);
              setEditIcon10(isEditIcon10 => false);
            }}/>
              </motion.div>
            <motion.div
            className="updateButtonDiv"
            animate={ isCircleCheck10 ? "show" : "hide"}
            variants={showHideState}
            >
            <FontAwesomeIcon
              className="weekUpdateIcon"
              icon={faCircleCheck}
              onClick={() => {
                setIsInput10(isInput10 => true);
                setEditIcon10(isEditIcon10 => true);
                setCircleCheck10(isCircleCheck10 => false);
              }}/>
              </motion.div>
            </div>
          </div>

    <motion.span
    className="weekObjectiveText"
    animate={ isInput10 ? "show" : "hide"}
      variants={showHideState}
    >
    {objectiveTen_text}
    </motion.span>


        <motion.div
        animate={ isInput10 ? "hide" : "show"}
        variants={showHideState} >

        <Form.Control
          className="form-control"
          as="textarea"
          rows={3}
          value={objectiveTen_text}
          onChange={(e) => setObjectiveTen_text(e.target.value)} />
            </motion.div>
    </Form.Group>
  </Col>

<Col sm={12} md={5} xl={5}>
<Form.Group>
<Form.Label className="objectiveLabel">Progress</Form.Label>
<input
id="objectiveSlider"
className="slider"
type="range"
min="0"
max="10"
step="1"
value={objectiveTen_score}
onChange={(e) => setObjectiveTen_score(e.target.value)}
/>
</Form.Group>
</Col>
</Row>
</Col>
</Row>
  
    </Form>

</Container>
}
</>
  );
}
