import { getUserError, getUserStarted, getUserSuccess, postUserError, postUserStarted, postUserSuccess } from "../actions/userActions"
import { getData, postData } from "./api"

export const getUser = (credentials) => {
    getData({
        url: `User/sign-in?email=${credentials.email}&password=${credentials.password}`,
        startActionType: getUserStarted,
        successActionType: getUserSuccess,
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