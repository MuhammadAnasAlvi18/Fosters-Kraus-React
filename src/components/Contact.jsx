import React from 'react'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
   <section className="contact-section">
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-section-text">
              <h3>Contact <span className="d-block clr-pink">Fosters Kraus</span></h3>
              <p><span className="clr-black">We offer 24/7 Emergency Service to all of our customers.</span> You can always count on Kraus to get to you fast and get the job done right the first time. Our knowledgeable and experienced technicians will find the source of your plumbing, or heating and air conditioning, issues and fix them fast.</p>
              <div className="contact-section-text-bottom">
                <div className="contact-section-text-icons">
                  <div className="phone-div">
                    <FontAwesomeIcon icon={faPhone}/>
                  </div>
                  <div className="dotted-div"></div>
                  <div className="location-div">
                    <FontAwesomeIcon icon={faLocationDot}/>
                  </div>
                </div>
                <div className="contact-section-text-right">
                  <h6>Our Contact Phone:</h6>
                  <h5>319-465-5129</h5>
                  <h5>319-465-5129</h5>
                  <h6>Main Office:</h6>
                  <h5>317 S. Locust St., Monticello, <span className="d-block">Iowa 52310</span></h5>
                  <h6>Anamosa Office:</h6>
                  <h5>412 Chamber Drive, Anamosa, <span className="d-block">Iowa 52205</span></h5>
                  <h6>Marion Office:</h6>
                  <h5>1040 East Post Rd, Marion, <span className="d-block">Iowa 52302</span></h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-section-form">
              <h4>Schedule an <span className="clr-pink">Appointment</span></h4>
              <form>
                <div className="contact-form-div">
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Your Email'/>
                <input type="number" placeholder='Phone' />
                <select>
                  <option disabled selected>Types of services</option>
                  <option value="service one">service one</option>
                  <option value="service two">service two</option>
                  <option value="service three">service three</option>
                </select>
                <input type="text" placeholder='Your Street Address'/>
                <select>
                  <option disabled selected>City</option>
                  <option value="city one">city one</option>
                  <option value="city two">city two</option>
                  <option value="city three">city three</option>
                </select>
                <input type="text" placeholder='Your Message'/>
                <span>All fields are required</span>
                <Link to='#'>Schedule an Appointment</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
   </section>
  )
}

export default Contact