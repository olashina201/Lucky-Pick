import React from 'react'
import NavBar from '../components/NavBar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import jack from '../assets/images/Jack1.png'

function About() {
    return (
        <div>
            <NavBar />
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
                                <h2>About Lucky Pick</h2>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default About
