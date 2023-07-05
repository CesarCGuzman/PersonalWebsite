import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>me@email.com</h5>
            <a href="mailto:me@email.com">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>Example Name</h5>
            <a href="https://Github.com">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>LinkedIn Name</h5>
            <a href="https://linkedin.com">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" id="email" placeholder='email@email.com' required/>
          <textarea name="message" rows="7" placeholder='Your message here' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact