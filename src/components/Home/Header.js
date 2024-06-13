import React, { useState } from 'react'
import { images } from '../../actions/customFn';
import { NavLink } from 'react-router-dom';
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
const Header = () => {
    // mobile menu
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        <div className='header-section'>
            <div className='container'>
                <div className='header-main-div'>
                    <div className='header-main'>
                        <NavLink to="">
                            <img src={images['smart lights_logo.svg']} alt='' />
                        </NavLink>
                    </div>
                    <div className='header-right-menu'>
                        <ul>
                            <li><NavLink to=''>Home</NavLink></li>
                            <li><NavLink to=''>Products</NavLink></li>
                            <li><NavLink to=''>Software Services</NavLink></li>
                            <li className='login-btn'><NavLink to=''>Login</NavLink></li>
                        </ul>

                    </div>
                    <button class="Btn_show_drawer" onClick={toggleDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path></svg>
                    </button>
                </div>
            </div>
            {/* mobile menu */}
            <div className="headermobile_drawer">
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction="left"
                    className="mobile_nav_menu"
                >
                    <div className="drawer_nav_mobile">
                        <div className='header-main'>
                            <NavLink to="">
                                <img src={images['smart lights_logo.svg']} alt='' />
                            </NavLink>
                        </div>
                        <div className="mobile_logo">
                            <ul className='list-mobile-menu'>
                                <li><NavLink to=''>Home</NavLink></li>
                                <li><NavLink to=''>Products</NavLink></li>
                                <li><NavLink to=''>Software Services</NavLink></li>
                                <li className='login-btn'><NavLink to=''>Login</NavLink></li>
                            </ul>
                        </div>
                    </div>

                </Drawer>
            </div>
        </div>
       
    )
}
export default Header;
