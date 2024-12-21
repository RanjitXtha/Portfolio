import { BsWindowSidebar } from "react-icons/bs";
import { LiaGamepadSolid } from "react-icons/lia";
import { BsPencilSquare } from "react-icons/bs";


import html from '../Images/html.svg';
import css from '../Images/css.svg';
import javascript from '../Images/javascript.svg';
import react from '../Images/react.svg';
import node from '../Images/node.svg';
import express from '../Images/express.svg';
import mongodb from '../Images/mongodb.svg';
import photoshop from '../Images/photoshop.svg';
import illustrator from '../Images/illustrator.svg';
import unity from '../Images/unity.svg';
import tailwind from '../Images/tailwind.svg'
import firebase from '../Images/firebase.svg'


import { useState , useEffect,useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Skills = ()=>{
    const card1 = useRef(null);
      const card2 = useRef(null);
      const card3 = useRef(null);
      const card4 = useRef(null);
      const [isResizing, setIsResizing] = useState(false); 
      let resizeTimeout;
   
    const cardStart = {
      opacity:0,
      y:-40,
    };

    const cardEnd = {
      opacity:1,
      y:0,
    };

    const parallaxRef = useRef(null);
    const parallaxRef2 = useRef(null);



    useEffect(() => {
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".tech-stack",
          scrub: 1,
          start: "top bottom",
          end: "bottom top"
        }
      });

      t2.fromTo(parallaxRef.current,{xPercent:-30}, {
        xPercent: 30,
      });
  
      t2.fromTo(parallaxRef2.current, {xPercent:30},{
        xPercent: -30,
      },"<");
    }, []);


    useEffect(()=>{
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cards', 
          start: 'top bottom',
          end: 'bottom top',
          invalidateOnRefresh:true
        },
      });

      tl.fromTo(card1.current, cardStart, cardEnd) 
      .fromTo(card2.current, cardStart, cardEnd, '+=0.1') 
      .fromTo(card3.current, cardStart, cardEnd, '+=0.2')
      .fromTo(card4.current, cardStart, cardEnd, '+=0.3');
    },[]);


    return(
        <div>
        <section className='tech-stack'>
          <h1>Tech Stack I Use</h1>

          <div className='tech-stack-icons' style={{transform:'translate(-20rem)'}} ref={parallaxRef}>
            <span className='level'>
              <p>Level</p>
              <p>Intermediate</p>
            </span>
            <div><img src={html} alt="html"/></div>
            <div><img src={css} alt="css"/></div>
            <div><img src={javascript} alt="js"/></div>
            <div><img src={react} alt="react"/></div>
            <div><img src={tailwind} alt="tailwind" style={{objectFit:'contain'}} /></div>
          </div>
          
            
          <div className='tech-stack-icons' style={{marginTop:'10rem',transform:'translate(20rem)'}} ref={parallaxRef2}>
            
            <div><img src={node} alt="node"/></div>
            <div><img src={express} alt="express"/></div>
            <div><img src={mongodb} alt="mongodb"/></div>
            <div><img src={firebase} alt="firebase"/></div>
            <span className='level'>
              <p>Level:</p>
              <p>Beginner</p>
            </span>
          </div>
        </section>
      


        <section className='my-skills' id="my-skills">
          <h1 className="title">My Skills</h1>
          <div className='skill-section'>
            <div className='cards' ref={card1}>
              <div className='card'>
                <span><BsWindowSidebar/></span>
                <h2>Frontend Development</h2>
                <p>My expertise lies in HTML, CSS, JavaScript, and frameworks(React). I enjoy creating pixel-perfect designs and making sure they work 
                  flawlessly across different devices.</p>
                  <div className='card-effect'></div>
              </div>
              <div className='tools-used'>
                  <div><img src={javascript} alt="js"/></div>
                  <div><img src={tailwind} alt="tailwind"/></div>
                  <div><img src={react} alt="react"/></div>
              </div>
            </div>

            <div className='cards' ref={card2}>
              <div className='card'>
                <span><BsPencilSquare/>/</span>
                <h2>Graphics Designing</h2>
                <p>I have experience with various Graphics software i.e Adobe Photoshop and
                  Illustrator.
                  My design skills complement my development work, allowing me to create 
                  custom graphics and design elements that enhance user experiences.</p>
                <div className='card-effect'></div>
              </div>
              <div className='tools-used'>
                <div><img alt="photoshop" src={photoshop}/></div>
                <div><img  alt="illustrator" src={illustrator}/></div>
              </div>
            </div>
           

            <div className='cards' ref={card3}>
              <div className='card'>
                <span><LiaGamepadSolid/></span>
                <h2>Game Development</h2>
                <p>I have experience with Unity and I have made various small games for pc and andriod platform.</p>
                <div className='card-effect'></div>
              </div>
              <div className='tools-used'>
                <div><img src={unity} alt="unity"/></div>
              </div>
            </div>

            <div className='cards' ref={card4}>
              <div className='card'>
                <span><LiaGamepadSolid/></span>
                <h2>Backend Development</h2>
                <p>I have experience with MERN stack and firebase for backend.</p>
                <div className='card-effect'></div>
              </div>
              <div className='tools-used'>
                <div><img src={firebase} alt="firebase"/></div>
                <div><img src={mongodb} alt="mongodb"/></div>
                <div><img src={node} alt="node"/></div>
                <div><img src={express} alt="express"/></div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default Skills;