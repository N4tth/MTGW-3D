import React, { useState } from 'react';
import useTaskStore from '../../components/task/taskStore';


export default function AddItemForm() {
  const addItem = useTaskStore(state => state.addItem);
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ id: Date.now(), position: [position.x, position.y, position.z] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        X:
        <input type="number" value={position.x} onChange={e => setPosition({ ...position, x: parseFloat(e.target.value) })} />
      </label>
      <label>
        Y:
        <input type="number" value={position.y} onChange={e => setPosition({ ...position, y: parseFloat(e.target.value) })} />
      </label>
      <label>
        Z:
        <input type="number" value={position.z} onChange={e => setPosition({ ...position, z: parseFloat(e.target.value) })} />
      </label>
      <button type="submit">Añadir Item</button>
    </form>
  );
}
