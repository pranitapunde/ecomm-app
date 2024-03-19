import React from 'react'
import Return from '../assets/img/unnamed.png'
import Free from '../assets/img/unnamed (2).png'
import code from "../assets/img/unnamed (1).png"
import oneclike from '../assets/img/one-click-girl.jpeg'
import playstore from '../assets/img/google-play.png'

const HeadPoster = () => {
    return (
        <div className='HeadPoster'>

            <div className="contentSide">
                <div className='lowestPrice'>
                    <div className='headdding'>
                        <h2> Lowest Prices <br />
                            Best Quality Shoping</h2>
                    </div>

                    <div className='typeofpay'>
                        <div className="free">
                            <div className='imgfree'>
                                <img src={Free} alt="" />
                            </div>
                            <div className="prehragraph">
                                <p> Free <br /> Delivery</p>
                            </div>
                            <div className='wall'></div>
                        </div>


                        <div className="cash">
                            <div className="imgfree">
                                <img src={code} alt="" />
                            </div>
                            <div className="prehragraph">
                                <p> Cash on <br /> Delivery</p>
                            </div>
                            <div className='wall'></div>
                        </div>


                        <div className="Easy">
                            <div className='imgfree'>
                                <img src={Return} alt="" />

                            </div>
                            <div className="prehragraph">
                                <p>Easy <br /> Returns</p>
                            </div>

                        </div>

                    </div>

                    <div className="Download-The-app">
                        <a href="https://play.google.com/" target='_black'>
                        <button className='Downloadbutton'>
                           <img src={playstore} alt="" />  Download The App

                        </button>
                        </a>

                    </div>

                </div>

            </div>
            <div className="pictureside">
                <div className="imgkabox">
                <img src={oneclike} alt="" />
                </div>
                
                

            </div>

        </div>


    )
}

export default HeadPoster
