// prettier.config.js
/** @type {import("prettier").Config} */
const config = {
    // 一行最多 100 字符（与主流风格保持一致，便于与 ESLint 协同）
    printWidth: 100,
    // 使用 2 个空格缩进（JS/TS/JSX 统一）
    tabWidth: 2,
    // 不使用 Tab 缩进
    useTabs: false,
    // 语句末尾加分号（与 React 19 + TS 项目常见风格一致）
    semi: true,
    // 使用单引号（JS/JSX 中更常见，减少转义）
    singleQuote: true,
    // JSX 使用双引号（与 React 默认属性写法一致，避免与 HTML 属性混淆）
    jsxSingleQuote: false,
    // 对象字面量仅在必要时给 key 加引号
    quoteProps: 'as-needed',
    // 大括号内保留空格（提升可读性）
    bracketSpacing: true,
    // JSX 结束标签换行（与主流风格一致）
    jsxBracketSameLine: false,
    // 箭头函数单参数也保留括号（一致性与可读性更好）
    arrowParens: 'always',
    // 尾随逗号：ES5 范围内（对象/数组/多行结构在需要时添加，避免无意义变更）
    trailingComma: 'es5',
    // HTML/JSX/Vue 空白敏感性跟随 CSS（与主流编辑器/框架一致）
    htmlWhitespaceSensitivity: 'css',
    // 每个文件格式化整个内容（避免部分格式化导致风格不一致）
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要文件头部的 @prettier 标记
    requirePragma: false,
    // 不自动插入 @prettier 标记
    insertPragma: false,
    // Markdown 保持原样换行（避免破坏文档排版）
    proseWrap: 'preserve',
    // 换行符使用 LF（跨平台一致，Linux/macOS/现代 Windows 开发环境通用）
    endOfLine: 'lf',
    // Vue 文件中 <script> 和 <style> 不额外缩进（与主流 Vue 风格一致）
    vueIndentScriptAndStyle: false,
    // 嵌入式语言（如 <script>/<style>）格式化策略：自动判断
    embeddedLanguageFormatting: 'auto',
    // 每个属性单独一行（仅在属性过多时生效，提升可读性）
    singleAttributePerLine: false,
  };
  
export default config;