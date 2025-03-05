import react from '@vitejs/plugin-react';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/

const ROOT_DIR = `${__dirname}/src/app`;
const BUILD_OUT_DIR = `${__dirname}/dist`;

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return {
    envDir: __dirname,
    publicDir: `${__dirname}/public`,
    define: {
      global: {},
    },
    root: ROOT_DIR,
    build: {
      outDir: BUILD_OUT_DIR,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
        '~entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
        '~widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
      },
    },
  };
});
