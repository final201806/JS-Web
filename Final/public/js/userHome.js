let login = new Vue({
	el: '#login',
	data: {
		isLogin: false,
		username: ''
	},
	methods: {
		getCookie: function() {
			let user = getck('user');
			if (user !== null && user !== '') {
				this.username = JSON.parse(user.slice(2)).username;
				this.isLogin = true;
				console.log('in')
			}
			else {
				this.isLogin = false;
				console.log('out')
			}
		}
	},
	mounted: function () {
		$("#menu").sideNav();
	}
});

function getck(sname) {
	var acookie = document.cookie.split("; ");
	for (var i = 0; i < acookie.length; i++) {
		var arr = acookie[i].split("=");
		if (sname == arr[0]) {
			if (arr.length > 1)
				return unescape(arr[1]);
			else
				return "";
		}
	}
	return "";
}

login.getCookie();

//用户信息
fetch('/userDetail?username=' + username, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
}).then(response => {
	if (response.status === 200) {
		return response.json();
	}
	else {
		new Vue({
			el: '#userDetail',
			data: {
				isNull: false
			}
		});
	}
}).then(json => {
	console.log(json)
	new Vue({
		el: '#userDetail',
		data: {
			userDetail: json,
			isNull: false
		}
	});
}).catch(error => {
	console.log(error);
});

//用户发帖
fetch('/userPostList?username=' + username, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
}).then(response => {
	if (response.status === 200) {
		return response.json();
	}
	else {
		new Vue({
			el: '#posts',
			data: {
				isNull: false
			}
		});
	}
}).then(json => {
	console.log(json)
	new Vue({
		el: '#posts',
		data: {
			posts: json,
			isNull: json.code !== 400
		}
	});
}).catch(error => {
	console.log(error);
});

//用户评论
fetch('/userCommentList?username=' + username, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
}).then(response => {
	if (response.status === 200) {
		return response.json();
	}
	else {
		new Vue({
			el: '#comments',
			data: {
				isNull: false
			}
		});
	}
}).then(json => {
	console.log(json)
	new Vue({
		el: '#comments',
		data: {
			comments: json,
			isNull: json.code !== 400
		}
	});
}).catch(error => {
	console.log(error);
});