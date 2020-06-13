import React, { useEffect } from "react";
import CustomerRow from "./CustomerRow";
import "./customer.css";
import { ICustomer } from "./types";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../store/reducers/auth/types";
import { loadCustomersAction } from "../../store/actions/customer/customer.actions";

const CustomerList = () => {
  const dispatch = useDispatch();
  const { loading, customers } = useSelector(
    (state: IAppState) => state.customerState
  );
  useEffect(() => {
    if (!customers) dispatch(loadCustomersAction());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container-fluid">
      <h2 className="mt-2">Listado de Clientes</h2>
      {customers?.length ? (
        <>
          <table className="table table-dark mt-3">
            <thead>
              <tr>
                <th>Tipo ID</th>
                <th>Número ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((cust: ICustomer) => (
                <CustomerRow key={cust.documentId} customer={cust} />
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

export default CustomerList;
