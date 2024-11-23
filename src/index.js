import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TaskProvider } from '../src/context/TaskContext';
import './index.css';

ReactDOM.render(
  <TaskProvider>
    <App />
  </TaskProvider>,
  document.getElementById('root')
);
