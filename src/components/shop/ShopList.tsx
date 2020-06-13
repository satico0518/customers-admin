import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../store/reducers/auth/types";
import { loadShopsAction } from "../../store/actions/shop/shop.actions";
import { IShop } from "../customer/types";
import ShopRow from "./ShopRow";

const ShopList = () => {
  const dispatch = useDispatch();
  const { loading, shops } = useSelector(
    (state: IAppState) => state.shopState
  );
  useEffect(() => {
    if (!shops) dispatch(loadShopsAction());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container-fluid">
      <h2 className="mt-2">Listado de Comercios</h2>
      {shops?.length ? (
        <>
          <table className="table table-dark mt-3">
            <thead>
              <tr>
                <th>Nit</th>
                <th>Nombre</th>
                <th>Contacto</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Cuenta Expira</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {shops.map((shop: IShop) => (
                <ShopRow key={shop.firebaseId} shop={shop} />
              ))}
            </tbody>
          </table>
          <nav aria-label="..." className="float-right">
            <ul className="pagination">
              <li className="page-item disabled ">
                <a
                  className="page-link bg-dark text-white"
                  href="#!"
                  aria-disabled="true"
                >
                  Anterior
                </a>
              </li>
              <li className="page-item">
                <a className="page-link bg-dark text-white" href="#!">
                  1
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link bg-dark text-white" href="#!">
                  2 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link bg-dark text-white" href="#!">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link bg-dark text-white" href="#!">
                  Siguiente
                </a>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
      {loading ? <div>cargando datos...</div> : null}
    </div>
  );
};

export default ShopList;

