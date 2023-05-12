import React from 'react'
import about from '../assets/about.png'
import phone from '../assets/phone_pink.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about-section">
        <div className="container-fluid">
            <div className="row align-items-md-center">
                <div className="col-md-6">
                    <div className="about-section-img">
                        <div className="about-section-img-top-text">
                            <h5>50 Years</h5>
                            <h6>of Experience</h6>
                        </div>
                        <img src={about} alt="image" />
                        <div className="about-section-img-bottom-text">
                            <img src={phone} alt="image" />
                            <div className="about-section-img-bottom-text-div">
                                <h5>319-377-6325</h5>
                                <h6>Call Today</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-section-text">
                        <h6>About Fosters kraus</h6>
                        <h3>Our Promise
                        <span className="d-block">To <span className="clr-pink">Our Customers</span></span></h3>
                        <h5>“We believe that the comfort and safety of our customers come first and we guarantee you’ll see that in everything we do. Anytime, Everyday.”</h5>
                        <p>We pride ourselves on being a one-stop-shop that is able to meet all of our client’s HVAC and plumbing needs. Our goal is to provide the highest quality maintenance and repair, design, and installation services, on schedule and on budget, while never sacrificing the outstanding customer service Fosters Kraus  is known for.  Our customers are like family, which is why the comfort and safety of your family is always our top priority and our promise to you.</p>
                        <Link to='#'>Learn More About Us…</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
