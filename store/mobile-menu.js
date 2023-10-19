import { create } from "zustand";

export const useMobileMenu = create((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  toggle: () =>
    set(({ isOpen }) => {
      return { isOpen: !isOpen };
    }),
}));
