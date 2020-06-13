import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../../store/reducers/auth/types";
import {
  recoverUserAction,
  logoutAction,
} from "../../../store/actions/auth/auth.actions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state: IAppState) => state.authState);
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) dispatch(recoverUserAction(JSON.parse(savedUser)));
    // eslint-disable-next-line
  }, []);
  const handleLogout = () => {
    history.push("/");
    dispatch(logoutAction());
    localStorage.removeItem("user");
  };
  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          <Link to="home"><img
            width={40}
            src={process.env.PUBLIC_URL + "/icon.png"}
            alt="logo paseya"
          /></Link>
          PaseYa Admin
        </div>
        {user ? (
          <nav>
            <Link to="customer-list">Lista Clientes</Link>
            <Link to="shop-list">Lista Comercio</Link>
          </nav>
        ) : null}
      </div>

      <div className="admin">
        {user ? (
          <>
            Bienvenido <strong>{user.email}</strong>
            <button
              onClick={handleLogout}
              className="btn btn-danger btn-sm log-out"
              type="button"
            >
              Salir
            </button>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
