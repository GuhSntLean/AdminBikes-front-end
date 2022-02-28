import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, requiredRoles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "signup" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
