import { defineConfig } from "tsup";

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],     // Output both CommonJS and ES Modules
    outDir: 'dist',
    dts: true,                  // Generate TypeScript declaration files
    sourcemap: false,            // Generate source maps
});
