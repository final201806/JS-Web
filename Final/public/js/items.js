$("#menu").sideNav();
var div1=new Vue({
    el: "#div1",
    data: {
        divs: [
            {"name": "消耗","url": "img/item/1.png","item": [
                    {"name": "净化药水", "url": "img/items/clarity_lg.png"},
                    {"name": "树之祭祀", "url": "img/items/tango_lg.png"},
                    {"name": "治疗药膏", "url": "img/items/flask_lg.png"}
                ]},
            {"name": "属性","url": "img/item/2.png","item": [
                    {"name": "铁树枝干", "url": "img/items/branches_lg.png"},
                    {"name": "力量手套", "url": "img/items/gauntlets_lg.png"},
                    {"name": "敏捷便鞋", "url": "img/items/slippers_lg.png"}
                ]},
            {"name": "初级","url": "img/item/2.png","item": [
                    {"name": "守护指环", "url": "img/items/ring_of_protection_lg.png"},
                    {"name": "圆盾", "url": "img/items/stout_shield_lg.png"},
                    {"name": "压制之刃", "url": "img/items/quelling_blade_lg.png"}
                ]},
            {"name": "普通","url": "img/item/3.png","item": [
                    {"name": "怨灵系带", "url": "img/items/wraith_band_lg.png"},
                    {"name": "空灵挂件", "url": "img/items/null_talisman_lg.png"},
                    {"name": "魔杖", "url": "img/items/magic_wand_lg.png"}
                ]}
        ]
    },
    methods: {
        changeName: function (name) {
            document.getElementById("itemName").innerHTML=name;
        },
        changeBack: function () {
            document.getElementById("itemName").innerHTML="物品名称";
        }
    }
})
var div2=new Vue({
    el: "#div2",
    data: {
        divs: [
            {"name": "辅助","url": "img/item/4.png","item": [
                    {"name": "王者之戒", "url": "img/items/ring_of_basilius_lg.png"},
                    {"name": "恢复头巾", "url": "img/items/headdress_lg.png"},
                    {"name": "影之灵龛", "url": "img/items/recipe_urn_of_shadows_lg.png"}
                ]},
            {"name": "武器","url": "img/item/5.png","item": [
                    {"name": "蝴蝶", "url": "img/items/butterfly_lg.png"},
                    {"name": "水晶剑", "url": "img/items/lesser_crit_lg.png"},
                    {"name": "幻影斧", "url": "img/items/manta_lg.png"}
                ]},
            {"name": "法器","url": "img/item/5.png","item": [
                    {"name": "达贡之神力", "url": "img/items/dagon_5_lg.png"},
                    {"name": "紫苑", "url": "img/items/recipe_orchid_lg.png"},
                    {"name": "EUL的神圣法杖", "url": "img/items/cyclone_lg.png"}
                ]},
            {"name": "圣物","url": "img/item/6.png","item": [
                    {"name": "圣剑", "url": "img/items/rapier_lg.png"},
                    {"name": "掠夺者之斧", "url": "img/items/reaver_lg.png"},
                    {"name": "恶魔刀锋", "url": "img/items/demon_edge_lg.png"}
                ]}
        ]
    },
    methods: {
        changeName: function (name) {
            document.getElementById("itemName").innerHTML=name;
        },
        changeBack: function () {
            document.getElementById("itemName").innerHTML="物品名称";
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
