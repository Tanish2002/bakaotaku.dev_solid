import { Presence } from "@motionone/solid";
import { Show } from "solid-js/web";
import About from "~/components/About";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Home from "~/components/Home";
import Loader from "~/components/Loader";
import pageStore from "~/store/page";
import SvgCursor from "~/icons/Cursor";

export default function Index() {
  const [page, _] = pageStore;
  return (
    <main class="max-w-screen min-h-screen grid grid-cols-1 grid-rows-[5fr_90fr_5fr]">
      <Presence exitBeforeEnter>
        <Show when={page() === "loader"}>
          <Loader />
        </Show>
      </Presence>
      <Header />
      <Presence exitBeforeEnter>
        <Show when={page() === "home"} keyed>
          <Home />
        </Show>
        <Show when={page() === "about"} keyed>
          <About />
        </Show>
      </Presence>
      <SvgCursor class="pointer-events-none will-change-transform w-20 h-20 fill-white absolute z-50 mix-blend-difference" />
      <Footer />
    </main>
  );
}
