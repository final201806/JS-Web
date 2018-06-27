Vue.component("page", {
	template: '\t<ul class="pagination">\n' +
	'\t\t<li :class="{ \'disabled\':current === 1 || totalPage === 0 }" @click="current-- && goto(current--)"><a href="#"><i class="material-icons">chevron_left</i></a></li>\n' +
	'\t\t<li v-for="index in pages" @click="goto(index)" :class="{\'active\':current === index, \'waves-effect\':true}" :key="index"><a href="#">{{index}}</a></li>\n' +
	'\t\t<li :class="{ \'disabled\':current === totalPage || totalPage === 0 }" @click="current++ && goto(current++)"><a href="#"><i class="material-icons">chevron_right</i></a></li>\n' +
	'\t</ul>',
	props: ['pageNumber'],
	data: function () {
		return {
			current: 1,
			showItem: 5,
			totalPage: parseInt(this.pageNumber),
			canNext: false
		}
	},
	computed: {
		pages: function () {
			let i;
			let pag = [];
			if (this.current < this.showItem) {
				i = Math.min(this.showItem, this.totalPage);
				while (i) {
					pag.unshift(i--);
				}
			} else {
				let middle = this.current - Math.floor(this.showItem / 2);
				i = this.showItem;
				if (middle > (this.totalPage - this.showItem)) {
					middle = (this.totalPage - this.showItem) + 1
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
			if (index === this.current || index > this.totalPage) return;
			this.current = index;
			//发送ajax请求
			postDetail.getComments(postDetail.postId, index);
		}
	}
});

let postDetail = new Vue({
	el: '#postDetail',
	data: {
		detail: '',
		comments: '',
		commentIsNull: true,
		commentContent: '',
		postId: 1,
		totalComments: 0,
		isLogin: false,
		username: ''
	},
	methods: {
		setPostId: function (postId) {
			this.postId = postId;
		},
		addComment: function () {
			fetch('/comment', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					commentContent: this.commentContent,
					commentAuthorName: this.username,
					postId: postId
				}),
			}).then(response => {
				if (response.status === 200) {
					return response.json();
				}
			}).then(json => {
				console.log(json.code);
				if (json.code === 200)
					window.location.href = '/postDetail?id=' + postId;
			}).catch(error => {
				console.log(error);
			});
		},
		getPostDetail: function getPostDetail(postId) {
			fetch('/post?postId=' + postId, {
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
				if (json !== null) {
					this.detail = json;
					console.log(this.detail);
				}
			}).catch(error => {
				console.log(error);
			});
		},
		getComments: function getComments(postId, pageId) {
			fetch('/comment?postId=' + postId + '&pageId=' + pageId, {
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
				this.comments = json;
				this.commentIsNull = (json.code !== 400);
			}).catch(error => {
				console.log(error);
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

postDetail.getCookie();

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
