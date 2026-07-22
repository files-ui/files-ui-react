import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
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
    postcss({
      extensions: [".css", ".scss"],
      use: [
        [
          "sass",
          {
            silenceDeprecations: ["legacy-js-api"],
          },
        ],
      ],
      inject: true,
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
  ],
};
