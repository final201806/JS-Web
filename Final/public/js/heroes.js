$("#menu").sideNav();
var lil=new Vue({
    el: "#lil",
    data: {
        heroes: [
            {"id": "1", "name": "亚巴顿", url: "img/heroes/abaddon_lg.png",  "comment": "亚巴顿",
            "skill": [{name: "first", comment: "first skill", url: "img/abilities/abaddon_death_coil_hp1.png"},
                {name: "second", comment:"second skill", url: "img/abilities/abaddon_aphotic_shield_hp1.png"},
                {name: "third", comment: "third skill", url: "img/abilities/abaddon_frostmourne_hp1.png"}]},
            {"id": "2", "name": "炼金术士", url: "img/heroes/alchemist_lg.png", "comment": "炼金术士",
                "skill": [{name: "first", comment: "first skill"},
                    {name: "second", comment:"second skill"},
                    {name: "third", comment: "third skill"}]}
        ],
        heroId: 0
    },
    methods: {
        detail: function (index) {
            let url = "/heroDetail?id=" + this.heroes[index-1].id;
            console.log(url);
            window.location.href=url;
        }
    }
})
var minj=new Vue({
    el: "#minj",
    data: {
        heroes: [
            {"name": "1", "url": "img/heroes/abaddon_lg.png"}
        ]
    }
})
var zhil=new Vue({
    el: "#zhil",
    data: {
        heroes: [
            {"name": "1", "url": "img/heroes/abaddon_lg.png"}
        ]
    }
})