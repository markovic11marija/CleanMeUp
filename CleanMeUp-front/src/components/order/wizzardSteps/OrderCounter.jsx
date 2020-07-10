import React, { useState } from "react";

const OrderCounter = ({ name, price }) => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h6>{name}</h6>
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
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
