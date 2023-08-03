import { Motion } from "@motionone/solid";
import { themeState, Theme } from "../store/theme";
import { spring } from "motion";
import { BsMoonStarsFill, BsSunFill } from "solid-icons/bs";

const [theme, setTheme] = themeState;
const Header = () => {
  const toggleTheme = () => {
    setTheme(theme() === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <header class="flex items-center justify-between">
      <div>Baka</div>

      <div
        onClick={() => {
          toggleTheme();
        }}
        class={`flex w-[70px] rounded-[50px] bg-zinc-200 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${theme() === Theme.LIGHT && "place-content-end"
          }`}
      >
        <Motion.div
          class="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black/90"
          transition={{
            easing: spring({ stiffness: 700, damping: 30 }),
          }}
        >
          <Motion.div press={{ rotate: 360 }}>
            {theme() === Theme.LIGHT ? (
              <BsSunFill class="h-6 w-6 text-yellow-300" />
            ) : (
              <BsMoonStarsFill class="h-6 w-6 text-slate-200" />
            )}
          </Motion.div>
        </Motion.div>
      </div>
    </header>
  );
};

export default Header;
