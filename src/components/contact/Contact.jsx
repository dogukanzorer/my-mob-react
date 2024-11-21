import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className="contact-container">
        <div className="item">
            <div className="contact">
                <div className="first-text">Let's get in touch</div>
                 <div className="contact-sec">
                        <ul className="contact-infos">
                            <li><i class='bx bxs-envelope'></i> sales@mymobdesign.com </li>
                            <li><i class='bx bxs-phone-call' ></i> +1 (561) 465-6662</li>
                            <li><i class='bx bxs-location-plus'></i> 5624 nw 79th ave </li>
                            <li className='spacial-p'> 33166 Doral Florida</li>
                            <br />
                        </ul>
                    </div>
                <div className="social-links">
                    
                </div>
            </div>
            <div className="submit-form">
                <h4 className="third-text">Contact Us</h4>
                <form action="">
                    <div className="input-box">
                        <input type="text"  className='input'/>
                        <label htmlFor="">Name</label>
                    </div>
                    <div className="input-box">
                        <input type="email"  className='input'/>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-box">
                        <input type="phone"  className='input'/>
                        <label htmlFor="">Phone</label>
                    </div>
                    <div className="input-box">
                        <textarea className='input' name="" id="message"></textarea>
                        <label htmlFor="">Message</label>
                    </div>
                    <input type="submit" className='btn-contact' value='Submit'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact