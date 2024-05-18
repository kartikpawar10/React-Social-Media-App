import React from "react";
const Spinner = () => {
  return (
    <center className="m-5">
      <div
        className="spinner-border text-white"
        style={{ width: "10rem", height: "10rem" }}
        role="status"
      ></div>
    </center>
  );
};

export default Spinner;
