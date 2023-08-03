import { Motion } from "@motionone/solid";
import { createEffect, createSignal, For } from "solid-js";
import pageStore from "~/store/page";

export default function Home() {
  const [ref, setRef] = createSignal<HTMLElement>();
  const [_, setPage] = pageStore;

  const [height, setHeight] = createSignal(0);

  createEffect(() => {
    ref() && setHeight(ref()!.getBoundingClientRect().height - 2);
  });

  return (
    <Motion.section
      class="flex items-center justify-center" // First time hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => {
        setPage("about");
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
            <div ref={setRef}>
              <For each={word.split("")}>
                {(letter, idx) => (
                  <Motion.span
                    class="inline-block letterSpan"
                    animate={{ y: "-100%" }}
                    transition={{
                      y: {
                        duration: 1,
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
