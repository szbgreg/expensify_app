import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, { description, note, amount, createdAt } = {}) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates: {
    description,
    note,
    amount,
    createdAt
  }
});

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    case 'REMOVE_EXPENSE':
      return state.filter((e) => e.id !== action.id);
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
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  addExpense({ description: 'asdf', note: 'leiras', amount: 12, createdAt: 1 })
);
store.dispatch(editExpense(1, { description: 'javitás' }));
store.dispatch(removeExpense({ id: 1 }));
store.dispatch(setTextFilter('bob'));
