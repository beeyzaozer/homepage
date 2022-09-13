import React from 'react'
import './underFooter.scss'
import FootersNavbarMolecules from '../../molecules/navbar/Navbar';
import SocialMediaMolecules from '../../molecules/socialMediaLinks/SocialMediaLinksMolecules';
import License from '../../atoms/license/License'

function UnderFooter() {
  return (
    <div className='under-footer responsive-under-footer'>
      <License/>
      <FootersNavbarMolecules/>
      <SocialMediaMolecules/>
    </div>
  )
}

export default UnderFooter