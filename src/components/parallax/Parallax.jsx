import '../parallax/Parallax.scss'
import React, { useRef } from 'react'
import star2 from '../../assets/stars2.png'
import sky from '../../assets/sky.png'
import planets from '../../assets/planets.png'
import astronaut from '../../assets/astronaut.png'
import cityAstronaut from '../../assets/astronaut2.png'
import city from '../../assets/city.png'
import stars from '../../assets/stars.png'
import portback from '../../assets/portfolio_back.png'
import {motion, useScroll, useTransform} from 'framer-motion'

const Parallax = ({type}) => {

  const ref = useRef();

  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start start", "end start"],
    }
  )
 

  const yTextAbout = useTransform(scrollYProgress, [0, 1], ["-400%", "1400%"]);
  const yTextPort = useTransform(scrollYProgress, [0, 1], ["-400%", "900%"]);
  const yBG = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBGAstro = useTransform(scrollYProgress, [0, 1], ["20%", "450%"]);
  const yStars = useTransform(scrollYProgress, [0, 1], ["-5%", "50%"]);
  const yAstro2 = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yAstro1 = useTransform(scrollYProgress, [0, 1], ["500%", "0%"]);


  return (
    <div className="parallax" style={{backgroundImage: type==="About" ? `url(${sky})`: `url(${portback})`, backgroundSize: "cover"}}>
        <motion.h1 
          style={{y: type==="About" ? yTextAbout: yTextPort, marginTop: type==="About"? "6em": "-1em"}}
        >
            {type==="About" ? "A Little About Me" : "Projects I've Worked On"}
        </motion.h1>
        <motion.div 
        className="buildings" 
        style={{backgroundImage: type==="About" ? null : `url(${city})`, 
        backgroundSize: "cover", 
        width: "100%", 
        height:"105%",
        marginTop:"-2em",
        position: "absolute",
        zIndex: "4"
        }}></motion.div>
        <motion.div className="planets"
          style={{backgroundImage: type==="About" ? `url(${planets})` : null, 
          width: "100%", 
          height: "100%", 
          position: "absolute",
          backgroundSize: "cover", 
          bottom: '0',
          zIndex: "3"
        }}
         >
          
         </motion.div>

         <motion.div className="stars"
          style={{backgroundImage: `url(${stars})`, 
          width: "100%", 
          y:yStars,
          marginTop: "-5em",
          height: "100%", 
          position: "absolute",
          backgroundSize: "cover", 
          top: '0',
          zIndex:"2"
        }}
         >
          
         </motion.div>
        <motion.div className="austonaut" 
         style={{backgroundImage: type==="About" ? `url(${astronaut})` : `url(${cityAstronaut})`, 
         width: "20%", 
         marginTop: type==="About"? "-25em": "-95em",
         height: "40%", 
         x:type==="About"? yAstro2: yAstro1,
         y: type==="About"? yBG: yBGAstro,
         position: "absolute",
         backgroundSize: "cover", 
         left: type==="About"? '10em': '-10em',
         zIndex:"1"
 
      }}
        ></motion.div>

    </div>
  )
}

export default Parallax