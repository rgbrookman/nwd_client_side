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
import confidence from '../../../overly-confident-8.gif';
import './quizdebrief.css';

export default function QuizDebriefScreen() {
  const [titleDiv, setTitleDiv] = useState(true);
  const [kickOff, setKickOff] = useState(false);
  const [open, setOpen] = useState(false);
  const [skeptical, setSkeptical] = useState(false);
  const [present, setPresent] = useState(false);
  const [optimistic, setOptimistic] = useState(false);

  const [pic, setPic] = useState(true);
  const [poc, setPoc] = useState(true);
  const [nic, setNic] = useState(true);
  const [noc, setNoc] = useState(true);

  const showHideState = {
    hide: {
      display: "none",
    },
    show: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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
  <h1>Debrief</h1>
  <span><strong>A surefire way to process every outcome</strong></span>
</motion.div>

<motion.div

animate={ kickOff ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Content</h4>
    </div>
    <br />
<span>
  When you get into your groove with NWD, you will find yourself doing a lof of dissecting decisions and their ensuing outcomes;
  trying to make sense of what was <i className="aside">(to use our lazy terms for a second)</i> 'good', 'bad' or somewhere inbetween.
</span>
  <br />
  <br />
<span>
  To look at an outcome objectively and in its entirety is extremely difficult,
  and it is basically impossible without a reliable prompt or piece of guidance.
  <br />
  <br />
  This difficulty then, in turn, makes it very hard for us to learn from each day and the things we have tried to achieve within it.
  As a result, more often than not, you will end up with a poorly calibrated sense of your role in the outcome.
</span>
<br />
<br />
<span>
  This miscalibration usually takes one of two forms:
<br />
<br />
  <strong className="emphasis">Form #1.</strong> We portion ourselves the blame for all the things that went 'wrong',
  and can only see the role of others and random good fortune in the things that went 'right'.
<br />
<br />
  <strong className="emphasis">Form #2.</strong> We flood ourselves in praise and acclaim, and really start to believe our own hype.
  Then, in turn, we don't have a grateful word to say about the role of key people, the people upon whose shoulders we are standing
  or sheer blind good fortune.
</span>
<br />
<br />
<span>
  I have worked in data for over a decade as a marketing analyst, as a performance development coach for a professional ice hockey team,
  and as a founder of different start-ups. In that time I have needed to review many performances and outcomes.
  Whilst depending on the situation there are a million ways to do this, one ultra-robust, really accessible framework that you
  can do on any scrap of paper, spare word doc or excel sheet, I am sharing in this section.
</span>
<br />
<br />
<span>
<strong className="emphasis">The Debrief Format</strong>
<br />
<br />
Create 4 colums or chunks, and give each one of the following headers:
<br />
<br />
1. <strong className="emphasis">Postive Impact</strong> + <strong className="emphasis">In Your Control</strong>
<br />
<br />
2. <strong className="emphasis">Postive Impact</strong> + <strong className="emphasis">Out of Your Control</strong>
<br />
<br />
3. <strong className="emphasis">Negative Impact</strong> + <strong className="emphasis">In Your Control</strong>
<br />
<br />
4. <strong className="emphasis">Negative Impact</strong> + <strong className="emphasis">Out of Your Control</strong>
</span>
<br />
<br />
<span>
  The last note for this section, and something I hope to demonstrate across the next four mini-steps is that in any outcome,
  there are <strong>always</strong> multiple notes that fit into each of the buckets above.
</span>
</div>
<div  id="debriefColMain" className="rightCol">
<div id="debriefColDiv" className="rightContent">
<motion.div className="positiveInControl"
>
<motion.div className="explain"
animate={pic ? "show" :"hide"}
variants={showHideState}>
<h2 className="quizHeaderGreen">Positive In Your Control</h2>
<span>An action you either instigated or owned that demonstrably served the objective in an additive way</span>
</motion.div>
<motion.div className="why"
animate={pic ? "hide" :"show"}
variants={showHideState}>
<h2 className="quizHeaderGreen">Why?</h2>
<span><strong>Confidence</strong> -  There will always be things that you
contributed positively and you deserve to consolidate the confidence from those actions.</span>
</motion.div>
<motion.button
className="debriefButton"
onClick={()=> {
  setPic(pic => !pic);
}}
>Why role does this bucket play?</motion.button>
</motion.div>

<div className="positiveOutControl">
<motion.div className="explain"
animate={poc ? "show" :"hide"}
variants={showHideState}>
<h2 className="quizHeaderGreen">Positive Out of Your Control</h2>
<span>An action someone else or something else instigated or owned that demonstrably served the objective in an additive way</span>
</motion.div>
<motion.div className="why"
animate={poc ? "hide" :"show"}
variants={showHideState}>
<h2 className="quizHeaderGreen">Why?</h2>
<span><strong>Gratitude</strong> - There will always be things that benefitted a situation
over which you had less than zero control over. Giving gratitude to these things will help you feel better more often.</span>
</motion.div>
<motion.button
className="debriefButton"
onClick={()=> {
  setPoc(poc => !poc);
}}
>Why role does this bucket play?</motion.button>
</div>

<div className="negativeInControl">
<motion.div className="explain"
animate={nic ? "show" :"hide"}
variants={showHideState}>
<h2 className="quizHeaderGreen">Negative and In Your Control</h2>
<span>An action that you started that demonstrably served the objective in an subtractive way</span>
</motion.div>
<motion.div className="why"
animate={nic ? "hide" :"show"}
variants={showHideState}>
<h2 className="quizHeaderGreen">Why?</h2>
<span><strong>Construction</strong> - There will always be things you could have instigated in better time or owned more entirely.
Articulating these things will help you heathily detach from them; seeing them only in objective opportunity terms versus
character flaws.</span>
</motion.div>
<motion.button
className="debriefButton"
onClick={()=> {
  setNic(nic => !nic);
}}
>Why role does this bucket play?</motion.button>
</div>
<div className="negativeOutControl">
<motion.div className="explain"
animate={noc ? "show" :"hide"}
variants={showHideState}>
<h2 className="quizHeaderGreen">Negative and Out of Your Control</h2>
<span>An action someone else or something else started and finished that demonstrably served the objective in a subtractive way</span>
</motion.div>
<motion.div className="why"
animate={noc ? "hide" :"show"}
variants={showHideState}>
<h2 className="quizHeaderGreen">Why?</h2>
<span><strong>Transcendence</strong> - Your emotional response to a situation is a force that blurs the boundary between what you could and could not control.
Honestly articulating what you could not control will allow you to detach and, in time, perhaps even forgive and then love those forces
for how they have shaped and strengthened your outlook.</span>
</motion.div>
<motion.button
className="debriefButton"
onClick={()=> {
  setNoc(noc => !noc);
}}
>Why role does this bucket play?</motion.button>
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
  setOpen(open => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ open ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
    <h4 className="quizHeaderWhite">Bucket #1: Consolidating Confidence</h4>
    </div>
      <br />
  <span>
    There can be few more talked about things online than confidence; how you get it, how you exude it, how you keep it.
  </span>
  <br />
  <br />
  <span>
    Confidence can often appear to manifest in people on a spectrum from manical self-determination to rigidly
    negative self-talk. These modes become reinforced over time as another result of miscalibrating your role in a situation <i className="aside">(something we mentioned in an earlier section).</i>
  </span>
  <br />
  <br />
  <span>
    The truth is that within any outcome that you have exerted some genuine control over
    - whether it was the most culturally celebrated, intelllectually exuberant, physically magnificent,
    god-like accomplishment or was the most apparently abject mistep leading to an painful, reputation tainting defeat
    - there will be something that you contributed to the situation that was represents a positive impact
    towards the goal in question.
    <br />
    <br />
    With this being true, the real question, then, is not about whether you did anything good, it is about how much good you did in reality.
    This is important to gauge as you have earned confidence in relation to your contribution, so it is important that you capture it.
    <br />
    <br />
    <strong>Things you may forget to consolidate confidence from:</strong>
    <ul>
    <br />
    <li>Putting yourself into the arena; being bold and taking a chance.</li>
    <br />
  <li>Giving time, energy and attention towards preparation.</li>
      <br />
    <li>Priming your mind for the road ahead.</li>
      <br />
    <li>Extending yourself beyond previous limits.</li>
      <br />
    <li>Perceiving a situation in which change was possible.</li>
      <br />
  <li>  The 10 great decisions that preceded the 1 dodgy one</li>
  <br />
<li>Nurturing trust to the point that someone believed that you could play your role</li>
      <br />

</ul>
    <strong>Things that may resulted in an overstated assessment of your own contribution:</strong>
    <br />
    <i className="aside">(We get to this in the next section)</i>
      <br />
      <br />
    To summarise, whether you hit all your aims or fell short of every standard, their is confidence out there to be consolidated and you can
    rely on the debrief format, win or lose, as a way to grasp it!
  </span>
  <span>

    </span>
</div>
<div className="rightCol">
<div className="rightContent">

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setTitleDiv(titleDiv => true);
  setOpen(open => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setSkeptical(skeptical => true);
  setOpen(open => false);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ skeptical ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
        <h4 className="quizHeaderWhite">Bucket #2: Share Genuine Gratitude</h4>
    </div>
      <br />
    <span>
      If I am ever in a bit of a mental funk,
      I have a thought that helps me wake up, be grateful and carry on again with an upturn in energy.
    </span>
    <br />
    <br />
    <span>
      I stop and just reflect on the sheer infinitesimal chance that I am alive in the first place and how this lived
      experience I am having is so precious.

      If you are feeling up for it, consider for a second the curious course of history that has to
      intersect

      - all the love, hate, pioneering effort, balking chance, migration, stagnation, inflation and procrastination;
      the dizzing lineage of people, places, processes, postulations, perambulations and prognostications that go back in just a couple back just a
      couple of generations; let alone a longer period of time and space -


      for me to even to have a chance to exist in
      the first place is so mind boggling that you can't help but come back to the present and with a bit of perspective in tow.
    </span>
    <br />
    <br />
    <span>
      Even if you just looked forward from the start of my life, thanks to the good grace and sense of others,
      I have gone from being born naked, afraid, without knowledge or reason to a position where
      I can exercise some agency, intention and rationality to work towards a goal, build a life and feel joy.
    </span>
    <br />
    <br />
    <span>
      These are all things that I had no control over but it is possible to feel intense gratitude for, and that is what this section is about.
      <br />
      <br />
      For all our own perception of self and determination on our own futures, there is so much good that is afforded to us by others on a daily
      basis, it is important to be grateful for it.
    </span>
    <br />
    <br />
    <span>
      Some of these instances you may be saying, 'Well, I had to choose to make the best of these moments and do something about it.
      Nothing actually happened without me doing it myself'.
    <br />
    <br />
    Fair point, but to do something, as I hope my prior ramblings show, you have to have an environment in which to do it;
    and that environment will never have been created exclusively by you.
    <br />
    <br />
    You should be doting on
    existence, nature, favour, friends, family or some other kind of good exceptional external circumstances
    over which you had less than zero control.
    <br />
    <br />
    To summarise, ply your 'Positive & Out of Your Control' box with all of this environmental factors and
    you will feel a huge wash of gratitude and goodness!
    </span>
</div>
<div className="rightCol">
<div className="rightContent">
<h4 classaName="quizHeaderGreen">Positive & Out of Your Control - Insights & Related Quotes:</h4>
<p>The advice of someone</p>
<p>Someone being open to your idea</p>
<p>Someone simply not getting in the way of your idea</p>
<p>The 'machinery' exist so what you wanted to achieve could take place</p>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setOpen(open => true);
  setSkeptical(skeptical => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setSkeptical(skeptical => false);
  setPresent(present => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ present ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
    <h4 className="quizHeaderWhite">Bucket #3: Clear Constructive Commentary</h4>
    </div>
    <br />
  <span>
    This section could feel like it would simply be the inverse of the positive and in your control section.
    But, as we all know, we often find processing the negative harder to do than ruminating and replaying the positive.
  </span>
  <br />
  <br />
  <span>
    But this difficulty processing has one particular cause; an underlying assumption that is getting in the way of our progress.
    <br />
    <br />
    We assume that we are not idiots and, as a result, should only be making choices that represent the best of our accumulated knowledge
    and demonstrate our godly apprehension.
  </span>
  <br />
  <br />
  <span>
    The frailty of this assumption is a point that the School of Life video to the right makes far more eruditely and persuasively than I just have.
  </span>
  <br />
  <br />
  <span>
  Most of the 8 principles they present, which are born from so much wisdom, millions of words written and decades of expertise,
    centre on embracing imperfection, accepting your own unique yet archetypal idiocy and the pervasively tragic nature of being alive.
    They present these themes as a powerful remedy to the time we waste resisting these actually unavoidable elements of some large, large part of your life.
  </span>
    <br />
    <br />
  <span>
    In fact, point #4 is even entitled 'Accept Your Idiocy' and is explained thusly:
    <br />
    <br />
<strong>"Don't runaway from the thought that you may be an idiot as if this was a rare and dreadful prospect and insight.
Accept the certainty with good grace in full daylight. You are an idiot. There is not other alternative for a human being.[...]
Embracing our idiocy should render us confident before challenges because messing up is to be expected."</strong>
<br />
<br />
The 'Negative and In Your Control' bucket is here to help with the process of healthily dismantling the earlier assumption and replacing
its underpinning angst and struggle with a wave of empathetic yet unemotional constructive commentary.
<br />
<br />
Fill it up as much as you can with things that you could have done either have done better, or more holistically, or in less time.
<br />
<br />
Celebrate a heaving bucket of such remarks
as the kind of self-insight and awareness that is beautifully symbolic of both your engagement with yourself and the nature of being alive.

  </span>
</div>
<div className="rightCol">
<div className="rightContent">


</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setSkeptical(skeptical => true);
  setPresent(present => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setOptimistic(optimistic => true);
  setPresent(present => false);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ optimistic ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
  <h4 className="quizHeaderWhite">Bucket #4: Forgive Yourself & Others</h4>
    </div>
      <br />
  <span>
    As we discussed in the "positive and out of your control" bucket, life is full of forces and features
    over which you exercise no control whilst trying to journey towards a particular destination.
  </span>
    <br />
    <br />
    <span>
      To map, not only the helpful factors as we discussed earlier, but any present hindering factors as well is very important.
      It often requires more thought and toleration of discomfort than playing back the positive parts of a journey,
      and often feels more skippable than endeavouring to consolidate what you personally could have done better,
      but to map the 'negative and out of your control' puts in motion the following chain of mental events.
    <br />
    <br />
    <strong className="emphasis">1. First, It allows you to detach from them.</strong>
    <br />
    As I stated earlier, it is so easy to mis-calibrate how things played out as it relates to your own contribution.
    You, obviously, should not attribute any of yourself to the things you could not control, whether negative or positive,
    but in the messy, often emotional aftermath of a outcome we can so often do just the opposite.
    <br />
    <br />
    Writing the 'Negative Impact & Out of Your Control' down, therefore, is powerful in acknowledging that
    it was outside of you and the fact that it is now there on the spreadsheet or on the A4 in a very separate bucket
    is a powerful visual acknowledgment of this externality.
      <br />
      <br />
    <strong className="emphasis">2. This detachment allows you to forgive it more easily.</strong>
    <br />
    When we attach our 'selves' to a outcome, it can be far harder to forgive negative external circumstances
    because they have come at the cost of us - our very self - and it seems crazy to be prepared to pay that toll.
    But, as we discussed in the mindset section, attachment and the self are
    notions not only associated with suffering, but are two of its major underpinnings.
    By writing down and detaching from whatever the negative forces in a situation may have been,
    we can see it outside of oursevles, free of a cost to us, and then we can forgive ourselves and it more readily.
      <br />
      <br />
    <strong className="emphasis">3. This forgiveness then empowers you to love the way things played out.</strong>
      <br />
    Once you have detached from something, and have chosen to forgive it, you are then in a position to love it because
    there is every chance that it made you grow.
    This thought has a kind of Stoic origin, most notably in the form of Freidrich Nietzsche. He said as follows:
    <br />
    <br />
    <strong>"My formula for greatness in a human being is <strong className="emphasis">amor fati:</strong> that one wants nothing to be different,
    not forward, not backward, not in all eternity. Not merely bear what is necessary, still less conceal it...<strong className="emphasis">but love it."</strong></strong>
  </span>
  <br />
  <br />
  <span>
Overall, to map them is to detach from circumstances; to detach is to forgive and to forgive is to love them; to love them is to transcend them.
</span>
</div>
<div className="rightCol">
<div className="rightContent">



</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setPresent(present => true);
  setOptimistic(optimistic => false);
}}>Previous</Button>
<Button className="quizButton" href="/insight/quiz/representative">Next</Button>
</div>
</motion.div>

    </>
  );
}
