import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import OrderDetails from "./wizzardSteps/OrderDetails";
import AddressDetails from "./wizzardSteps/AddressDetails";
import Header from "../homepage/Header";

const Order = () => {
  const [order, setOrder] = useState({ items: [] });
  return (
    <>
      <Header />
      <div className="image">
        <div className="cardContainer transparent">
          <StepWizard>
            <OrderDetails setOrder={setOrder} order={order} />
            <AddressDetails setOrder={setOrder} order={order} />
          </StepWizard>
        </div>
      </div>
    </>
  );
};

export default Order;
