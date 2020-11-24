import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './pages/SignUp/Signup';
import Signin from './pages/SignIn/Signin';
import Home from './pages/Home/Home';
import Menu from './components/Menu/Menu';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminRoute from './components/AdminRoute/AdminRoute';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/user/dashboard" component={UserDashboard} />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
