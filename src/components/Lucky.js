import React from 'react'
import bitmap from '../assets/images/lucky pick bitmap.jpg'

function Lucky() {
    return (
        <div id="portfolio" class="our-portfolio section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <h2>See All <em>Winning</em> <span>Numbers</span></h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6">
                <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                  <div class="showed-content">
                    <img src={bitmap} alt="" />
                    <h4>23-65-87-66-09</h4>
                  </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <a href="#">
                <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                  <div class="showed-content">
                    <img src={bitmap} alt="" />
                     <h4>23-65-87-66-09</h4>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-sm-6">
              <a href="#">
                <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div class="showed-content">
                    <img src={bitmap} alt="" />
                    <p>Draw #1 - Fe-23-2014</p>
                     <h4>01-02-14-18-24</h4>
                     <p>Multiplier</p>
                     <p>2</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-sm-6">
              <a href="#">
                <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                  <div class="showed-content">
                    <img src={bitmap} alt="" />
                     <h4>23-65-87-66-09</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Lucky
