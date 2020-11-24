import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Menu.scss';
import { signout } from '../../hoc/Signout';
import { isAuthenticated } from '../../hoc/Authentication';

const Menu = ({ history }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink class="navbar-brand" to="/">
        ECommerce
      </NavLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <NavLink
              className="nav-link text-white"
              activeClassName="text-primary"
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>

          {isAuthenticated() && isAuthenticated().user.role === 1 ? (
            <li class="nav-item">
              <NavLink
                className="nav-link text-white"
                activeClassName="text-primary"
                to="/admin/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          ) : (
            <li class="nav-item">
              <NavLink
                className="nav-link text-white"
                activeClassName="text-primary"
                to="/user/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          )}

          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </ul>
        <ul class="navbar-nav">
          <div class="dropdown">
            <span
              class="nav-link link dropdown-toggle mr-3 text-white"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Account Login
            </span>
            <div class="dropdown-menu">
              <h6 class="dropdown-header">Hello</h6>
              {!isAuthenticated() && (
                <>
                  <NavLink
                    className="nav-link text-white"
                    activeClassName="text-primary"
                    to="/signin"
                  >
                    Signin
                  </NavLink>

                  <NavLink
                    className="nav-link text-white"
                    activeClassName="text-primary"
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </>
              )}
              {isAuthenticated() && (
                <span
                  className="nav-link link-span text-white"
                  onClick={() =>
                    signout(() => {
                      history.push('/');
                    })
                  }
                >
                  Signout
                </span>
              )}
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Menu);
