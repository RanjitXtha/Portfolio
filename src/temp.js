
import { useState , useEffect,useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import html from './Images/html.svg';
import css from './Images/css.svg';
import javascript from './Images/javascript.svg';
import react from './Images/react.svg';
import node from './Images/node.svg';
import express from './Images/express.svg';
import mongodb from './Images/mongodb.svg';


gsap.registerPlugin(ScrollTrigger);
const Temp = ()=>{
   
    const parallaxRef = useRef(null);
    const parallaxRef2 = useRef(null);
    
    const  setupParallaxTriggers = () => {
  
      gsap.to(parallaxRef.current, {
        xPercent: 30,
        scrollTrigger: { 
          trigger: '.container',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom top',
          invalidateOnRefresh: true,
          markers:true,
        },
      });
  
      gsap.to(parallaxRef2.current, {
        xPercent: -30,
        scrollTrigger: {
          trigger: '.container',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom top',
          invalidateOnRefresh: true,
          markers:true,
          start: '40% bottom',
        },
      });
    };

    useEffect(() => {
      setupParallaxTriggers();
    }, [])


    return(
        <div style={{margin:'100rem 0rem'}}>
        <section className='container'>
          <h1>DEMO</h1>
          <div className='box' style={{transform:'translateX(-30%)'}} ref={parallaxRef}>
            <span className='level'>
              <p>Level</p>
              <p>Intermediate</p>
            </span>
            <div><img src={html} alt="html"/></div>
            <div><img src={css} alt="css"/></div>
            <div><img src={javascript} alt="js"/></div>
            <div><img src={react} alt="react"/></div>
          </div>
          
            
          <div className='box' style={{marginTop:'10rem',transform:'translateX(30%)'}} ref={parallaxRef2}>
            
            <div><img src={node} alt="node"/></div>
            <div><img src={express} alt="express"/></div>
            <div><img src={mongodb} alt="mongodb"/></div>
            <span className='level'>
              <p>Level:</p>
              <p>Beginner</p>
            </span>
          </div>
        </section>
        </div>
    )
}

export default Temp;