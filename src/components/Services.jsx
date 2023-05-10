import React from "react";
import services from "../assets/services.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services-section">
      <div className="container-fluid">
        <div className="row align-items-md-center">
          <div className="col-md-6">
            <div className="services-section-img">
              <img src={services} alt="image" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="services-section-text about-section-text">
              <h6>Quality Services</h6>
              <h3>
                For Plumbing,{" "}
                <span className="clr-pink">
                  Home and <span className="d-block">Commercial</span>
                </span>
              </h3>
              <p>
                A well-maintained plumbing system plays an important role in the
                comfort, convenience, and value of your home. That is why it is
                essential to choose only a qualified, trustworthy, plumbing
                contractor for all your plumbing repairs and installations. <span className="d-block">
                With
                more than 25 years of service, you can count on our experts for
                dependable service & professional results. From new pipe
                installations, remodels and water-heater replacements, to sewer
                services, we are here to satisfy all of your family’s plumbing
                needs.
                </span>
              </p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
