import { IAction } from "../../interfaces";
import { ICustomerState } from "./types";
import { CUSTOMERS_LOADING, CUSTOMERS_LOAD_SUCCESS, CUSTOMERS_LOAD_ERROR } from "../../types";

const initialState: ICustomerState = {
    loading: false,
    customers: null,
    error: null
}

export default (state = initialState, action: IAction): ICustomerState => {
    switch (action.type) {
        case CUSTOMERS_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CUSTOMERS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                customers: action.payload
            };
        case CUSTOMERS_LOAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                customers: null
            };
    
        default:
            return state;
    }
}