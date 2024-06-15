import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Task from '../../components/task/Task';
import Graphs from '../../components/graphs/graphs';
import './styleStatistics.css';

export default function Statistics(props) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [firstBarScale, setFirstBarScale] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTasks([
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: true },
      ]);
    }, 1000);
  }, []);

  const toggleTaskCompleted = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleBarScaleChange = (e) => {
    const newScale = parseFloat(e.target.value);
    if (!isNaN(newScale)) {
      setFirstBarScale(newScale);
    }
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="statistics-container">
      <div className="tasks-container">
        <h1>Para meta1</h1>
        <div className="tasks-list">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task.id} className="task-item">
                <Task task={task} toggleTaskCompleted={toggleTaskCompleted} />
              </div>
            ))
          ) : (
            <p>Loading tasks...</p>
          )}
        </div>
      </div>
      <div className="graph-container">
        <Graphs firstBarScale={firstBarScale} />
      </div>
      <div className="bar-scale-input">
        <label htmlFor="barScale">Tareas completadas del día</label>
        <input
          type="number"
          id="barScale"
          value={firstBarScale}
          onChange={handleBarScaleChange}
          placeholder="Enter scale for first bar"
        />
      </div>
      <footer>
        <Link to="/scene">
          <button>Ir a Scene</button>
        </Link>
      </footer>
    </div>
  );
}
