/// <reference types="vite/client" />

// 可选：添加一些项目常用的类型声明
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // 可以根据项目需要添加其他环境变量类型
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }