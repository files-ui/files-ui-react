import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import preserveDirectives from "rollup-plugin-preserve-directives";
export default {
  input: "./src/index.ts",
  onwarn(warning, warn) {
    if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
    warn(warning);
  },
  external: (id) => {
    // Keep relative imports, absolute paths, and virtual modules (rollup internal \0 prefix)
    if (id.startsWith(".") || id.startsWith("/") || id.startsWith("\0")) return false;
    // Keep absolute Windows paths (e.g., D:\...)
    if (/^[a-zA-Z]:/.test(id)) return false;
    // Externalize all other bare module specifiers (peer deps, tslib, etc.)
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
      inject(cssVariableName) {
        return `
          (function(css) {
            if (typeof document === 'undefined') return;
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) { style.styleSheet.cssText = css; }
            else { style.appendChild(document.createTextNode(css)); }
            head.appendChild(style);
          })(${cssVariableName});
        `;
      },
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    preserveDirectives(),
  ],
};
