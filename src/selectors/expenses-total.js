export default (expenses) => {
  if (expenses.length === 0) {
    return 0;
  } else {
    return expenses
      .map((expense) => expense.amount)
      .reduce((amount, currentValue) => amount + currentValue);
  }
};
