let http = require('http');
let express = require('express');
let socketIo = require("socket.io");
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let path = require('path');
let ejs = require('ejs');
let session = require('express-session');

let app = express();
let port = process.env.PORT || 8080;

let DB = require('./server/modules/db');

app.set('port', port);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/server/views');
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
		secret: 'test',
		proxy: true,
		resave: true,
		saveUninitialized: false,
		cookie: {maxAge: 600000}
	})
);

//router
require('./server/routes')(app);


let server = http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});


//聊天室
let io = new socketIo(server);

io.on("connection", function (clientSocket) {
	// socket.io 使用 emit(eventname,data) 发送消息，使用on(eventname,callback)监听消息

	DB.queryChat(function (error, result) {
		if (error) {
			console.log(error);
		}
		else {
			for (let i = result.length - 1; i >= 0 ; i--) {
				clientSocket.emit("receiveMsg", {client: result[i].client, msg: result[i].msg});
			}
		}
	});

	//监听客户端发送的 sendMsg 事件
	clientSocket.on("sendMsg", function (data) {
		// data 为客户端发送的消息，可以是 字符串，json对象或buffer
		DB.addChat([data.client, data.msg, new Date()], function (error, result) {
			if (error) {
				console.log(error);
			}
		});
		// 使用 emit 发送消息，broadcast 表示 除自己以外的所有已连接的socket客户端。
		clientSocket.broadcast.emit("receiveMsg", data);
	});
});