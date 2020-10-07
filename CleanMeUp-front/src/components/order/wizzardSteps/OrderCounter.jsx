import React, { useState } from "react";

const OrderCounter = ({ name, price, setOrder, order }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h6>{name}</h6>
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
            setOrder({
              ...order,
              items: [
                ...order.items.filter((i) => i.name !== name),
                {
                  count: count - 1,
                  price: price * (count + 1),
                  name: name,
                },
              ],
            });
          }}
          className="btn transparent orderBtn"
        >
          -
        </button>
        <button disabled className="btn transparent orderBtn">
          {count}
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
            setOrder({
              ...order,
              items: [
                ...order.items.filter((i) => i.name !== name),
                {
                  count: count + 1,
                  price: price * (count + 1),
                  name: name,
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
