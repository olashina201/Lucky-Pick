import React from 'react'
import contact from '../assets/images/contact-decoration.png'

function Contact() {
    return (
        <div id="contact" class="contact-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
          <div class="section-heading">
            <h2>Feel Free To Send Us a Message About our Website</h2>
            <div class="phone-info">
              <h4>For any enquiry, Call Us: <span><i class="fa fa-phone"></i> <a href="#">+2348136156937</a></span></h4>
            </div>
          </div>
        </div>
        <div class="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
          <form id="contact" action="" method="post">
            <div class="row">
              <div class="col-lg-6">
                <fieldset>
                  <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required />
                </fieldset>
              </div>
              <div class="col-lg-6">
                <fieldset>
                  <input type="surname" name="surname" id="surname" placeholder="Surname" autocomplete="on" required />
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <textarea name="message" type="text" class="form-control" id="message" placeholder="Message" required=""></textarea>  
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" class="main-button ">Send Message</button>
                </fieldset>
              </div>
            </div>
            <div class="contact-dec">
              <img src={contact} alt="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Contact
