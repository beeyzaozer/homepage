import React from 'react';
import './leftHeader.scss';
import Dropdown from '../../atoms/dropdown/Dropdown';
import Search from '../../atoms/search/Search';

function leftHeader() {
  return (
    <div className='left-header responsive-header'>
      <Dropdown/>
      <Search/>
    </div>
  )
}

export default leftHeader