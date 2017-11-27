var express = require("express");
var router = express.Router();
var crud = require("./crud.js");
var $sql = require('./sqlMap');
var connection = require("./conn.js");

router.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.send('err')
    } else {
        res.send('ok')
    }
};
// 编写接口了  注册
router.post("/adduser", function(req, res) {
	//接受用户参数
	var username = req.body.username;
	var password = req.body.password;
	var sql =  $sql.user.add;
	var sql_name = $sql.user.select_name
	// 给方法的参数准备好
	var arr = [username, password];

	 connection.Client.query(sql_name,username,function(err,result) {
        if(err) {
            console.log(err)
        }
        if(result[0]===undefined) {
           crud.insertData(sql, arr, function(result) {
                if(result) {
                    jsonWrite(res, result)
                }
            })
        }else {
            res.send('-1')    //当前注册username与数据库重复时，data返回-1
        }
    })
})

router.post("/login", function(req, res) {
	// 用户传递的数据
	var username = req.body.username;
	var password = req.body.password;
	var sql = "select * from user where username=?";
	var sql_password = $sql.user.select_password;
	var loginArr1 = [username];
	var loginArr2 = [password];
	crud.selectData(sql, loginArr1, function(result) {
		if (result[0] === undefined) {
			res.send('-1')
		} else {
			crud.selectData(sql_password,loginArr2,function(result){
				if (result[0] === undefined){
					res.send('0')
				}else{
					 jsonWrite(res, result)
				}
			})
		}
	})
})



module.exports = router;