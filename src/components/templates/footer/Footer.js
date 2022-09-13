import React from 'react'
import './footer.scss'
import TopFooter from '../../organism/topFooter/TopFooter'
import UnderFooter from '../../organism/underFooter/UnderFooter'

function footer() {
  return (
    <div className='footer'>
     <TopFooter/>
     <UnderFooter/>
    </div>
  )
}

export default footer