import * as actions from "../actions/contactActions";
import { ERROR, LOADED, LOADING, PENDING } from "../constants/statusTypes"

const initialState = {
    insertedContact: [],
    status: PENDING
}
export default (state = initialState, action) => {
    switch(action.type) {
        case actions.CONTACT_POST_START:
            return {
                ...state,
                status: LOADING
            }
        case actions.CONTACT_POST_ERROR:
            return {
                ...state,
                status: ERROR
            }
        case actions.CONTACT_POST_SUCCESS:
            return {
                ...state,
                insertedContact: action.payload,
                status: LOADED
            }
        default:
            return state;
    }
    
}