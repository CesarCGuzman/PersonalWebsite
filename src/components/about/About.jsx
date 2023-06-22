import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward, FaFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Work Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>Github</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Perferendis, nesciunt totam repellat dignissimos rerum unde 
            quisquam quia molestiae tenetur culpa at eveniet, quam 
            debitis exercitationem soluta sed molestias reprehenderit obcaecati!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About