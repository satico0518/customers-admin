import React from "react";
import PropTypes from "prop-types";
import { IShop } from "../customer/types";

const ShopRow = ({ shop }: { shop: IShop }) => {
  const date = new Date(shop.maxDate?.seconds * 1000).toDateString();
  return (
    <tr className="table-row">
      <td>{shop.nit}</td>
      <td>{shop.name}</td>
      <td>{shop.contactName}</td>
      <td>{shop.email}</td>
      <td>{shop.phone}</td>
      <td>{date ? date : 'N/A'}</td>
      <td className="text-right">
        <button className="btn btn-warning btn-sm mr-3">Editar</button> 
        <button className="btn btn-danger btn-sm">Eliminar</button>  
      </td>
    </tr>
  );
};

ShopRow.propTypes = {
  shop: PropTypes.object.isRequired,
};

export default ShopRow;
