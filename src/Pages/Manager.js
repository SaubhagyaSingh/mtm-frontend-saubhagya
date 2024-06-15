import React, { useState } from 'react';
import TaskInput from '../Components/TaskInput';
import TaskList from '../Components/TaskList';
import '../App.css';

const Manager = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
      setTasks([...tasks, task]);
    };
  
    const updateTask = (index, newTask) => {
      const newTasks = tasks.slice();
      newTasks[index] = newTask;
      setTasks(newTasks);
    };
  
    const deleteTask = (index) => {
      const newTasks = tasks.filter((task, i) => i !== index);
      setTasks(newTasks);
    };
  
    return (
      <div className="App">
        <h1>Itinerary Planner</h1>
        <TaskInput addTask={addTask} />
        <TaskList 
          tasks={tasks} 
          updateTask={updateTask} 
          deleteTask={deleteTask} 
        />
      </div>
    );
  };
  

export default Manager;
