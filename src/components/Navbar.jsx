import React, { useContext } from 'react'
import logoimg from '../assets/img/logoimg.png';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import pic from '../assets/img/google.png'
import apple from '../assets/img/apple.webp'
import { FaRegHeart } from "react-icons/fa6";
import { BsBoxSeamFill } from "react-icons/bs";
import ProductContext from '../context/product/ProductContext';

const Navbar2 = () => {

    const { cartItems } = useContext(ProductContext)
    return (
        <>
            <nav className='navbar navbar-expand-lg '>

                <div className="container-fluid">


                    {/* <div className="navSet d-flex align-items-center justify-content-around w-100"> */}
                    <div className="logo">
                        <Link to={"/"}> <img src={logoimg} alt="" /></Link>
                    </div>

                    {/* </div> */}

                    <form className="d-flex mx-1  justify-content-around" role="search ">
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success me-1 " type="submit">Search</button>
                        <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                       </button>
                    </form> 

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <div className='list-menu'>
                                <li className="nav-item">
                                    <Link to={"/"}>
                                        <a className="nav-link " aria-current="page" href="#">  Home</a>
                                    </Link>

                                </li>

                                <div className='line'></div>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Download App</a>
                                    <div className='sub-menu'>
                                        <ul className='down'>
                                            <h6>Download From</h6>
                                            <a href="https://www.google.com/" target='_black'> <img src={pic} alt="" /></a>
                                            <div className='apple'>
                                                <a href="https://apps.apple.com/" target='_black'> <img src={apple} alt="" /></a>
                                            </div>
                                        </ul>
                                    </div>

                                </li>
                                <div className='line'></div>
                                <li className="nav-item">
                                    <a className="nav-link " aria-disabled="true">Become a Supplier</a>
                                </li>
                                <div className='line'></div>
                                <li className="nav-item">
                                    <a className="nav-link " aria-disabled="true">Newsroom</a>
                                </li>
                                <div className='line'></div>

                            </div>

                            <div className='cart'>
                                <div className='hoverP'>
                                    <span> {<CgProfile />} Profile</span>

                                    <div className='profile'>

                                        <div className='down-pro'>
                                            <div claasName='hrline'>
                                                <Link to={"/login"}><button className='in'>Login</button> </Link>
                                                <Link to={"/signup"}> <a className='up'> SignUp</a>  </Link>
                                            </div>

                                            <div className="down-list ">
                                                <li id='my'> <span className='mx-2 '> {<CgProfile />}</span>My profile</li>
                                                <li id='order'> <span className='mx-2 '>{<BsBoxSeamFill />}</span>Orders</li>
                                                <li id='wishlist'> <span className='mx-2'> {<FaRegHeart />}</span> Whislist</li>


                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <Link to={"/Cart"}><span>  {<FaShoppingCart />}  ({cartItems.length})</span></Link>

                            </div>


                        </ul>

                    </div>



                </div>




            </nav>
        </>
    )
}

export default Navbar2

