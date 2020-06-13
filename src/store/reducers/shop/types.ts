import { IShop } from "../../../components/customer/types";

export type IShopState = {
    loading: boolean
    shops: IShop[] | null,
    error: any
}