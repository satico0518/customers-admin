import { IAction } from "../../interfaces";
import { SHOP_LOADING, SHOP_LOAD_ERROR, SHOP_LOAD_SUCCESS } from "../../types";
import { IShop } from "../../../components/customer/types";
import fb from "../../../config/fb.config";
import "firebase/firebase-firestore";
import { UserTypeEnum } from "../../../enums";

export const loadShopsAction = () => async (dispatch: any) => {
  dispatch(loadingShop());
  try {
    const shops = await fb
      .firestore()
      .collection("Users")
      .where("type", "==", UserTypeEnum.shop)
      .orderBy("name")
    //   .limit(3)
      .get();
    dispatch(loadShopSuccess(shops.docs.map((shop) => shop.data() as IShop)));
  } catch (error) {
    dispatch(loadShopError(error));
  }
};

const loadingShop = (): IAction => ({ type: SHOP_LOADING });
const loadShopSuccess = (shops: IShop[]): IAction => ({
  type: SHOP_LOAD_SUCCESS,
  payload: shops,
});
const loadShopError = (error: any): IAction => ({
  type: SHOP_LOAD_ERROR,
  payload: error,
});
