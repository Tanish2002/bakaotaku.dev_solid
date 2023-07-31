import { Component, JSX } from "solid-js";
const SvgMouse: Component<JSX.IntrinsicElements["svg"]> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432.302 147.948c-19.821-19.867-47.435-32.208-77.724-32.202h-88.664c-30.289-.007-57.903 12.335-77.732 32.194-19.851 19.82-32.208 47.434-32.194 77.732v124.134c0 44.374 16.992 84.84 44.76 114.251 27.691 29.418 66.593 47.959 109.495 47.943 42.901.016 81.802-18.525 109.509-47.943 27.753-29.411 44.752-69.877 44.752-114.251V225.672a109.61 109.61 0 0 0-32.202-77.724zM422.01 349.806c0 33.474-12.782 63.478-33.157 85.087-20.445 21.601-48.052 34.607-78.611 34.622-30.552-.015-58.159-13.021-78.596-34.622-20.391-21.609-33.172-51.621-33.172-85.087v-60.031H422.01v60.031zm0-90.375H310.758V158.232h43.82c18.687.015 35.416 7.516 47.689 19.751 12.234 12.273 19.736 28.995 19.743 47.689v33.759zM216.683 0h24.276v69.799h-24.276zM330.001 30.359l-21.032-12.142-34.899 60.455 21.031 12.136zM47.503 193.463h69.792v-24.276l-69.798-.008zM126.17 136.078l-60.446-34.9 12.142-21.03 60.446 34.9zM183.572 78.672l-34.893-60.455-21.03 12.15 34.892 60.441z" />
  </svg>
);
export default SvgMouse;