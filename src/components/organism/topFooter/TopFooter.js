import React from 'react'
import './topFooter.scss'
import InformationSection from '../../molecules/informationSection/InformationSection';
import InputSection from '../../molecules/inputSection/InputSection';

function TopFooter() {
  return (
    <div className='top-footer top-footer-responsive'> 
      <InformationSection/>
      <InputSection/>
    </div>
  )
}

export default TopFooter