const useMonigoteStore = create((set) => ({
    monigote: {
      hunger: 0,
      health: 100,
      inspiration: 100,
      satisfaction: 100,
      joy: 100,
    },
    sethunger: (hunger) => set((state) => ({ monigote: { ...state.monigote, hunger } })),
    sethealth: (health) => set((state) => ({ monigote: { ...state.monigote, health } })),
    setInspiration: (inspiration) => set((state) => ({ monigote: { ...state.monigote, inspiration } })),
    setSatisfaction: (satisfaction) => set((state) => ({ monigote: { ...state.monigote, satisfaction } })),
    setJoy: (joy) => set((state) => ({ monigote: { ...state.monigote, joy } }))
  }))

  export default useMonigoteStore;