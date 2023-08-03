import { timeline, type TimelineDefinition } from "motion";
import { onMount, createSignal, createEffect, For } from "solid-js";
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

  createEffect(() => {
    const sequence: TimelineDefinition = [
      [containerRef, { gridTemplateRows: "50% 0% 50%" }],
      [containerRef, { gridTemplateRows: "33.3% 33.3% 33.3%" }],
      "marqueeSpan",
      [
        ".topBottom",
        {
          y: [100, 0],
          opacity: 1,
          x: [xPos(), 0],
        },
        {
          at: "marqueeSpan",
          delay: 0.6,
          easing: "ease-in",
          x: {
            delay: 0.7,
            easing: "ease-in-out",
            duration: 2,
          },
        },
      ],
      [
        ".center",
        {
          y: [100, 0],
          opacity: 1,
          x: [0, xPos()],
        },
        {
          at: "marqueeSpan",
          delay: 0.6,
          easing: "ease-in",
          x: {
            delay: 0.7,
            easing: "ease-in-out",
            duration: 2,
          },
        },
      ],
      "exitSpan",
      [".topBottom", { opacity: 0 }, { at: "exitSpan" }],
      [".nonCenter", { opacity: 0 }, { at: "exitSpan" }],
      [containerRef, { gridTemplateRows: "0% 100% 0%" }],
    ];

    const animation = timeline(sequence);
    animation.play();
    // animation.finished.then doesn't seem to work 🤔
    setTimeout(() => {
      containerRef.remove();
      setPage("home");
    }, animation.duration * 1000);
  });

  return (
    <div
      ref={containerRef!}
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
                <span
                  ref={spanRef!}
                  class={`m-5 whitespace-nowrap text-9xl opacity-0 ${divIdx() % 2 === 0 ? "topBottom" : "center"
                    } ${spanIdx() !== 5 && "nonCenter"}`}
                >
                  Baka Otaku
                </span>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
};

export default Loader;
