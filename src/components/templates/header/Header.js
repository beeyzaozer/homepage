import React from 'react';
import './header.scss';
import Logo from '../../atoms/logo/Logo';
import LeftHeader from '../../molecules/leftHeader/LeftHeader';
import RightHeader from '../../molecules/rightHeader/RightHeader';

function header() {
  return (
    <div className='header'>
      <LeftHeader/>
      <Logo/>
      <RightHeader/>
    </div>
  )
}

export default header