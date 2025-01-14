import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export const viteExcludeBuiltins = [
    'assert',
    'async_hooks',
    'buffer',
    'child_process',
    'cluster',
    'console',
    'constants',
    'crypto',
    'dgram',
    'diagnostics_channel',
    'dns',
    'domain',
    'events',
    'fs',
    'http',
    'http2',
    'https',
    'inspector',
    'module',
    'net',
    'os',
    'path',
    'perf_hooks',
    'process',
    'punycode',
    'querystring',
    'readline',
    'repl',
    'stream',
    'string_decoder',
    'timers',
    'tls',
    'trace_events',
    'tty',
    'url',
    'util',
    'v8',
    'vm',
    'wasi',
    'worker_threads',
    'zlib',
]

export function viteExcludeExternal(pkg: any) {
    return viteExcludeBuiltins
        .concat(Object.keys(pkg.peerDependencies || {}))
        .concat(Object.keys(pkg.devDependencies || {}))
}

// Common definition of vite fol all packages
export function viteDefinePackageConfig(dirname: string, pkg: any) {
    return defineConfig({
        base: '/',
        plugins: [react(), dts({ entryRoot: '.', rollupTypes: true })],
        build: {
            target: 'es2020',
            outDir: 'dist',
            lib: {
                entry: resolve(dirname, './index.ts'),
                formats: ['es'],
                fileName: 'index',
            },
            rollupOptions: {
                external: viteExcludeExternal(pkg),
            },
        },
    })
}

export default defineConfig({
    base: '/',
    plugins: [react(), dts({ entryRoot: '.' })],
    publicDir: './public',
    build: {
        target: 'es2020',
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: 'index',
        },
        rollupOptions: {
            external: viteExcludeExternal(pkg),
        },
    },
})
