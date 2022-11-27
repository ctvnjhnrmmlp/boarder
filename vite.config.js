import babel from 'vite-babel-plugin';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import preload from 'vite-plugin-preload';

export default defineConfig({
  root: './',
  base: '/boarder/',
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'scripts/[name]-[hash].js',
        entryFileNames: 'scripts/[name]-[hash].js',

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? ''))
            return 'assets/images/[name]-[hash][extname]';

          if (/\.(|otf|eot|ttf|woff|woff2)$/.test(name ?? ''))
            return 'assets/fonts/[name]-[hash][extname]';

          if (/\.css$/.test(name ?? ''))
            return 'styles/[name]-[hash][extname]';

          return 'assets/[name]-[hash][extname]';
        },
      },
    }
  },
	optimizeDeps: {
		entries: './src/index.html',
	},
  plugins: [
    legacy(),
    babel(),
    preload(),
  ],
});
