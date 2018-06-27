$("#menu").sideNav();
$('.parallax').parallax();
$('.carousel').carousel();
$('.collapsible').collapsible();
$(document).ready(function () {
	$('.modal').modal();
});

let addPostVue = new Vue({
	el: '#addPost',
	data: {
		title: '',
		content: ''
	},
	methods: {
		addPost: function () {
			// 增
			fetch('/post', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					postTitle: this.title,
					postContent: this.content,
					postAuthorName: login.username,
				}),
			}).then(response => {
				if (response.status === 200) {
					return response.json();
				}
			}).then(json => {
				if (json.code === 200)
					window.location.href = '/forum'
				// document.body.innerText = json.toString();
			}).catch(error => {
				console.log(error);
			});
		}
	}
});

let postListVue = new Vue({
	el: '#postList',
	data: {
		posts: ''
	},
	methods: {
		postDetail: function (postId) {
			fetch('/index', {
				method: 'GET',
			}).catch(error => {
				console.log(error);
			});
		},
		getPostList: function (pageId) {
			fetch('/postList?pageId=' + pageId, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}).then(response => {
				if (response.status === 200) {
					return response.json();
				}
			}).then(json => {
				this.posts = json;
			}).catch(error => {
				console.log(error);
			});
		}
	}
});

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

//查
// function getPostList(pageId) {
// 	fetch('/postList?pageId=' + pageId, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Accept': 'application/json'
// 		}
// 	}).then(response => {
// 		if (response.status === 200) {
// 			return response.json();
// 		}
// 	}).then(json => {
// 		postListVue.posts = json;
// 	}).catch(error => {
// 		console.log(error);
// 	});
// }

Vue.component("page", {
	template: "#page",
	data: function () {
		return {
			current: 1,
			showItem: 5,
			allpage: parseInt(pageNumber),
			canNext: false
		}
	},
	computed: {
		pages: function () {
			let i;
			let pag = [];
			if (this.current < this.showItem) { //如果当前的激活的项 小于要显示的条数
				//总页数和要显示的条数那个大就显示多少条
				i = Math.min(this.showItem, this.allpage);
				while (i) {
					pag.unshift(i--);
				}
			} else { //当前页数大于显示页数了
				let middle = this.current - Math.floor(this.showItem / 2);
				i = this.showItem;
				if (middle > (this.allpage - this.showItem)) {
					middle = (this.allpage - this.showItem) + 1
				}
				while (i--) {
					pag.push(middle++);
				}
			}
			return pag;
		}
	},
	methods: {
		goto: function (index) {
			if (index === this.current || index > this.allpage) return;
			this.current = index;
			//这里可以发送ajax请求
			// console.log(this.current)
			// console.log(this.allpage)
			// this.canNext = (this.current === this.allpage);
			// console.log(this.canNext)
			postListVue.getPostList(index);
		}
	}
});

let pageVue = new Vue({
	el: '#myPage',
});

postListVue.getPostList(pageId);

//改
// fetch('/post', {
// 	method: 'PUT',
// 	headers : {
// 		'Content-Type': 'application/json',
// 		'Accept': 'application/json'
// 	},
// 	body: JSON.stringify({
// 		postTitle: '4up1',
// 		postContent: '4up1',
// 		postId: 5,
// 	}),
// 	redirect: "follow",
// }).then(response => {
// 	if (response.status === 200) {
// 		return response.json();
// 	}
// }).then(json => {
// 	console.log(json.code)
// 	document.body.innerText = json.toString();
// }).catch(error => {
// 	console.log(error);
// });

//删
// fetch('/post', {
// 	method: 'DELETE',
// 	headers : {
// 		'Content-Type': 'application/json',
// 		'Accept': 'application/json'
// 	},
// 	body: JSON.stringify({
// 		// postTitle: '4up',
// 		// postContent: '4up',
// 		postId: 4,
// 	}),
// 	redirect: "follow",
// }).then(response => {
// 	if (response.status === 200) {
// 		return response.json();
// 	}
// }).then(json => {
// 	console.log(json.code)
// 	document.body.innerText = json.toString();
// }).catch(error => {
// 	console.log(error);
// });