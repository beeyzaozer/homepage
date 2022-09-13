import React from 'react';
import './rightHeader.scss';
import Account from '../../atoms/account/Account';
import Basket from '../../atoms/basket/Basket';

function RightHeader() {
  return (
    <div className='right-header responsive-header'>
      <div><Account/></div>
      <div><Basket/></div>
    </div>
  )
}

export default RightHeader