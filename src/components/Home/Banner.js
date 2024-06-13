import React from "react";
import { images } from '../../actions/customFn';

const Banner = () => {
    return (
        <>
            <div className="banner-section" style={{ backgroundImage: `url(${images["Hero_section.png"]})` }}>
                <div className="container"> 
                <div className="animate__animated animate__fadeInUp">              
                    <p>Smart Lighting Solutions</p>
                    <h3>Bringing A New Perspective To Street Lights And The Cities Of Tomorrow.Login</h3>
                    <button>Login</button>
                    </div>   
                </div>
            </div>
        </>
    )
}
export default Banner