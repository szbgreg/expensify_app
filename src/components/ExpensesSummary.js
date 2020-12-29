import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{props.expenseCount} </span>
        {props.expenseCount > 1 ? 'expenses' : 'expense'} totalling{' '}
        <span>{numeral(props.expensesTotal / 100).format('$0,0.00')}</span>
      </h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">
          Add expense
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenseCount: state.expenses.length,
    expensesTotal: selectExpensesTotal(
      selectExpenses(state.expenses, state.filters)
    )
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
