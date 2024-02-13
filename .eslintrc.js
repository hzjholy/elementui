module.exports = {
    "parser": "vue-eslint-parser",   // 添加这一句
    rules: {
        //关闭组件命名规则
        "vue/multi-word-component-names": "off",
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        allowImportExportEverywhere: true, // 不限制eslint对import使用位置
        ecmaFeatures: {
          modules: true,
          legacyDecorators: true
        }
      },
}