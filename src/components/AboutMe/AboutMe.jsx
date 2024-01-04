import '../AboutMe/AboutMe.scss'
import {motion} from 'framer-motion'

import React from 'react'

const Skill = ({name, x, y}) => {

    return (
        <motion.div 
        className="skill1"
        whileHover={{scale:1.1}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration:1.5}}
        >
            {name} 
        </motion.div>
    )

}

const AboutMe = () => {
    return (
        <div className='aboutme'>

            <h1>
                About -
            </h1>
            <motion.div 
            whileHover={{scale:1.05}}
            className="brief">
                Hey! 👋
                <br />
                <br />Thank You for viewing my portfolio, here's a small introduction from my end.
                <br /><br />
                My name is Oindrila Banerjee, and I am a Software Developer, I work mainly in the Backend Development area 🚀 ,
                but I'm currently also exploring the Front-end tools and technologies 🛸, on my way to becoming a FullStack Developer.
                <br /><br />
                Here are some technologies that I work with ➡️
                <br /><br />
            </motion.div>
            < div className="radial-skills">
               <Skill name={"Backend"} x="0" y="0"/>
               <Skill name={"Java"} x="-20vw" y="2vw" />
               <Skill name={"SpringBoot"} x="-25vw" y="-14vw" />
               <Skill name={"MySQL"} x="0vw" y="-15vw" />
               <Skill name={"React JS"} x="-10vw" y="-7vw" />
               <Skill name={"Dart"} x="6vw" y="8vw" />
               <Skill name={"Python"} x="23vw" y="-14vw" />
               <Skill name={"NodeJS"} x="19vw" y="10vw" />
               <Skill name={"Git"} x="15vw" y="-2.5vw" />
               <Skill name={"LLD"} x="-10vw" y="14vw" />
            </div>
        </div>
    )
}

export default AboutMe