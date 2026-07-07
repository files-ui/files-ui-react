import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import sass from "rollup-plugin-sass";
export default {
  input: "./src/index.ts",
  output: [
    {
      file: "./build/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "./build/index.es.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  // rollup.config.js
  plugins: [
    sass({
      insert: true,
      options: {
        // Silences the Dart Sass legacy API warnings cleanly
        silenceDeprecations: ["legacy-js-api"],
      },
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
  ],
};
