import { getUserDetailsError, getUserDetailsStarted, getUserDetailsSuccess, getUserError, getUserStarted, getUserSuccess, postUserError, postUserStarted, postUserSuccess, putAddressError, putAddressStarted, putAddressSuccess, putUserError, putUserStarted, putUserSuccess } from "../actions/userActions"
import { getData, postData, putData } from "./api"

export const getUser = (credentials) => {
    getData({
        url: `User/sign-in?email=${credentials.email}&password=${credentials.password}`,
        startActionType: getUserStarted,
        successActionType: (data) => {
            if(data && data.isSuccess) {
                return getUserSuccess(data);
            }
            return getUserError(data.failureReason);
        },
        errorActionType: getUserError
    })
}

export const getUserById = (id) => {
    getData({
        url: `User/${id}`,
        startActionType: getUserDetailsStarted,
        successActionType: (data) => {
            if(data && data.isSuccess) {
                return getUserDetailsSuccess(data);
            }
            return getUserDetailsError(data.failureReason);
        },
        errorActionType: getUserError
    })
}

export const createUser = (user) => {
    postData({
        url: 'User',
        data: {...user},
        startActionType: postUserStarted,
        successActionType: (data) => {
            return postUserSuccess({
                ...user,
                id: data
            })
        },
        errorActionType: postUserError
    })
}

export const updateUser = (id, user) => {
    putData({
        url: `User/${id}`,
        data: {...user},
        startActionType: putUserStarted,
        successActionType: (data) => {
            return putUserSuccess({
                ...user,
                id: data
            })
        },
        errorActionType: putUserError
    })
}

export const updateAddress = (address) => {
    postData({
        url: 'User/update-address',
        data: {...address},
        startActionType: putAddressStarted,
        successActionType: (data) => {
            return putAddressSuccess({
                ...address,
                id: data
            })
        },
        errorActionType: putAddressError
    })
}