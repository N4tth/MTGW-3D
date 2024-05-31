import React, { useEffect, useState } from "react"
import Task from "../../components/task/Task"
import graphs from "../../components/graphs/graphs"


import "./styleStatistics.css"

export default function Statistics(props){
    const [tasks, setTasks] =useState([]);

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
    
      const completedCount = tasks.filter(task => task.completed).length;
    
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
          <h2>Completed Tasks: {completedCount}</h2>
          <graphs completedCount={completedCount} />
        </div>
      );
    }
