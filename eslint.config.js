import pluginVitest from '@vitest/eslint-plugin';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import eslintPluginImport from 'eslint-plugin-import';
import pluginVue from 'eslint-plugin-vue';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  {
    files: ['**/*.vue', '**/*.ts', '**/*.css'],
    extends: [
      eslintPluginImport.flatConfigs.recommended,
      eslintPluginImport.flatConfigs.typescript,
    ],
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['~', './src'],
            ['~pages', './src/pages'],
            ['~shared', './src/shared'],
            ['~entities', './src/entities'],
          ],
          extensions: ['.vue', '.ts', '.css'],
        },
      },
    },
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['vue-apps/**/__tests__/*'],
  },

  skipFormatting
);
