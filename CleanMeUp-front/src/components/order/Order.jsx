import React, { useEffect, useState } from "react";
import StepWizard from "react-step-wizard";
import { Shop } from "../../features/shop/Shop";
import Review from "../payment/Review";
import OrderDetails from "./wizzardSteps/OrderDetails";
import { useSelector } from 'react-redux';
import { Payment } from "../../features/payment/Payment";
import { Register } from "../../features/register/Register";
import { isLoggedIn } from "../../helpers/authHelper";

const Order = () => {
  const [order, setOrder] = useState({ items: [] });
  
  const { newOrder } = useSelector(state => state.orderReducer);

  useEffect(() => {
        if(newOrder) {
            setOrder(newOrder);
        }
    }, [newOrder]);

  return (
    <>
      <div className="image">
        <div className="cardContainer transparent">
          <StepWizard>
            <OrderDetails setOrder={setOrder} order={order} />
            <Shop setOrder={setOrder} order={order} />
            <Review order={order} />
            {!isLoggedIn() && (<Register/>)}
            <Payment setOrder={setOrder} order={order}/>
          </StepWizard>
        </div>
      </div>
    </>
  );
};

export default Order;
