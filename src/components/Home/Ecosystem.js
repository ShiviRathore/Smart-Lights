import React from "react";
import { images } from '../../actions/customFn';
const Ecosystem = () => {

    return (
        <>
            <div className="ecosystem-section">
                <div className="container">
                    <div className="ecosystem-main animate__animated animate__fadeInLeft animate__delay-2s">
                        <img src={images["ecosystem.png"]} alt="" />
                        <h3>How does a smart street light ecosystem work?</h3>
                    </div>
                    <div className="ecosystem-work">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="ecosystem-one-div">
                                    <div className="ecosystem-one-img">
                                        <div className="ecosystem-img-one">
                                            <img src={images["street_light_controler.png"]} alt="" />
                                        </div>
                                        <div className="ecosystem-img-one">
                                            <img src={images["street_light_controler.png"]} alt="" />
                                        </div>
                                    </div>
                                    <div className="ecosystem-text animate__animated animate__fadeInUp animate__delay-3s">
                                        <h3>Street Light Controller</h3>
                                        <p>Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="ecosystem-two-div">
                                    <div className="ecosystem-two-img">
                                        <img src={images["gateway_png.png"]} alt="" />
                                    </div>

                                    <div className="ecosystem-text animate__animated animate__fadeInUp animate__delay-3s">
                                        <h3>Gateway</h3>
                                        <p>Employed for interfacing between a Controller and the Lighting Management Software.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="ecosystem-three-div">
                                    <div className="ecosystem-three-img">
                                        <img src={images["cloud_based management.png"]} alt="" />
                                    </div>
                                    <div className="ecosystem-text animate__animated animate__fadeInUp animate__delay-3s">
                                        <h3>Cloud-based Management System</h3>
                                        <p>Collects information from multiple gateways.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ecosystem-second-section">
                        <div className="ecosyatem-inner-div">
                            <div className="ecosyatem-inner-one">

                                <div className="ecosystem-inner-img">
                                    <img src={images["users_png.png"]} alt="" />
                                </div>

                                <div className="ecosystem-text animate__animated animate__fadeInUp animate__delay-3s">
                                    <h3>Users</h3>
                                    <p>Data from the cloud is used to monitor and control street lights by the System Managers.</p>

                                </div>

                            </div>
                            <div className="ecosyatem-inner-two">

                                <div className="ecosystem-inner-two-img">
                                    <img src={images["evaluation_png.png"]} alt="" />
                                </div>

                                <div className="ecosystem-text animate__animated animate__fadeInUp animate__delay-3s">
                                    <h3>Evaluation</h3>
                                    <p>Gathered insights are used to evaluate the performance of the lighting systems.</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ecosystem;