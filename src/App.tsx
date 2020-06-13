import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/store";
import ShopList from "./components/shop/ShopList";
import Header from "./components/shared/Header/Header";
import BranchList from "./components/branch/BranchList";
import Home from "./components/home/Home";
import CustomerList from "./components/customer/CustomerList";
import Login from "./components/login/Login";
import PrivateRoute from "./components/shared/PrivateRoute";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/customer-list" component={CustomerList} />
          <PrivateRoute path="/shop-list" component={ShopList} />
          <PrivateRoute path="/branch-list" component={BranchList} />
          <Redirect from="*" to="/login" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
