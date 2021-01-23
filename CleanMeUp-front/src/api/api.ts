import axios from "axios";
import { ApiRequest } from "../interfaces/api/apiInterface";

export async function getData(request: ApiRequest) {
  request.dispatch(request.startActionType());
  try {
    const result = await axios(
      `${process.env.REACT_APP_API_URL}${request.url}`
    );
    request.dispatch(request.successActionType(result.data));
  } catch (err) {
    request.dispatch(request.errorActionType(err));
  }
}

export async function postData(request: ApiRequest) {
  request.dispatch(request.startActionType());
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_API_URL}${request.url}`,
      { ...request.data }
    );
    request.dispatch(request.successActionType(result.data));
  } catch (err) {
    request.dispatch(request.errorActionType(err));
  }
}

export async function putData(request: ApiRequest) {
  request.dispatch(request.startActionType());
  try {
    const result = await axios.put(
      `${process.env.REACT_APP_API_URL}${request.url}`,
      { ...request.data }
    );
    request.dispatch(request.successActionType(result.data));
  } catch (err) {
    request.dispatch(request.errorActionType(err));
  }
}
