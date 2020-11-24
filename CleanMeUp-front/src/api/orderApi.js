import { postData } from "./api";
import {
  postOrderStarted,
  postOrderSuccess,
  postOrderError,
} from "../actions/orderActions";

export function postOrder(dispatch, order) {
  postData({
    dispatch,
    startActionType: postOrderStarted,
    successActionType: postOrderSuccess,
    errorActionType: postOrderError,
    url: `Order`,
    data: order,
  });
}
