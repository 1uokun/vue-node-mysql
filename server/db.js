var MySQL = require('mysql');
var $sql = require('./sqlMap');

//数据库连接配置
var create_mysql={host:'localhost', user:'root', password:'123456',};
var mysql = {...create_mysql, database:'vue_node_mysql_learning', port: '3306'};

process.on('uncaughtException', function(err){
  // 如果数据库vue_node_mysql_learning不存在时，创建数据库
  if(err.errno === 1049){
    var conn = MySQL.createConnection(create_mysql);
    MySQL.createConnection(mysql).query($sql.base.create,function(err, result){
      console.error('创建数据库',err,result);
      conn.query($sql.user.create_user,'',function(err, result){
        if(!err){
          conn.query($sql.user.add,["admin","123456"], function(err, result){
          })
        }
      });

    })


  }
});

module.exports = {
  mysql
};
