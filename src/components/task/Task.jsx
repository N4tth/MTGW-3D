// components/Task.jsx
import React, { useEffect } from 'react';
import useTaskStore from './taskStore';  // Asegúrate de que taskStore está en la ruta correcta

function TaskComponent() {
  // Obtén las tareas y las acciones del store usando destructuración con un valor por defecto para tasks
  const { tasks = [], addTask, removeTask, updateTask } = useTaskStore(state => ({
    tasks: state.tasks,
    addTask: state.addTask,
    removeTask: state.removeTask,
    updateTask: state.updateTask
  }));

  // Efecto para agregar tareas de ejemplo después de 1 segundo
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      addTask({
        id: 1,
        text: 'Task 1',
        priorityTask: 'Alta',
        difficulty: 'Alta',
        complete: false,
        repetition: 'day',
        exp: calculateExp('Alta'),
        rewards: '50 puntos'
      });
      addTask({
        id: 2,
        text: 'Task 2',
        priorityTask: 'Media',
        difficulty: 'Media',
        complete: true,
        repetition: 'week',
        exp: calculateExp('Media'),
        rewards: '30 puntos'
      });
    }, 1000);

    // Limpiar el timeout si el componente se desmonta
    return () => clearTimeout(timeoutId);
  }, [addTask]);

  // Función para calcular la experiencia basada en la dificultad
  const calculateExp = (difficulty) => {
    switch (difficulty) {
      case 'Alta':
        return Math.pow(100, 1.8);
      case 'Media':
        return Math.pow(100, 1.5);
      case 'Baja':
        return Math.pow(100, 1.2);
      default:
        return 0;
    }
  };

  // Función para crear una nueva tarea
  const createTask = (priorityTask, difficulty, complete, repetition, rewards) => {
    return {
      id: tasks.length + 1,  // Genera un ID único basado en la longitud de la lista
      text: `Task ${tasks.length + 1}`,  // Asigna un nombre temporal
      priorityTask,
      difficulty,
      complete,
      repetition,
      exp: calculateExp(difficulty),
      rewards
    };
  };

  // Manejador para agregar una nueva tarea al hacer clic en el botón
  const handleAddTask = () => {
    const newTask = createTask('Media', 'Media', false, 'week', '100 puntos');
    addTask(newTask);
  };

  return (
    <div>
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.priorityTask} - {task.difficulty} - {task.repetition} - {task.exp}
            <button onClick={() => removeTask(task.id)}>Eliminar</button>
            <button onClick={() => updateTask(task.id, { complete: !task.complete })}>
              {task.complete ? 'Marcar Incompleta' : 'Marcar Completa'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;


