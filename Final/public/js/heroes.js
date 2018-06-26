$("#menu").sideNav();
var lil=new Vue({
    el: "#lil",
    data: {
        heroes: [
            {id: "1", name: "亚巴顿", url: "img/heroes/abaddon_lg.png",  comment: "辅助 - 核心 - 耐久",
                information: "魔霭圣池，一个处于原初群石的裂缝，从中带有先兆力量的蒸汽不断溢出，作为家族力量的源泉，已经惠及数个世代。在居住于洞穴中的魔霭家族，每个新生儿都会在暗黑迷雾中接受沐浴，经过这样的洗礼，他们与大陆的神秘力量获得了内在的联系。随着他们长大，内心坚信自己的使命是誓死保护世袭的传统和领域的风俗——实际上他们守护的不过就是圣池本身。而迷雾的作用原理尚不明朗。 当初生的亚巴顿沐浴在圣池中时，众人都表示事情并不对劲。孩子的双眼里闪耀出洞察之光，在场所有人都大吃一惊，神父们纷纷交头接耳。而他之后的成长道路与所有魔霭族裔的传人并无差别——为战争接受训练，在危机时刻需要他挺身而出，率领家族的军队守卫先祖的大陆。但是亚巴顿总是特立独行。其他人挥着武器训练时，他喜欢在迷雾前沉思。他饱吸从圣池中涌出的蒸汽，开始学习将自己的灵魂与家族深处流出的力量相融合；他变成了被暗黑迷雾笼罩的怪物。 魔霭家族怨气冲天——不论老小都谴责他对自己的责任视而不见。但是亚巴顿驾临战场时，不满全都烟消云散，他们目睹了迷雾的强大力量让他恣意挥洒着生杀大权，族内任何领主都是望尘莫及。",
            skill: [{name: "迷雾缠绕", url: "img/abilities/abaddon_death_coil_hp1.png",
                comment: "亚巴顿以部分生命为代价，释放带有死亡气息的迷雾缠绕伤害敌方单位或治疗友方单位。"},
                {name: "无光之盾", url: "img/abilities/abaddon_aphotic_shield_hp1.png",
                    comment:"召唤黑暗能量环绕友方单位，创造一个护盾，护盾在消失前能吸收一定量的伤害。护盾被摧毁后，它会将之前吸收的伤害反馈给周围的敌方单位。施放时移除目标身上的负面魔法效果。驱散类型：强驱散"},
                {name: "魔霭诅咒", url: "img/abilities/abaddon_frostmourne_hp1.png",
                    comment: "亚巴顿的攻击中带有寒心诅咒，受到攻击的敌人将被减速，同时所有攻击被减速目标的单位将提升移动速度和攻击速度，持续一定时间。"},
                {name: "回光返照", url: "img/abilities/abaddon_borrowed_time_hp1.png",
                    comment: "启动后所有受到的伤害转而治疗你，启动时还将移除大部分的负面效果。只要技能不在冷却过程中，在生命值低于400点时技能会自动启动。可用神杖升级。驱散类型：强驱散"}]},
            {id: "2", name: "炼金术士", url: "img/heroes/alchemist_lg.png", comment: "核心 - 辅助 - 耐久 - 控制 - 先手 - 高爆发",
                information: "投身神圣的化学事业是黑酿家族的传统，但是年轻的拉泽尔无论是野心、创造力还是执着都可谓是前无古人。然而在他成年以后，他却将家族事业置之不顾，开始试着用炼金术制造黄金。如他大胆的名声所述，有一次他宣布要把一整座山全部变成金子。在浪费了二十年时间进行研究和准备后，他的炼金术在众人面前壮观地失败了，实验造成了大面积的破坏，很快他就被囚禁了。但是拉泽尔可不会向挫折屈服，他一直在寻找机会逃出去继续他的研究。当他的牢房来了一个凶猛的食人魔狱友后，他发现机会来了。说服食人魔不要吃他后，拉泽尔用牢房石地上生长的霉菌和苔藓为原料，仔细地调和着一种药酊，准备给食人魔服下。花了一周不到的时间，药酊似乎完成了。当食人魔喝下药剂后，它突然变得狂怒起来，像个无法阻挡的狂战士般，破坏了监狱的铁栏，冲破了墙壁和狱卒。很快他们就发现自己在城市外围的森林中迷路了，虽然留下了一路破坏的踪迹，但没有追兵的迹象。受到药剂后遗症的作用，食人魔显得很安详、快乐，也更热心了。决定合伙后，这对搭档再次出发去寻找拉泽尔炼金术试验所需要的材料。",
                skill: [{name: "酸性喷雾",url: "img/abilities/alchemist_acid_spray_hp1.png",
                    comment: "向目标区域喷洒高压酸雾。穿过受污染地带的敌人每秒会受到物理伤害，同时护甲被削弱。"},
                    {name: "不稳定化合物",url: "img/abilities/alchemist_unstable_concoction_hp1.png",
                        comment:"炼金术士调制一瓶不稳定的化合物，投向敌方英雄，对爆炸点周边范围的单位造成伤害并眩晕。调制的时间越久，伤害越大，眩晕时间也越长。调制5秒后达到最大伤害量和最长眩晕时间。然而，如果5.5秒后还不扔出去的话，则会在炼金术士自己手中爆炸。"},
                    {name: "贪魔的贪婪",url: "img/abilities/alchemist_goblins_greed_hp1.png",
                        comment: "炼金术士将敌人的尸体和赏金神符转化成额外的金币。炼金术士每杀死一个单位，就能获得基础额外金钱和附加额外金钱。如果炼金术士在接下来30秒内又杀死了一个单位，获得了黄金，那么他所获得的附加额外金钱将有一定幅度的增加。另外，激活赏金神符后将获得2.5倍金钱。"},
                    {name: "化学狂暴", url: "img/abilities/alchemist_chemical_rage_hp1.png",
                        comment: "炼金术士诱发他的食人魔同伴进入化学狂暴，降低攻击间隔，提高移动速度和回复能力。"}]},
            {id: "3", name: "龙骑士", url: "img/heroes/dragon_knight_lg.png", comment: "核心 - 推进 - 耐久 - 控制 - 先手 - 高爆发",
                information: "多年来骑士达维安一直在追寻一条传说中的古龙，而他发现自己最终面对的敌人后感到失望：过去让人闻风丧胆的神龙斯莱瑞克已经变得苍老而脆弱，它的双翼已经残破，它所剩不多的龙鳞也开始腐烂，它的爪子变得肿大老化，它曾经引以为傲的火焰吐息现在威力和进水了的火柴差不多。达维安觉得这样的屠龙行径已经不能给他带来任何荣誉，转身就要离开，让他的老对手安息。但是他的脑海里传来了一个声音，斯莱瑞克低声的乞求着，让达维安允许它光荣的战死。达维安同意了，随即发现他的怜悯给他带来了意外的收获：当他将手中的锋刃刺入斯莱瑞克的胸膛时，神龙使出最后的力量用龙爪刺穿了他的喉咙，随着他们血液的融合，斯莱瑞克将它所有的力量随着血液赐予了达维安，也赐予了他数百年的智慧。龙的死去将他们的命运完全的绑定在了一起，龙骑士横空出世。古老的力量在龙骑士达维安的身体里沉睡着，应他的呼唤而复苏。或者，也许是神龙呼唤着骑士让他复苏...",
                skill: [{name: "火焰气息",url: "img/abilities/dragon_knight_breathe_fire_hp1.png",
                    comment: "向龙骑士的前方喷射出一团火焰，烧灼碰到的敌人，并使其攻击力降低。"},
                    {name: "神龙摆尾",url: "img/abilities/dragon_knight_dragon_tail_hp1.png",
                        comment:"龙骑士用盾对身边的一个敌方单位进行打击，造成眩晕和少量伤害。在古龙形态下施法距离提高到400。"},
                    {name: "龙族血统",url: "img/abilities/dragon_knight_dragon_blood_hp1.png",
                        comment: "龙族的鲜血能提高龙骑士的生命恢复速度以及护甲。"},
                    {name: "古龙形态", url: "img/abilities/dragon_knight_elder_dragon_form_hp1.png",
                        comment: "龙骑士能够变身成为三种古龙形态之一，同时提升移动速度以及神龙摆尾的施法距离，并且获得新的能力。等级1 碧龙 - 腐蚀吐息：攻击时附带毒素，造成每秒20点伤害，持续5秒。等级2 赤龙 - 溅射攻击：攻击时伤害将溅射到300范围内所有单位，并且全部受到腐蚀吐息的作用。等级3 苍龙 - 冰霜吐息：降低攻击溅射到的敌人30%移动速度和30攻击速度，持续3秒，并且全部受到腐蚀吐息的作用。"}]},
            {id: "4", name: "斧王", url: "img/heroes/axe_lg.png", comment: "先手 - 耐久 - 控制 - 打野",
                information: "作为红雾军团的一名步兵，蒙哥可汗的目标是成为红雾军团的将军。在一场又一场的战斗中，他用血腥的战果证明了自己的价值。他毫不犹豫杀死上级的行为帮助他完成了晋升。在长达七年的千湖之境战役中，他用光荣的杀戮给自己带来了荣誉，他的声望比从前更耀眼了，但他身边的战友也在一个个地减少。在最终战胜的夜晚，蒙哥可汗宣布他为红雾军团的新将军，并冠以自身“斧王”的头衔。但他的军队却只有他一人，虽然许多人是战死的，但更多人则是死在斧王的刃下。不用说，现在大多数战士都不想由他领导。但这对斧王来说不算什么，因为他的军队只需要他一个人就够了。",
                skill: [{name: "狂战士之吼",url: "img/abilities/axe_berserkers_call_hp1.png",
                    comment: "斧王嘲讽附近的敌方单位，强迫他们攻击自己，同时获得额外护甲。"},
                    {name: "战斗饥渴",url: "img/abilities/axe_battle_hunger_hp1.png",
                        comment:"激怒一个敌方单位，使他受到减速和持续伤害，直到他杀死一个单位或者持续时间结束为止。斧王从每个受战斗饥渴影响的敌人身上获得移动速度加成。可用神杖升级。"},
                    {name: "反击螺旋",url: "img/abilities/axe_counter_helix_hp1.png",
                        comment: "受攻击时，斧王做出螺旋反击，对附近所有敌方单位造成纯粹伤害。"},
                    {name: "淘汰之刃", url: "img/abilities/axe_culling_blade_hp1.png",
                        comment: "斧王寻找弱点来出击，直接秒杀低血量的敌方单位，血量如果过高则只造成一定伤害。当秒杀的是敌方英雄时，本技能不会进入冷却时间。同时斧王和附近友军单位获得移动速度加成。"}]},
            {id: "5", name: "炼金术士", url: "img/heroes/beastmaster_lg.png", comment: "先手 - 控制 - 耐久 - 高爆发",
                information: "卡洛克自出生伊始就被当做兽婴。他的母亲在他出生时就已死去；他的父亲是斯洛姆末代帝王的马蹄铁匠，在他五岁时被马群践踏致死。后来，卡洛克将自己卖到国王的动物园干活，在那里，他和宫廷里面饲养的狮子，猩猩，野鹿以及其他一些很少见的甚至传说中的野兽一起长大。在他七岁那年，一个冒险者带着一只没人见过的野兽来觐见国王。当这只野兽被国王的链条锁住的时候，它说话了，乞求自由，然而它的嘴并没有张开。国王大笑，命令野兽表演助兴，遭到拒绝以后，国王用他的疯狂权杖狠狠的抽打了野兽，并把它关在了兽栏里面。接下来的几个月里，卡洛克每天都给这个受伤的野兽偷偷的带去食物和药物，然而这一切只能减缓野兽的死亡。这只野兽和卡洛克开始了交流，无言的交流，他们之间的情感纽带也随着时间的推移而加深，最后卡洛克发现他竟然能够和宫廷动物园里面的所有动物交流。在那只野兽死去的晚上，卡洛克狂怒无比，他煽动了所有的动物一起反叛，并且将它们的笼子打开，在宫廷广场上大开杀戒。末代帝王在动乱中受伤。在混乱之中，一只皇家雄鹿在这个救了它的男孩面前屈膝，让他以兽王的身份骑上它，带他跃过了堡垒的高墙，逃出生天。现在，兽王卡洛克已经成长为一个男子汉，并且仍然能够自由的和野生动物交谈。他已经成为了拥有自然狂猛野性的战士。",
                skill: [{name: "野性之斧",url: "img/abilities/beastmaster_wild_axes_hp1.png",
                    comment: "兽王投出他的斧头然后召回它们，切开飞过的敌人和树木。每把飞斧只对同一个敌人攻击一次，并且使受到来自兽王和其单位的伤害增加。"},
                    {name: "野性呼唤",url: "img/abilities/beastmaster_call_of_the_wild_hp1.png",
                        comment:"兽王召唤野兽前来助阵。\n" +
                        "1级：1级豪猪\n" +
                        "2级：2级豪猪 \n" +
                        "3级：3级豪猪 + 战鹰\n" +
                        "4级：4级豪猪 + 战鹰 + 随机中立生物"},
                    {name: "野性之心",url: "img/abilities/beastmaster_inner_beast_hp1.png",
                        comment: "唤起友军内心的狂怒，提高他们的攻击速度。"},
                    {name: "原始咆哮", url: "img/abilities/beastmaster_primal_roar_hp1.png",
                        comment: "兽王发出震耳欲聋的咆哮，使目标敌方单位受到伤害并眩晕，同时在兽王和他的猎物之间清出一条通道。通道上的所有单位都被震开，也受到伤害并被降低移动和攻击速度。另外，兽王和他的单位获得30%移动速度提升，持续3秒。可用神杖升级。"}]},
            // {id: "2", name: "炼金术士", url: "img/heroes/alchemist_lg.png", comment: "11",
            //     information: "",
            //     skill: [{name: "first",url: "img/abilities/alchemist_acid_spray_hp1.png",
            //         comment: "first"},
            //         {name: "second",url: "img/abilities/alchemist_unstable_concoction_hp1.png",
            //             comment:"second"},
            //         {name: "third",url: "img/abilities/alchemist_goblins_greed_hp1.png",
            //             comment: "third"},
            //         {name: "skill", url: "img/abilities/alchemist_chemical_rage_hp1.png",
            //             comment: "skill"}]},
        ],
        heroId: 0
    },
    methods: {
        detail: function (index) {
            let url = "/heroDetail?id=" + this.heroes[index-1].id;
            console.log(url);
            window.location.href=url;
        },
        changeName: function (name,comment) {
            document.getElementById("heroName").innerHTML=name;
            document.getElementById("heroComment").innerHTML=comment;
        },
        changeBack: function () {
            document.getElementById("heroName").innerHTML="英雄名称";
            document.getElementById("heroComment").innerHTML="英雄描述";
        }
    }
})
var minj=new Vue({
    el: "#minj",
    data: {
        heroes: [
            {id: "1", name: "敌法师", url: "img/heroes/antimage_lg.png", comment: "核心 - 逃生 - 高爆发",
                information: "当山下的王国被潮水般的侵略者们横扫的时候，星隐寺的僧侣们只是在山上默默的注视着那崎岖的山谷。苦行且务实的他们在偏远高山的寺院里，独自沉浸在远离尘嚣的冥想中，不受任何魔法元素或者神灵的干扰。然而，死亡之神的军队来了，带着摧毁所有信仰，并让当地人转而信奉死亡之神的虚无主义。带着他们千年的战乱和血雨腥风，死亡军团将他们打败的敌人的灵魂和尸骨撕裂，用这种恐怖来摧毁星隐寺的信仰。面对此等攻击，寺院只坚持了不到两个星期，甚至还有一些刚从冥想中醒来的僧侣认为，这些入侵者不过是恶魔用来干扰他们冥想的幻象，于是他们死在了自己的冥想垫上。只有一个人幸免于难，他是来星隐寺寻求智慧，却尚未得到寺院认可的侍僧。他惊恐地看着自己曾经侍奉过的僧侣们被杀，然后又被复活成为死亡之神的祭司。带着星隐寺残存的珍贵教义卷轴，他艰难地到达了一个相对安全的地方，他发誓，不仅要消灭死亡之神的魔法师，更要将“魔法”这个词从世上抹去。",
                skill: [{name: "法力损毁",url: "img/abilities/antimage_mana_break_hp1.png",
                    comment: "每次攻击损毁目标一定量的魔法值，并额外造成相当于损毁魔法值50%的伤害。"},
                    {name: "闪烁",url: "img/abilities/antimage_blink_hp1.png",
                        comment:"让敌法师自由出入战场的短距离传送。"},
                    {name: "法术护盾",url: "img/abilities/antimage_spell_shield_hp1.png",
                        comment: "提高敌法师的魔法抗性。可用神杖升级。"},
                    {name: "法力虚空", url: "img/abilities/antimage_mana_void_hp1.png",
                        comment: "根据目标损失的魔法值，对目标和其周围的敌人造成伤害。主要目标受到短暂眩晕。"}]}
        ],
        heroId: 0
    },
    methods: {
        detail: function (index) {
            let url = "/mheroDetail?id=" + this.heroes[index-1].id;
            console.log(url);
            window.location.href=url;
        },
        changeName: function (name,comment) {
            document.getElementById("heroName").innerHTML=name;
            document.getElementById("heroComment").innerHTML=comment;
        },
        changeBack: function () {
            document.getElementById("heroName").innerHTML="英雄名称";
            document.getElementById("heroComment").innerHTML="英雄描述";
        }
    }
})
var zhil=new Vue({
    el: "#zhil",
    data: {
        heroes: [
            {id: "1", name: "远古冰魄", url: "img/heroes/ancient_apparition_lg.png", comment: "辅助 - 控制 - 高爆发",
                information: "卡尔德，远古冰魄，是时光之外的冰冷投影。他来自寒冷的无尽虚空，目睹宇宙诞生，见证宇宙终结。卡尔德是夕在，今在，永在的无上力量...我们的所有认知，所有自认为强大的事物，在永恒的卡尔德看来，不过是最细微最无力的附和。世间有这样的传言，随着宇宙的老化并走向衰亡，卡尔德的力量和光芒也将变得更强——远古冰魄将更加年轻，更加强大。他对冰霜的控制能够冻结一切事物，他的投影放出的光芒异常夺目。他将不再是魂魄，而是神！",
                skill: [{name: "寒霜之足",url: "img/abilities/ancient_apparition_cold_feet_hp1.png",
                    comment: "在一个敌方单位身上施放造成持续伤害的寒冰咒印，但对象只要远离施法点足够距离即可消除咒印。如果受攻击单位没有在4秒内走出消除距离，则将被眩晕并冻在原地。"},
                    {name: "冰霜漩涡",url: "img/abilities/ancient_apparition_ice_vortex_hp1.png",
                        comment:"创造一个寒冰能量的漩涡，降低范围内敌人的移动速度，增加他们受到的魔法伤害。"},
                    {name: "极寒之触",url: "img/abilities/ancient_apparition_chilling_touch_hp1.png",
                        comment: "一阵极寒之风对友方英雄施加魔法，使他们接下来的数次普通攻击造成额外魔法伤害。每次攻击都会减缓敌人的移动速度。无论选择何处施放，远古冰魄总是会获得状态效果。"},
                    {name: "冰晶爆轰", url: "img/abilities/ancient_apparition_ice_blast_hp1.png",
                        comment: "向地图的任意位置发出爆炸冰球，在冰球飞行时再次施放此技能将使其停下，使所在区域产生毁灭性的冰爆。冰球飞行的距离越长，冰爆影响的范围也将越大。冰爆范围内的所有敌方单位将马上受到大量伤害，而处于冰球飞行路径上的敌方英雄将与冰爆范围内的敌方英雄一同受到寒霜诅咒的作用，持续受到小幅伤害，同时无法恢复生命值。在此期间如果生命值低于一定百分比，该英雄将立刻死亡。可用神杖升级。"}]}
        ],
        heroId: 0
    },
    methods: {
        detail: function (index) {
            let url = "/zheroDetail?id=" + this.heroes[index-1].id;
            console.log(url);
            window.location.href=url;
        },
        changeName: function (name,comment) {
            document.getElementById("heroName").innerHTML=name;
            document.getElementById("heroComment").innerHTML=comment;
        },
        changeBack: function () {
            document.getElementById("heroName").innerHTML="英雄名称";
            document.getElementById("heroComment").innerHTML="英雄描述";
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