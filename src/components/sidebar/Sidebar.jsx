import '../sidebar/Sidebar.scss'

import React, { useState } from 'react'
import ToggleButton from './toggleButton/ToggleButton'
import Links from './links/Links'
import {motion} from 'framer-motion'

const Sidebar = () => {
const[open, setOpen] = useState(false);
const[closed, setClosed] = useState(false);


    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition : {
                type:"spring",
                stiffness:200,
            }
        },
        closed: {
            clipPath: "circle(10px at 30px 30px)",
            transition: {
                type:"spring",
                stiffness:400,
                damping:40
            }
        }
    }

  return (
    <motion.div className="sidebar" animate={open? "open" :"closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar