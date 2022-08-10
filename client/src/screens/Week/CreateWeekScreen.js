import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createWeekAction, listWeeks, updateWeekAction } from '../../actions/weekActions';
import Loading from '../../components/Loading/Loading';
import Header from '../../components/Header/Header';

import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import './week.css';
import axios from "axios";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export default function WeekScreen({ history }) {
  const [objectiveOne_text, setObjectiveOne_text] = useState("");
  const [objectiveOne_score, setObjectiveOne_score] = useState(0);
  const [objectiveTwo_text, setObjectiveTwo_text] = useState("");
  const [objectiveTwo_score, setObjectiveTwo_score] = useState(0);
  const [objectiveThree_text, setObjectiveThree_text] = useState("");
  const [objectiveThree_score, setObjectiveThree_score] = useState(0);
  const [objectiveFour_text, setObjectiveFour_text] = useState("");
  const [objectiveFour_score, setObjectiveFour_score] = useState(0);
  const [objectiveFive_text, setObjectiveFive_text] = useState("");
  const [objectiveFive_score, setObjectiveFive_score] = useState(0);
  const [objectiveSix_text, setObjectiveSix_text] = useState("");
  const [objectiveSix_score, setObjectiveSix_score] = useState(0);
  const [objectiveSeven_text, setObjectiveSeven_text] = useState("");
  const [objectiveSeven_score, setObjectiveSeven_score] = useState(0);
  const [objectiveEight_text, setObjectiveEight_text] = useState("");
  const [objectiveEight_score, setObjectiveEight_score] = useState(0);
  const [objectiveNine_text, setObjectiveNine_text] = useState("");
  const [objectiveNine_score, setObjectiveNine_score] = useState(0);
  const [objectiveTen_text, setObjectiveTen_text] = useState("");
  const [objectiveTen_score, setObjectiveTen_score] = useState(0);

  const [videoDisplay, setVideoDisplay] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const weekCreate = useSelector((state) => state.weekCreate);
  const { loading, error, weeks } = weekCreate;


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createWeekAction(
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
      objectiveTen_score,
    ));
      navigate('/');
  };

  const valueState = {
    hide: {
      display: "none",
    },
    show: {
      display: "block",
    },
  };


  return (
<>
<Header />

<Container className="weekScreenMain" fluid>
<motion.div
animate={videoDisplay ? "hide" : "show"}
variants={valueState}
className="videoContainer">
<h1>Video</h1>
</motion.div>

  <Form onSubmit={submitHandler}>
  <Row id="buttonRow" >
  <Button className="explainerButton"
  onClick={()=> {
    setVideoDisplay(videoDisplay => !videoDisplay);
  }}>
  Learn About Your Week Page
  </Button>

      <Button className="submitWeekButton" type="submit">
        Create New Week
      </Button>
  </Row>
  <Row>
  <Col sm={12} md={6} lg={6} xl={6}>
    <Row id="objectiveRow" className="mb-4 align-items-center">
      <Col className="mb-1" sm={12} md={7} xl={7}>
        <Form.Group >
          <Form.Label className="objectiveLabel">Objective #1</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder={"..."}
              value={objectiveOne_text}
              onChange={(e) => setObjectiveOne_text(e.target.value)} />
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

<Row id="objectiveRow" className="mb-4 align-items-center">
<Col className="mb-1" sm={12} md={7} xl={7}>
<Form.Group>
<Form.Label className="objectiveLabel">Objective #2</Form.Label>
<Form.Control
type="text"
  className="form-control"
placeholder={"..."}
value={objectiveTwo_text}
onChange={(e) => setObjectiveTwo_text(e.target.value)}
/>
</Form.Group>
</Col>
<Col sm={12} md={5} xl={5}>
<Form.Group>
<Form.Label className="objectiveLabel">Progress:</Form.Label>
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

<Row id="objectiveRow" className="mb-4 align-items-center">
<Col className="mb-1" sm={12} md={7} xl={7}>
<Form.Group >
<Form.Label className="objectiveLabel">Objective #3</Form.Label>
<Form.Control
type="text"
  className="form-control"
placeholder={"..."}
value={objectiveThree_text}
onChange={(e) => setObjectiveThree_text(e.target.value)}
/>
</Form.Group>
</Col>
<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress:</Form.Label>
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

<Row id="objectiveRow" className="mb-4 align-items-center">
<Col className="mb-1" sm={12} md={7} xl={7}>
<Form.Group>
<Form.Label className="objectiveLabel">Objective #4</Form.Label>
<Form.Control
type="text"
  className="form-control"
placeholder={"..."}
value={objectiveFour_text}
onChange={(e) => setObjectiveFour_text(e.target.value)}
/>
</Form.Group>
</Col>
<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress:</Form.Label>
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

<Row id="objectiveRow" className="mb-4 align-items-center">
<Col className="mb-1" sm={12} md={7} xl={7}>
<Form.Group >
<Form.Label className="objectiveLabel">Objective #5</Form.Label>
<Form.Control
type="text"
  className="form-control"
placeholder={"..."}
value={objectiveFive_text}
onChange={(e) => setObjectiveFive_text(e.target.value)}
/>
</Form.Group>
</Col>
<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress:</Form.Label>
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
<Row id="objectiveRow" className="mb-4 align-items-center">
  <Col className="mb-1" sm={12} md={7} xl={7}>
    <Form.Group >
      <Form.Label className="objectiveLabel">Objective #6</Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          placeholder={"..."}
          value={objectiveSix_text}
          onChange={(e) => setObjectiveSix_text(e.target.value)} />
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

<Row id="objectiveRow" className="mb-4 align-items-center">
<Col className="mb-1" sm={12} md={7} xl={7}>
<Form.Group>
<Form.Label className="objectiveLabel">Objective #7</Form.Label>
<Form.Control
type="text"
className="form-control"
placeholder={"..."}
value={objectiveSeven_text}
onChange={(e) => setObjectiveSeven_text(e.target.value)}
/>
</Form.Group>
</Col>
<Col sm={12} md={5} xl={5}>
<Form.Group>
<Form.Label className="objectiveLabel">Progress:</Form.Label>
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

<Row id="objectiveRow" className="mb-4 align-items-center">
<Col className="mb-1" sm={12} md={7} xl={7}>
<Form.Group >
<Form.Label className="objectiveLabel">Objective #8</Form.Label>
<Form.Control
type="text"
className="form-control"
placeholder={"..."}
value={objectiveEight_text}
onChange={(e) => setObjectiveEight_text(e.target.value)}
/>
</Form.Group>
</Col>
<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress:</Form.Label>
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

<Row id="objectiveRow" className="mb-4 align-items-center">
<Col className="mb-1" sm={12} md={7} xl={7}>
<Form.Group>
<Form.Label className="objectiveLabel">Objective #9</Form.Label>
<Form.Control
type="text"
className="form-control"
placeholder={"..."}
value={objectiveNine_text}
onChange={(e) => setObjectiveNine_text(e.target.value)}
/>
</Form.Group>
</Col>
<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress:</Form.Label>
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

<Row id="objectiveRow" className="mb-4 align-items-center">
<Col className="mb-1" sm={12} md={7} xl={7}>
<Form.Group >
<Form.Label className="objectiveLabel">Objective #10</Form.Label>
<Form.Control
type="text"
className="form-control"
placeholder={"..."}
value={objectiveTen_text}
onChange={(e) => setObjectiveTen_text(e.target.value)}
/>
</Form.Group>
</Col>
<Col sm={12} md={5} xl={5}>
<Form.Group >
<Form.Label className="objectiveLabel">Progress:</Form.Label>
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
</>
  );
}
