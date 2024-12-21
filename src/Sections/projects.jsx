import project1 from '../Images/project1.png';
import project2 from '../Images/project2.png';
import project3 from '../Images/project3.png';

import { useEffect,useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
            <div className="project1 project">
                  <div className='project-left'>
                    <div><img src={project1} alt="project1"/></div>
                  </div>
                  <div className='project-right'>
                      <h1>Ecommerce Clothing Shop</h1>
                      <button className='round-button'>
                        <a><button> View</button></a>
                        <div className='eff'></div>
                      </button>
                  </div>
              </div>

              <div className='project'>
                  <div className='project-left'>
                    <div><img src={project2} alt="project2"/></div>
                  </div>
                  <div className='project-right'>
                      <h1>Gaming Computer Shop</h1>
                      <button className='round-button'>
                      <a><button> View</button></a>
                        <div className='eff'></div>
                      </button>
                  </div>
              </div>

              <div className='project'>
                  <div className='project-left'>
                    <div><img src={project3} alt="project3"/></div>
                  </div>
                  <div className='project-right'>
                      <h1>Food Blog Site</h1>
                      <button className='round-button'>
                      <a><button> View</button></a>
                        <div className='eff'></div>
                      </button>
                  </div>
            </div>

            
           </div>
            

        </section>

      </div>
        
    )
}

export default Project;