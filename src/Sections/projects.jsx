import project1 from '../Images/project1.png';
import Portfolio from '../Images/Portfolio.png';
import MovieApp from '../Images/MovieApp.png';
import FoodApp from '../Images/FoodApp.png';
import ChatApp from '../Images/Chatapp.png'

import { useEffect,useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCards from '../Components/ProjectCards';


gsap.registerPlugin(ScrollTrigger);

const Project = () =>{

  const fixedDivRef = useRef(null);
  //const containerRef = useRef(null);

  useEffect(() => {
   
    const horizontalSection = fixedDivRef.current;
    const viewportWidth = window.innerWidth;
    
      
      const scrollTrigger = ScrollTrigger.create({
        trigger: fixedDivRef.current,
        start: 'top top',
        end: () => `+=${horizontalSection.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh:true,
        onUpdate: (self) => {
          const scrollPosition = self.progress * (horizontalSection.scrollWidth - window.innerWidth+100);
          horizontalSection.scrollLeft = scrollPosition;
        },
  
        onEnter: () => {
          gsap.to(fixedDivRef.current, {
            scale: 1.2, 
            duration: 0.5, 
            ease: 'power1.inOut', 
          });
        },
        onLeave: () => {
          gsap.to(fixedDivRef.current, {
            scale: 1, 
            duration: 0.5,
            ease: 'power1.inOut',
          });
        },
  
        onLeaveBack: () => {
          gsap.to(fixedDivRef.current, {
            scale: 1, 
            duration: 0.5,
            ease: 'power1.inOut',
          });
        },
        onEnterBack: () => {
          gsap.to(fixedDivRef.current, {
            scale: 1.2, 
            duration: 0.5,
            ease: 'power1.inOut',
          });
        },
     
      });
  
      
  
      return () => {
        scrollTrigger.kill(); 
      };
    
    
  }, []);


    return(
      <div id="myprojects">
        <section className='my-projects'>
           <h1>Projects</h1>
           <div className='project-screen' ref={fixedDivRef}>
              <ProjectCards image={MovieApp} title={"Movie"} url={"https://movie-frontend-eight.vercel.app/"} />
              <ProjectCards image={Portfolio} title={"Portfolio Website"} url={"https://ranjitxtha.github.io/Portfolio/"} />
              <ProjectCards image={FoodApp} title={"Food Recipe Website"} url={"https://ranjitxtha.github.io/TailwindApp/"} />
              <ProjectCards image={ChatApp} title={"Chat Application using Firebase"} url={"https://ranjitxtha.github.io/Chat-App/"} />
              <ProjectCards image={project1} title={"E-Commerce Website using Firebase"} url={"https://ranjitxtha.github.io/EcommerceSite/"} />
           </div>
        </section>

      </div>
        
    )
}

export default Project;