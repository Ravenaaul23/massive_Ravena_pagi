import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Ravena</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Sevices</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonial">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/ravena.aulia?mibextid=ZbWKwL"><FaFacebookF/></a>
          <a href="https://instagram.com/ra.venaa?igshid=MmJiY2I4NDBkZg=="><BsInstagram/></a>
          <a href="https://www.linkedin.com/in/ravena-auliya-18b24a273/"><AiFillLinkedin/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Ravena Web. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer