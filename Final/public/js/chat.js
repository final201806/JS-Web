let socket = io.connect();
let records = [];

let chatVue = new Vue({
	el: '#chat',
	data: {
		isLogin: false,
		username: '',
		msg: '',
		records: records
	},
	methods: {
		send: function () {
			if (this.msg.replace(/^\s+|\s+$/g, "") === null || this.msg.replace(/^\s+|\s+$/g, "") === '') {

			}
			else {
				const data = {client: this.username, msg: this.msg};

				socket.emit("sendMsg", data);
				records.push(data);
				this.msg = '';
				this.$nextTick(function () {
					chatDiv.scrollTop = chatDiv.scrollHeight;
				});
			}
		},
		receive: function (data) {
			records.push(data);
			this.$nextTick(function () {
				chatDiv.scrollTop = chatDiv.scrollHeight;
			});
		},
		getCookie: function() {
			let user = getCookie('user');
			if (user !== null && user !== '') {
				this.username = JSON.parse(user.slice(2)).username;
				this.isLogin = true;
				console.log('in')
			}
			else {
				this.isLogin = false;
				console.log('out')
			}
		},
	},
	mounted: function () {
		$("#menu").sideNav();
	}
});

chatVue.getCookie();

socket.on("receiveMsg", function (data) {
	// records.push(data);
	chatVue.receive(data)
});

let chatDiv = document.getElementById('chatDiv');

function getCookie(name) {
	let cookie = document.cookie.split("; ");
	for (let i = 0; i < cookie.length; i++) {
		let arr = cookie[i].split("=");
		if (name === arr[0]) {
			if (arr.length > 1)
				return unescape(arr[1]);
			else
				return "";
		}
	}
	return "";
}
