import * as actions from "../actions/userActions";
import { ERROR, LOADED, LOADING, PENDING } from "../constants/statusTypes"

const initialState = {
    loggedUser: null,
    insertedUser: null,
    failureReason: "",
    loggedUserDetails: null,
    updatedUser: null,
    updatedAddress: null,
    status: PENDING
}
export default (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_USER_START:
            return {
                ...state,
                status: LOADING
            }
        case actions.GET_USER_ERROR:
            return {
                ...state,
                status: ERROR,
                failureReason: action.payload
            }
        case actions.GET_USER_SUCCESS:
            return {
                ...state,
                loggedUser: action.payload,
                status: LOADED
            }
        case actions.GET_USER_DETAILS_START:
            return {
                ...state,
                status: LOADING
            }
        case actions.GET_USER_DETAILS_ERROR:
            return {
                ...state,
                status: ERROR,
                failureReason: action.payload
            }
        case actions.GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                loggedUserDetails: action.payload,
                status: LOADED
            }
        case actions.POST_USER_START:
            return {
                ...state,
                status: LOADING
            }
        case actions.POST_USER_ERROR:
            return {
                ...state,
                status: ERROR
            }
        case actions.POST_USER_SUCCESS:
            return {
                ...state,
                insertedUser: action.payload,
                status: LOADED
            }
        case actions.PUT_USER_START:
            return {
                ...state,
                status: LOADING
            }
        case actions.PUT_USER_ERROR:
            return {
                ...state,
                status: ERROR
            }
        case actions.PUT_USER_SUCCESS:
            return {
                ...state,
                updatedUser: action.payload,
                status: LOADED
            }
        case actions.PUT_ADDRESS_START:
            return {
                ...state,
                status: LOADING
            }
        case actions.PUT_ADDRESS_ERROR:
            return {
                ...state,
                status: ERROR
            }
        case actions.PUT_ADDRESS_SUCCESS:
            return {
                ...state,
                updatedAddress: action.payload,
                status: LOADED
            }
        default:
            return state;
    }
    
}