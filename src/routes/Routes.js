import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" Switch component={""} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
