# GlupStream
Gulp流程测试项目

gulp测试项目，支持css私有前缀添加、代码扫描、合并和压缩，以及js代码扫描、合并和压缩。
具体扫描规则可自行配制csslintrc.json和jshint.json文件。

##目录结构

`src`：源码目录

`dist`：生成文件目录

##文件说明

`package.json`：配置文件，所有项目信息以及依赖的库配置

`gulpfile.js`：gulp文件，配置任务

`csslintrc.json`：css扫描配置文件

`jshint.json`：js扫描配置文件

##使用步骤

1. 下载项目到本地，地址 > https://github.com/BingKui/GlupStream.git

2. 安装所有依赖库：`npm install`

3. 执行gulp：`gulp`
