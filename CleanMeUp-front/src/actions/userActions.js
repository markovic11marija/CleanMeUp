export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const GET_USER_DETAILS_START = "GET_USER_DETAILS_START";
export const GET_USER_DETAILS_SUCCESS = "GET_USER_DETAILS_SUCCESS";
export const GET_USER_DETAILS_ERROR = "GET_USER_DETAILS_ERROR";

export const POST_USER_START = "POST_USER_START";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const POST_USER_ERROR = "POST_USER_ERROR";

export const PUT_USER_START = "PUT_USER_START";
export const PUT_USER_SUCCESS = "PUT_USER_SUCCESS";
export const PUT_USER_ERROR = "PUT_USER_ERROR";

export const PUT_ADDRESS_START = "PUT_ADDRESS_START";
export const PUT_ADDRESS_SUCCESS = "PUT_ADDRESS_SUCCESS";
export const PUT_ADDRESS_ERROR = "PUT_ADDRESS_ERROR";

export const getUserStarted = () => {
    return {
        type: GET_USER_START
    }
}

export const getUserSuccess = (data) => {
    return {
        type: GET_USER_SUCCESS,
        payload: data.payload 
    }
}

export const getUserError = (error) => {
    return {
        type: GET_USER_ERROR,
        payload: error
    }
}

export const getUserDetailsStarted = () => {
    return {
        type: GET_USER_DETAILS_START
    }
}

export const getUserDetailsSuccess = (data) => {
    return {
        type: GET_USER_DETAILS_SUCCESS,
        payload: data.payload 
    }
}

export const getUserDetailsError = (error) => {
    return {
        type: GET_USER_DETAILS_ERROR,
        payload: error
    }
}

export const postUserStarted = () => {
    return {
        type: POST_USER_START
    }
}

export const postUserSuccess = (data) => {
    return {
        type: POST_USER_SUCCESS,
        payload: data 
    }
}

export const postUserError = () => {
    return {
        type: POST_USER_ERROR
    }
}

export const putUserStarted = () => {
    return {
        type: PUT_USER_START
    }
}

export const putUserSuccess = (data) => {
    return {
        type: PUT_USER_SUCCESS,
        payload: data 
    }
}

export const putUserError = () => {
    return {
        type: PUT_USER_ERROR
    }
}


export const putAddressStarted = () => {
    return {
        type: PUT_ADDRESS_START
    }
}

export const putAddressSuccess = (data) => {
    return {
        type: PUT_ADDRESS_SUCCESS,
        payload: data 
    }
}

export const putAddressError = () => {
    return {
        type: PUT_ADDRESS_ERROR
    }
}