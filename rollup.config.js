import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import dts from 'rollup-plugin-dts';
import fs from 'node:fs';
import path from 'node:path';

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"));

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    sass({ insert: true }),
    
    peerDepsExternal(),
    resolve(
     // { preferBuiltins: true, mainFields: ['browser'] }
      ),
    commonjs(),
    typescript({ tsconfig: './tsconfig.build.json' }),
    dts({
      insertTypesEntry: true,
      tsconfig: './tsconfig.build.json',
    }),
    //terser(),
    //json(),
    // jsx( {factory: 'React.createElement'} ),
  ],
};
