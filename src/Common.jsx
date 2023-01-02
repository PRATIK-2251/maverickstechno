import React from "react";
import { useNavigate } from "react-router-dom";
const Common = ({ imgSrc, title, button, link }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="row home-bg-color ">
        <div className="col-lg-6 order-2 order-sm-0">
          <div className="row ">
            <div className="col-12 pe-0 home-page">
              <div className="content-details">
                <h2>Grow your business with {title}</h2>
                <p>We are the team of talented developer making webistes</p>
                <div>
                  <button onClick={() => navigate(link)}>{button}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-sm-1 img-side">
          <img src={imgSrc} alt="desk-img" className="desk-img img-fluid" />
        </div>
      </div>
    </>
  );
};

export default Common;
