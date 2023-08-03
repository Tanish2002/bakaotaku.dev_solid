import { createSignal } from "solid-js";

type PageType = "home" | "about" | "loader";
export default createSignal<PageType>("loader");
