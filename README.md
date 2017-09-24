### vue框架入门级全栈项目
模仿对象<br/>
m.lagou.com<br/>
做了即时搜索，关键词过滤<br/>
登录注册页面的账号密码错误提示<br/>

### 技术栈：
>	vue2.0 vuex中间件    <br/>
>	node express中间件   <br/>
>	mysql 增删改查        <br/>

欢迎下载这个仓库的所有文件，文件不大，只有537kb
------------------------------------------------

### 使用方法
> cnpm install          <br/>
> npm start

### 说明：

- part 1 package.json
    
    前端
    
 > npm install axios vuex vue-router
    
    后端
   
 > npm install express nodemon mysql
    
    sass
    
> 本项目css使用sass预编译，如果你能翻墙那可以使用npm，如果不能，请使用淘宝镜像。  <br/>
> cnpm install node-sass sass-loader    <br/>

- part2 前端                              <br/>
由于lagou.com没有提供jsonp，我无法直接跨域使用他的一些招聘信息，所以截取了9月20日当天500条招聘信息，放置在static/listmore.json中  <br/>
数据来源地址：lagou.com/listmore     <br/>
该项目使用了cookie,localstrong,vuex,axios,vue-router足够刷完vue2.0大部分基础语法 <br/>

- part3 后端  <br/>
本项目主要以登录注册功能作为后端项目  <br/>
https://segmentfault.com/a/1190000011288053 <br/>
这篇文章写了该功能的细节  <br/>
另外推荐  <br/>
npm install nodemon --save-dev    <br/>
在server文件中开启node server 
