var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret) {
	if(typeof ret === 'undefined') {
		res.send('err')
	} else {
		//res.json(ret);
		res.send('ok')
	}
};
// 增加用户接口
router.post('/addUser', (req, res) => {
	var sql_name = $sql.user.select_name
	var sql = $sql.user.add;
	var params = req.body;
	console.log(params);
	conn.query(sql_name,params.username,function(err,result) {
		if(err) {
			console.log(err)
		}
		if(result[0]===undefined) {
			conn.query(sql,[params.username,params.password], function(err, result) {
				if(err) {
					console.log(err)
				}
				if(result) {
					jsonWrite(res, result)
				}
			})
		}else {
			res.send('-1')
		}
	})
	
});

//查找用户接口
router.post('/selectUser', (req,res) => {
	var sql_name = $sql.user.select_name;
	var sql_password = $sql.user.select_password;
	var params = req.body;
	conn.query(sql_name,params.username,function(err, result) {
		if(err) {
			console.log(err)
		}
		if(result[0]===undefined) {
			res.send('-1')
		}else {
			conn.query(sql_password,params.password, function(err, result) {
				if(err) {
					console.log(err)
				}
				if(result[0]===undefined) {
					res.send('0')
				}else {
					jsonWrite(res, result);
				}
			})
		}
	})
});
module.exports = router;