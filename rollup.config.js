import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import { terser } from "rollup-plugin-terser";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [
    sass({ insert: true }),
    peerDepsExternal(),
    resolve({
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      preferBuiltins: true,
      mainFields: ["module", "main", "browser"],
    }),
    commonjs({
      include: /node_modules/,
      extensions: [".js", ".ts"],
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      clean: true,
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};
