// sql语句
var sqlMap = {
	// 用户
	user: {
		add: 'insert into user( username , password) values ( ?, ?)',
		select_name: 'SELECT * from user where username = ?',
		select_password : 'SELECT * from user where password = ?',
    update_password : 'update user set password = ? where id = ?'
	}
}
module.exports = sqlMap;
