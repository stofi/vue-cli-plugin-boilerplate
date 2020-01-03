module.exports = (api, options, preset) => {
  api.render('./template')
  api.extendPackage({
    devDependencies: {
      '@vue/cli-plugin-babel': '^3.1.1',
      '@vue/cli-plugin-eslint': '^3.1.1',
      '@vue/cli-plugin-pwa': '^3.1.1',
      '@vue/eslint-config-prettier': '^5.0.0',
      'babel-eslint': '^10.0.1',
      eslint: '^5.16.0',
      'eslint-plugin-prettier': '^3.1.0',
      'eslint-plugin-vue': '^5.0.0',
      'lint-staged': '^8.1.5',
      prettier: '^1.18.2',
      'vue-cli-plugin-tailwind': '^1.1.0',
    },
  })
  api.extendPackage({
    "dependencies": {
      "register-service-worker": "^1.6.2",
      "vue-router": "^3.0.3",
      "vuex": "^3.0.1"
    }
  })
  api.extendPackage({
    eslintConfig: {
      root: true,
      env: {
        node: true,
      },
      extends: ['plugin:vue/essential', '@vue/prettier'],
      rules: {},
      parserOptions: {
        parser: 'babel-eslint',
      },
    },
  })
  api.extendPackage({
    postcss: {
      plugins: {
        tailwindcss: {},
        'vue-cli-plugin-tailwind/purgecss': {},
        autoprefixer: {},
      },
    },
  })
  api.extendPackage({
    browserslist: ['> 1%', 'last 2 versions'],
  })
  api.extendPackage({
    gitHooks: {
      'pre-commit': 'lint-staged',
    },
  })
  api.extendPackage({
    'lint-staged': {
      '*.{js,vue}': ['vue-cli-service lint', 'git add'],
    },
  })
  api.extendPackage({
    'prettier': {
      "tabWidth": 2,
      "semi": false,
      "singleQuote": true
    },
  })
}
