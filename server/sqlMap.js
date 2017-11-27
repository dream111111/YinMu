var sqlMap = {
    user: {
        add: "insert into user values (null,?,?)",
        select_name: 'SELECT * from user where username = ?',    //查询 username
        select_password: 'SELECT * from user where password = ?'      //查询 password
    }
}
module.exports = sqlMap;