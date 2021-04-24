import axios from "axios";
import { ApiRequest } from "../interfaces/api/apiInterface";
import store from "../store";

export async function getData(request: ApiRequest) {
  store.dispatch(request.startActionType());
  try {
    const result = await axios(
      `${process.env.REACT_APP_API_URL}${request.url}`
    );
    store.dispatch(request.successActionType(result.data));
  } catch (err) {
    store.dispatch(request.errorActionType(err));
  }
}

export async function postData(request: ApiRequest) {
  store.dispatch(request.startActionType());
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_API_URL}${request.url}`,
      { ...request.data }
    );
    store.dispatch(request.successActionType(result.data));
  } catch (err) {
    store.dispatch(request.errorActionType(err));
  }
}

export async function putData(request: ApiRequest) {
  store.dispatch(request.startActionType());
  try {
    const result = await axios.put(
      `${process.env.REACT_APP_API_URL}${request.url}`,
      { ...request.data }
    );
    store.dispatch(request.successActionType(result.data));
  } catch (err) {
    store.dispatch(request.errorActionType(err));
  }
}
