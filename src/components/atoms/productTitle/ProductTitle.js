import React from 'react'
import './productTitle.scss'

function productTitle(props) {
  return (
    <div className='product-title'>
      {props.product}
    </div>
  )
}

export default productTitle