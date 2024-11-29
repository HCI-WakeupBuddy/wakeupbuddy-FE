import { create } from "zustand";

const useIntervalStore = create((set) => ({
  isIntervalRunning: false, // Interval 실행 여부
  startInterval: () => set({ isIntervalRunning: true }),
  stopInterval: () => set({ isIntervalRunning: false }),
}));

export default useIntervalStore;
