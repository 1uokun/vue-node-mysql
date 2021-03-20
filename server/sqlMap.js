// sql语句
var sqlMap = {
  // 自动创建数据表
  base: {
    create: 'create database vue_node_mysql_learning'
  },
	// 用户
	user: {
		add: 'insert into user( username , password) values ( ?, ?)',
		select_name: 'SELECT * from user where username = ?',
		select_password : 'SELECT * from user where password = ?',
    update_password : 'update user set password = ? where id = ?',
    //脚步创建数据库表
    create_user:`CREATE TABLE user(
                id INT NOT NULL AUTO_INCREMENT,
                username VARCHAR(100) NOT NULL,
                password VARCHAR(40) NOT NULL,
                PRIMARY KEY ( id )
                )ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
	}
};
module.exports = sqlMap;
