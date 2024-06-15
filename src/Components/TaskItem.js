import React, { useState } from 'react';
import '../App.css';

const TaskItem = ({ task, index, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleUpdate = () => {
    if (newTask.trim()) {
      updateTask(index, newTask);
      setIsEditing(false);
    }
  };

  return (
    <div className="task-item-container">
      <div className="task-item">
        {isEditing ? (
          <div className="input-section">
            <input 
              type="text" 
              value={newTask} 
              onChange={(e) => setNewTask(e.target.value)} 
              className="task-input"
            />
            <button onClick={handleUpdate}>Save</button>
          </div>
        ) : (
          <div className="task-text">{task}</div>
        )}
      </div>
      {!isEditing && (
        <div className="task-buttons">
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
