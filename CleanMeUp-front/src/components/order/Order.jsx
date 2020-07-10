import React from "react";
import StepWizard from "react-step-wizard";
import OrderDetails from "./wizzardSteps/OrderDetails";
import AddressDetails from "./wizzardSteps/AddressDetails";
import Header from "../homepage/Header"

const Order = () => {
  return (
    <>
      <Header />
      <div className="image">
        <div className="cardContainer transparent">
          <StepWizard>
            <OrderDetails/>
            <AddressDetails />
          </StepWizard>
        </div>
      </div>
    </>
  );
};

export default Order;
