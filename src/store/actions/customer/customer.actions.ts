import { IAction } from "../../interfaces";
import {
  CUSTOMERS_LOAD_ERROR,
  CUSTOMERS_LOAD_SUCCESS,
  CUSTOMERS_LOADING,
} from "../../types";
import { ICustomer } from "../../../components/customer/types";
import fb from "../../../config/fb.config";
import "firebase/firebase-firestore";
import { UserTypeEnum } from "../../../enums";

export const loadCustomersAction = () => async (dispatch: any) => {
  dispatch(loadingCustomers());
  try {
    const customers = await fb
      .firestore()
      .collection("Users")
      .where("type", "==", UserTypeEnum.customer)
      .orderBy("name")
    //   .limit(20)
      .get();
    dispatch(
      loadingCustomersSuccess(
        customers.docs.map((cust) => cust.data() as ICustomer)
      )
    );
  } catch (error) {
    console.error("Error cargando clientes: ", error);
    dispatch(loadingError(error));
  }
};

const loadingCustomers = (): IAction => ({ type: CUSTOMERS_LOADING });
const loadingCustomersSuccess = (customers: ICustomer[]): IAction => ({
  type: CUSTOMERS_LOAD_SUCCESS,
  payload: customers,
});

const loadingError = (error: any): IAction => ({
  type: CUSTOMERS_LOAD_ERROR,
  payload: error,
});
