import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import time from "../assets/time.png";
import comfort from "../assets/comfort.png";
import phone from "../assets/phone.png";


const Header = () => {
  const [isActive, setisActive] = useState(true);

  return (
    <>
      <header>
        <TopBar />
        <div className="header-top-main">
          <div className="container-fluid">
            <div className="header-navigation">
              <div className="logo">
                <img src={logo} alt="image" className="img-fluid" />
              </div>
              <ul>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Heating & Air</Link>
                </li>
                <li>
                  <Link to="#">Plumbing</Link>
                </li>
                <li>
                  <Link to="#">Financing</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                  setisActive(!isActive);
                }}
              />
            </div>
            <div
              className={`header-mobile-navigation ${isActive ? "" : "active"}`}
            >
              <ul>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Heating & Air</Link>
                </li>
                <li>
                  <Link to="#">Plumbing</Link>
                </li>
                <li>
                  <Link to="#">Financing</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
