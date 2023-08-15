import { Motion, Variant } from "@motionone/solid";
import { onMount, createSignal, For } from "solid-js";
import pageStore from "../store/page";

const Loader = () => {
  const [_, setPage] = pageStore;
  let containerRef: HTMLDivElement;
  let spanRef: HTMLSpanElement;

  const [xPos, setXpos] = createSignal(0);

  onMount(() => {
    // Calculate xPos (I don't know what I did here. All Hail ChatGPT 👑)
    const spanWidth = spanRef.getBoundingClientRect().width;
    setXpos(window.innerWidth / 2 - 5.35 * spanWidth - spanWidth / 2);
  });

  return (
    <Motion.div
      ref={containerRef!}
      initial={gridVariants.initial}
      animate={gridVariants.animation}
      exit={gridVariants.exit}
      class="absolute z-50 grid h-screen w-screen overflow-hidden grid-rows-[50%_0%_50%]"
    >
      <For each={Array.from(Array(3))}>
        {(_, divIdx) => (
          <div
            class={`flex items-center text-9xl font-semibold sm:text-8xl ${divIdx() % 2 === 0
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white text-black dark:bg-black dark:text-white"
              }`}
          >
            <For each={Array.from(Array(10))}>
              {(_, spanIdx) => (
                <Motion.span
                  ref={spanRef!}
                  initial={spanVariants.initial({
                    xVal: xPos(),
                    pos: "center",
                  })}
                  animate={spanVariants.animation({
                    xVal: xPos(),
                    pos: divIdx() % 2 === 0 ? "topBottom" : "center",
                  })}
                  exit={spanVariants.exit({
                    pos: divIdx() % 2 === 0 ? "topBottom" : "center",
                    index: spanIdx(),
                  })}
                  onMotionComplete={() => {
                    setPage("home");
                  }}
                  class="m-5 whitespace-nowrap text-9xl opacity-0"
                >
                  Baka Otaku
                </Motion.span>
              )}
            </For>
          </div>
        )}
      </For>
    </Motion.div>
  );
};

const gridVariants: {
  initial: Variant;
  animation: Variant;
  exit: Variant;
} = {
  initial: {
    gridTemplateRows: "50% 0% 50%",
  },
  animation: {
    gridTemplateRows: "33.3% 33.3% 33.3%",
  },
  exit: {
    gridTemplateRows: "0% 100% 0%",
  },
};

const spanVariants: {
  initial: ({ xVal, pos }: { xVal: number; pos: string }) => Variant;
  animation: ({ xVal, pos }: { xVal: number; pos: string }) => Variant;
  exit: ({ pos, index }: { pos: string; index: number }) => Variant;
} = {
  initial: ({ xVal, pos }) => ({
    x: pos === "center" ? 0 : xVal,
    y: 100,
    opacity: 0,
  }),
  animation: ({ xVal, pos }) => {
    return {
      y: 0,
      opacity: 1,
      x: pos === "center" ? [0, xVal] : [xVal, 0],
      transition: {
        delay: 0.6,
        type: "tween",
        ease: "easeIn",
        x: {
          delay: 0.7,
          type: "tween",
          duration: 2,
          ease: "easeInOut",
        },
      },
    };
  },
  exit: ({ pos, index }) => ({
    opacity: 0,
    // opacity: pos === "center" ? (index === 5 ? 1 : 0) : 0,
  }),
};
export default Loader;
