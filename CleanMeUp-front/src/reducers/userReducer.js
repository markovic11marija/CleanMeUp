import * as actions from "../actions/userActions";
import { ERROR, LOADED, LOADING, PENDING } from "../constants/statusTypes"

const initialState = {
    loggedUser: null,
    insertedUser: null,
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
                status: ERROR
            }
        case actions.GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
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
        default:
            return state;
    }
    
}