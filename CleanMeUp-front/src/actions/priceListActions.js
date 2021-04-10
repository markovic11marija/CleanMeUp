export const GET_PRICE_LIST_START = "GET_PRICE_LIST_START";
export const GET_PRICE_LIST_SUCCESS = "GET_PRICE_LIST_SUCCESS";
export const GET_PRICE_LIST_ERROR = "GET_PRICE_LIST_ERROR";

export const getPriceListStarted = () => {
    return {
        type: GET_PRICE_LIST_START
    }
}

export const getPriceListError = () => {
    return {
        type: GET_PRICE_LIST_ERROR
    }
}

export const getPriceListSuccess = (data) => {
    return {
        type: GET_PRICE_LIST_SUCCESS,
        payload: data
    }
}