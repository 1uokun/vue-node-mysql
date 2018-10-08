### vue入门级全栈项目 - 拉钩网H5版本
<img src="https://github.com/1uokun/vue-node-mysql/blob/master/static/QQ%E6%88%AA%E5%9B%BE20180529230333.png" style="width:45%;float:left"/>
<img src="https://github.com/1uokun/vue-node-mysql/blob/master/static/QQ%E6%88%AA%E5%9B%BE20180529230411.png" style="width:45%;float:left"/>

### 使用方法
```bash
$ git clone https://github.com/1uokun/vue-node-mysql.git
$ cd vue-node-mysql
$ cnpm install              # 如果能翻墙则无需使用cnpm

// 开发
$ npm start                     

// 等待编译完成,然后访问locahost:8080预览页面

// 启动express服务
$ npm run server

// 这里将前后端分离，后段接口地址为 locahost:3000
```
### HTTPS
这个项目新增https支持

**教程**： [如何在5分钟内让HTTPS在本地开发环境中运行](https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec)

**具体代码**：[commit](https://github.com/1uokun/vue-node-mysql/commit/295c87f5d121f4c3d6dc4745878d1607ea332516)

**安装证书**：在文件路径*https/rootCA.pem*中双击该文件即可安装证书

⚠**注意**：️如果不想使用https可以通过上述commit删除代码

### 说明：

 本项目你将用到
 ```
 |-- 前端
   |-- vue
     |-- vue-router
     |-- vuex
   |-- axios
   |-- sass
 |-- 后端
   |-- express
   |-- mysql
 |-- 其他
   |-- cookie
   |-- localstrong
   |-- nodemon
 ```
其中项目css使用sass预编译，如果不能翻墙，请使用淘宝镜像或yarn或者直接在GitHub中找。  <br/>
`cnpm install node-sass sass-loader`    <br/>
https://segmentfault.com/a/1190000011288053 <br/>
这篇文章介绍了后端功能细节  <br/>

