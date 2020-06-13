import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import { IAppState } from "./auth/types";
import customerReducers from "./customer/customer.reducers";
import shopReducer from "./shop/shop.reducer";

export default combineReducers<IAppState>({
    authState: authReducer,
    customerState: customerReducers,
    shopState: shopReducer
});