npm跟yarn 
  作用 
    包管理器，管理项目的依赖
  下载并且设置淘宝源
    NPM设置淘宝镜像
      1.查询当前配置的镜像
      npm get registry > https://registry.npmjs.org/
      设置成淘宝镜像 npm config set registry http://registry.npm.taobao.org/
      2.换成原来的 npm config set registry https://registry.npmjs.org/
    Yarn 设置淘宝镜像
      1.查询当前配置的镜像 yarn config get registry > https://registry.yarnpkg.com
      设置成淘宝镜像 yarn config set registry http://registry.npm.taobao.org/
  命令行对比
    初始化项目
      npm init                                  yarn init
    安装默认依赖
      npm install                               yarn install
    安装某个依赖
      npm install [packageName]                 N/A
    安装生产依赖
      npm install [package] --save              yarn add [package] 
    安装开发依赖
      npm install [package] --save-dev          yarn add [package] [--dev/-D]      
    全局安装
      npm install [package] --global            yarn global add [package]   
    卸载依赖
      npm uninstall [package]                   yarn remove [package]
    
      

