import React from 'react'
import './icons.scss'
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'
function FacebookLink() {
  return (
    <Link to="/" className='facebook link-container'><FaFacebookF className='icon-container'/></Link>
  )
}

export default FacebookLink