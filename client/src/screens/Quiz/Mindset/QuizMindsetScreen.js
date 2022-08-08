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
import mindset from '../../../tenor.gif';

import './quizmindset.css';

export default function QuizMindsetScreen() {
  const [titleDiv, setTitleDiv] = useState(true);
  const [kickOff, setKickOff] = useState(false);
  const [open, setOpen] = useState(false);
  const [skeptical, setSkeptical] = useState(false);
  const [present, setPresent] = useState(false);
  const [optimistic, setOptimistic] = useState(false);

  const [video1, setVideo1] = useState(true);
  const [video2, setVideo2] = useState(false);
  const [video3, setVideo3] = useState(false);

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

  const johnCleese = 'Pb5oIIPO62g'

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
<span>Making of a Mindset:</span>
  <h1>Preparing Perspective</h1>
  <span>Click anywhere when you are ready</span>
</motion.div>

<motion.div

animate={ kickOff ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
    <h4 className="quizHeaderWhite">Mindset Kick-Off</h4>
    </div>
    <br />
    <span>
      Getting value from a graph is only a very small part about being able to spot and scrutinise the visualisation itself in any
      even minorly statistical manner. We can all spot a peak or a trough, and all spy a subtler shift in a line or trend.
    </span>
    <br />
    <br />
    <span>
      The far larger portion of potential value is derieved by knowing how to reliably create the perfect mind state from which
      to study your insights - one that will prime you for greater, safer and happier explorations.
      </span>
    <br />
    <br />
    <span>
    There are 4 key components of this primed mind state:
    <br />
    <br />
    <strong className="emphasis">The Open Mode</strong>
    <br />
    <br />
    <strong className="emphasis">Healthy Skepticism</strong>
    <br />
    <br />
    <strong className="emphasis">The Present Moment</strong>
    <br />
    <br />
    <strong className="emphasis">and an strong undercurrent Optimism</strong>
    </span>

    <br />
    <br />
    <span>

    </span>
</div>
<div className="rightCol">
<div className="rightContent">
<img src={mindset} width="50%" />
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
      <h4 className="quizHeaderWhite">Principles</h4>
    </div>
    <br />
      <h3 className="quizHeaderWhite">Entering the <strong className="emphasis">Open Mode:</strong> </h3>
    <br />
    <span>
      Whilst it is not something we normally think of as being a part of working with data,
      enabling creativity and free thinking when studying your insights is essential.
      <br />
      <br />
      It is the particular skill and state that will join the hard to unite spaces, prompt the interesting questions
      and create the mental distance required to turn signals into growth.
      </span>
        <br />
        <br />
      <span>
        John Cleese gave a tremendous talk about creativity and how for him, after extensive research and collaboration, it was something that
        was best fostered in what he and the other researchers (most notably Donald McKinnon) called <strong>'the Open Mode'.</strong>
        I would 100% recommend watching it, but for ease, I have dissected the key actions and thoughts below.
      </span>
      <br />
      <br />
      <hr className="dividingLine" />
      <br />
      <strong className="emphasis">Objective:</strong><span> To successfully get our minds into the 'Open Mode' when we are looking at our insights.</span>
      <br />
      <br />
      <strong className="emphasis">Why:</strong><span> To help us spot signals and convert them into further growth and joy systematically and safely.</span>
      <br />
      <br />
      <strong className="emphasis">How:</strong>
      <br />
      <br />
      <span>1.<strong className="boldHeader">You Need Time and Space</strong></span><br /><i className="aside">('A Time, Space Oasis')</i>
      <br />
          <br />
      <ul>
      <li><strong className="emphasis">Create your 'Oasis'</strong> i.e. the physical and mental space you need from people,
      and other distractions.
      <br />
      <br />
      Obviously, the nature and shape of this oasis will be different for everyone.
      However, to know what it is for you is essential as distractions, task switching and insufficient time will all steal from your minds ability to settle in and do
      genuinely deep and creative thinking.</li>
          <br />
      <li><strong className="emphasis">Define</strong> the slot of time you are going to think within.</li>
        <ul className="subList"><i className="aside">What makes a good time slot</i>
          <li>
          This slot needs a pre-defined start
          </li>
          <li>
          and the slot needs a pre-defined  end
          </li>
          <li>
          Half a day is too long in most cases
          </li>
          <li>
          30 minutes is too short in most cases
          </li>
          <li>
          80 - 100 minutes is often optimal.
          </li>
        </ul>
            <br />
        <li>Be prepared for your mind to take a moment to warm up in the first 30 minutes. It will likely resist a litle as you try and put it to work, however, resist
        the temptation to prioritise something that is either less urgent or straight up less important.</li>
        <br />
        <li>Be prepared for it to feel like perhaps more like play, and less like rational economic optimsation.</li>
      </ul>
      <br />
      <span>2.<strong className="boldHeader">Time (to put the sub-conscious to work)</strong></span>
      <br />
      <ul>
      <li>If you don't reach a satisfactory conclusion withn your time and space oasis,
      and you are not at the point where a decision needs to be made, then don't make one.
      Your sub-conscious will then work gamely on a solution in the now vacant window.
      <br />
      <br />
      This frees you from feeling like you have to to force it in the moment,
      providing you can tolerate the space a question without an answer creates.
      <br />
      <br />
      This space is not a void; it is rather a crucible for creative combustion;
      keep it open for as long as you can before having an answer is utterly imperative.</li>
      </ul>
      <br />
      <span>3.<strong className="boldHeader">Confidence</strong></span>
      <br />
      <ul>
      <li>Not resolving a decision before it is necessary by being able to tolerate the discomfort
      that exists between a thought arising and resolving, thus giving you subconscious the maximum possible time to arrive
      at a creative solution.</li>
      </ul>
<br />
<span>
  When you have a solution you love, or simply the best you could have created before having to make a decision, then switch to the closed mode
  to back your decision with strong, assertive energy.
  But, remember, be very careful not to get stuck there by unduly prioritising making snap decisions to reduce
  your discomfort, starving yourself of space and time and or believing that you can force everything in a rational,
  linear and compulsive fashion.
</span>

</div>
<div className="rightCol">
<div className="rightContent">
<a className="niceLink"href="https://youtu.be/Pb5oIIPO62g">Link to Full 35 Minute Video</a>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setKickOff(kickOff => true);
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
      <h3 className="quizHeaderWhite">Principles</h3>
    </div>
    <br />
  <h2 className="quizHeaderWhite">A Chunk of Healthy Skepticism</h2>

    <span>
    Sceptism is often mistaken for cyncism in our society - and both tend to be accompanied by a negative connotation
    - but they are most certainly not the same.</span>
    <br />
    <br />
    <span>
    Whilst just like any trait or outlook has its extremes, a level of sceptism that hugs the aristotliean mean <i className="aside">(as in, deployed smartly between the extremes whilst
    accounting for your own natural tendencies)</i>, is a hugely healthy outlook.
    <br />
    <br />
    It is the backbone of progress. The scientist who doesn't just settle for an apparently correct solution and rather asks, 'how could this be wrong?'
    is the one far more likely to get to the truth of a subject than the one in it to simply confirm his/her pre-existing belief, or simply takes the face value
    of the evidence laid in front of them as gospel.
    <br />
    <br />
    Furthermore, in general life, when we cease to be skeptical, we tend to accept whatever we are told as fact, when even minor scrutiny would lead to a better outcome
    for all parties. On the other side of the equation, when we are exclusively, billigerently skeptical, we do strafe in to cynicism;
    and find outselves reluctant to believe in anything, undertake any action or believe
    anyone is putting good action behind a good intention.</span>
    <br />
    <br />
    <span>
    But there is more we can add here; again, illucidated by a quote:
    </span>
    <br />
    <br />
    <hr className="dividingLine" />
    <br />
    <span>
    John Berger was a famous art evangelist and tv presenter in the UK. His series of programmes called
    <strong> 'Ways of Seeing'</strong> in the 1970s were beautifully pitched
    to use art as a means of exploring how we have come to look at some many things in everyday life.
    </span>
    <br />
    <br />
    <span>
    He concludes the first episode by saying the following:
    <br />
    <br />
    <strong>"I'm going to try and relate the experience of art directly to other experiences,
    and to use the means of reproduction as though they offered a language, as if pictures were
    like words, not holy relics.</strong>
    <br />
    <br />
    [...]
    <br />
    <br />
    <strong>But remember I am controlling and using for my own purposes
    the means of reproduction needed for these programmes. The images may be like words, but there
    is no dialogue yet.</strong>
    <br />
    <br />
    [...]
    <br />
    <br />
    <strong>...with this programme, as with all programmes, you receive
    images and meanings which are arranged. I hope you will consider what I arrange, but be
    skeptical of it."</strong>
    </span>
    <br />
    <br />
    <span>
    The same is true of the data in your <strong>Insight</strong> section.
    <br />
    <br />
    It is arranged and presented according to its potential for good, but also it has inevitable limitations.
    <br />
    <br />
    It is not your every waking thought, movement, feeling or foible.
    <br />
    <br />
    Your data is just the expression of a few self-reported intentions, actions and feelings.
    <br />
    <br />
    What you are looking at is just a mixture of lines, dots, marks and numbers on a page.
    <br />
    <br />
    Yet, for all their limitations, when looked at in the open mode, with due skepticism and an understanding of the context, these limited
    arrangements can help you see deep inside yourself and change your very existence for the better.
    <br />
    <br />
    Overall, to summarise, treat every signal you find in the open mode with skepticism. This due scrutiny -
    the extra asking of <strong>'why is this happening?'</strong> in a calm, curious way - will help you get to the deepest
    lying truth and be less shaken by the things you saw and felt on first glance.
    </span>

</div>
<div className="rightCol">
<div className="rightContent">

<a className="niceLink" href="https://youtu.be/0pDE4VX_9Kk?t=1681">Skip to the Quote</a>
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
      <h3 className="quizHeaderWhite">Principles</h3>
    </div>
    <br />
<span>
Presence and mindfulness are much talked about and engaged with nowadays, particular as remedies for stress and anxiety.
<br />
<br />
Further and further engagement with mindfulness practices have the power to not only allow you to extricate yourself from stress and anxiety,
but distant you from notions of self, and attachment to the past and the future more generally.
<br />
<br />
In this state, people often describe themselves as feeling more and more connected with all facets of the world. They no feel like an isolated
ego with a past and a future, but rather as a pulsating node in one giant organism; completely alike and united with the rest of existence.
</span>
<br />
<br />
<span>
Whilst I am definitely not saying that the only way to get value from your insights is to be a zen buddhist monk or think in
some crazily esoteric fashion, this disinteragrating of self and existing only in the present moment is really worth flagging.
</span>
<br />
<br />
<span>
As we explored earlier, looking at your habits played back in data can be a quite a triggering experience for people.
It is so easy to lurch to thoughts such as, 'Man, I regret doing that', 'Why on earth did I do that?' or
'I definitely want to do that more in the future', but all of these thoughts should be looked at with certain caution.
You can't change the past and you can't effect the future ahead of time...
<br />
<br />
<strong>All you can ever do is take care of the present moment as best as possibly can.</strong>
</span>
<br />
<br />
<span>
On the present moment, Johnny Wilkinson says something inparticular in the talk to the right that has stuck in my mind:</span>
<br />
<br />
<span>
He says, <br /><strong className="emphasis">'there are no consequences in the present moment'</strong>
</span>
<br />
<br />
<span>
Most people I have relayed that quote too wriggle and writhe a little bit, and go "what? obviously there are consequences.
Everything I do has a consequence, everything has a cause and effect".
</span>
<br />
<br />
<span>
  In physical sense, this is undeniable, but we are dealing in the realm of the mental and emotional.
  <br />
  <br />
  In short, Wilkinsons remark is saying that the suffering or triggers we experience are a product of an attachment with the past,
  or projections into the future, and that if are you alive entirely and solely in the present moment, you will avoid that suffering.
  <br />
  <br />
  <hr className="dividingLine" />
    <br />
  The reflections and projections we so often make are very natural,
  particularly in a market society that obsesses about external reward and pursuits of 'greatness'.
  <br />
  <br />
  When looking at your data, maybe you see something that really challenges your perception of yourself - who you feel you've been in the past - and you think,
  'What if I am not that person I thought I was?'.
  <br />
  <br />
  Similarly, you could look at the same data and think, 'How am I going to be the person I want to be in the future by acting like that?'.
  This means that in the past you have projected a version yourself forward, perhaps waiting for that version of you to be realised before
  you can be content.
  <br />
  <br />
  Both of these responses have wrenched your brain out of the present.
  When looked at in the present, the things you are seeing as just signals
  that can allow you to explore your diary and take away a learning that can be applied.
  <br />
  <br />
  There is nothing wrong with having a vision for the future,
  and this whole thing is about growing so I am obviously not against that, but don't mistake a commitment to grow
  with projecting your self into the future,
  panicking over whether the projections you make will come to pass.
<br />
<br />
  <strong>To summarise, as Johnny Wilkinson said, there are no consequences in the present moment.
  The present moment is your refuge from suffering wherein no challenge that can't be overcome, no level of suffering that can't be
  processed and all of the growth you would hope to foster is earned.
  </strong>
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
      <h3 className="quizHeaderWhite">Principles</h3>
    </div>
    <br />
    <span>
      Another human outlook that can get a bit of kicking in life at the moment is optimism.
      <br />
      <br />
    In a perpetually alarming and negative news cycle, pessimsim about the human condition - entipified by a bleak outlook on the future
    and a dwindling association with hope - has become over valued by the apparently wise and perceptive.
    This tends to leave optimism relegated
    to the presumed shallow and naive.
      <br />
      <br />
    However, whilst there is no denying that the kind of absent optimism that just assumes things will get better without
    some action or awareness that stops people from acting to make the world a better place is more often than not a very self-defeating state,
    the kind of hopeful view that provides the final pillar in the mindset section is not only more perceptive than pessimism,
    but is going to translate to better performance too.
      <br />
      <br />
    I have three lovely gobbets that I refer back to in mind when I reflect on optimism that you can explore by clicking on the buttons below.
      <br />
      <br />
    Elaine Stritch describes the balance of optimism and presence well, in her classic raw edged style.
      <br />
      <br />
    <strong>"I pray that I may live expectantly. To live expectantly. "What's going to happen on Sunday?", and on Sunday, "What's going to happen on Monday?"
      <br />
      <br />
      [...]
      <br />
      <br />
      In the meantime, stay where you f**kin are - and enjoy it; the best way you know how."</strong>
  <br />
    <br />
    In more infamous terms, Steve Jobs describes a similar state of mind in his much viewed Stanford Commencement Speech:
  <br />
      <br />
    <strong>"You have to trust that the dots will somehow connect in your future
    <br />
          <br />[...]
          <br />
              <br />
              Because believing the dots will connect down the road, will give you confidence to follow your heart even when it leads off the well-worn path"</strong>
  <br />
    <br />
Finally, a third quote: the actor, raconteur and humanitarian Peter Ustinov said this on the Parkinson programme which I think is bang on as well:
<br />
  <br />
    <strong>"I think pessimism is completely out of date[...]a romantic indulgence.
    I have always thought that an optimist was a person who know exactly how sad a place the world
    could be, and a pessimist was someone who finds out anew every morning."</strong>
    <br />
      <br />
    This beautiful demonstrates the difference between mindless hope without action or awareness of reality,
    and the kind of optimism I am advocating.
    <br />
      <br />
    You know it will be hard, you know the world can be ruthless, but that isn't reason to despair
    - it is more reason to be confident that the effort you make will be a) its own rewards and b) worth it in the end, regardless
    if things go exactly to plan or not, and c) a better option for maintain a joyful perspective than the former.
</span>

</div>
<div className="rightCol">
<div className="rightContent">
<motion.div
className="video One"
animate={ video1 ? "show" : "hide" }
variants={showHideState}
>

<i className="aside timestamp">Timestamp: 00:30</i>
</motion.div>
<motion.div
className="video Two"
animate={ video2 ? "show" : "hide" }
variants={showHideState}
>

<i className="aside timestamp">Timestamp: 00:30</i>
</motion.div>
<motion.div
className="video Three"
animate={ video3 ? "show" : "hide" }
variants={showHideState}
>

<i className="aside timestamp">Timestamp: 00:00</i>
</motion.div>
<div className="nameButtonRow">
<motion.button
className="toggleButton" onClick={()=>{
    setVideo1(video1 => true);
    setVideo2(video2 => false);
    setVideo3(video3 => false);
}
}>Elaine</motion.button>
<motion.button
className="toggleButton" onClick={()=>{
    setVideo1(video1 => false);
    setVideo2(video2 => true);
    setVideo3(video3 => false);
}
}>Steve</motion.button>
<motion.button
className="toggleButton" onClick={()=>{
    setVideo1(video1 => false);
    setVideo2(video2 => false);
    setVideo3(video3 => true);
}
}>Peter</motion.button>
</div>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setPresent(present => true);
  setOptimistic(optimistic => false);
}}>Previous</Button>
<Button className="quizButton" href="/insight/quiz/debrief">Next</Button>
</div>
</motion.div>

    </>
  );
}
