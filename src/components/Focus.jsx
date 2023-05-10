import React from "react";
import { Link } from "react-router-dom";

const Focus = () => {
  return (
    <section className="focus-section">
      <div className="focus-section-overlay">
        <div className="container-fluid">
          <div className="focus-section-text">
            <h3>Your Safety and Comfort Is Our Focus</h3>
            <p>
              Fosters Kraus Plumbing and Heating LLC provides you with the best
              in HVAC services to keep you warm during those long winters and
              hot, humid summers. Count on our technicians to improve your
              home’s comfort level while lowering energy costs and increasing
              the performance of your heating & cooling equipment.
            </p>
            <p>
              Our experienced technicians are highly proficient, skilled, and
              trained. They’ve worked on practically every type of heating
              system out there and that’s a level of qualification which is hard
              to match.
            </p>
            <Link to='#'>Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
