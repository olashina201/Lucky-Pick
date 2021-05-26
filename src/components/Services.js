import React from 'react'
import jack from '../assets/images/Jack1.png'

function Services() {
    return (
        <div id="services" class="our-services section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 align-self-center  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div class="left-image">
                            <img src={jack} alt="" />
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div class="section-heading">
                            <h2>Lucky-Pick</h2>
                            <p>Check the winning numbers and make sure they are for the draw date printed on your ticket.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
