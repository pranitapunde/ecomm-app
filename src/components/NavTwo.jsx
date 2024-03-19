import React from 'react'
import { Link } from 'react-router-dom'

const NavTwo = () => {
  return (
    <>

      <ul className='navcontainer'>
        <li className='typecoths'><Link to={"/electronics"}><h6>Electronics</h6></Link> </li>
        <li className='typecoths'> <Link to={"/women's clothing"}><h6> Women's Clothings</h6> </Link>  </li>
        <li className='typecoths'> <Link to={"/men's clothing"}><h6> Men's Clothings</h6></Link> </li>
        <li className='typecoths'> <Link to={"/jewelery"}><h6> Jewelery</h6></Link></li>
        {/* <li className='typecoths'><h6  className='hidetypecoths'> Beauty & Health</h6></li> */}
        {/* <li className='typecoths'> <h6 className='hidetypecoths' > Kid's </h6></li> */}
        {/* <li className='typecoths'> <h6  className='hidetypecoths'>Home & Kitchen</h6></li> */}
        

      </ul>

    </>
  )
}
export default NavTwo
