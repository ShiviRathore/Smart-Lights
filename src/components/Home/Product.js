import React from "react";
import { images } from '../../actions/customFn';
import OwlCarousel from "react-owl-carousel";
import { NavLink } from "react-router-dom";
const Products = () => {
    const slider = {
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" width="7.171" height="13.965" viewBox="0 0 7.171 13.965">   <path id="fi-rr-angle-small-right" d="M9.986,9.879l4.589-4.586a1,1,0,0,1,1.411,1.414L11.4,11.293a1,1,0,0,0,0,1.414l4.586,4.586a1,1,0,1,1-1.415,1.414L9.986,14.121A3,3,0,0,1,9.986,9.879Z" transform="translate(-9.107 -5.035)" fill="#111111"/> </svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="7.171" height="13.965" viewBox="0 0 7.171 13.965"><path id="fi-rr-angle-small-right" d="M15.4,9.879,10.811,5.293A1,1,0,0,0,9.4,6.707l4.586,4.586a1,1,0,0,1,0,1.414L9.4,17.293a1,1,0,1,0,1.415,1.414L15.4,14.121A3,3,0,0,0,15.4,9.879Z" transform="translate(-9.107 -5.035)" fill="#111111"/></svg>',
        ],
        responsive: {
            0: {
                items: 1,
            },

            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            900: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    };

    const Obj = [
        {
            dataimg: images["slider.png"],
            text: "Centralized Control & Monitoring System",
            text1: "Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights."
        },
        {
            dataimg: images["slider.png"],
            text: "Centralized Control & Monitoring System",
            text1: "Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights."
        },
        {
            dataimg: images["slider.png"],
            text: "Centralized Control & Monitoring System",
            text1: "Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights."
        },
    ]
    return (
        <>
            <div className="products-section" style={{ backgroundImage: `url(${images["product-bg.png"]})` }}>
                <div className="container">
                    <div className="products-main animate__animated animate__fadeInLeft animate__delay-4s">
                        <img src={images["products.png"]} alt="" />
                        <h3><span>Cutting-edge hardware, </span>offerings helping cities optimize resources and achieve smart development goals</h3>
                    </div>
                    <div className="product-buttons">
                        <button>Centralized Control & Monitoring System</button>
                        <button>NEMA-Mounted VOLC 1160</button>
                        <button>Retrofit Street Light Controller VOLC 2160</button>
                        <button>Retrofit Street Light Controller VOLC 2180</button>
                    </div>
                    <div className="product-btn-two">
                        <button>Retrofit Street Light Controller VOLC 4180</button>
                    </div>
                    <div className="product-slider-main">
                        <OwlCarousel
                            {...slider}
                            className="owl-theme"
                            nav
                            margin={10}
                        >
                            {
                                Obj.map((value, index) => {
                                    return (

                                        <div className="item" key={index}>
                                            <div className="slidre-main-div">
                                                <div className="slidre-img">
                                                    <img src={value.dataimg} />
                                                </div>
                                                <div className="slidre-text animate__animated animate__fadeInRight animate__delay-5s">
                                                    <p>Products 1/5</p>
                                                    <h3>{value.text}</h3>
                                                    <h5>{value.text1}</h5>
                                                   <NavLink to=''>Know More <img src={images["icon_png.png"]}/></NavLink>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }


                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products;