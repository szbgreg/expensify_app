import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active" exact={true}>
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active" exact={true}>
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active" exact={true}>
      Help
    </NavLink>
    <button onClick={props.startLogout}>Logout</button>
  </header>
);

const mapDispatchtoProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchtoProps)(Header);
