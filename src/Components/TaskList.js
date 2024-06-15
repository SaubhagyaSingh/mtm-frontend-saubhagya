import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          index={index} 
          updateTask={updateTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;
