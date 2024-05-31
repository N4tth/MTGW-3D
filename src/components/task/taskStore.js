import create from 'zustand';

const useTaskStore = create(set => ({
  items: [],
  addItem: (item) => set(state => ({ items: [...state.items, item] })),
  removeItem: (id) => set(state => ({ items: state.items.filter(item => item.id !== id) })),
}));

export default useTaskStore;