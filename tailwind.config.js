import typography from "@tailwindcss/typography";
import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/Views/**/*.php",
    "./resources/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [typography, flowbite],
};
