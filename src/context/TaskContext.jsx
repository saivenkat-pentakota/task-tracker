import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const TaskContext = createContext();

// Create the provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (updatedTask) =>
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  const deleteTask = (taskId) => setTasks(tasks.filter((task) => task.id !== taskId));

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
