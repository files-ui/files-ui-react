import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import preserveDirectives from "rollup-plugin-preserve-directives";
export default {
  input: "./src/index.ts",
  external: (id) => {
    // Keep relative imports, absolute paths, and virtual modules (rollup internal \0 prefix)
    if (id.startsWith(".") || id.startsWith("/") || id.startsWith("\0")) return false;
    // Keep absolute Windows paths (e.g., D:\...)
    if (/^[a-zA-Z]:/.test(id)) return false;
    // Bundle tslib and style-inject (build-time helpers that must be inlined)
    if (id === "tslib" || id.includes("style-inject")) return false;
    // Externalize all other bare module specifiers (peer deps, etc.)
    return true;
  },
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
