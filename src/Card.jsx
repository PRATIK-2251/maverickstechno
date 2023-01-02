import React from "react";
import { NavLink } from "react-router-dom";
const Card = ({ imgSrc, title }) => {
  return (
    <>
      <div className="col-md-4 col-sm-6 d-flex justify-content-center">
        <div className="card mb-2" style={{ width: "15rem", height: "30rem" }}>
          <img
            src={imgSrc}
            className="card-img-top"
            alt="..."
            style={{ height: "14rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink href="#" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
