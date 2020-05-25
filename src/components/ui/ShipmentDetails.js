import React from "react";

const ShipmentDetails = (props) => {
  // console.log(props);

  return (
    <div>
      <h1>Company name</h1>
      <a href="something@gmail.com">Email address</a>
      <p>Number of required cargo bays: [number]</p>
      <p>Cargo boxes</p>
      <input placeholder="comma separated" type="text" />
    </div>
  );
};
export default ShipmentDetails;
