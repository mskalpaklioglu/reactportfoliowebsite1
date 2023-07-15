import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https:/instagram.com" target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials