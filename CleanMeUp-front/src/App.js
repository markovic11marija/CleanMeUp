import React from "react";
import { connect } from "react-redux";
import "./style/style.scss";
import Homepage from "./components/homepage/Homepage";
import Order from "./components/order/Order";
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Order />
    </div>
  );
}

export default connect()(App);
