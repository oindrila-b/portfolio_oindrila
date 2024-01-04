import '../hero/Hero.scss'
import { TypeAnimation } from 'react-type-animation';
import me from '../../assets/ME.png'
import meAnimated from '../../assets/animation4.json'
import scroll from '../../assets/scrollDown.png'
import React from 'react'
import {motion} from 'framer-motion'
import Lottie from 'react-lottie';


const textVariant = {
    initial: {
        x:-500,
        opacity:0,
    },

    animate: {
        x:0,
        opacity :1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
     scrollButton:{
        opacity:0,
        y:10,
        transition: {
            duration:2,
            repeat: Infinity,
        }
     }
};

const slideVariant = {
    initial: {
        x:300,
    },

    animate: {
        x:"-880%",
        transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
        }
    }
};

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">

                <motion.div className="textContainer" variants={textVariant} initial="initial" animate="animate">
                    <motion.p variants={textVariant} style={{ fontSize: "3.5em", width:"3em" }}>
                        OINDRILA BANERJEE {""}
                    </motion.p>
                    <TypeAnimation variants={textVariant}
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Software Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Backend Developer',
                            1000,
                            'Coder',
                            1000,
                            'Thinker',
                            1000,
                            'Learner',
                            1000,
                            'Hustler',
                            1000,
                            'Coffee Lover!',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '4em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <motion.div>
                        <motion.img variants={textVariant} animate="scrollButton" src={scroll} alt='' />
                    </motion.div>
                </motion.div>
            </div>
            <motion.div 
            className="movingTextContainer" 
            variants={slideVariant}
             initial="initial"
              animate="animate">
                Java SpringBoot MySQL Python Git ReactJS LLD NodeJS 
            </motion.div>
            <div className="imageContainer">
                <Lottie options={{loop:true, autoplay:true, animationData:meAnimated, rendererSettings:'svg'}}/>
            </div>
        </div>
    )
}

export default Hero