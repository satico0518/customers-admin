import React from "react";
import { Route } from "react-router-dom";
import Login from "../login/Login";

const PrivateRoute = ({ component, ...rest }: any) => {
    
  if (localStorage.getItem("user") === null)
    return <Route {...rest} component={Login} />;

  const user = JSON.parse(localStorage.getItem("user") as string);

  if (user.uid) return <Route {...rest} component={component} />;

  return <Route {...rest} component={Login} />;
};

export default PrivateRoute;
