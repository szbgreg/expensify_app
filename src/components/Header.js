import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header className="header">
    <Link className="header__title" to="/dashboard">
      <h1>Expensify</h1>
    </Link>
    <button onClick={props.startLogout}>Logout</button>
  </header>
);

const mapDispatchtoProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchtoProps)(Header);
