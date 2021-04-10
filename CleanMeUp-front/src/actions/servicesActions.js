export const GET_SERVICE_LIST_START = "GET_SERVICE_LIST_START";
export const GET_SERVICE_LIST_SUCCESS = "GET_SERVICE_LIST_SUCCESS";
export const GET_SERVICE_LIST_ERROR = "GET_SERVICE_LIST_ERROR";

export const getServiceListStarted = () => {
    return {
        type: GET_SERVICE_LIST_START
    }
}

export const getServiceListError = () => {
    return {
        type: GET_SERVICE_LIST_ERROR
    }
}

export const getServiceListSuccess = (data) => {
    return {
        type: GET_SERVICE_LIST_SUCCESS,
        payload: data
    }
}