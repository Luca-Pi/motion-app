import create from "zustand"

const STEP_LENGTH = 4

export const useStore = create((set, get) => ({
  step: 0,
  areAnimationsOngoing: false,
  nextStep() {
    if (get().step < STEP_LENGTH && !get().areAnimationsOngoing)
      set(state => ({step: state.step + 1}))
  },
  previousStep() {
    if (get().step > 1 && !get().areAnimationsOngoing)
      set(state => ({step: state.step - 1}))
  },
}))
