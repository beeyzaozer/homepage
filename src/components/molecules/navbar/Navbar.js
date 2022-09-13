import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss'

function Navbar() {
  return (
    <div className='navbar responsive-navbar'>
      <Link className='link' to='/first'>FIRST</Link>  
      <Link className='link' to='/second'>SECOND</Link>  
      <Link className='link' to='/third'>THIRD</Link>  
      <Link className='link' to='/fourth'>FOURTH</Link>  
      <Link className='link' to='/fifth'>FIFTH</Link>  
      <Link className='link' to='/sixth'>SIXTH</Link>  
    </div>
  )
}

export default Navbar