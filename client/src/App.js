import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// Year
import YearScreen from './screens/Year/YearScreen';
import ViewYearScreen from './screens/Year/ViewYearScreen';

// Day
import DayScreen from './screens/Day/DayScreen';
import ViewDayScreen from './screens/Day/ViewDayScreen';

// Week
import WeekScreen from './screens/Week/WeekScreen';
import CreateWeekScreen from './screens/Week/CreateWeekScreen';

// Landing
import LandingScreen from './screens/LandingPage/LandingScreen';

// Insight
import InsightScreen from './screens/Insight/InsightScreen';
import QuizIntroScreen from './screens/Quiz/Intro/QuizIntroScreen';
import QuizFeelingScreen from './screens/Quiz/Feeling/QuizFeelingScreen';
import QuizTasksScreen from './screens/Quiz/Tasks/QuizTasksScreen';
import QuizMindsetScreen from './screens/Quiz/Mindset/QuizMindsetScreen';
import QuizWaveScreen from './screens/Quiz/Wave/QuizWaveScreen';
import QuizRepresentativeScreen from './screens/Quiz/Representative/QuizRepresentativeScreen';
import QuizDebriefScreen from './screens/Quiz/Debrief/QuizDebriefScreen';
import RealQuizScreen from './screens/Quiz/Real/RealQuizScreen';
import FinalQuizScreen from './screens/Quiz/Real/FinalQuizScreen';

//Header
import LoginScreen from './screens/Login/LoginScreen';
import RegisterScreen from './screens/Register/RegisterScreen';
import TransitionScreen from './screens/Transition/TransitionScreen';

//Experiences
import ValuesScreen from './screens/Values/ValuesScreen';
import DiaryScreen from './screens/Diary/DiaryScreen';
import FeedbackScreen from './screens/Feedback/FeedbackScreen';

//Footer
import HelpScreen from './screens/Help/HelpScreen';
import AboutScreen from './screens/About/AboutScreen';
import ContactScreen from './screens/Contact/ContactScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';

//Components
import Header from "./components/Header/Header";

//Loading
import PropagateLoader from "react-spinners/PropagateLoader";

//Styles
import './App.css';
import './index.css';

//Misc
import ExportScreen from './screens/Export/ExportScreen';


function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/insight" element={<InsightScreen />} />
          <Route path="/loading" element={<TransitionScreen />} />
          <Route path="/insight/quiz" element={<QuizIntroScreen />} />
          <Route path="/insight/quiz/feeling" element={<QuizFeelingScreen />} />
          <Route path="/insight/quiz/mindset" element={<QuizMindsetScreen />} />
          <Route path="/insight/quiz/moments" element={<QuizTasksScreen />} />
          <Route path="/insight/quiz/wave" element={<QuizWaveScreen />} />
          <Route path="/insight/quiz/representative" element={<QuizRepresentativeScreen />} />
          <Route path="/insight/quiz/debrief" element={<QuizDebriefScreen />} />
          <Route path="/insight/quiz/real_quiz" element={<RealQuizScreen />} />
          <Route path="/insight/quiz/real_quiz/end" element={<FinalQuizScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/week/create" element={<CreateWeekScreen />} />
          <Route path="/week/:id" element={<WeekScreen />} />
          <Route path="/help" element={<HelpScreen />} />
          <Route path="/feedback" element={<FeedbackScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/values" element={<ValuesScreen />} />
          <Route path="/year/create" element={<YearScreen />} />
          <Route path="/year/:id" element={<ViewYearScreen />} />
          <Route path="/today" element={<DayScreen />} />
          <Route path="/today/:id" element={<ViewDayScreen />} />
          <Route path="/diary" element={<DiaryScreen />} />
        </Routes>
      </Router>

  );
}
export default App;
