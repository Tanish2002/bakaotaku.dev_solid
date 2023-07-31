// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <script>
          {`
          const theme = (() => {
            if (
              typeof localStorage !== "undefined" &&
              localStorage.getItem("theme")
              ) {
              return localStorage.getItem("theme");
            }
              if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
              return "dark";
            }
              return "light";
          })();

              if (theme === "light") {
                document.documentElement.classList.remove("dark");
          } else {
                document.documentElement.classList.add("dark");
          }
              window.localStorage.setItem("theme", theme);
         `}
        </script>
      </Head>
      <Body class="bg-white text-black transition-colors dark:bg-black dark:text-white">
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
