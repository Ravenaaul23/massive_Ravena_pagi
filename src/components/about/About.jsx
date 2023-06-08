import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencet</h5>
              <small>5+ in all side</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>UI/UX</h5>
              <small>2 Complate</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>5 Complated</small>
            </article>
          </div>

          <p/>
            Hi all...
          <p>
            My name is Ravena Auliya, my friends often call me Ravena. I am a student of Informatics Engineering, at Batam State 
            Polytechnic. I started basic web programming in college. I think new knowledge is very interesting to explore.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About