import { Motion } from "@motionone/solid";
import pageStore from "../store/page";
import cursorStore from "~/store/cursor";

const About = () => {
  const [_, setPage] = pageStore;
  const [_hover, setHover] = cursorStore;

  return (
    <Motion.div
      class="flex items-center justify-center text-4xl m-48"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => {
        setPage("home");
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
      labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
      Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
      Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
      occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
      officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in
      Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non
      excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco
      ut ea consectetur et est culpa et culpa duis. About
    </Motion.div>
  );
};

export default About;
