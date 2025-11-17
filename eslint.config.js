import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': tseslint.plugin,
    },

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,         // TS 推荐规则
      react.configs.recommended,              // React 推荐规则
      reactHooks.configs['recommended-latest'], // React Hooks（最新版）
      reactRefresh.configs.vite,              // Vite 场景刷新规则
    ],

    rules: {
      // React Hooks（示例：将依赖项问题提升为错误）
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // 可按需加严的通用规则
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      indent: ['error', 2],
      'no-tabs': 'error',
      '@typescript-eslint/indent': ['error', 2]
    },
  },
])
