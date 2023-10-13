import { create } from "zustand";

export const useDarkSideStore = create((set) => ({
  theme: "light",
  toggle: () =>
    set(({ theme }) => {
      const colorTheme = theme === "dark" ? "light" : "dark";
      const root = window.document.documentElement;
      root.classList.remove(theme);
      root.classList.add(colorTheme);
      return { theme: colorTheme };
    }),
}));
