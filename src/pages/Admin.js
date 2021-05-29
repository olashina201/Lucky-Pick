import React, {useState} from 'react'
import contact from '../assets/images/contact-decoration.png'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Admin() {
    const [number, setNumber] = useState(null)
    const [multiplier, setMultiplier] = useState(null)

    const handleSubmit = () => {
        console.log(number, multiplier)
    }

    return (
        <div>
            <NavBar/>
            <div id="contact" className="contact-us section">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
                <div className="section-heading">
                    <h2>Admin page</h2>
                    <div className="phone-info">
                    <h4>Add lucky pick using the form</h4>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
                <form id="contact" action="" method="" onSubmit={handleSubmit}>
                    <div className="row">
                    <div className="col-lg-6">
                        <fieldset>
                        <input type="number" name="name" id="name" value={number} onChange={e => setNumber(e.target.value)} placeholder="lucky Numbers" autocomplete="on" required />
                        </fieldset>
                    </div>
                    <div className="col-lg-6">
                        <fieldset>
                        <input type="number" name="surname" id="surname" value={multiplier} onChange={e => setMultiplier(e.target.value)} placeholder="Multiplier" autocomplete="on" required />
                        </fieldset>
                    </div>
                    <div className="col-lg-12">
                        <fieldset>
                        <input type="date" name="email" id="email"  placeholder="Date" />
                        </fieldset>
                    </div>
                    <div className="col-lg-12">
                        <fieldset>
                        <input type="file" name="email" id="email"  placeholder="Date" />
                        </fieldset>
                    </div>
                    <div className="col-lg-12">
                        <fieldset>
                        <button type="submit" id="form-submit" className="main-button ">Submit</button>
                        </fieldset>
                    </div>
                    </div>
                    <div className="contact-dec">
                    <img src={contact} alt="" />
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Admin
