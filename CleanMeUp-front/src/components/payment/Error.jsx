import React from "react";
import Header from "../homepage/Header";

const Error = () => {
  return (
    <>
      <Header />
      <div className="image">
        <div className="cardContainer transparent">
          <h5>Placanje nije uspelo</h5>
          <h6>Molimo pokusajte ponovo</h6>
        </div>
      </div>
    </>
  );
};

export default Error;
