import { createStore, combineReducers } from 'redux';

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filtersReducer = (
  state = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);

console.log(store.getState());
