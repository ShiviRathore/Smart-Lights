import React from "react";
import { images } from '../../actions/customFn';

const Platform = () => {
    return (
        <>
            <div className="platform-section">
                <div className="container">
                    <div className="platform-heading">
                        <h1>The platform assists city managers on multiple fronts</h1>
                    </div>
                    <div className="platform-section-div">
                        <div className="platform-inner">
                            <div className="platform-inner-one">
                             <img src={images["platform-img.png"]}/>
                             <p>Saves on power consumption & related costs</p>
                            </div>
                            <div className="platform-inner-two">
                            <img src={images["platform-img.png"]}/>
                            <p>Lowers downtimes</p>
                            </div>
                        </div>

                        {/* 2 div */}
                        <div className="platform-inner-div">
                            <div className="platform-middle-one">
                             <img src={images["platform-img.png"]}/>
                             <p>Detects power thefts.</p>
                            </div>
                            <div className="platform-middle-two">
                            <img src={images["platform-img.png"]}/>
                            <p>Ensures smart monitoring and control of the street light infrastructure.</p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="platform-inner-div-div">
                            <div className="platform-bottom-one">
                             <img src={images["platform-img.png"]}/>
                             <p>Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage 
                             failures, etc.</p>
                            </div>
                            <div className="platform-bottom-two">
                            <img src={images["platform-img.png"]}/>
                            <p>Ensures security in the neighborhood</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Platform;