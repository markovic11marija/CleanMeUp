import React from "react";
import Header from "./Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="image">
        <div className="cardContainer transparent">
          <h3>Mi brinemo o vasoj odeci,</h3>
          <h3>da bi ste Vi mogli da se posvetite svemu ostalom</h3>
          <h5>Najsigurnije i najpovoljnije hemijsko ciscenje</h5>

          <div className="transparent">
            <input
              className="input"
              type="text"
              placeholder="Ulica,broj,sprat"
            />
            <input
              className="input"
              type="text"
              placeholder="+381 XXX XXX XXX"
            />
            <input type="button" value="Naruci" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
