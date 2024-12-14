import { useEffect,useRef,useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollToPlugin);
const Header = ()=>{
  const headerButtonRef = useRef(null);
  const headerButton = useRef(null);
    const [istop , setistop] = useState('false');
  
    const [isClicked , setClicked]=useState(null);

    
    useEffect(()=>{
      setClicked(false);
    },[]);
    
    const clicked = ()=>{
      setClicked(!isClicked);
    }
  
    useEffect(()=>{
      const handleScroll = ()=>{
        if(window.pageYOffset<=50){
          setistop(true);
          setClicked(false);
        }else{
          setistop(false);
        }
      
      }
      window.addEventListener('scroll',handleScroll);
      return()=>{
        window.removeEventListener('scroll',handleScroll);
      }; 
    }, []);

    const scrollToElement = (elementId) => {
      const target = document.getElementById(elementId);
      if (target) {
        gsap.to(window, {
          scrollTo: { y: target.offsetTop, autoKill: false }, // Smooth scroll to the target
          duration: 1, // Adjust duration for speed
          ease: 'power2.inOut', // Ease type for smooth transition
        });
      }
    }
   
   

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (headerButtonRef.current && !headerButton.current.contains(event.target) && !headerButtonRef.current.contains(event.target)) {
         setClicked(false);

        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [headerButtonRef]);
  
  
    return(
      <div>
  
        <button ref={headerButton} style={istop?{opacity:'0',pointerEvents:'none'}:null} className='menu-button' onClick={()=>clicked()}>
          <TiThMenu style={{fontSize:'4.5rem',color:'white'}}/>
        </button>
        <div ref={headerButtonRef} className="menu-circle" style={isClicked?{animation:"expand 0.5s linear forwards"}:{animation:"shrink 0.2s linear forwards"}}>
        <ul>
            <li><a onClick={() => scrollToElement('portfolio-top')}>Home</a></li>
            <li><a onClick={() => scrollToElement('about-me')}>About</a></li>
            <li><a onClick={() => scrollToElement('my-skills')}>Skills</a></li>
            <li><a onClick={() => scrollToElement('myprojects')}>Projects</a></li>
          </ul>
        </div>
          <header style={istop?null:{opacity:'0',pointerEvents:'none'}}>
            <div>
              <li><a onClick={() => scrollToElement('portfolio-top')}>Home</a></li>
              <li><a onClick={() => scrollToElement('about-me')}>About</a></li>
              <li><a onClick={() => scrollToElement('my-skills')}>Skills</a></li>
              <li><a onClick={() => scrollToElement('myprojects')}>Projects</a></li>
            </div>
           
        </header>
  
      </div>
      
    )
  }

  export default Header;