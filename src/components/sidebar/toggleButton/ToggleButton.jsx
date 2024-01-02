import React, { useState } from 'react'
import menu from '../../../assets/menu.svg'
import closed from '../../../assets/CLOSE.svg'

const ToggleButton = ({setOpen}) => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => {setOpen((prev) => !prev); setIsOpen(!isOpen)}}>
        {!isOpen && <img src={menu} style={{width: "2.5em", paddingTop: "0.25em"}} alt={"menu"} />}
        {isOpen && <img src={closed} style={{width: "2.5em", paddingTop:"0.25em"}} alt={"close"} loading='lazy'/>}
    </button>
  )
}

export default ToggleButton