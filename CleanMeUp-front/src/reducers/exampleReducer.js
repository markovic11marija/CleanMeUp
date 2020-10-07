import { PENDING, LOADED } from "../constants/statusTypes";
import * as actions from "../actions/exampleAction";

export const SET_REGION = "SET_REGION";

export const initialState = {
  number: { status: PENDING, data: 0 }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        number: { status: LOADED, data: state.number.data + 1 }
      };
    case actions.DECREMENT:
      return {
        ...state,
        number: { status: LOADED, data: state.number.data - 1 }
      };
    default:
      return state;
  }
};
