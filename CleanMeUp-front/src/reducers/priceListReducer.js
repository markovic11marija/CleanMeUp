import * as actions from "../actions/priceListActions";
import { ERROR, LOADED, LOADING, PENDING } from "../constants/statusTypes"

const initialState = {
    items: [],
    status: PENDING
}
export default (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_PRICE_LIST_START:
            return {
                ...state,
                status: LOADING
            }
        case actions.GET_PRICE_LIST_ERROR:
            return {
                ...state,
                status: ERROR
            }
        case actions.GET_PRICE_LIST_SUCCESS:
            return {
                ...state,
                items: action.payload,
                status: LOADED
            }
        default:
            return state;
    }
    
}