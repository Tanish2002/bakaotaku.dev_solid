import { Presence } from "@motionone/solid";
import { Dynamic } from "solid-js/web";
import About from "~/components/About";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Home from "~/components/Home";
import Loader from "~/components/Loader";
import MouseHover from "~/components/MouseHover";
import pageStore from "~/store/page";

const options = {
  loader: Loader,
  home: Home,
  about: About,
};
export default function Index() {
  const [page, _] = pageStore;
  return (
    <main class="max-w-screen min-h-screen grid grid-cols-1 grid-rows-[5fr_90fr_5fr]">
      <Header />
      <Presence>
        <Dynamic component={options[page()]} />
      </Presence>
      <MouseHover />
      <Footer />
    </main>
  );
}
