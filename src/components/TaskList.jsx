import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContext';
import './TaskList.css';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available. Add a task to get started!</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
