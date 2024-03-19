import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import pic from '../assets/img/google.png'

const UperFooter = () => {
    return (
        <div className='uper-footer'>
            <div className='one-click'>
                <h1>Shop Non-Stop on One click </h1>
                <p> Trusted by more than 1 Crore Indians <br /> Cash on Delivery | Free Delivery</p>
                <div className='imggg'>
                    <img src={pic} alt="" />
                </div>
            </div>


            <div className='list-box'>
                <ul>
                    <li> Careers</li>
                    <li> become a supplier</li>
                    <li> Hall of Fame</li>
                    <li> Sitemap</li>
                </ul>
                <ul>
                    <li> Legal and Policies </li>
                    <li> Meesho Tech Blog</li>
                    <li> Notices and Returns </li>
                </ul>

            </div>

            <div className='social-media'>
                <h4 id='reach'>Reach out to us</h4>

                <div className='fab'>
                    <div id="book">  {<FaFacebook />}</div>
                    <div id="insta"> {<FaInstagram />}</div>
                    <div id="tube"> {<FaYoutube />}</div>
                    <div id="linkdin"> {<IoLogoLinkedin />}</div>
                    <div id="tiw"> {<FaTwitter />}</div>
                </div>


            </div>

            <div className='contact-us'>
                <h4 id='hed'>Contact Us</h4>
                <p id='pehra'>Fashnear Technologies Private <br /> Limited,
                    CIN: U74900KA2015
                    06-105-B, 06-102, (138 Wu)  <br />Vaishnavi Signature, No. 78/9, <br /> Outer Ring Road, Bellandur, <br /> Varthur Hobli, Bengaluru-560103, Karnataka, India
                    E-mail address: query@meesho.com <br />
                    © 2015-2023 Meesho.com</p>

            </div>



        </div>
    )
}

export default UperFooter
