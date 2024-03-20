import React, { useContext } from 'react'
import Online from "../assets/img/Online-Shopping.jpg"
import CartItem from '../components/CartItem'
import ProductContext from '../context/product/ProductContext'
import { Link } from 'react-router-dom'

const cart = () => {

  const { cartItems } = useContext(ProductContext)
  console.log(cartItems)
  const total = cartItems.reduce((p,c) => {
    return p + c.price 
  }, 0)

  if (cartItems.length === 0) {
    return (
      
      <div className="cart-containerok">
      <h5>Your Cart is empty</h5> 
      <Link to="/"><button type="button" class="btn btn-outline-success"> View Products</button></Link>
      </div> 
    )
  }

  return (

    <div className='cart-section'>
      <div className='name'> <h1 id='cart-head'>  One click Shop</h1></div>
      <div className='cart-box'>

        <div className='item-box'>
          {
            cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          }
        </div>

        {/* total details */}

        <div className='total-box'>
          <div className='price-details'>
            <h5> Price Details</h5>
          </div>

          <div className='total-amount'>

            <div className='amount'>
              <p>Total Product Price</p>
              <p>+ Rs.1909</p>

            </div>
            <div className='additional'>
              <p> Additional Fees</p>
              <p> + Rs.191</p>

            </div>
            <hr />
            <div className='total'>
              <p id='or'>Order Total </p>
              <p id='dar'> ₹{total}</p>

            </div>
            <div className='continue'>
              <button> Continue </button>
            </div>

          </div>
          <div className='b-img'>
            <img src={Online} alt="" />

          </div>
        </div>

      </div>

    </div>
  )
}

export default cart
