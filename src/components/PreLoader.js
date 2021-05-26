import React from 'react'
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../assets/css/fontawesome.css'
import '../assets/css/templatemo-space-dynamic.css'
import '../assets/css/animated.css'
//import '../assets/css/owl.css'

function PreLoader() {
    return (
        <div id="js-preloader" class="js-preloader">
            <div class="preloader-inner">
                <span class="dot"></span>
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default PreLoader
