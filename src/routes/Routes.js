import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import PrivateRouter from "./PrivateRouter";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRouter exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
