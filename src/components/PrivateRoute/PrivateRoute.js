import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../hoc/Authentication';

// Redirects auth if you are not login
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/signin', state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
