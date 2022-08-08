// eslint
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
import feelingscoretoday from '../../../FeelingScoreToday.png';
import feelingscorechart from '../../../FeelingScoreChart.png';
import tasksCompleted from '../../../tasksCompleted.png';
import tcr from '../../../TCR.png';
import './quiztasks.css';

export default function QuizTasksScreen() {
  const [titleDiv, setTitleDiv] = useState(true);
  const [whatYou, setWhatYou] = useState(false);
  const [myLearnings, setMyLearnings] = useState(false);
  const [myLearnings1, setMyLearnings1] = useState(false);
  const [myLearnings2, setMyLearnings2] = useState(false);
  const [myLearnings3, setMyLearnings3] = useState(false);

  const [input, setInput] = useState(true);
  const [output, setOutput] = useState(false);

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
  setWhatYou(whatYou => true);
}}>
<span>Looking at your Charts 101:</span>
  <h1>Moments Score</h1>
  <span><strong>Safely learning from the expression of your moments over time</strong></span>
</motion.div>

<motion.div

animate={ whatYou ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Your Moment Scores: Inputs & Outputs</h4>
    </div>
      <br />
    <span>
    The different moments that you log in your <strong>Today</strong> diary can be thought of in 3 different ways:
    </span>
    <br />
        <br />
        <span>
        1. <strong className="emphasis">The # of moments you attempted</strong>
        <br />
        2. <strong className="emphasis">The total moments you completed</strong>
        <br />
        3. <strong className="emphasis">The % of moments you attempted that you completed</strong>
        <br />
        <br />
          These three really simple aggregations offer a huge number of signals
          into how you are setting up each day and optimising it for joy and growth.
        <br />
        <br />
        Alongside each metric, as with the feeling score, is its own gaggle of important friends:
          </span>
            <br />
                <br />
                <span>1.</span><span className="emphasis">Average:</span><span> The result of adding up all of your scores, and dividing them by the total number of days you have logged.</span>
                    <br />
                        <br />
                        <span>2.</span><span className="emphasis">Variance:</span><span> How much any of your moment related scores are likely to differ from the average.
                        The higher this number is, the more likely your score is to be significantly different from the average.</span>
                    <br />
                    <br />
            <span>3.</span><span className="emphasis">Recent Trend:</span><span> The degree to which your average from the last 14 days is more or less than your overall average</span>
</div>
<div className="rightCol">
  <div className="rightContent">
    <div className="sideBySide">
      <motion.div
        className="toggleButtonDiv"
        animate={input ? "show" : "hide"}
        variants={showHideState}>
          <img className="feelingScoreToday" src={feelingscoretoday} width="100%"/>
            <div className="toggleSpread">
              <Button id="output" className="toggleButton" onClick={()=> {
                setInput(input => false);
                setOutput(output => true);
                }}>View Output</Button>
                  <h3 id="scoreHere" className="quizHeaderGreen">The Moments You Map Up Here ^</h3>
            </div>
        </motion.div>

<motion.div
  className="toggleButtonDiv"
  animate={input ? "hide" : "show"}
  variants={showHideState}>
    <img className="feelingScoreChart" src={feelingscorechart} width="100%"/>
      <div className="toggleSpread">
        <h3 className="quizHeaderGreen">...is then displayed like this</h3>
          <Button id="output" className="toggleButton" onClick={()=> {
            setInput(input => true);
            setOutput(output => false);
          }}>View Input</Button>
      </div>
      </motion.div>
  </div>

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setTitleDiv(titleDiv => true);
setWhatYou(whatYou => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
setWhatYou(whatYou => false);
setMyLearnings(myLearnings => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ myLearnings ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">3 Key Starting Points</h4>
    </div>
  <br />
  <span>In relation to my moments, there are 3 particular learnings that stand out in my mind as having the greatest positive impact on your
  initial interactions with the data.</span>
  <br />
  <br />
  <span>1.</span><strong className="emphasis">"Wait? I am just a hot mess?"</strong>
    <br />
        <br />
    <span>2.</span><strong className="emphasis">"Hmm... Did I really write that down?"</strong>
    <br />
        <br />
    <span>3.</span><strong className="emphasis">Balance of Running and Resting</strong>
</div>
<div className="rightCol">
<div className="rightContent">
<p>map of learnings</p>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setMyLearnings(myLearnings => false);
setWhatYou(whatYou => true);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
setMyLearnings(myLearnings => false);
setMyLearnings1(myLearnings1 => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ myLearnings1 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Lukewarm mess alert!</h4>
    </div>
    <br />
<span>
  In the feeling score section, we kicked off by talking about peripeteia and anagorisis.
  Boy! I have had my fair share of those over my time using NWD, and
  there may be no better way to help you all cope with the uncomfortable revelations in your own data than to be
  completely open with some of most revealing things my data has tried to tell me about myself.
</span>
<br />
<br />
<span>
  First and foremost, look at my data on the right from an old google-sheets based version of NWD.
  I think it is fair to say that the data is trying to tell me something loud and clear!
  Immediately signals start leaping off the screen:
  </span>
<br />
<br />
<span>
<strong className="emphasis">Signal says - "Ooh! I wonder what is causing..."</strong>
</span>
<br />
<br />


<span>
<strong>...you to not have many days where you do everything you said you would?</strong>
</span>
<br />
<br />
<span>
<strong>...to rarely follow a day where you did do everything you said you would with another such day?</strong>
</span>
<br />
<br />
<span>
<strong>...you to write things down that perhaps you are not truly engaged and invested in doing?</strong>
</span>
<br />
<br /><i className="aside">
Drum beat heard in the depths again! A signal is an objective force, and not a value judgement.

To spot a signal is a bit, if you like a cute metaphor, walking through a forest on a glorious summers day, and then seeing a path that you've never noticed before.

You wouldn't look at that path and be like, 'Man! How have I never noticed that before? I am such an idiot.'. You are far more likely to say, 'Ooh. I wonder where that leads!'.</i>
<br />
<br />
<hr className="dividingLine" />
<br />
<span>
  Laying myself pretty bare again, I am confident that as a version of the human condition, a pretty accurate description of me would be that,
  over the course of my life to date, I am a person whose suffering tends to manifest in terms of people pleasing,
  suppressing my own ability and not seeing things through to the finish.
  <br />
  <br />
  I feel I have some of the virtues that often accompany these psychoses:
  <br />
  <br />
  <strong className="emphasis">Curiousity</strong>

  <br />
  (not finishing one thing has usually meant the starting of another quite divergent thing)
  <br />
  <br />
  <strong className="emphasis">
  Creativity</strong>
  <br />
  (if you have explored many divergent things,
    you can see joins that others struggle to and or have a larger plain of reference from which to make imaginative suggestions)
  <br />
  <br />
  <strong className="emphasis">Empathy</strong>
  <br />
  (playing in different spaces usually means being prepared to be vulnerable and having experienced a greater diversity of human story;
  both of which are likely to engender more empathy)
  <br />
  <br />
  I am doing an increasingly effective job of transcending the worst parts of my suffering - getting out of my own way - and getting the best
  from them.
<br />
<br />
  NWD has been astonishingly helpful in illuminating, through the provision of signals, the self-awareness above and many other things.
  Obviously, the signal cannot provide a solution, it can only point towards an area of inquiry and curiousity which, in time, can provide more clarity (or comfort in the unknowing, which
  is ultimately the more powerful mental force).
  <br />
  <br />
  I suspect you can see a lot of what I have described in the nature of my old google sheets data.
</span>
<br />
<br />
<span>
  From all this time, I have, importantly, gained many revelations about myself and, less importantly but with a certain sense of
  satisfaction, seen a quiet improvement in each measure over time; even if some habits still persist.
<br />
<br />
<strong>
  A key takeaway from this time and experience is that I can say with utter confidence that the <strong>action(s) that sit behind any signal
  (i.e. the cause for which the data displayed in the graph is an effect) are never wholly bad or wholly good.</strong></strong>
<br />
<br />
<strong className="emphasis">Why is that?</strong>
<br />
<br />
  In life, you can only use the terms bad or good if it is completely clear what single trait or outcome you are optimising for.
  This is another thing which is obvious to us in some realms, but often escapes us when referring to our own lives and minds.
<br />
<br />
  For example, if you are trying to gain some weight, having a large portion of white rice with your protein, fibre, fats etc, is a good thing i.e. it is good
  for the end of gaining weight. However, if you are trying to lean out and reduce spikes in your blood sugar, it is not a 'good' thing.
<br />
<br />
  We tend to use words bad or good quite lazily in everyday discourse;
  assuming we know what someone else was deeply and distinctly trying to do,
  or by simply relegating something as good or bad due to the cultural context when,
  in fact, we should know that the things we think of as good or bad can change
  over time (usually ameliorating from initial bad perception to anywhere between somewhat good and really good!).
<br />
<br />
  This final point is the exact murky we space we are dealing with by optimising for joy and growth.
  When you are dealing with bad or good in relation to individual joy and growth,
  it is spectacularly unhelpful to perceive the vast swathe of life as 'bad'.
<br />
<br />
  All you can say with anything like certainty is that something either is 'good' because
  it is helping provide in the moment or nurture for the future a relationship
  with joy and growth that you know deeply resonates with yourself and is of deep authentic value,
  or that something has the potential to be good
  by offering  you a chance to transform your relationship with a habit,
    behaviour, force that in turn will provide moments and nurturing ability described above.
</span>
<br />
<br />
<span>
  It's a bit like when atheletes are asked as a veiled reference to struggles in their life, 'Looking back, do you think you would you have changed anything?'.
  Far more often than not, they say something to the affect of "No, because without that difficult time in my life, I might never have made it here today".
</span>
<br />
<br />
<span>
As such, as I refer back to the mentions of my particular sufferings, the many days, decisions and moments that were shaped by their 'worst' compoments, all help them fall in the
bucket of 'potential for good'. No one comes through their early life and early adult life unscathed i.e. free from trauma, incident, perfectly calibrated with such peak
levels of existential conscious that result in a near divine experience of every present moment. We all have a long list of a 'potential for goods' in our live,
and this is a joy in life; finding a way to transform our condition each day. Every incremental, even infinitesimal improvement in condition, is a huge and captivating victory.
  <br />
  <br />
  NWD has taught me to relish this opportunity that each day presents and will endeavour to do so every day of my life.
</span>
<br />
<br />


</div>
<div className="rightCol">
<div id="taskImageDiv" className="rightContent">
<img className="taskImage1" src={tcr} width="75%" />
<img className="taskImage2" src={tasksCompleted} width="75%" />
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setMyLearnings1(myLearnings1 => false);
setMyLearnings(myLearnings => true);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
setMyLearnings1(myLearnings1 => false);
setMyLearnings2(myLearnings2 => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ myLearnings2 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h3 className="quizHeaderWhite">"But you said you would!"</h3>
    </div>
    <br />
<h2 className="quizHeaderWhite">What is getting in the way of me doing what I said I would do?</h2>
<br />
<span>
As we were just starting to explore in the previous step, the action that is impacting any metric is never wholly bad or good
because that paradigm is not sufficiently applicable to the nurturing of greater joy and growth.
<br />
<br />
Remember our core truths:
<br />
<br />
<strong>Every data point is a signal.</strong>
<br />
<br />
<strong>Every signal is ultimately underpinned by an action.</strong>
<br />
<br />
<strong>Every action is presently good or capable for transformation to good.</strong>
<br />
<br />
  Similarly to this wholly not bad or good point, what is getting in the way of me doing what I said I would do could be anywhere on the following scale:
  <br />
  <br />
  <strong className="emphasis">something I should 100% avoid doing and or craving because I have near complete confidence it is inversely correlatd with joy and growth.</strong>
  <br />
  or...
  <br />
  <strong className="emphasis">something that I should optimise lots of my life towards because, without me realising it before now, it is something I experience huge joy and or growth from every time I do it.</strong>
<br />
<br />
  To repeat, what is getting in the way of you doing what you said you would do, which is really the umbrella question the covers each of the moment scores,
  may be something that feels like a classic habit faux-pas like (think: getting distracted by instagram, or losing time due to poor time management). But,
  it could also be the actual joys of your lifetime getting in the way, that you are suppressing or not simply not aware of yet, to use Jim Carrey's line,
  due to 'fear disguised as practicality'.
<br />
<br />
</span>
<span>
I have had many such days, and it does hit you over the head when you see it on the screen.
<br />
<br />
You stare at a day where in the morning you mapped out this temporal mindfield of a plan featuring a million things,
juggling work and play in some cartesian web of personal 'mastery'.
<br />
<br />
But all you did in the end is have a coffee, get an ice cream with your girlfriend, sit and watch the sunset from that nice seat on the canal, and then wander home,
taking the odd moment to dance together in the fading light.
<br />
<br />
You see a big feeling score attached to such 'disastrous' day in terms of those pre-planned moments and it gets your attention.
</span>
<span>
<br />
<br />
The signals start popping up off the page:
<br />
<br />
"Am I optimising for the right things?"
<br />
<br />
"How much time to I make for some serendepitity and quality time now compared to how much ?"
<br />
<br />
<hr className="dividingLine" />
<br />
On the flip side, here are a few things that, when delving into my diary, I found were getting in my way in the more conventional sense.
<br />
<br />
Not blocking time: I would say I wanted to do something, but not block out some time to focus on it specifically.
<br />
<br />
Not making a moment easier to action: Often true of exercise. Writing in 'Back and Biceps workout' means think of what exercise to do, in what order,
how many sets, reps, rest, where are you are going to do it. But instead linking to a pre-made plan or a YouTube workout really reduces
decision fatigue and helps increase all my moment scores.
<br />
<br />
Not asking for help: Your moments don't all expressly relate to things you have to do yourself. Putting things in motion and calling on the help
of experts and friends is essential for a) achieving the things you'd like to do, b) getting more joy via sharing the journey with others and c) learning
more yourself.
<br />
<br />
Not blocking websites on my laptop: I can definitely be guilty of falling into a concentration catastrophe by loading up YouTube, whatsapp, BBC news, etc
when my brain is working on a hard task. Using the google chrome extension 'Focus' really helps with that.
<br />
<br />
Looking at social media first thing: I have found this recently. I finally put an iPhone 5C I had been using to rest, and replaced it with a refurbished
iPhone 13. One of the huge virtues of an old phone is that is much harder to get distracted, even more so when the tiny screen is cracked. But on this brand new
device, everything is big, pretty and crystal clear.
<br />
<br />
Not saying no to things that came up but weren't on the list: As I referred to earlier,
<br />
<br />
Not engaging with my list more: I like to keep the browser tab open or my today page linked in my bookmarks so I can easily come back to it.
<br />
<br />
Not writing moments specifically enough: How are you meant to complete a task with no parameters, of time, of detail
</span>
</div>
<div className="rightCol">
<div className="rightContent">
<p>map of learnings</p>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setMyLearnings2(myLearnings2 => false);
setMyLearnings1(myLearnings1 => true);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
setMyLearnings2(myLearnings2 => false);
setMyLearnings3(myLearnings3 => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ myLearnings3 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
    <h4 className="quizHeaderWhite">Learn</h4>
    </div>
    <br />
    <h2 className="quizHeaderWhite">Finding your balance between running and resting</h2>
    <br />
    <span>
      If the derision of my friends is anything to go by, if NoWastedDays ever became a more widely known platform, the prevailing opinion would be that, on the basis of the name,
      that it is about cramming more and more activities into everyday in the kind of Type-A frantic, no rest, 'sleep when you are dead' way that is often lauded in our culture.
    </span>
    <br />
    <br />
    <span>
      NoWastedDays really refers to the notion that on any given day we don't want the information we need to learn more about ourselves - that will in time
      help us become more self-aware and self-assured - to go be wasted.
      We are generating this information constantly, and the daily diary format on NWD is a prime way to consolidate a lot of what would otherwise go missing.
    </span>
    <br />
    <br />
    <span>
    To this point, a huge learning from my personal experience of feverish over-activity and unsustainable action was that of the 5 moments I had a day,
    a larger percentage than I initially thought definitely needed to be explicity dedicated to rest and recovery. Without this very intentional recovery element, any
    heighten productivity would be offset by a troubling crash in energy, motivation and self-love.
    How much rest and how much recovery is needed will certainly vary person to person,
    but I have found the following inspiration to provide a really good baseline; the penultimate couplet in the Rudyard Kipling poem, 'If'.
    </span>
    <span>
    <br />
        <br />
    <strong className="emphasis">If you can fill the unforgiving minute
    With fourty seconds’ worth of distance run,</strong>
    <br />
        <br />
    i.e. 40 seconds is 66% of a minute so, if you apply this to your NWD, a good baseline is, if you have 3 things dedicated to growth
    and 'achievement', make the other 2 solely dedicated to recovery and restoration.
    </span>

</div>
<div className="rightCol">
<div className="rightContent">
<p>map of learnings</p>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setMyLearnings2(myLearnings2 => true);
setMyLearnings3(myLearnings3 => false);
}}>Previous</Button>
<Button className="quizButton" href="/insight/quiz/wave">Next</Button>
</div>
</motion.div>

    </>
  );
}
