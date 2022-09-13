import React from 'react'
import './icons.scss'
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa'

function LinkedinLink() {
  return (
    <Link to="/" className='linkedin link-container'><FaLinkedinIn className='icon-container'/></Link>
  )
}

export default LinkedinLink