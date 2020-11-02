import React, { useEffect, useState } from "react";

const Review = (props) => {
  console.log(props);
  const [amount, setAmount] = useState();

  useEffect(() => {
    let result = 0;
    props.order.items.forEach((item) => {
      result += item.price;
    });
    setAmount(result);
  }, [props]);

  return (
    <div>
      <form>
        <label>Amount</label> <input defaultValue={amount} />
        <input defaultValue="" />
        <input defaultValue="" />
      </form>
    </div>
  );
};

export default Review;
