import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";
//import Particles from "react-particles-js";
//import {Video} from 'react-native';


export default function Intro() {
        const textRef = useRef();
        
        useEffect(() => {
            console.log(textRef)

            init(textRef.current, { 
                showCursor: false, 
                backDelay:  1500,
                backSpeed: 60,
                showCursor: true,
                strings: ["Developer", "Designer" , "Artist" , "Content Creator" ],
             });
          }, []);


    return (
    <>    
  
        
        <div className = "intro" id="intro" >
        
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/JM_F_T.png" alt="" />
                </div>
            </div>
            <div className="right">
            <div className="wrapper">
                <h2>
                    Hi There, I'm
                </h2>
                <h1>
                    Richard Toney
                </h1>
                <h3>
                    Freelance <span ref={textRef}></span>
                </h3>
                <a href="#portfolio">
                    <img src="assets/down_s.png" alt=""/>
                </a>
            </div>  
            </div>  
            
        </div>
        </>
    )
}

/*
<Particles 
params={{
    particles: {
        number:  {
            value:30;
            density: {
                enable: true,
                value_area: 900,
            }
        }
        }   
}/>

*/