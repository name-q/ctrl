import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.esm.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    builtins(),
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs(),
    globals(),
    typescript(),
  ],
};
