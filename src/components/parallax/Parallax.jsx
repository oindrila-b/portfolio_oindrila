import '../parallax/Parallax.scss'
import React from 'react'

const Parallax = ({type}) => {
  return (
    <div className="parallax">
        <h1>
            {type==="About" ? "A Little About Me" : "Projects I've Worked On"}
        </h1>
        

    </div>
  )
}

export default Parallax