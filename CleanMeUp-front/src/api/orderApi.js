import { getData, postData, deleteData } from "./api";

export function postOrder(dispatch, employeeEmail) {
  postData({
    dispatch,
    startActionType: scheduleFetchStarted,
    successActionType: scheduleFetchSuccess,
    errorActionType: scheduleFetchError,
    url: `${GetSchedule}${employeeEmail}`,
  });
}
