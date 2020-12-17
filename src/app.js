import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    <p>this is from my dashboard component</p>
  </div>
);

const AddExpensePage = () => (
  <div>
    <p>this is from my dashboard component</p>
  </div>
);

const EditExpensePage = () => (
  <div>
    <p>this is from my edit component</p>
  </div>
);

const HelpPage = () => (
  <div>
    <p>this is from the help page</p>
  </div>
);

const NotFoundPage = () => (
  <div>
    <p>
      404 Not Found! <Link to="/">Go home</Link>
    </p>
  </div>
);

const Header = () => (
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
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
