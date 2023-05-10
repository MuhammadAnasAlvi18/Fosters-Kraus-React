import React from "react";
import { Link } from "react-router-dom";
import york from '../assets/york.png';
import heating from '../assets/heating.png';
import pipe from '../assets/pipe.png';
import wind from '../assets/wind.png';

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container-fluid">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="banner-slides">
              <div className="row align-items-md-center">
                <div className="col-md-6">
                  <div className="banner-text">
                    <h3>Now Available At</h3>
                    <h2>Fosters KRAUS <span className="d-block">Heating & Air Units</span></h2>
                    <p>Keeping Your Family Safe and Comfortable...
                       <span className="d-block">Anytime, Everyday</span></p>
                    <Link to='#'>Click Here To Find Out More</Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="banner-img">
                    <img src={york} alt="image" className="img-fluid"/>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="banner-slides">
              <div className="row align-items-md-center">
                <div className="col-md-6">
                  <div className="banner-text">
                    <h3>Now Available At</h3>
                    <h2>Fosters KRAUS <span className="d-block">Heating & Air Units</span></h2>
                    <p>Keeping Your Family Safe and Comfortable...
                       <span className="d-block">Anytime, Everyday</span></p>
                    <Link to='#'>Click Here To Find Out More</Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="banner-img">
                    <img src={york} alt="image" className="img-fluid"/>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="banner-slides">
              <div className="row align-items-md-center">
                <div className="col-md-6">
                  <div className="banner-text">
                    <h3>Now Available At</h3>
                    <h2>Fosters KRAUS <span className="d-block">Heating & Air Units</span></h2>
                    <p>Keeping Your Family Safe and Comfortable...
                       <span className="d-block">Anytime, Everyday</span></p>
                    <Link to='#'>Click Here To Find Out More</Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="banner-img">
                    <img src={york} alt="image" className="img-fluid"/>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bottom">
        <div className="row m-0">
            <div className="col-md-4 ps-0 pe-0">
                <div className="banner-bottom-div grey-bg">
                    <img src={heating} alt="image" />
                    <div className="banner-bottom-div-text">
                        <h4>Heating & Cooling</h4>
                        <p>Fosters Kraus offers quality, high-efficiency, residential and commercial heating and cooling products combined with honest and knowledgeable service.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 ps-0 pe-0">
            <div className="banner-bottom-div pink-bg">
                    <img src={pipe} alt="image" />
                    <div className="banner-bottom-div-text">
                        <h4>Plumbing</h4>
                        <p>From water heater replacement to new construction installs, Fosters offers a full range of residential and commercial/industrial plumbing services.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 ps-0 pe-0">
            <div className="banner-bottom-div blue-bg">
                    <img src={wind} alt="image" />
                    <div className="banner-bottom-div-text">
                        <h4>Air Quality</h4>
                        <p>We’re dedicated to improving the air quality in your home. The latest technology in climate control is available and affordable with Fosters</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
