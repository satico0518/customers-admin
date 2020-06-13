import { IAction } from "../../interfaces";
import { IShopState } from "./types";
import { SHOP_LOADING, SHOP_LOAD_SUCCESS, SHOP_LOAD_ERROR } from "../../types";

const initialState: IShopState = {
    loading: false,
    shops: null,
    error: null
}

export default (state = initialState, action: IAction): IShopState => {
    switch (action.type) {
        case SHOP_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            }    
        case SHOP_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                shops: action.payload,
                error: null
            }    
        case SHOP_LOAD_ERROR:
            return {
                ...state,
                loading: false,
                shops: null,
                error: action.payload
            }    
        default:
            return state;
    }
}