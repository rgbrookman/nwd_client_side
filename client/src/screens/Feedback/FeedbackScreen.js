import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col  } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'
import './feedback.css';

export default function Feedback({ history }) {
  const [yearPageGood, setYearPageGood] = useState('');
  const [yearPageHelp, setYearPageHelp] = useState('');
  const [todayPageGood, setTodayPageGood] = useState('');
  const [todayPageHelp, setTodayPageHelp] = useState('');
  const [weekPageGood, setWeekPageGood] = useState('');
  const [weekPageHelp, setWeekPageHelp] = useState('');
  const [valuesPageGood, setValuesPageGood] = useState('');
  const [valuesPageHelp, setValuesPageHelp] = useState('');
  const [currentPageGood, setCurrentPageGood] = useState(5);
  const [currentPageHelp, setCurrentPageHelp] = useState(5);

  const navigate = useNavigate();
  const feedbackForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rt1yckn', 'template_5vgldzr', feedbackForm.current, '1YKVv6BHraqDPites')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
      navigate('/');
  };



  return (
    <Container className="feedbackContainer">

      <form id="feedbackForm" className="feedback-form" ref={feedbackForm} onSubmit={sendEmail}>
      <Row className="justify-content-end">
      <Button href="/" className="returnButton mt-4">
      Back to HomePage
      </Button>
      <Button type="submit" className="feedbackButton mt-4">
      Send Feedback
      </Button>
      </Row>
    <Row>
        <h3 className="rowHeader">The 'Year' Page - <a href="">Reminder of Page Objective</a></h3>
    <Col>
    <div className="feedbackContainer">
    <label for="yearPG">Describe your experience of the Year Page</label>
    <textarea
      id="yearPG"
      className="textInput"
      value={yearPageGood}
      name="year-page"
      placeholder="Be as honest and clear as possible. Your feedback is completely anonymous."
      onChange={(e) => setYearPageGood(e.target.value)}
      rows={4}
      />
      </div>
          </Col>
              <Col>
              <div className="feedbackContainer">
              <label for="yearPGHelp">How would you make the Year Page better?</label>
              <textarea
                id="yearPGHelp"
                      className="textInput"
                value={yearPageHelp}
                name="year-improve"
                placeholder="I would 100% rather have the bad news that is true, than the good news which is false <3."
                onChange={(e) => setYearPageHelp(e.target.value)}
                rows={4}
                />
                </div>
                    </Col>
      </Row>
<hr className="dividingLine" />
      <Row className="mt-4">
            <h3 className="rowHeader">The 'Today' Page - <a href="">Reminder of Page Objective</a></h3>
      <Col>
      <div className="feedbackContainer">
      <label for="todayPG">Describe your experience of the Today Page</label>
      <textarea
        id="todayPG"
        className="textInput"
        value={todayPageGood}
        name="today-page"
        placeholder="Be as honest and clear as possible. Your feedback is completely anonymous."
        onChange={(e) => setTodayPageGood(e.target.value)}
        rows={4}
        />
        </div>
            </Col>
                <Col>
                <div className="feedbackContainer">
                <label for="yearPGHelp">How would you make the Today Page better?</label>
                <textarea
                  id="todayPGHelp"
                        className="textInput"
                  value={todayPageHelp}
                  name="today-improve"
                  placeholder="I would 100% rather have the bad news that is true, than the good news which is false <3."
                  onChange={(e) => setTodayPageHelp(e.target.value)}
                  rows={4}
                  />
                  </div>
                      </Col>
        </Row>
<hr className="dividingLine" />
        <Row className="mt-4">
            <h3 className="rowHeader">The 'Week' Page - <a href="">Reminder of Page Objective</a></h3>
        <Col>
        <div className="feedbackContainer">
        <label for="weekPG">Describe your experience of the Week Page</label>
        <textarea
          id="weekPG"
          className="textInput"
          value={weekPageGood}
          name="week-page"
          placeholder="Be as honest and clear as possible. Your feedback is completely anonymous."
          onChange={(e) => setWeekPageGood(e.target.value)}
          rows={4}
          />
          </div>
              </Col>
                  <Col>
                  <div className="feedbackContainer">
                  <label for="weekPGHelp">How would you make the Week Page better?</label>
                  <textarea
                    id="weekPGHelp"
                    className="textInput"
                    value={weekPageHelp}
                    name="week-improve"
                    placeholder="I would 100% rather have the bad news that is true, than the good news which is false <3."
                    onChange={(e) => setWeekPageHelp(e.target.value)}
                    rows={4}
                    />
                    </div>
                        </Col>
          </Row>
<hr className="dividingLine" />
          <Row className="mt-4">
              <h3 className="rowHeader">The 'Values' Page - <a href="">Reminder of Page Objective</a></h3>
          <Col>
          <div className="feedbackContainer">
          <label for="valuesPG">Describe your experience of the Values Page</label>
          <textarea
            id="valuesPG"
            className="textInput"
            value={valuesPageGood}
            name="values-page"
            placeholder="Be as honest and clear as possible. Your feedback is completely anonymous."
            onChange={(e) => setValuesPageGood(e.target.value)}
            rows={4}
            />
            </div>
                </Col>
                    <Col>
                    <div className="feedbackContainer">
                    <label for="valuesPGHelp">How would you make the Week Page better?</label>
                    <textarea
                      id="valuesPGHelp"
                      className="textInput"
                      value={valuesPageHelp}
                      name="values-improve"
                      placeholder="I would 100% rather have the bad news that is true, than the good news which is false <3."
                      onChange={(e) => setValuesPageHelp(e.target.value)}
                      rows={4}
                      />
                      </div>
                          </Col>
            </Row>
            <hr className="dividingLine" />
            <Row className="mt-4">
                <h3 className="rowHeader"> Net Promoter Score </h3>
            <Col>
            <div className="feedbackContainer">
            <label for="currentPG">How likely are you to recommend the app in its current state to family and friends? {currentPageGood} / 10</label>
            <input
              id="currentPG"
              type="range"
              className="textInput"
              value={currentPageGood}
              min="0"
              max="10"
              name="current-NPS"
              onChange={(e) => setCurrentPageGood(e.target.value)}
              />
              </div>
                  </Col>
                      <Col>
                      <div className="feedbackContainer">
                      <label for="futurePGHelp">How likely are you to recommend the app with your suggested changes to family and friends? {currentPageHelp} / 10</label>
                      <input
                        id="futurePGHelp"
                        type="range"
                              className="textInput"
                        min={0}
                        max={10}
                        value={currentPageHelp}
                        name="potential-NPS"
                        onChange={(e) => setCurrentPageHelp(e.target.value)}
                        />
                        </div>
                            </Col>
              </Row>

      </form>
    </Container>
  );
}
