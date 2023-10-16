import { create } from "zustand";

export const useCurrentGroup = create((set) => ({
  currentGroup: null,
  setCurrentGroup: (currentGroup) => set({ currentGroup }),
}));
