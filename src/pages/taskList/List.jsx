import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import useTaskStore from '../../components//task/taskStore';

function BoxItem({ position }) {
  return (
    <Box args={[1, 1, 1]} position={position}>
      <meshStandardMaterial attach="material" color="orange" />
    </Box>
  );
}

function addTask({task}){
  useTaskStore.createTask()
}

function TaskItem({ task, toggleTaskComplete, removeTask }) {
  return (
    <div className="task-item">
      <p>
        <strong>{task.text}</strong> - {task.priorityTask} - {task.difficulty} - {task.repetition}
        - EXP: {task.exp}
        <button onClick={() => toggleTaskComplete(task.id)}>
          {task.complete ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button onClick={() => removeTask(task.id)}>Delete</button>
      </p>
    </div>
  );
}

export default function TaskList() {
  const items = useTaskStore(state => state.items);
  const tasks = useTaskStore(state => state.tasks);
  const toggleTaskComplete = useTaskStore(state => state.updateTask);
  const removeTask = useTaskStore(state => state.removeTask);

  return (
    <div className="task-list-page">
      <div className="task-list-container">
        <h2>Task List</h2>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTaskComplete={(id) => toggleTaskComplete(id, { complete: !task.complete })}
              removeTask={removeTask}
            />
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {items.map((item, index) => (
            <BoxItem key={index} position={item.position} />
          ))}
        </Canvas>
      </div>
    </div>
  );
}
