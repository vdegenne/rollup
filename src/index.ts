import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import cjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import {type RollupOptions} from 'rollup';

export {typescript, nodeResolve, terser, cjs, json};

export function config(options: RollupOptions | RollupOptions[]) {
	return options;
}
