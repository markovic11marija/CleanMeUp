import React, { useState } from "react";

const OrderCounter = ({ id, name, price, setOrder, order }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex justify-content-center flex-column align-items-center order-counter-wrapper">
      <h6 className="text-center">{name}</h6>
      <div>
        <button
          disabled={count===0}
          type="button"
          onClick={() => {
            setCount(count - 1);
            setOrder({
              ...order,
              items: [
                ...order.items.filter((i) => i.id !== id),
                {
                  count: count - 1,
                  price: price * (count + 1),
                  name: name,
                  id
                },
              ],
            });
          }}
          className="btn transparent orderBtn"
        >
          -
        </button>
        <button type="button" disabled={count <= 0} className="btn orderBtn">
          {count}
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
            setOrder({
              ...order,
              items: [
                ...order.items.filter((i) => i.id !== id),
                {
                  count: count + 1,
                  price: price * (count + 1),
                  name: name
                },
              ],
            });
          }}
          className="btn transparent orderBtn"
        >
          +
        </button>
      </div>
      <h6>{price} RSD</h6>
    </div>
  );
};

export default OrderCounter;
