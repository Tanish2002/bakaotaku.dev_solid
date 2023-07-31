import { Motion } from "@motionone/solid";
import { createEffect, For, Show } from "solid-js";
import pageStore from "../store/page";

export default function Home() {
  let divRef: HTMLDivElement;
  let h1Ref: HTMLHeadingElement;

  const [page, setPage] = pageStore;

  createEffect(() => {
    if (page() === "home") {
      const divHeight = divRef.getBoundingClientRect().height;
      h1Ref.style.height = `${divHeight - 2}px`; // a bit smaller anyways to be on the safe side
    }
  });

  return (
    <Show when={page() === "home"}>
      <Motion.section
        id="home"
        class="flex items-center justify-center" // First time hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => {
          setPage("about");
          // // we're using astro static pages so exit animations won't work so we do them manually
          // animate("#home", { opacity: 0 }).finished.then(() => {
          //   setPage("about");
          // });
        }}
      >
        <h1
          ref={h1Ref!}
          class="overflow-hidden text-center text-9xl font-semibold"
        >
          <For each={["Baka Otaku", "Tanish Khare"]}>
            {(word) => (
              <div ref={divRef!}>
                <For each={word.split("")}>
                  {(letter, idx) => (
                    <Motion.span
                      class="inline-block letterSpan"
                      initial={{ opacity: 1 }}
                      animate={{ y: "-100%" }}
                      transition={{
                        y: {
                          duration: 1,
                          delay: idx() * 0.03,
                          easing: [0.76, 0, 0.024, 1],
                        },
                      }}
                      exit={{ opacity: 0 }}
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
    </Show>
  );
}
