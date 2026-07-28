import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import preserveDirectives from "rollup-plugin-preserve-directives";
export default {
  input: "./src/index.ts",
  output: [
    {
      dir: "./build",
      format: "cjs",
      sourcemap: true,
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "./src",
      entryFileNames: "[name].js",
      chunkFileNames: "[name]-[hash].js",
    },
    {
      dir: "./build",
      format: "esm",
      sourcemap: true,
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "./src",
      entryFileNames: "[name].es.js",
      chunkFileNames: "[name]-[hash].es.js",
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
    preserveDirectives(),
  ],
};
