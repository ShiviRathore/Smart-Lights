import React from "react";
import { images } from '../../actions/customFn';
import { NavLink } from 'react-router-dom';
const Footer = () => {

    return (
        <>
            <div className="footer-section" style={{ backgroundImage: `url(${images["Footer.png"]})` }}>
                <div className="container">
                    <div className='footer-main-div'>
                        <div className='header-main'>
                            <NavLink to="">
                                <img src={images['smart lights_logo.svg']} alt='' />
                            </NavLink>
                        </div>
                        <div className='footer-right-menu'>
                            <ul>
                                <li><NavLink to=''>Product</NavLink></li>
                                <li><NavLink to=''>Software Services</NavLink></li>
                                <li><NavLink to=''>Follow Us</NavLink></li>
                            </ul>
                        </div>

                    </div>
                        <div className='footer-menu'>
                            <ul>
                                <li><NavLink to=''>Privacy Policy</NavLink></li>
                                <li><NavLink to=''>Terms & Conditions</NavLink></li>
                                <li><NavLink to=''>Cookie Policy</NavLink></li>
                            </ul>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Footer;