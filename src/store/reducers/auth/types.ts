import { IShop, ICustomer } from "../../../components/customer/types";
import { ICustomerState } from "../customer/types";
import { IShopState } from "../shop/types";

export type IAppState = {
    authState: IAuthState,
    customerState: ICustomerState
    shopState: IShopState
}

export type IUserAuth = {
    email: string,
    password: string
}

export type IAuthState = {
    loging: boolean,
    user: IShop | ICustomer | null
    error: any | null
}