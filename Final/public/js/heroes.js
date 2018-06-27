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
            {id: "6", name: "裂魂人", url: "img/heroes/spirit_breaker_lg.png", comment: "核心 - 先手 - 控制 - 耐久 - 逃生",
                information: "裂魂人巴拉森来自元素领域，他高傲、强大、凶猛且精通元素之力，来到物质世界参与那些会影响到元素世界的事件。为此他准备了一个能派上用处的形态，既存在于我们的物质世界，又存在于物质世界之外。他的物理形态来自于我们的物质世界，又像牛又像人，有蹄和手，这个外表象征着他的力量、速度与狡猾。他戴着的鼻环则暗示了他侍奉于一位藏在幕后的主人，而这个世界对他来说不过是元素世界的影子。",
                skill: [{name: "暗影冲刺",url: "img/abilities/spirit_breaker_charge_of_darkness_hp1.png",
                    comment: "裂魂人盯紧一个敌方单位，开始无视一切物体的冲刺。途中经过的所有敌方单位和目标单位都将受到巨力重击。如果目标单位在到达前死亡了，裂魂人将他的目标改为原路径上最近的一个敌方单位。"},
                    {name: "神行太保",url: "img/abilities/spirit_breaker_empowering_haste_hp1.png",
                        comment:"裂魂人的高速移动给他带来力量，提高附近友军单位的移动速度。技能可以施放，施放后效果提升50%，持续6秒，然而技能在冷却过程中被动效果将会减半。"},
                    {name: "巨力重击",url: "img/abilities/spirit_breaker_greater_bash_hp1.png",
                        comment: "攻击时有一定概率眩晕并击退敌方单位，打出重击后获得移动速度加成。重击的伤害值为移动速度的一定百分比。"},
                    {name: "幽冥一击", url: "img/abilities/spirit_breaker_nether_strike_hp1.png",
                        comment: "裂魂人遁入幽冥领域，从不幸的目标身旁再次出现，发动当前等级的巨力重击并造成额外伤害。可用神杖升级。"}]},
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
                        comment: "根据目标损失的魔法值，对目标和其周围的敌人造成伤害。主要目标受到短暂眩晕。"}]},
            {id: "2", name: "幻影刺客", url: "img/heroes/phantom_assassin_lg.png", comment: "核心 - 逃生",
                information: "通过占卜和预见，魅影之纱一直严格的甄选一些婴儿来抚养成人，成为她们的刺客。这是一个将刺杀视作神圣的自然法则的女刺客同盟。魅影之纱通过冥想和神谕来确定他们的暗杀目标。她们并不接受契约，也从不因为政治斗争或者金钱利益出手。她们的刺杀完全没有时间规律，似乎是随性为之：不管目标是执掌大权，还是耕田放牧，对她们来说并没有任何差别。即使这些刺杀行为有一个固定的套路，那也是只有组织成员才知道。目标在她们眼中都是牺牲品，而丧命于她们手中则是莫大的荣耀。作为幻影刺客，她们只有组织所赋予的身份，而任何一个幻影刺客都能填补另一个的空缺；她们甚至连代号都不为人知。也许成员有很多，也许只有几个。那谜样面纱之下的真相无人知晓。只有一个，在四下无人之时，那面纱会时不时的被隐秘低语所拂动，低语中，是她自己的名字：茉崔蒂。",
                skill: [{name: "窒息之刃",url: "img/abilities/phantom_assassin_stifling_dagger_hp1.png",
                    comment: "对敌方单位掷出一把匕首，减缓其移动速度，并造成物理伤害，数值为65+幻影刺客攻击伤害的25 40 55 70%，同时继承物品和技能的攻击效果。"},
                    {name: "幻影突袭",url: "img/abilities/phantom_assassin_phantom_strike_hp1.png",
                        comment:"闪烁到一个友方或敌方单位身边，如果是敌方单位则在攻击该目标时获得攻击速度加成。"},
                    {name: "模糊",url: "img/abilities/phantom_assassin_blur_hp1.png",
                        comment: "幻影刺客集中注意力，提升自己闪避敌方攻击的技艺。当附近没有敌方英雄时身形变得模糊，从敌方小地图上消失。与其他闪避效果为非线性叠加。"},
                    {name: "恩赐解脱", url: "img/abilities/phantom_assassin_coup_de_grace_hp1.png",
                        comment: "幻影刺客修炼她的战斗技巧，有一定概率对敌方单位造成毁灭性的致命一击。致命一击的效果对窒息之刃同样有效。"}]},
            {id: "3", name: "力丸", url: "img/heroes/riki_lg.png", comment: "核心 - 逃生 - 控制",
                information: "力丸是伟大的塔林王朝的二皇子。他有一个将会继承王位的兄长，还有一个受到百般照顾的弟弟，而作为二子的力丸，则似乎生来就是隐形人。他自己很注意培养这一项特殊才能，在一个晚上，国家被叛徒所颠覆，他的家人被屠杀，只有力丸因为隐身技能活了下来。矮小而敏捷的力丸用烟雾做掩护，无比谨慎的逃离了，他也是唯一逃脱的皇族。善于突袭的他杀出了皇家庭院，无声地切开一个又一个敌人的喉咙。不再背负皇室治国之责以后，力丸开始运用他的天赋以谋生，他成为了一名隐形刺客。现在他于无声中将敌人杀死，不断精进自己的技术，期望有一天可以能够手刃那些杀死他家人，夺走他国家的叛徒。",
                skill: [{name: "烟幕",url: "img/abilities/riki_smoke_screen_hp1.png",
                    comment: "丢下一个烟雾弹，沉默处于范围内的敌方单位，同时使他们的大多数攻击落空，而且移动速度被减缓。"},
                    {name: "闪烁突袭",url: "img/abilities/riki_blink_strike_hp1.png",
                        comment:"传送到一个目标背后，如果是敌人则对其造成额外伤害。"},
                    {name: "刀光谍影",url: "img/abilities/riki_permanent_invisibility_hp1.png",
                        comment: "力丸遁入阴影，保持隐身状态。每次力丸从背后攻击敌人都会造成基于敏捷值的额外伤害。主动攻击敌人，力丸将会显形。"},
                    {name: "绝杀秘技", url: "img/abilities/riki_backstab_hp1.png",
                        comment: "持续施法 - 转移出现实位面，每秒从背后攻击一次500范围内的每个敌人。可用神杖升级。"}]},
            {id: "4", name: "恐怖利刃", url: "img/heroes/terrorblade_lg.png", comment: "核心 - 推进 - 高爆发",
                information: "恐怖利刃是恶魔中的掠夺者——这个无法无天的魔头就连恶魔都惧怕三分。他曾因对恶魔领主动了贼念，无视了所有规范他行为的基本法则，触犯了七度地狱的所有法规。他被好好上了一课：原来还有比地狱更可怕的地方。接下来是短暂又残酷的审问，最终他被打入了荒邪之狱，这是一个隐藏的位面，恶魔们将它们的同类囚禁在这里。荒邪之狱并不是普通的监狱，这是现实的暗黑镜像，恶魔经过判决都到这里来直视他们自身灵魂中的扭曲倒影。然而恐怖利刃不但没有受苦，反而将自身最邪恶的倒影转化成了操控自如的力量，并将他的恐怖全数释放。",
                skill: [{name: "倒影",url: "img/abilities/terrorblade_reflection_hp1.png",
                    comment: "恐怖利刃映出所有敌方英雄的黑暗倒影对其进行反制，目标在短时间内将被自身倒影攻击，移动速度也会被减缓。倒影为无敌状态。"},
                    {name: "惑幻",url: "img/abilities/terrorblade_conjure_image_hp1.png",
                        comment:"创造一个恐怖利刃的幻象，可以攻击敌人造成伤害。"},
                    {name: "魔化",url: "img/abilities/terrorblade_metamorphosis_hp1.png",
                        comment: "恐怖利刃变换形态，化身成可怕的恶魔并具备远程攻击能力。任何恐怖利刃的幻象在900范围内也将魔化。"},
                    {name: "魂断", url: "img/abilities/terrorblade_sunder_hp1.png",
                        comment: "隔断恐怖利刃以及目标英雄的灵魂并将双方的当前血量进行互换。交换后双方英雄的生命值必定在一定百分比以上。"}]},
            {id: "5", name: "复仇之魂", url: "img/heroes/vengefulspirit_lg.png", comment: "辅助 - 先手 - 控制 - 高爆发 - 逃生",
                information: "天怒一族这种生物，即使最满足最安心的时候脾气也很暴躁，他们天生就会为了最微不足道的侮辱寻求复仇。然而复仇就是复仇之魂的本质所在。曾经作为一个自傲而残暴的天怒之子，仙德尔莎是苍白之巢的第一继承人，直到一个姐妹背叛了她，夺走了她的继承权。被暗杀者的陷阱困住以后，仙德尔莎以双翼为代价，逃出生天。用对于这一族最丢脸的方式：步行，颠簸逃离了。仙德尔莎明白天怒一族再也不会接受失去翅膀的她作为统治者。而且面对处于最高处的苍白之巢，没有能够飞翔的翅膀是无法接近的，她将无法碰到她的姐妹。不甘作为一个无法飞翔的废物苟活，她对于复仇的渴望超越了所有的俗世欲望，落难的公主向女神丝奎奥克达成了交易：放弃她残破的身体，换来的是精神能量化成的灵体，永世不灭，以复仇为动力，能在物质位面带来浩劫。她或许永远都不能飞翔，但她终将为自己报仇雪恨。",
                skill: [{name: "魔法箭",url: "img/abilities/vengefulspirit_magic_missile_hp1.png",
                    comment: "向一个敌方单位射出魔法箭，眩晕并造成伤害。"},
                    {name: "恐怖波动",url: "img/abilities/vengefulspirit_wave_of_terror_hp1.png",
                        comment:"复仇之魂放出邪恶的嚎叫，削弱敌人的护甲并打开前方经过路径的视野。"},
                    {name: "复仇光环",url: "img/abilities/vengefulspirit_command_aura_hp1.png",
                        comment: "复仇之魂的存在提高了附近友方单位的物理攻击力。友方英雄在复仇光环下死亡时就会产生该英雄的幻象，持续攻击导致其死亡的敌人。"},
                    {name: "移形换位", url: "img/abilities/vengefulspirit_nether_swap_hp1.png",
                        comment: "与一个目标英雄瞬间交换位置，无论敌我。移形换位打断目标的持续施法。可用神杖升级。"}]},
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
                        comment: "向地图的任意位置发出爆炸冰球，在冰球飞行时再次施放此技能将使其停下，使所在区域产生毁灭性的冰爆。冰球飞行的距离越长，冰爆影响的范围也将越大。冰爆范围内的所有敌方单位将马上受到大量伤害，而处于冰球飞行路径上的敌方英雄将与冰爆范围内的敌方英雄一同受到寒霜诅咒的作用，持续受到小幅伤害，同时无法恢复生命值。在此期间如果生命值低于一定百分比，该英雄将立刻死亡。可用神杖升级。"}]},
            {id: "2", name: "巫妖", url: "img/heroes/lich_lg.png", comment: "辅助 - 高爆发",
                information: "巫妖生前是一位叫艾斯瑞安的冰霜法师，他曾经威胁要带来毁灭性的冰霜，企图征服整个王国。终于，那些平民在几个绝望的魔法师的帮助下，终于鼓起了勇气去暗算他。他们用一些具有足够魔力的绳索把他永远束缚住了，被绑上了厚重的石头后，这个冰霜巫师被扔进了一个据说深不见底的湖泊。但其实不然。他只下沉了一年左右，绳索挂在了一个石头上。在那里他平静地死去，虽然死了但并没有腐烂，直到风水师安希尔前来核查被认为是无底湖的黑暗之湖的传说。安希尔放下的铅垂线与绑住被淹死的巫师的绳索缠在了一起，于是他拉上了意外的收获。他认为将死者转变为不死族后，便可以向巫妖询问这个湖的情况，他移除了捆绑巫妖的绳索并进行了简单的转生仪式。由于艾斯瑞安的故事已经被时间所抹去，就算是当年杀死他的人的后代也不再记得，所以当时没有人能对安希尔的鲁莽行为做出警告。不过紧接着，安希尔就尝到了苦果，巫妖一摆脱绳索的束缚，就将他吞噬。",
                skill: [{name: "寒霜爆发",url: "img/abilities/lich_frost_nova_hp1.png",
                    comment: "破坏性的寒霜在目标敌方单位身上爆发，造成范围伤害并降低范围内敌人的移动和攻击速度，持续4秒。主要目标所受伤害最高。"},
                    {name: "霜冻护甲",url: "img/abilities/lich_frost_armor_hp1.png",
                        comment:"为一个友方单位或建筑物制造一层寒冰护甲，增加护甲值并减速对其发动攻击的敌方单位。持续40秒。"},
                    {name: "献祭",url: "img/abilities/lich_dark_ritual_hp1.png",
                        comment: "献祭一个友方单位，将他的当前生命值转化成巫妖的魔法值。"},
                    {name: "连环霜冻", url: "img/abilities/lich_chain_frost_hp1.png",
                        comment: "释放一个在敌人间弹跳至多10 10 10次的霜冻之球，每次击中敌人后都会造成伤害和减速效果。可用神杖升级。"}]},
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
