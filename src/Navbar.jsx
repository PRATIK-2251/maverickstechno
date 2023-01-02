import React from "react";
import { NavLink } from "react-router-dom";
import m from "./images/m.png";
const Navbar = () => {
  const activeClass = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                Mavericks <img src={m} alt="logo" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink
                    style={activeClass}
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    style={activeClass}
                    className="nav-link active"
                    aria-current="page"
                    to="/services"
                  >
                    Services
                  </NavLink>
                  <NavLink
                    style={activeClass}
                    className="nav-link active"
                    aria-current="page"
                    to="about-us"
                  >
                    About
                  </NavLink>
                  <NavLink
                    style={activeClass}
                    className="nav-link active"
                    aria-current="page"
                    to="contact-us"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
