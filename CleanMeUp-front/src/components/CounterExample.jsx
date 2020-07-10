import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/exampleAction";

const CounterExample = () => {
  const number = useSelector(state => state.exampleReducer.number.data);
  const dispatch = useDispatch();

  return (
    <div>
      Number is: {number}
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
      <button onClick={() => dispatch(increment())}>Increment +</button>
    </div>
  );
};

export default CounterExample;
