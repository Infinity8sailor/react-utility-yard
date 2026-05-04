import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  external: ['react', 'react-dom', 'lucide-react'],
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
  onSuccess: 'echo Build complete!',
});
