import React from "react";
import Common from "./Common";
import "./Home.css";
import desks from "./images/desk.gif";
const Home = () => {
  return (
    <>
      <Common
        imgSrc={desks}
        title={"Mavericks Technology"}
        button="Get Stared"
        link="/services"
      />
    </>
  );
};

export default Home;
