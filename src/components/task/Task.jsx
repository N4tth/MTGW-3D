// src/App.js
import React, { useState, useEffect } from 'react';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTasks([
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: true },
      ]);
    }, 1000);
  }, []);

  const toggleTaskCompleted = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Task key={task.id} task={task} toggleTaskCompleted={toggleTaskCompleted} />
        ))
      ) : (
        <p>Loading tasks...</p>
      )}
    </div>
  );
}

export default App;

