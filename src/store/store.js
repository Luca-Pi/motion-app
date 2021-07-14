import create from "zustand"

const STEP_LENGTH = 4

export const useStore = create((set, get) => ({
  step: 0,
  isNavigationDisabled: true,
  setIsNavigationDisabled(isNavigationDisabled) {
    if(isNavigationDisabled !== get().isNavigationDisabled)
      set(() => ({ isNavigationDisabled }))
  },
  nextStep() {
    console.log(get().isNavigationDisabled);
    if (get().step < STEP_LENGTH && !get().isNavigationDisabled)
      set(state => ({step: state.step + 1}))
  },
  previousStep() {
    console.log("test");
    if (get().step > 1 && !get().isNavigationDisabled)
      set(state => ({step: state.step - 1}))
  },
}))
