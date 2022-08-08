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
import sameAverage from '../../../Same_Average.png';
import waveConcept from '../../../wave_concept.png';
import feelingscoretoday from '../../../FeelingScoreToday.png';
import feelingscorechart from '../../../FeelingScoreChart.png';
import spiralConcept from '../../../spiral.png';
import liamNeeson from '../../../lnwh.gif';
import './quizwave.css';

export default function QuizWaveScreen() {
  const [titleDiv, setTitleDiv] = useState(true);
  const [whatYou, setWhatYou] = useState(false);
  const [myLearnings, setMyLearnings] = useState(false);
  const [myLearnings1, setMyLearnings1] = useState(false);
  const [myLearnings2, setMyLearnings2] = useState(false);
  const [myLearnings3, setMyLearnings3] = useState(false);

  const [input, setInput] = useState(true);
  const [output, setOutput] = useState(false);

  const [wave, setWave] = useState(true);
  const [spiral, setSpiral] = useState(true);

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
  <h1>Harnessing the Wave</h1>
  <span><strong>Safely riding the wave to greater joy and growth</strong></span>
</motion.div>

<motion.div
  animate={ whatYou ? "show" : "hide"}
  variants={showHideGrid}
  className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Your Wave:</h4>
    </div>
    <span>
    <br />
Diana Vreeland loved surfers.
    <br />
        <br />
<strong>"You know I am really only envious of one thing and that is a surfer. I think it is the most beautiful thing. You see, I'm mad about water.[...] and to be surfer, between the
sky and water, would be, to me, the most wonderful thing"</strong>
    <br />
        <br />
Surfers ably ride the waves the sea and moon create, and must experience such flow and serenity in doing so.
    <br />
    <br />
  Whilst only fractionally as visceral as the experience of the surfer,
  there is wave phenomenon in your NWD insights that it is powerful to understand and harness.
</span>
</div>
<div className="rightCol">
<div className="rightContent">


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
      <h4 className="quizHeaderWhite">What is the Wave?</h4>
    </div>
    <br />
    <span>
      In an early version of NWD, I built a kind of super graph that united a few key elements of the then format into one visualisation.
    <br />
    <br />
      It mapped my feeling score, my (as it was then know) task complete score and task completion rate
      and shared their combined value as a thick pink line.
    <br />
    <br />
      It made for a really interesting check-in point because to see a wave crest,
      and for it to really mean something, I needed to really extend myself and demonstrate high self-awareness.
      To do everything you said you would do, to feel good and to feel that sense of satisfaction that comes with knowing you did
      the best you could have done, is no mean feat.
    <br />
    <br />
      As you can see quite clearly now,
      but was only revealing itself slowly and incrementally at the time, was this wave like pattern emerging.
    </span>
<span>
</span>
</div>
<div className="rightCol">
<div className="rightContent">
<p>Sexy Graph Alert!</p>
<motion.img className="waveContentChart"
src={waveConcept} width="100%"/>
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
      <h4 className="quizHeaderWhite">Harnessing the Waves You Create.</h4>
    </div>
    <br />
  <span>
    At certain points, I would hit small strings of these peak days wherein I took care of every moment,
    attempted an ambitious quality of moment, made time for really suitable recovery and did the other things in my life that I was becoming
    increasingly confident contributed to my joy and growth. This would manifest as nice crest on the top of the wave.
    <br />
    <br />
    However, of course, that crest only shares one half of the story? What about how the wave breaks?
  </span>
    <br />
    <br />
    <hr className="dividingLine" />
    <br />
  <span>
    In early tests with friends, it seemed like people felt they had 'completed the game' in many ways when they hit the same peak
    - and whilst I didn't think the same way consciously, my data seemed like it was saying just that.
  </span>
  <br />
  <br />
  <span>
    The days that followed one of these strings of days were often
    markedly 'worse' in some fashion. I either didn't do the things I said I would do, or felt worse,
    or attempted things that clearly must have been misaligned with my vision for the year or week, or made no inputs at all for a sustained period.
  </span>
  <br />
  <br />
  <span>
    I was scratching my head one day, diving in and out my diary trying to suss out why this was happening.
    Was I just getting complacent, and shutting off a bit
    as my friends had experienced? What I then discovered then hit me.
  </span>
  <br />
  <br />
  <span>
    Whilst in some case this had been true, more often that not I was not shutting down, switching off or regressing in anyway.
  <br />
  <br />
    What I was doing trying to do was take things up a notch! Choosing to crank it up so immediately was going to ask much more
    from my...
    a) relationship with my self,
    b) my overall conditioning at what I was trying to do and
    c) my daily habits and rituals, than was required in the previous span of time.
  <br />
  <br />
    In this context, a crashing of the wave is not a classic regression to the mean, or fall in motivation,
    but is rather a near inevitable product of trying to find a way to break new genuine personal territory.
  <br />
  <br />
    Really, deeply growing is hard and this difficulty is likely to manifest right across the NWD spectrum of inputs
    - from feeling (as you start to contend with new challenges and test your condition in new ways),
    to all of the different moment metrics (building the muscle to take on a bit more, prioritise things different and make new habits
    is always going to come at a cost to the scores).
    <br />
    <br />
    The crashing of a wave, again, in this context, is only a positive, a sign that you are pushing yourself significantly well, and are following up
    self-awareness with a commitment to grow.
  </span>

</div>
<div className="rightCol">
<div className="rightContent">
<motion.img className="waveContentChart"
src={liamNeeson} width="100%"/>

</div>

</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setMyLearnings(myLearnings => true);
setMyLearnings1(myLearnings1 => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
setMyLearnings2(myLearnings2 => true);
setMyLearnings1(myLearnings1 => false);
}}>Next</Button>
</div>
</motion.div>

<motion.div
  animate={ myLearnings2 ? "show" : "hide"}
  variants={showHideGrid}
  className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Learn</h4>
    </div>
    <br />
<span>
As I have been writing this, two quotes just sprang to mind:
</span>
<br />
<br />
<strong className="emphasis">"Beginnings always hide themselves in ends."<br /> - Mike Posner</strong>
<br />
<br />
<strong className="emphasis">"We shall not cease from exploration<br />
And the end of all our exploring<br />
Will be to arrive where we started<br />
And know the place for the first time."</strong>
<br /><span><strong>- Excerpt from T.S Eliot</strong></span>
<br />
<br />
<span>
Mike Posner articulates beautifully that, just like climbing a mountain where you walk, graft and grind to get to a certain peak,
only to reach it and see the next peak strafing out ahead of you, the same is true of your own growth.
<br />
<br />
This is sign that growth is perpetual and that the journey & present moment are the things to be relished above all else.
<br />
<br />
Our lives as humans on earth are so rich, diverse and challenging that you could live for a million years and still
be finding new ways to grow your condition, relate to your environment, contain with existence,
learn new skills, look more deeply inside yourself.
<br />
<br />
Some people see this as a tunnel without an end and get to defeated - assuming that, without a fixed end, the journey is of no use.
I find the opposite is true.
To grow in anyway each day is a joy of a lifetime. It is a opportunity that each day affords.
Obviously, whether you embrace this opportunity or not, you are still
enough, still worthy of love, still deserving of peace and safety.
</span>
<br />
<br />
<hr className="dividingLine" />
<br />
<span>
The second quote - a stanza from T.S Eliot's 'Little Gidding' - reminds me how, within the context of the graph,
each wave can only peak so high, and on the face of it look the same.
But the reality is that no one wave is ever the same as any before it, or any after it because we ourselves have changed.
<br />
<br />
When approached the right way by you, the user, each numerically equivalent peak is in fact the indication that you are viewing your
life from a new vantage point; one illucidated by greater condition, self-awareness and self-assurance.
<br />
<br />
In this way, each peak is quite clearly an end
(the culmination of time, energy and attention in developing new condition) but also a beginning (the head of a route towards the next plateau;
wherever that may be, and whatever form that might take.)
</span>
<br />
<br />
<span>
A nice wave to think of them as different is to know the same line can be expressed as a single line looping vertically in an energetic spiral,
rather than cresting horizontally.
Just as each wave rises, crests and then falls, each spiral has three distinct phases.
<br />
<br />
  1. Build: This nurturing of new condition.
  <br />
  2. Crest: The  new condition rapidly autonomises.
  <br />
  3. Break & Pre-Build: Condition normalises and you recover before next build.
<br />
<br />
To summarise, the wave is a great way to experience and mentally manage the transition from one level of awareness, condition and assurance
 to the next. The wave embraces and engages with each natural phase, and doesn't obsess over the idea of
contentment only being possible when you accomplish something, or the point of accomplish being final.
<br />
<br />
One of many joys of a
lifetime can be found by marrying an engagement with and acceptance of the present with the desire to understand, adapt and evolve.
This final point is something that the wave can act as a fabulous tool for and ongoing indication of, whilst also serving to help you
weather the tumult of trying to grow.
</span>

</div>
<div className="rightCol">
<div id="waveContent"className="rightContent">
<motion.img className="waveContentChart"
animate={wave ? "show" : "hide"}
variants={showHideState}
src={waveConcept} width="95%"/>

<motion.img
  className="spiral"
  animate={wave ?  "hide": "show"}
  variants={showHideState}
  src={spiralConcept}
  width="80%" />

<motion.button className="toggleButton" onClick={()=>{
    setSpiral(spiral => false);
    setWave(wave => true);
}
}>Wave</motion.button>
<motion.button className="toggleButton" onClick={()=> {
    setSpiral(spiral => true);
    setWave(wave => false);
}

}>Spiral</motion.button>
</div>

</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setMyLearnings1(myLearnings1 => true);
setMyLearnings2(myLearnings2 => false);
}}>Previous</Button>
<Button className="quizButton" href="/insight/quiz/mindset">Next</Button>
</div>
</motion.div>

    </>
  );
}
