import React from 'react';
import './dropdown.scss';
import { AiOutlineMenu } from 'react-icons/ai';

function dropdown() {
  return (
    <span className='dropdown'><AiOutlineMenu className='outlineMenu'/></span>
  )
}

export default dropdown