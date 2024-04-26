import './App.css';
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { useEffect,useRef,useState } from 'react';
import { BsWindowSidebar } from "react-icons/bs";
import { LiaGamepadSolid } from "react-icons/lia";
import { BsPencilSquare } from "react-icons/bs";

import html from './Images/html.svg';
import css from './Images/css.svg';
import javascript from './Images/javascript.svg';
import react from './Images/react.svg';
import node from './Images/node.svg';
import express from './Images/express.svg';
import mongodb from './Images/mongodb.svg';
import photoshop from './Images/photoshop.svg';
import illustrator from './Images/illustrator.svg';
import unity from './Images/unity.svg';

import insta1 from './Images/insta1.png';
import insta2 from './Images/insta2.png';
import insta3 from './Images/insta3.png';
import insta4 from './Images/insta4.png';
import insta5 from './Images/insta5.jpg';
import insta6 from './Images/insta6.jpg';
import insta7 from './Images/insta7.jpg';
import Lenis from '@studio-freight/lenis';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const sectionRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      direction: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
    });
  }, []);





  return (
    <div className="App">

{
  //<div className="custom-cursor" style={{ left: cursorPosition.x-40, top: cursorPosition.y-40 }}></div>
}
    
      
    <Header />

        <div className="portfolio-top" id="portfolio-top">
          <div className="my-info">
            <h2>Front-End React Developer</h2>
            <p className="info">Hi I'm Ranjit Shrestha. I am a passionate Front-end
              Developer based in Kathmandu , Nepal.
            </p>
            <nav className='icons'><BsFacebook /><BsInstagram /></nav>
            <button className="round-button">Download CV</button>
          </div>

          <div className="my-pic">
            <div className="effect-1"></div>
          </div>
        </div>
        <div className='about-me-effect'>
          <h1 className='titles'>About me</h1> 
        </div>

        <section className='about-me' id="about-me">
          
          <p className="info">
          Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
        </section>

        <section className='tech-stack'>
          <h1>Tech Stack I Use</h1>
          <div className='tech-stack-icons'>
            <span className='level'>
              <p>Level</p>
              <p>Intermediate</p>
            </span>
            <div><img src={html} alt="html"/></div>
            <div><img src={css} alt="css"/></div>
            <div><img src={javascript} alt="js"/></div>
            <div><img src={react} alt="react"/></div>
          </div>
          
            
          <div className='tech-stack-icons' style={{marginTop:'10rem'}}>
            <span className='level'>
              <p>Level:</p>
              <p>Intermediate</p>
            </span>
            <div><img src={node} alt="node"/></div>
            <div><img src={express} alt="express"/></div>
            <div><img src={mongodb} alt="mongodb"/></div>
          </div>
        </section>
      


        <section className='my-skills' id="my-skills">
          <h1 className="title">My Skills</h1>
          <div className='skill-section'>
            <div className='cards' >
              <div className='card'>
                <span><BsWindowSidebar/></span>
                <h2>Frontend Development</h2>
                <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening 
                  their Fruit saw for brought fish forth</p>
                  <div className='card-effect'></div>
              </div>
              <div className='tools-used'>
                  <div><img src={html} alt="html"/></div>
                  <div><img src={css} alt="css"/></div>
                  <div><img src={javascript} alt="js"/></div>
              </div>
            </div>

            <div className='cards'>
              <div className='card'>
                <span><LiaGamepadSolid/></span>
                <h2>Graphics Designing</h2>
                <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening 
                their Fruit saw for brought fish forth</p>
                <div className='card-effect'></div>
              </div>
              <div className='tools-used'>
                <div><img alt="photoshop" src={photoshop}/></div>
                <div><img  alt="illustrator" src={illustrator}/></div>
              </div>
            </div>
           

            <div className='cards'>
              <div className='card'>
                <span><BsPencilSquare/>/</span>
                <h2>Game Development</h2>
                <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening 
                their Fruit saw for brought fish forth</p>
                <div className='card-effect'></div>
              </div>
              <div className='tools-used'>
                <div><img src={unity} alt="unity"/></div>
              </div>
            </div>
          </div>
        </section>


        <section className='my-projects' id="my-projects">
           <h1>Projects</h1>
            <div className="project1 project">
                <div className='project-left'>
                  <div></div>
                </div>
                <div className='project-right'>
                    <h1>Project1</h1>
                    <button className='round-button'>Download</button>
                </div>
            </div>

            <div className='project'>
                <div className='project-left'>
                  <div></div>
                </div>
                <div className='project-right'>
                    <h1>Project1</h1>
                    <button className='round-button'>Download</button>
                </div>
            </div>

            <div className='project'>
                <div className='project-left'>
                  <div></div>
                </div>
                <div className='project-right'>
                    <h1>Project1</h1>
                    <button className='round-button'>Download</button>
                </div>
            </div>

        </section>
        <Gallery />
        
    </div>
  );
}

const Header = ()=>{
  const [istop , setistop] = useState('false');

  useEffect(()=>{
    const handleScroll = ()=>{
      window.pageYOffset===0?setistop(true):setistop(false);
    }
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll);
    }; 
  }, []);

  const [isClicked , setClicked]=useState('false');
  const clicked = ()=>{
    setClicked(!isClicked);
  }

  return(
    <div>

      <button style={istop?{opacity:'0',pointerEvents:'none'}:null} className='menu-button' onClick={()=>clicked()}>X</button>
      <div className='menu-circle' style={isClicked?{animation:"shrink 0.2s linear forwards"}:{animation:"expand 0.5s linear forwards"}}></div>
        <header style={istop?null:{opacity:'0',pointerEvents:'none'}}>
      <ul>
        <li><a href="#portfolio-top">Home</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#my-skills">Skills</a></li>
        <li><a href="#my-projects">Projects</a></li>
      </ul>

    </header>

    </div>
    
  )
}

const Gallery = ()=>{
  const[index,setIndex]= useState(0);
  const [refresh, setRefresh] = useState(false);
  const Images =[
    insta1,insta2,insta3,insta4,insta5,insta6,insta7
  ];

    const handleClick = (direction) => {
      const newIndex = (index + direction + Images.length) % Images.length;
      setIndex(newIndex);
      setRefresh(!refresh); 
    };

  return(
    <div className='gallery-section'>
      <button onClick={()=>handleClick(1)}></button>
      <button onClick={()=>handleClick(-1)} style={{right:'0px'}}></button>
         <section className='Gallery' key={refresh}>
            <div className='gallery-left'>
                <div className='gallery-img'>
                  <img  className="active" src={Images[(index + 0) % Images.length]} />
                </div>
            </div>

            <div className='gallery-right'>
                <div>
                  <img  className="active" alt="1" src={Images[(index + 1) % Images.length]} />
                </div>
                <div>
                  <img  className="active" alt="2" src={Images[(index + 2) % Images.length]} />
                </div>
                <div>
                  <img  className="active" alt="3"  src={Images[(index + 3) % Images.length]} />
                </div>
                <div>
                  <img  className="active" alt="4" src={Images[(index + 4) % Images.length]} />
                </div>
            </div>
        </section>
    </div>
   
  )
}

export default App;
