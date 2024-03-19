
import { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import ProductContext from '../context/product/ProductContext'
import { fetchProducts } from '../context/product/ProductAction'


const ProductContainer = () => {

  const { products, dispatch } = useContext(ProductContext)

  const getProducts = async () => {
    const data = await fetchProducts()

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,

    })
  }

  useEffect(() => {
    getProducts();

  }, [])

  if (!products) {
    return (
      
      <div className='spinner'>
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>


    )
  }

  return (
    <div className='container-shop'>
      
      
      <h2 className='headline'> Top Categories to choose from</h2>
      {
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }

    </div>
  )
}

export default ProductContainer
