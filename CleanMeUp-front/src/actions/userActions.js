export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const POST_USER_START = "POST_USER_START";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const POST_USER_ERROR = "POST_USER_ERROR";

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

export const getUserError = () => {
    return {
        type: GET_USER_ERROR
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