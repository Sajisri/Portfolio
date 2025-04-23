import React from "react";
import './nav.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


import { Typewriter } from "react-simple-typewriter";

export default function Home() {
    
    //const navigate=useNavigate()//
    return(
   <div id="home"className="hero">
    <h1><span>Hey, I'm Sajisri</span></h1> 
    {/* Typing Effect */}
        <h2 className="typing-text">
          <Typewriter
            words={["Frontend Developer"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000} />
        </h2>
        <div className="action">
            <div className="connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink></div>
            
        </div>

        
        
      </div>

    
   
    
    )

}

