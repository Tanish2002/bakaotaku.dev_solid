import { Motion } from "@motionone/solid";
import { createEffect, createSignal, For } from "solid-js";
import pageStore from "~/store/page";
import cursorStore from "~/store/cursor";

const [height, setHeight] = createSignal(0);
export default function Home() {
  const [_hover, setHover] = cursorStore;
  let divRef: HTMLDivElement;
  const [_page, setPage] = pageStore;

  createEffect(() => {
    // Change h1 height on div height change
    const height = divRef.getBoundingClientRect().height;
    if (height !== 0) {
      setHeight(height);
    }
  });

  return (
    <Motion.section
      id="hover"
      class="flex items-center justify-center hover my-48"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => {
        setPage("about");
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <h1
        style={{
          height: `${height()}px`,
        }}
        class="overflow-hidden text-center sm:text-9xl font-semibold text-3xl"
      >
        <For each={["Baka Otaku", "Tanish Khare"]}>
          {(word) => (
            <div ref={divRef}>
              <For each={word.split("")}>
                {(letter, idx) => (
                  <Motion.span
                    class="inline-block letterSpan"
                    animate={{ y: "-100%" }}
                    transition={{
                      y: {
                        duration: 1.2,
                        delay: idx() * 0.03,
                        easing: [0.76, 0, 0.024, 1],
                      },
                    }}
                  >
                    {letter.trim() === "" ? "\xa0" : letter}
                  </Motion.span>
                )}
              </For>
            </div>
          )}
        </For>
      </h1>
    </Motion.section>
  );
}
