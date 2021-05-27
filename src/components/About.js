import React from 'react'
import bitmap from '../assets/images/lucky pick bitmap.jpg'
import leftImage from '../assets/images/about-left-image.png'

function About() {
    return (
        <div id="about" className="about-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <img src={leftImage} alt="person graphic" />
                        </div>
                    </div>
                    <div className="col-lg-8 align-self-center">
                        <div className="services">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <div className="icon">
                                        <img src={bitmap} alt="reporting" />
                                    </div>
                                    <div className="right-text">
                                        <h4>Pick 1</h4>
                                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                    </div>
                                    </div>
                                </div>
                            <div className="col-lg-6">
                                <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                                    <div className="icon">
                                        <img src={bitmap} alt="" />
                                    </div>
                                    <div className="right-text">
                                        <h4>Pick 2</h4>
                                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                                    <div className="icon">
                                        <img src={bitmap} alt="" />
                                    </div>
                                    <div className="right-text">
                                        <h4>Pick 3</h4>
                                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                                    <div className="icon">
                                        <img src={bitmap} alt="" />
                                    </div>
                                    <div className="right-text">
                                        <h4>Pick 4</h4>
                                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default About
