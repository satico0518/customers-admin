import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "./login.css";
import { IUserAuth, IAppState } from "../../store/reducers/auth/types";
import { useDispatch, useSelector } from "react-redux";
import Error from "../shared/Error";
import { getLoginAction } from "../../store/actions/auth/auth.actions";

const Login = ({ history }: any) => {
  const { loging, error: fbError, user } = useSelector(
    (state: IAppState) => state.authState
  );
  const dispatch = useDispatch();
  const [error, setError] = useState<boolean>(false);
  const [form, setForm] = useState<IUserAuth>({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (user) history.push("shop-list");
    // eslint-disable-next-line
  }, [user]);
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.email.trim() === "" || form.password.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    dispatch(getLoginAction(form));
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={form.password}
            className="form-control"
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">recordarme</label>
        </div>
        <button
          disabled={loging}
          type="submit"
          className="btn btn-success btn-block"
        >
          {loging ? "..." : "Entrar"}
        </button>
        {error ? (
          <Error message="Todos los campos son obligatorios!"></Error>
        ) : null}
        {fbError ? <Error message={fbError.message}></Error> : null}
      </form>
    </div>
  );
};

export default Login;
