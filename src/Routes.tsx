import { home } from "ionicons/icons";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AccountSetting from "./pages/Home/AccountSetting";
import History from "./pages/History/history";
import Home from "./pages/Home/Home";
import Outlet from "./pages/Outlet/Outlet";
import Order from "./pages/Order/Order";
import DetailOrder from "./pages/DetailOrder/DetailOrder";
import Payment from "./pages/Payment/Payment";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/accountsetting" exact component={AccountSetting}></Route>
      <Route path="/history" exact component={History}></Route>
      <Route path="/outlet" exact component={Outlet}></Route>
      <Route path="/order" exact component={Order}></Route>
      <Route path="/detail" exact component={DetailOrder}></Route>
      <Route path="/payment" exact component={Payment}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
