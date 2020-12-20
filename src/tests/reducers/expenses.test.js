import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = undefined;
  const action = { type: '@@INIT' };
  const result = expensesReducer(state, action);

  expect(result).toEqual([]);
});

test('should remove an expense from state', () => {
  const state = expenses;
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const result = expensesReducer(state, action);

  expect(result).toEqual([expenses[0], expenses[2]]);
});

test('should not remove if id not found', () => {
  const state = expenses;
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const result = expensesReducer(state, action);

  expect(result).toEqual(expenses);
});

test('shoud add an expense', () => {
  const state = expenses;
  const newExpense = {
    description: 'New expense',
    note: 'haha',
    amount: 12
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const result = expensesReducer(state, action);

  expect(result).toEqual([...expenses, newExpense]);
});

test('shoud edit an expense', () => {
  const state = expenses;
  const editExpense = {
    description: 'Edited expense'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: editExpense
  };
  const result = expensesReducer(state, action);

  expect(result[0].description).toBe(editExpense.description);
});

test('shoud not edit an expense if expense not found', () => {
  const state = expenses;
  const editExpense = {
    description: 'Edited expense'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: editExpense
  };
  const result = expensesReducer(state, action);

  expect(result).toEqual(state);
});
