import { defineStore } from 'pinia'

export const useApiStore = defineStore({
  id: 'api',
  state: () => ({
    counter: 10
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
