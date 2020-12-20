import moment from 'moment';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate
} from '../../actions/filters';

test('should set settextfilter action object', () => {
  const action = setTextFilter('test');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test'
  });
});

test('should generate set text filter object with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test('should set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});

test('should generate action object for sort by date', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate action object for sort by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});
