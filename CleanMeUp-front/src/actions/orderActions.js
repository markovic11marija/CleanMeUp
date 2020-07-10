export const ORDER_POST_START = "ORDER_POST_START";
export const ORDER_POST_SUCCESS = "ORDER_POST_SUCCESS";
export const ORDER_POST_ERROR = "ORDER_POST_ERROR";

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

export const postOrderSuccess = (order) => {
  return {
    type: ORDER_POST_SUCCESS,
    order: order,
  };
};
