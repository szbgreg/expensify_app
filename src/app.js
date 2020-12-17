import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ExpensifyApp from './components/ExpensifyApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<ExpensifyApp />, document.getElementById('app'));
