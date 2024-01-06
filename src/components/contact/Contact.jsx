import React, { useState } from 'react'
import '../contact/Contact.scss'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
}


const Contact = () => {
  const ref = useRef()
  const form = useRef();
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const isInView = useInView(ref, { margin: "-100px" })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q84gtpc', 'template_6lc9erh', form.current, 'DqTWxoTs9dP4iwXwX')
      .then((result) => {
        setSuccess(true)
        console.log(result.text);
      }, (error) => {
        setError(false)
        console.log(error.text);
      });
  };

  return (
    <div>
      <motion.div className="contact-container" variants={variants} initial="initial" whileInView="animate" ref={ref}>
        <motion.div className="txt" variants={variants}>
          <motion.h1 variants={variants} className='heading'>
            CONTACT ME
          </motion.h1>
          <motion.div variants={variants} className="item">
            <motion.h2>
              Email
            </motion.h2>
            <motion.span>banerjee.oindrila.ob@gmail.com</motion.span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <motion.h2>
              Location
            </motion.h2>
            <motion.span>India</motion.span>
          </motion.div>
        </motion.div>
        <motion.div className="formContainer">
          <motion.div className="email-svg" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 1 }}>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path initial={{ pathLength: 0 }} animate={isInView && { pathLength: 1 }} transition={{ duration: 3 }} d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" stroke="#FFDBC3" stroke-width="0.40800000000000003" stroke-linecap="round" stroke-linejoin="round"></motion.path>
            </svg>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <motion.div className="label">
              Drop a message for me !
            </motion.div>
            <motion.input type="text" required placeholder='Name' name='name'/>
            <motion.input type="text" required placeholder='Email' name='email'/>
            <motion.textarea cols="30" rows="10" placeholder='Message' name='message'></motion.textarea>
            <motion.button>
              Submit
            </motion.button>
            {error && "Error"}
            {success && "Success"}
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact