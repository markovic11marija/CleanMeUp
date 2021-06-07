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
  orders: { status: PENDING, data: [] },
  newOrder: {...newEmptyOrder()},
  updatedPaymentType: {status: PENDING, data: null},
  insertedOrderId: { status: PENDING, data: null },
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
        insertedOrderId: { status: LOADING, data: null },
      };
    case actions.ORDER_POST_SUCCESS:
      return {
        ...state,
        insertedOrderId: { status: LOADED, data: action.payload.id },
        updatedPaymentType: {status: PENDING, data: null},
      };
    case actions.ORDER_POST_ERROR:
      return {
        ...state,
        insertedOrderId: { status: ERROR, data: null },
      };
    case actions.ORDERS_GET_START:
      return {
        ...state,
        orders: { status: LOADING, data: [] },
        updatedPaymentType: {status: PENDING, data: null},
        insertedOrderId: { status: PENDING, data: null },
      };
    case actions.ORDERS_GET_SUCCESS:
      return {
        ...state,
        orders: { status: LOADED, data: action.payload },
      };
    case actions.ORDERS_GET_ERROR:
      return {
        ...state,
        orders: { status: ERROR, data: [] },
      };
    case actions.ORDER_PAYMENT_TYPE_START:
      return {
        ...state,
        updatedPaymentType: { status: LOADING, data: [] },
      };
    case actions.ORDER_PAYMENT_TYPE_SUCCESS:
      return {
        ...state,
        updatedPaymentType: { status: LOADED, data: true },
      };
    case actions.ORDER_PAYMENT_TYPE_ERROR:
      return {
        ...state,
        updatedPaymentType: { status: ERROR, data: [] },
      };
    default:
      return state;
  }
};
