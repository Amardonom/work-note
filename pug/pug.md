在vue中使用pug
  yarn add pug pug-loader pug-filters -d
  配置webpack.base.config.js
    {
      test: /\.jade$/,
      loader: "jade"
    },
    {
      test: /\.pug$/,
      loader: 'pug'
    },
  使用时在template标签上加lang="pug"