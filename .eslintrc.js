module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser', // 指定的解析器
  extends: [
    'eslint:recommended', // eslint默认规则
    'plugin:@typescript-eslint/recommended', // Typsscript推荐规范
    'plugin:react-hooks/recommended', // React Hooks推荐规范
    'plugin:prettier/recommended', // 集成Prettier插件规范
    'plugin:import/typescript', // 导入规则
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', '@typescript-eslint', 'react-refresh', 'import'],
  rules: {
    'prettier/prettier': 'warn', // 违反prettier的规则，将产生一个错误
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // 配置React热刷新的规则，允许常量到导出
    '@typescript-eslint/no-explicit-any': ['off'],
    'react-refresh/only-export-components': ['off'],
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index', 'unknown']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
        alphabetize: {
          order: 'desc',
          caseInsensitive: true
        }
      }
    ]
  }
};
