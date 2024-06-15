import create from 'zustand';

const useTaskStore = create(set => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (taskId) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== taskId)
  })),
  updateTask: (taskId, updatedTask) => set((state) => ({
    tasks: state.tasks.map(task =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    )
  })),
}));

const createTask = (priorityTask, difficulty, complete, repetition, exp) => ({
  priorityTask,
  difficulty,
  complete,
  repetition,
  exp,
});

// Componente TaskComponent
const TaskComponent = () => {
  const { tasks, addTask, removeTask, updateTask } = useTaskStore();

  const handleAddTask = () => {
    const newTask = createTask('Media', 'Media', false, 'week', '100 puntos');
    addTask({ ...newTask, id: tasks.length + 1 });
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