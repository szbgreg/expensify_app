import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endData: undefined,
    sortBy: 'amount'
  };
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'asdf'
  });
  expect(state.text).toBe('asdf');
});

test('should set setStartDate filter', () => {
  const startDate = moment();
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    date: startDate
  });
  expect(state.startDate).toBe(startDate);
});

test('should set setEndDate filter', () => {
  const endDate = moment();
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    date: endDate
  });
  expect(state.endDate).toBe(endDate);
});
