export const ORDER_POST_START = "ORDER_POST_START";
export const ORDER_POST_SUCCESS = "ORDER_POST_SUCCESS";
export const ORDER_POST_ERROR = "ORDER_POST_ERROR";

export const NEW_ORDER_DATA_SAVE = "NEW_ORDER_DATA_SAVE";

export const ORDERS_GET_START = "ORDERS_GET_START";
export const ORDERS_GET_SUCCESS = "ORDERS_GET_SUCCESS";
export const ORDERS_GET_ERROR = "ORDERS_GET_ERROR";

export const ORDER_PAYMENT_TYPE_START = "ORDER_PAYMENT_TYPE_START";
export const ORDER_PAYMENT_TYPE_SUCCESS = "ORDER_PAYMENT_TYPE_SUCCESS";
export const ORDER_PAYMENT_TYPE_ERROR = "ORDER_PAYMENT_TYPE_ERROR";

export const orderDataSave = (data) => {
  return {
    type: NEW_ORDER_DATA_SAVE,
    payload: data
  };
};

export const postOrderStarted = () => {
  return {
    type: ORDER_POST_START,
  };
};

export const postOrderError = () => {
  return {
    type: ORDER_POST_ERROR,
  };
};

export const postOrderSuccess = (orderId) => {
  return {
    type: ORDER_POST_SUCCESS,
    payload: orderId,
  };
};

export const getOrdersStarted = () => {
  return {
    type: ORDERS_GET_START,
  };
};

export const getOrdersError = () => {
  return {
    type: ORDERS_GET_ERROR,
  };
};

export const getOrdersSuccess = (orders) => {
  return {
    type: ORDERS_GET_SUCCESS,
    payload: orders.payload,
  };
};

export const putPaymentTypeStarted = () => {
  return {
    type: ORDER_PAYMENT_TYPE_START,
  };
};

export const putPaymentTypeError = () => {
  return {
    type: ORDER_PAYMENT_TYPE_ERROR,
  };
};

export const putPaymentTypeSuccess = (orders) => {
  return {
    type: ORDER_PAYMENT_TYPE_SUCCESS,
    payload: orders.payload,
  };
};
