import { Motion } from "@motionone/solid";
import pageStore from "../store/page";
import { Show } from "solid-js";

const About = () => {
  const [page, setPage] = pageStore;

  return (
    <Show when={page() === "about"}>
      <Motion.div
        id="about"
        class="flex items-center justify-center text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => {
          setPage("home");
          // // we're using astro static pages so exit animations won't work so we do them manually
          // animate("#about", { opacity: 0 }).finished.then(() => {
          //   setPage("home");
          // });
        }}
      >
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis. About
      </Motion.div>
    </Show>
  );
};

export default About;
