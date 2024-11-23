import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import './TaskItem.css';


const TaskItem = ({ task }) => {
  const { updateTask, deleteTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleSave = () => {
    updateTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, title: e.target.value })
            }
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, description: e.target.value })
            }
          ></textarea>
          <input
            type="date"
            value={updatedTask.dueDate}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, dueDate: e.target.value })
            }
          />
          <select
            value={updatedTask.status}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, status: e.target.value })
            }
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
