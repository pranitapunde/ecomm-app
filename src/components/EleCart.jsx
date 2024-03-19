import React from 'react'

const EleCart = ( {product}) => {
  return (
    <div className='e-procart'>
        <img src={product.image} alt="" />
        <h6>{product.title}</h6>
        <span>
            <h3> Price:{ product.price}</h3>
            <button className='add_cart'> Add to cart</button>
        </span>
      
    </div>
  )
}

export default EleCart
