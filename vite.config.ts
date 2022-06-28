/* Copyright 2021, Milkdown by Mirone. */
import { defineConfig } from 'vite';
import autoExternal from 'rollup-plugin-auto-external';

export const libFileName = (format: string) => `index.${format}.js`;

const external = [
    '@milkdown/core',
    '@milkdown/utils',
    '@milkdown/prose',
    'remark-directive'
];

export default defineConfig({
    build:{
        sourcemap: true,
            lib: {
                entry: `src/index.ts`,
                name: `milkdown_plugin_directive-fallback`,
                fileName: libFileName,
                formats: ['es'],
            },
            rollupOptions: {
                external,
                output: {
                    dir:`lib`,
                },
                plugins: [autoExternal()],
            },
    }
})