import { getData, postData } from "./api";
import {
  postOrderStarted,
  postOrderSuccess,
  postOrderError,
  getOrdersStarted,
  getOrdersSuccess,
  getOrdersError,
  putPaymentTypeSuccess,
  putPaymentTypeError,
  putPaymentTypeStarted,
} from "../actions/orderActions";

export function postOrder(order) {
  postData({
    startActionType: postOrderStarted,
    successActionType: postOrderSuccess,
    errorActionType: postOrderError,
    url: `Order/insert`,
    data: order,
  });
}

export function getUserOrders(userId) {
  getData({
    url: `Order/by-user-id/${userId}`,
    startActionType: getOrdersStarted,
    successActionType: getOrdersSuccess,
    errorActionType: getOrdersError,
  });
}


export function updatePaymentType(orderId) {
  postData({
    startActionType: putPaymentTypeStarted,
    successActionType: putPaymentTypeSuccess,
    errorActionType: putPaymentTypeError,
    url: `Order/cash-on-delivery`,
    data: {
      orderId
    },
  });
}
