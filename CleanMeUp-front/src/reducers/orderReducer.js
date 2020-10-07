import { PENDING, LOADED, LOADING, ERROR } from "../constants/statusTypes";
import * as actions from "../actions/orderActions";

export const initialState = {
  order: { status: PENDING, data: [] },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ORDER_POST_START:
      return {
        ...state,
        order: { status: LOADING, data: [] },
      };
    case actions.ORDER_POST_SUCCESS:
      return {
        ...state,
        order: { status: LOADED, data: action.order },
      };
    case actions.ORDER_POST_ERROR:
      return {
        ...state,
        order: { status: ERROR, data: [] },
      };
    default:
      return state;
  }
};
