import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAthenticated = () => {
  return false;
};

const PrivateRouter = ({ component: Component, isPrivate, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export default PrivateRouter;
