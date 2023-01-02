import React from "react";
import Card from "./Card";
import data from "./Sdata";
const Services = () => {
  return (
    <>
      <h3 className="text-center my-4">Services</h3>
      <div className="row m-2">
        {data.map((item, index) => (
          <Card key={index} imgSrc={item.imgsrc} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default Services;
