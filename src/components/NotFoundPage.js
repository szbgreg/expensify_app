import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>
      404 Not Found! <Link to="/">Go home</Link>
    </p>
  </div>
);

export default NotFoundPage;
