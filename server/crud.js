var connection = require("./conn.js");

var CRUD = {
	insertData: function(sql, arr, callback) {
		connection.Client.query(sql, arr, function(error, result) {
			if (error) {
				console.log("数据插入失败");
				return;
			}
			console.log("插入成功");
			callback(result);
		})
	},
	selectData: function(sql, arr, callback) {
		connection.Client.query(sql, arr, function(error, result) {
			if (error) {
				console.log("失败");
				return;
			}
			console.log("成功");
			callback(result);
		})
	}
}

module.exports = CRUD;