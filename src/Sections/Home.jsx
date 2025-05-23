import portfolio from '../Images/port.png';
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import hero from '../Images/hero.webp'

import { useEffect,useRef} from 'react';
import { gsap } from "gsap";

const Home = ()=>{
 const divRef = useRef(null);
 const firstParagraphRef = useRef(null);
 const secondParagraphRef = useRef(null);

 useEffect(() => {
   gsap.fromTo(
     divRef.current,
     { x: 200 }, 
     {
       x: 0, 
       duration: 1,
       scrollTrigger: {
         trigger: divRef.current,
         start: 'top 80%',
       },
     }
   );

   gsap.fromTo(
     firstParagraphRef.current,
     { opacity: 0, y: 20 },
     {
       opacity: 1,
       y: 0, 
       duration: 1,
       scrollTrigger: {
         trigger: firstParagraphRef.current,
         start: 'top 90%',
       },
     }
   );

     gsap.fromTo(
       secondParagraphRef.current,
       { opacity: 0, y: 20 },
       {
         opacity: 1,
         y: 0,
         duration: 1,
         scrollTrigger: {
           trigger: secondParagraphRef.current,
           start: 'top 90%',
         },
       }
     );
 }, []); 
  
    return(
        <div>
            <div className="portfolio-top" id="portfolio-top">
          <div className="my-info">
            <h2 style={{fontWeight:'1000'}} ref={firstParagraphRef}>Full stack React Developer</h2>
            <p className="info" ref={secondParagraphRef}>Hi I'm Ranjit Shrestha. I am a passionate fullstack
              Developer based in Kathmandu , Nepal.
            </p>
            <nav className='icons'>
              <a href="https://www.linkedin.com/in/ranjit-shrestha-b3a9b2308/"><FaLinkedin  /></a>
              <a href="https://www.instagram.com/shrestha.ranjit_/"> <BsInstagram /></a>
              <a href="https://github.com/RanjitXtha"><FaGithub /></a>
            </nav>
            
            <div className='buttons'>
             
              <button className="round-button">
               <a href="https://ranjitxtha.github.io/Portfolio/Files/CV.pdf" download> <button> Download CV</button> </a>
                <div className="eff"></div>
              </button>
              <div><img src={portfolio}/></div>
            </div>
            
          </div>

          <div style={{position:'relative'}} className="my-pic" ref={divRef}>
            <img src={hero} style={{position:'absolute',scale:'0.5',transform:'translateY(-50px)'}} alt="hero" />
            <div className="effect-1"></div>
          </div>
        </div>
        <div className='about-me-effect'>
          <h1 className='titles'>About me</h1> 
        </div>

        <section className='about-me' id="about-me">
          
          <p className="info">
          I'm a Frontend Web Developer with diverse skill set which spans to backend development , game development and graphics designing. 
          I enjoy creating user-friendly web experiences that combine aesthetic appeal with seamless functionality.
 I most enjoy building software in the sweet spot where design and engineering meet - things that look good but are also well built. 
  Over the years, I've developed a keen interest in front-end web development, where I focus on building responsive, visually appealing, and interactive websites.
          </p>
        </section>
        </div>
    )
}

export default Home;