import React from 'react'
import './icons.scss'
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs'

function TwitterLink() {
  return (
    <Link to="/" className='twitter link-container'><BsTwitter className='icon-container'/></Link>
  )
}

export default TwitterLink