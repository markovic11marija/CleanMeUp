import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import { Shop } from "../../features/shop/Shop";
import Review from "../payment/Review";
import OrderDetails from "./wizzardSteps/OrderDetails";

const Order = () => {
  const [order, setOrder] = useState({ items: [] });
  return (
    <>
      <div className="image">
        <div className="cardContainer transparent">
          <StepWizard>
            <OrderDetails setOrder={setOrder} order={order} />
            <Shop setOrder={setOrder} order={order} />
            <Review order={order} />
          </StepWizard>
        </div>
      </div>
    </>
  );
};

export default Order;
