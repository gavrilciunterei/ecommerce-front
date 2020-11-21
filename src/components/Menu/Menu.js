import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Menu.scss';
import { signout } from '../../hoc/Signout';
import { isAuthenticated } from '../../hoc/Authentication';

const Menu = ({ history }) => {
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
        {!isAuthenticated() && (
          <>
            <li className="nav-item">
              <NavLink
                className="nav-link link"
                activeClassName="selected"
                to="/signin"
              >
                Signin
              </NavLink>
            </li>
            <div>
              <li className="nav-item">
                <NavLink
                  className="nav-link link"
                  activeClassName="selected"
                  to="/signup"
                >
                  Signup
                </NavLink>
              </li>
            </div>
          </>
        )}
        {isAuthenticated && (
          <li className="nav-item">
            <span
              className="nav-link link link-span"
              onClick={() =>
                signout(() => {
                  history.push('/');
                })
              }
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
