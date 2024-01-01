import '../navbar/Navbar.scss'
import linkedin from '../../assets/linkedin_theme.png'
import github from '../../assets/github.png'
import resume from '../../assets/resume.png'
import {motion} from 'framer-motion'
import Sidebar from '../sidebar/Sidebar.jsx'


const Navbar = () => {
  return (
    <div className='navbar'>
        
        {/*SIDEBAR */}
        <Sidebar/>

        <div className="wrapper">
            <motion.span
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale:1}}
                transition={{duration:0.5}}
            >
                Oindrila Banerjee
                
            </motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/oindrila-b/">
                    <img src={linkedin} alt='linkedin'/>
                </a>
                <a href="https://github.com/oindrila-b">
                    <img src={github} alt='github'/>
                </a>
                <a href="https://drive.google.com/file/d/1eGKcd10N-b5cZ7Dc0ITJcSebJDVD9dpf/view?usp=sharing">
                    <img src={resume} alt='resume'/>
                </a>

            </div>
        </div>
        </div>
  )
}

export default Navbar