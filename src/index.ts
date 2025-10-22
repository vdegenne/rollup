import {default as typescript} from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import {default as terser} from '@rollup/plugin-terser';
import {default as cjs} from '@rollup/plugin-commonjs';
import {default as json} from '@rollup/plugin-json';
import {type RollupOptions} from 'rollup';

export {typescript, nodeResolve, terser, cjs, json};

export function config(options: RollupOptions | RollupOptions[]) {
	return options;
}
