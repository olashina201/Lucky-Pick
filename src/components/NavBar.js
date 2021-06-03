import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../assets/css/fontawesome.css'
import '../assets/css/templatemo-space-dynamic.css'
import '../assets/css/animated.css'
//import '../assets/css/owl.css'


function NavBar() {
    const [nav, setNav] = useState(false)

    const toggle = () => {setNav(!nav)}

    return (
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <nav className="main-nav">
                        <Link to="/" className="logo">
                            <h4>Lucky<span>Pick</span></h4>
                        </Link>
                        <ul className="nav" style={{display: nav ? 'block': 'none'}}>
                            <li className="scroll-to-section"><a href="#" className="active">Home</a></li>
                            <li className="scroll-to-section"><<a href="#">About</a></li>
                            <li className="scroll-to-section"><a href="#services">Winners</a></li>
                            <li className="scroll-to-section"><a href="#portfolio">Lucky-Pick</a></li>
                            <li className="scroll-to-section"><a href="#contact">Message Us</a></li> 
                            <li className="scroll-to-section"><Link to="/admin">Admin</Link></li> 
                            <li className="scroll-to-section"><div className="main-red-button"><a href="#contact">Contact Now</a></div></li> 
                        </ul>        
                        <a className='menu-trigger' onClick={toggle}>
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
