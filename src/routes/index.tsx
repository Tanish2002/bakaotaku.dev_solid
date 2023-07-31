import About from "~/components/About";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Home from "~/components/Home";
import Loader from "~/components/Loader";
import MouseHover from "~/components/MouseHover";

export default function Index() {
  return (
    <main class="max-w-screen min-h-screen grid grid-cols-1 grid-rows-[5fr_90fr_5fr]">
      <Loader />
      <Header />
      <Home />
      <About />
      <MouseHover />
      <Footer />
    </main>
  );
}
