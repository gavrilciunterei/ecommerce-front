import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
  return (
    <div>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <NavLink
            exact
            className="nav-link link"
            activeClassName="selected"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link link"
            activeClassName="selected"
            to="/signin"
          >
            Signin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link link"
            activeClassName="selected"
            to="/signup"
          >
            Signup
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
