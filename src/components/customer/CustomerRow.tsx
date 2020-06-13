import React from "react";
import PropTypes from "prop-types";
import { ICustomer } from "./types";
import { getIdTypeAbreviation } from "../../utils/util";

const CustomerRow = ({ customer }: { customer: ICustomer }) => {
  return (
    <tr className="table-row">
      <td>{getIdTypeAbreviation(customer.identificationType)}</td>
      <td>{customer.identification}</td>
      <td>{customer.name}</td>
      <td>{customer.lastName}</td>
      <td>{customer.email}</td>
      <td>{customer.contact}</td>
      <td className="text-right">
        <button className="btn btn-warning btn-sm mr-3">Editar</button>
        <button className="btn btn-danger btn-sm">Eliminar</button>
      </td>
    </tr>
  );
};

CustomerRow.propTypes = {
  customer: PropTypes.object.isRequired,
};

export default CustomerRow;
