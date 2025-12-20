import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import postcssPxtorem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname),
  publicDir: 'public',
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: './index.html'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/base.scss"; @import "@/styles/style.scss";`
      }
    },
    modules: {
      generateScopedName: '[local]_[hash:base64:5]',
      localsConvention: 'camelCaseOnly'
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '.scss': '.scss?module'
    }
  },
})