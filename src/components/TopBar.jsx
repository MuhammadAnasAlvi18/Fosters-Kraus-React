import React from "react";
import time from "../assets/time.png";
import comfort from "../assets/comfort.png";
import phone from "../assets/phone.png";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <>
      <section className="header-top">
        <div className="container-fluid">
          <div className="header-top-flex">
            <div className="header-top-text">
              <div className="header-top-text-div">
                <img src={time} alt="image" />
                <h6>Mon-Fri: 8:00 - 4:00</h6>
              </div>
              <div className="header-top-text-div">
                <img src={comfort} alt="image" />
                <h6>Comfort Consultation</h6>
              </div>
              <Link to="tel:319-377-6325">
                <div className="header-top-text-div">
                  <img src={phone} alt="image" />
                  <h6>Call Today 319-377-6325</h6>
                </div>
              </Link>
            </div>
            <div className="header-top-btn">
              <Link to="#">PAY YOUR INVOICE ONLINE</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBar;
