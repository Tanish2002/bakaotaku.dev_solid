import MouseImage from "../icons/Mouse";

const MouseHover = () => {
  return (
    <div class="absolute bottom-[5%] left-2/4 -translate-x-2/4 animate-bounce">
      <MouseImage class="mb-6 w-11 fill-black dark:fill-white" />
    </div>
  );
};

export default MouseHover;
