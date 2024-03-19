import React, { useContext } from 'react'
import ProductContext from '../context/product/ProductContext'

const CartItem = ({ item }) => {
  const { dispatch } = useContext(ProductContext)

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,

    })
  }
  return (
    <>
      <div className='select-item'>
        <div className='img-sec'>
          <div className='select-product'>
            <img src={item.image} alt="" />
          </div>
        </div>
        <div className='text-sec'>
          <div className='editbtn'>
            <h6> {item.title}</h6>
            {/* <h5>Edit</h5> */}
          </div>

          <div className='removebtn'>
            <h6> ₹{item.price}</h6>
            {/* <h6> Size: Xl </h6> */}
            <div className='Size'>
              <div className='sizeoption'>
                <select name="size" id="">
                  <option value="">S</option>
                  <option value="">X</option>
                  <option value=""> Xl</option>
                  <option value=""> Xll</option>
                </select>
              </div>

              <div className='incrementDecreament'>
                <div className='incre'>
                  -

                </div>
                <div className='incre'>
                  0

                </div>
                <div className='incre'>
                  +

                </div>

              </div>

            </div>
            {/* <h6> Qty: 1</h6> */}

            <button className='bttn btn-dark btn-sm my-3' onClick={() => handleRemove(item.id)}>  REMOVE</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default CartItem
