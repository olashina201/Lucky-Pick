import React from 'react'

function NavBar() {
    return (
        <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                    <nav class="main-nav">
                        <a href="index.html" class="logo">
                        <h4>Lucky<span>Pick</span></h4>
                        </a>
                        <ul class="nav">
                        <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                        <li class="scroll-to-section"><a href="#about">About Us</a></li>
                        <li class="scroll-to-section"><a href="#services">Winners</a></li>
                        <li class="scroll-to-section"><a href="#portfolio">Lucky-Pick</a></li>
                        <li class="scroll-to-section"><a href="#blog">Super Lotto</a></li> 
                        <li class="scroll-to-section"><a href="#contact">Message Us</a></li> 
                        <li class="scroll-to-section"><div class="main-red-button"><a href="#contact">Contact Now</a></div></li> 
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar
