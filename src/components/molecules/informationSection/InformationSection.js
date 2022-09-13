import React from 'react'
import './informationSection.scss'
import FootersTitle from '../../atoms/footerTitle/FootersTitle';
import FootersDescription from '../../atoms/footersDescription/FootersDescription'

function InformationSection() {
  return (
    <div className='responsive-text'>
        <FootersTitle/>
        <FootersDescription/>
    </div>
  )
}

export default InformationSection