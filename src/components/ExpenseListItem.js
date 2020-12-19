import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <Link to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default connect()(ExpenseListItem);
