import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import cjs from '@rollup/plugin-commonjs';
import {RollupOptions} from 'rollup';

export {typescript, nodeResolve, terser, cjs};

export function config(options: RollupOptions | RollupOptions[]) {
	return options;
}
