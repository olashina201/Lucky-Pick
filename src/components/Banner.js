import React from 'react'
import winner from '../assets/images/check-winners.png'

function Banner() {
    return (
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                        <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                            <h6>Welcome to Lucky Pick</h6>
                            <h2>Winning <em>Number</em> <span>Search</span></h2>
                            <p>Check the winning numbers and make sure they are for the draw date printed on your ticket.</p>
                            <form id="search" action="#" method="GET">
                            <fieldset>
                                <input type="address" name="address" className="email" placeholder="Search Number..." autocomplete="on" required />
                            </fieldset>
                            <fieldset>
                                <button type="submit" className="main-button">Search</button>
                            </fieldset>
                            </form>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                            <img src={ winner }alt="team meeting" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Banner
