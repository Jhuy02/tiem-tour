import { create } from 'zustand'

type State = {
  isSubmitting: boolean
}

type Action = {
  setIsSubmitting: (value: State['isSubmitting']) => void
}

const useStore = create<State & Action>()((set) => ({
  isSubmitting: false,
  setIsSubmitting: (value) => set((state) => ({ ...state, isSubmitting: value })),
}))

export default useStore
