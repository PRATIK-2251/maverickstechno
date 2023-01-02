import React from "react";
import Common from "./Common";
import "./Home.css";
import app_develop from "./images/app-develop.gif";
const About = () => {
  return (
    <>
      <Common
        imgSrc={app_develop}
        title="Mavericks Technology"
        button="Contact Us"
        link="/contact-us"
      />
    </>
  );
};

export default About;
