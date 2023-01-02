import React from "react";
import page_not_found from "./images/page-not-found.gif";
const PageNotFound = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 vh-100">
          <div className="img-section d-flex justify-content-center align-content-center">
            <img
              src={page_not_found}
              alt="page-not-found"
              className="img-fluid"
              style={{ width: "20rem", height: "23rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
