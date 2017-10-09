/*
	app.js by wuwc
*/
let express = require('express');
let app = express();
let port = process.env.PORT || 8090;

/* 
	路由
 */
app.get('/test',function(req, res){
	res.send({
		"status":"1",
		"msg":"数据请求成功！",
		"data":"Hello World !"
	});
});

app.get('/index',function(req, res){
	res.send({
		"status":"1",
		"msg":"首页数据请求成功！",
		"data":{
			"aa":"123123213"
		}
	});
});


/*
	端口监听
*/
app.listen(port, function(){
	console.log('node started on port ' + port);
});