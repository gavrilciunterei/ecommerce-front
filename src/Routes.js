import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './pages/SignUp/Signup';
import Signin from './pages/SignIn/Signin';
import Home from './pages/Home/Home';
import Menu from './components/Menu/Menu';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/user/dashboard" component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
