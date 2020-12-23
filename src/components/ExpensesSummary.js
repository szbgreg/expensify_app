import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => (
  <div>
    <h1>
      Viewing {props.expenseCount}{' '}
      {props.expenseCount > 1 ? 'expenses' : 'expense'} totalling{' '}
      {numeral(props.expensesTotal / 100).format('$0,0.00')}
    </h1>
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
