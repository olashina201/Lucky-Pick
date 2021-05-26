import React from 'react'
import bitmap from '../assets/images/lucky pick bitmap.jpg'
import leftImage from '../assets/images/about-left-image.png'

function About() {
    return (
        <div id="about" class="about-us section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <img src={leftImage} alt="person graphic" />
                        </div>
                    </div>
                    <div class="col-lg-8 align-self-center">
                        <div class="services">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <div class="icon">
                                        <img src={bitmap} alt="reporting" />
                                    </div>
                                    <div class="right-text">
                                        <h4>Pick 1</h4>
                                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                    </div>
                                    </div>
                                </div>
                            <div class="col-lg-6">
                                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                                    <div class="icon">
                                        <img src={bitmap} alt="" />
                                    </div>
                                    <div class="right-text">
                                        <h4>Pick 2</h4>
                                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                                    <div class="icon">
                                        <img src={bitmap} alt="" />
                                    </div>
                                    <div class="right-text">
                                        <h4>Pick 3</h4>
                                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                                    <div class="icon">
                                        <img src={bitmap} alt="" />
                                    </div>
                                    <div class="right-text">
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
