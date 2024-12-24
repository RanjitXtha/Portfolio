import './App.css';
import Header from './Sections/header';
import Home from './Sections/Home';
import Skills from './Sections/skills';
import Project from './Sections/projects';
import Temp from './temp';
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { useEffect,useRef,useState } from 'react';


import insta1 from './Images/insta1.png';
import insta2 from './Images/insta2.png';
import insta3 from './Images/insta3.png';
import insta4 from './Images/insta4.png';
import insta5 from './Images/insta5.jpg';
import insta6 from './Images/insta6.jpg';
import insta7 from './Images/insta7.jpg';

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import Lenis from '@studio-freight/lenis';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GsapScroll(){
 
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
}


function App() {

  GsapScroll();

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

  return (
    <div className="App" >
{ 
  /*
    <div className="custom-cursor" style={{ left:cursorPosition.x, top: cursorPosition.y}}></div>
    <div className="custom-cursor" style={{ left:cursorPosition.x, top: cursorPosition.y}}></div>
       */
}
      <Header />
      <Home />
      <Skills /> 
      <Project />
      <Gallery /> 
  

      <div className="footer">
            <p>Let's work together:</p>
            <p>shrestha.ranjit.np@gmail.com</p>
             <nav className='icons'><BsFacebook /><BsInstagram /></nav>
        </div>
    </div>
  );
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
    <section className='gallery-section'>
      <h1 style={{margin:'0'}}>Gallery</h1>
      <button onClick={()=>handleClick(1)}><FaArrowLeft className='Gallery-button'/></button>
      <button onClick={()=>handleClick(-1)} style={{right:'0px'}} className='Gallery-button'><FaArrowRight/></button>
         <div className='Gallery' key={refresh}>
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
        </div>
    </section>
  )
}

export default App;
