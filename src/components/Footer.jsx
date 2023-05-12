import React from 'react'
import logo from '../assets/logo_white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
    <section className="footer-section">
      <img src={logo} alt="image" />
      <p>“We believe that the comfort and safety of our customers come first and we guarantee you’ll see that in everything we do. Anytime, Everyday.”</p>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="footer-section-div">
            <div className="footer-section-div-icon">
              <FontAwesomeIcon icon={faPhone}/>
            </div>
            <h4>Phone</h4>
            <h5>319-465-5129</h5>
            <h5>319-377-6325</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="footer-section-div">
            <div className="footer-section-div-icon">
              <FontAwesomeIcon icon={faLocationDot}/>
            </div>
            <h4>Address</h4>
            <h5>Main Office: <span className="d-block">317 S. Locust St., Monticello, Iowa 52310</span></h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="footer-section-div">
            <div className="footer-section-div-icon">
              <FontAwesomeIcon icon={faEnvelope}/>
            </div>
            <h4>Email:</h4>
            <h5>Info@fosterskraus.com</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="footer-section-div">
            <div className="footer-section-div-icon">
              <FontAwesomeIcon icon={faClock}/>
            </div>
            <h4>Working hours:</h4>
            <h5>Mon-Fri: 7:00 - 4:00</h5>
            <h5>24hr Emergency Service</h5>
          </div>
        </div>
      </div>
    </section>
    <section className="footer-bottom-section">
      <p>© Fosters Kraus 2022 • 317 S. Locust St. Monticello, Iowa 52310 • Tel: 319-465-5129</p>
    </section>
    </>
  )
}

export default Footer