import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
                <FontAwesomeIcon icon={faBars}/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
