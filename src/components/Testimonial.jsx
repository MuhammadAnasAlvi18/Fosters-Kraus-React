import React from "react";
import qoute from "../assets/qoute.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container-fluid">
        <h5>Testimonials</h5>
        <h3>
          what Our <span className="clr-pink">Customers</span>{" "}
        </h3>
        <div className="testimonial-main">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner carousel-inner-flex">
              <div class="carousel-item testimonial-carousel-item active">
                <img src={qoute} alt="image" />
                <p>
                  Stellar customer service! Detailed, specific and honest when
                  we needed to replace our air conditioner and furnace units. We
                  chose the York brand...we now have a comfortable cool home
                  again! Thank you to Brian and staff!
                </p>
                <span className="line"></span>
                <h4>Carrie R.</h4>
                <div className="rating">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div class="carousel-item testimonial-carousel-item">
                <img src={qoute} alt="image" />
                <p>
                  Stellar customer service! Detailed, specific and honest when
                  we needed to replace our air conditioner and furnace units. We
                  chose the York brand...we now have a comfortable cool home
                  again! Thank you to Brian and staff!
                </p>
                <span className="line"></span>
                <h4>Carrie R.</h4>
                <div className="rating">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div class="carousel-item testimonial-carousel-item">
                <img src={qoute} alt="image" />
                <p>
                  Stellar customer service! Detailed, specific and honest when
                  we needed to replace our air conditioner and furnace units. We
                  chose the York brand...we now have a comfortable cool home
                  again! Thank you to Brian and staff!
                </p>
                <span className="line"></span>
                <h4>Carrie R.</h4>
                <div className="rating">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-btn">
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
