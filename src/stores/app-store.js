import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    decision: {},
  }),
  getters: {
    getDecision: (state) => state.decision,
  },
  actions: {
    setDecision(decision) {
      this.decision = decision;
    }
  },
});
