在vue中使用less
  yarn add less less-loader(生产依赖)
  配置loader
    {
      test: /\.less$/,
      loader: "style-loader!css-loader!less-loader",
    }
  style lang="less"