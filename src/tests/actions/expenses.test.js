import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('shoudl set up edit expense action object', () => {
  const action = editExpense('123abc', { description: 'asdf' });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'asdf',
      note: undefined,
      amount: undefined,
      createdAt: undefined
    }
  });
});

test('should set add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 120,
    createdAt: 1200,
    note: 'this is an expense note'
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

test('should set add expense action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      note: '',
      createdAt: 0,
      amount: 0,
      description: ''
    }
  });
});
