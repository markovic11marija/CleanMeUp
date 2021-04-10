import { PENDING, LOADED, LOADING, ERROR } from "../constants/statusTypes";
import * as actions from "../actions/orderActions";
export const newEmptyOrder = () => {
  return {
    items: [],
    services: [],
    pickUpAddress: {
      street: null,
      floor: null, 
      interphone: null, 
      district: null
    },
    pickUpDate: null,
    deliveryAddress: {
      street: null,
      floor: null,
      interphone: null,
      district: null
    },
    deliveryDate: null,
    phone: null,
    userId: null,
    note: null,
    deliveryNote: null,
    fileName: null,
    fileInBytes: null
  }
}
export const initialState = {
  order: { status: PENDING, data: [] },
  newOrder: {...newEmptyOrder()}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.NEW_ORDER_DATA_SAVE:
        return {
          ...state,
          newOrder: {...state.newOrder, ...action.payload}
        }
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
