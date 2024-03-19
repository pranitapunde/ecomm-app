import React, { useContext } from 'react'
import ProductContext from '../context/product/ProductContext'
import { toast } from 'react-toastify'

const ProductCard = ( {product}) => {
  
  const {dispatch} = useContext(ProductContext)

  const handleAdd = (item) => {

    dispatch ({
      type : "ADD_TO_CART",
      payload : item
    })
    toast.success('🦄 item Added', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  }

  return (
    <div className="product">
      <img src={product.image} alt="" />

      <p>{ product.title}</p>
      
      <span>
        <h1> Price : ₹{ product.price}</h1>
        <button className="add_cart" onClick={ ()=>handleAdd (product)}> Addcart</button>
      </span>
      
    </div>
  )
}

export default ProductCard
