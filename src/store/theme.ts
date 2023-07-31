import { createEffect, createSignal } from "solid-js";
import { isServer } from "solid-js/web";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

const getPreferredTheme = () => {
  if (isServer) return Theme.LIGHT;
  const localTheme = localStorage.getItem("theme");
  return localTheme === Theme.DARK ? Theme.DARK : Theme.LIGHT;
};

const themeState = createSignal<Theme>(getPreferredTheme());

createEffect(() => {
  const cl = document.documentElement.classList;
  themeState[0]() === Theme.DARK ? cl.add("dark") : cl.remove("dark");
  localStorage.setItem("theme", themeState[0]());
});

export { themeState, Theme };
