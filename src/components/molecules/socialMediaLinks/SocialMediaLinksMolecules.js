import React from 'react'
import './socialMediaLinks.scss'
import FacebookLink from '../../atoms/socialMediaLinks/FacebookLink'
import TwitterLink from '../../atoms/socialMediaLinks/TwitterLink'
import LinkedinLink from '../../atoms/socialMediaLinks/LinkedinLink'

function SocialMediaMolecules() {
  return (
    <div className='social-media-links responsive-social-media'>
        <FacebookLink/>
        <LinkedinLink/>
        <TwitterLink/>
        
    </div>
  )
}

export default SocialMediaMolecules