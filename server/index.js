// node 后端服务器
const userApi = require('./api/userApi');
const listApi = require('./api/listmore');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser("secret_password"));

//cookie验证
app.use(function (req, res, next) {
  console.log("多个cookies",req.cookies); //Cookie: name1=value1; name2=value2
  console.log("单个cookie",req.cookie);  //Cookie: name=value
  console.log("加密后的cookie",req.signedCookies);
  if(req.signedCookies.isAuth === "1"){
    // 验证拦截
  }
  return next();
});

// 后端api路由
app.use('/api/user', userApi);
app.use('/api/list', listApi);
// 监听端口
// app.listen(3000);
// 添加https环境
const certOptions = require('../https')
const https = require('https');
https.createServer(certOptions, app).listen(3000);


console.log('success listen at port:3000......');
