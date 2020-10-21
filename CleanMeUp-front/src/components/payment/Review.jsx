import React from "react";

const Review = (props) => {
    console.log(props)
  return (
    <div>
      <form>
        <label>Amount</label> <input defaultValue={props.order.amount} />
        <input defaultValue="" />
        <input defaultValue="" />
      </form>
    </div>
  );
};

export default Review;
