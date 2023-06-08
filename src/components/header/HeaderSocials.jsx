import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ravena-auliya-18b24a273/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Ravenaaul23" target="_blank"><FaGithub/></a>
      <a href="https://instagram.com/ra.venaa?igshid=MmJiY2I4NDBkZg==" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials