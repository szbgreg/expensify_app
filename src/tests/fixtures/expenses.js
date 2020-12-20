import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    note: 'this is a gum',
    amount: 198,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Rent',
    note: 'this is a rent',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Credit Card',
    note: 'this is a credit card',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];

export default expenses;
