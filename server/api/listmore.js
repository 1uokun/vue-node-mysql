var express = require('express');
var router = express.Router();
var https = require('https');


//中间件
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.send('err')
  } else {
    res.send(ret)
  }
};
// hello页面列表数据
router.get('/more', (req, res) => {
  var request =  https.request({
    hostname:'m.lagou.com',
    port:'443',
    path:'/listmore.json?'+req._parsedUrl.query,
    method:'GET'
  },(resp)=>{
    let results = '';
    //监听接受数据
    resp.on('data',(dataObj)=>{
      results += dataObj;
    })
    //监听关闭
    resp.on('end',()=>{
      jsonWrite(res, results)
    })
  })
  // 发送请求
  request.end();

});

module.exports = router;
