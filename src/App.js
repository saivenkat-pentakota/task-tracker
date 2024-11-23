import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="task-form-container">
        <AddTask />
      </div>
      <div className="task-list-container">
        <TaskList />
      </div>
    </div>
  );
};

export default App;
