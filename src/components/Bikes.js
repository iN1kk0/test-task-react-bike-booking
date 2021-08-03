import React from "react";
import Bike from "./Bike";

const Bikes = (props) => {
  return (
    <>
      {props.bikes.map((bike, index) => (
        <Bike key={index} bike={bike} />
      ))}
    </>
  );
};

export default Bikes;
