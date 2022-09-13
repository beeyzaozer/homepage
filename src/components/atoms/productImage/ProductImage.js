import React from 'react'
import './productImage.scss'
function ProductImage(props) {
  return (
    <div>
      <img src={props.product} className='img' alt='img'></img>
    </div>
  )
}

export default ProductImage