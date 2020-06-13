import { ICustomer } from "../../../components/customer/types";

export type ICustomerState = {
    loading: boolean,
    customers: ICustomer[] | null,
    error: any
}