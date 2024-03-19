import React, { useContext, useEffect } from 'react'
import ProductContext from '../context/product/ProductContext'
import { fetchCategoryProducts } from '../context/product/ProductAction'
import EleCart from '../components/EleCart'
import { useParams } from 'react-router-dom'

const CategoryProducts = () => {
  const { products, dispatch } = useContext(ProductContext)

  const params = useParams();
  console.log(params);
  
  const getProducts = async (category) => {
    const data = await fetchCategoryProducts(category)
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,

    })
  }

  useEffect(() => {
    getProducts(params.category)

  }, [])

  if (!products) {
    return (
      <div className='container'>
        <h2 className='headline'> Loading...</h2>

      </div>
    )
  }

  return (
    <div className='container'>
      <h2 className='headline'>{params.category}</h2>
      {
        products.map((product) => (
          <EleCart key={product.id} product={product} />
        ))
      }


    </div>
  )
}


export default CategoryProducts;
