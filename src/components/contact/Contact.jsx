import React from 'react'
import '../contact/Contact.scss'

const Contact = () => {
  return (
    <div>
        <div className="contact-container">
           <div className="txt">
           <h1 className='heading'>
                CONTACT ME 
            </h1>
            <div className="item">
              <h2>
                Email  
              </h2>
              <span>banerjee.oindrila.ob@gmail.com</span>
            </div>
            <div className="item">
              <h2>
                Location  
              </h2>
              <span>India</span>
            </div>
           </div>
           <div className="formContainer">
            <div className="label">
              Drop a message for me !
            </div>
            <form >
              <input type="text" required  placeholder='Name'/>
              <input type="text" required  placeholder='Email'/>
              <textarea cols="30" rows="10" placeholder='Message'></textarea>
              <button>
                Submit
              </button>
            </form>
           </div>
        </div>
    </div>
  )
}

export default Contact