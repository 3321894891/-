var storyContent = ﻿{"inkVersion":20,"root":[["^123456你在一片空旷的原野上。","\n",{"->":"field"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"field":[["^四周荒凉，见不到任何活物。天空从你的头顶延展到视线尽头，不多时，晚霞从天穹的底端燃起。","\n","ev","str","^往前走","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^呆在原地","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"goahead"},{"#f":5}],"c-1":["\n",{"->":"stay"},{"#f":5}]}],{"#f":1}],"goahead":[["^你迈动步子向前走去，目之所及皆是荒芜的景象。你走了很久，直到膝盖酸痛。","\n","^“你怎么在这儿？”撑着膝盖弯腰休息的时候，一个青年喘着粗气朝你奔来，他似乎找了你很久。","\n","^你的记忆渐渐复苏，那是格林，你是跟着他来到这里的。","\n","^“你怎么在这儿？”他走近了，又问了一次。","\n","^你茫然地摇摇头，他看着你单薄的外套，微不可察地叹了口气。","\n",["ev",{"^->":"goahead.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“怎么了？”",{"->":"$r","var":true},null]}],["ev",{"^->":"goahead.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^你保持着沉默。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"goahead.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"ask"},{"#f":5}],"c-1":["ev",{"^->":"goahead.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":"silence"},{"#f":5}]}],{"#f":1}],"ask":["^你问道。他抬眼看了看你，又神色复杂地低下头。","\n","^“饿了吗？”他生硬地岔开话题。","\n","^你微微点头，可他已经不动声色地移开了眼。","\n",{"->":"ending1"},{"#f":1}],"silence":["^他不言语，拽着你的衣袖，低头检查你手心的擦伤。","\n",{"->":"ending1"},{"->":"ending1"},{"#f":1}],"stay":["^你在原地环顾四周。","\n","^不知道站了多久，天边的霞光烧成火红，你感觉脚底疼得厉害，于是席地而坐。","\n","^不远处似乎有什么东西晃了你一下。","\n",{"->":"yinzhang"},{"#f":1}],"2stay":[["^你把物品上面的浮尘清理干净，放在手心里四下打量。这是一枚印章，约一根手指的长度，通体光滑，底部刻着陌生的蛇形图腾和一圈外族文字。你接着寻找本应成套的印泥，以失败告终。","\n","^你坐回篝火前，将印章放入腰包。","\n","^远方出现了一个慢速移动的黑点。你等待着，它走近了一些，看得出是一个青年。","\n","^你的记忆渐渐复苏，那是格林。","\n","^黄昏将他的身形勾勒得模糊，他停在你身边，伸手在口袋里掏着什么。","\n","^你打了个哈欠，他的动作顿了一顿。","\n","ev","str","^晚上","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"ending1"},{"#f":5}]}],{"#f":1}],"yinzhang":[["^你眯了眯眼，那似乎是一块金属，在晚霞里放射出古铜色的光。","\n","ev","str","^走过去捡起来","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"2stay"},{"#f":5}]}],{"#f":1}],"ending1":[["^夜幕降临，你们燃起篝火，火光在他脸上跳跃。","\n","^“依旧没等到那边的消息吗？”他往你身边一坐，你这才看到他从后背延伸到肩膀的疤。","\n","^这个人应该和你很熟悉，不然你也不会在一片空白的记忆里凭空想起他的名字。格林似乎注意到了你看向他后背的眼神，身形僵硬了一下。","\n","^你们之间静默了很久，只有篝火的噼啪声间或响起。火开始烧旺了，灼热的温度喷在皮肤上，你不由得往后挪了挪。","\n","^格林注意到了你的动作，伸手将火焰底端的粗木拿开。火焰小了一点，你看向他，他却别过脸去，因为篝火，脖颈烧的通红。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"jixu"},"\n",{"#f":5}]}],{"#f":1}],"jixu":[["^夜晚的温度降下来了，格林沉默地站起身，拍拍身上的沙尘：“我再去找点食物，在这等我。”一边说着，一边用布包着一个短而薄的东西递给你，“防止你遇到野兽。”","\n","^你将布条揭开，里面是一把短刀。","\n","^“我不会走远。”他低下头，盯着你的脸看了一会，随后破开沉闷，笑着，撂下一句“待会见”，转身消失在火光的外围。","\n","^确定他走远了之后，你站起身来，把封刀的软布扔在地上。","\n","^这是一把新铸的短匕首，大概有你的三分之二个手臂长，你握住刀柄，粗细刚好。","\n","^四下，厚重的夜幕环绕着你。","\n","ev","str","^往黑暗里探索","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^待在篝火边","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"dark"},{"#f":5}],"c-1":["\n",{"->":"daizaigouhuobian"},{"#f":5}]}],{"#f":1}],"dark":[["^鬼使神差地，你弯腰拾起一根柴火，将那头放在火堆上烧了一下，随后向黑暗处迈步。","\n","^银河已经升起来了，在你前进方向的左前方。","\n","^你听见夜莺的啼鸣，夹杂着风声与远远的狼嚎。","\n","^你只知道再走下去，格林会找不到你。","\n","^一只飞蛾扑进你的火把里，在兴奋的舞蹈中走向死亡。","\n","^接着走吗？","\n","ev","str","^当然","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^再想想","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"dangran"},{"#f":5}],"c-1":["\n",{"->":"zaixiangxiang"},{"#f":5}]}],{"#f":1}],"dangran":[["^你不知哪里来的勇气，往更黑的黑暗踏出步伐。","\n","^狼嚎似乎更远了，四下只有寥寥几声鸟啼，和昆虫淅淅簌簌的振翅声。","\n","^一阵寒风迎面吹来，你的火把熄了。几颗火星也行将就木，明暗交替，像将死之人的呼吸。","\n","^比火把更亮的，是前方忽闪的磷火般的狼眸。","\n","^你倒吸一口凉气，停住脚步。","\n","ev","str","^转身逃","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^战斗","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"run"},{"#f":5}],"c-1":["\n","^狼扑了上来，将你扭倒在地。 ",{"->":"fight"},"\n",{"#f":5}]}],{"#f":1}],"zaixiangxiang":[["^篝火已看不见了，四面吹拂的风会带着你的气味刮到很远的地方，招来野兽。况且现在正是入冬前的少食期。","\n","^不远处的一声狼嚎猛地钳住你的心。","\n","^你循声看去，磷火般诡绿的双眸与你对视，惮于火把，不敢上前。","\n","ev","str","^逃","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"run"},"\n",{"#f":5}]}],{"#f":1}],"run":[["^你转身就跑，用尽全力。孤狼发出一阵短嚎，追了上来。","\n","^你是朝着火堆的方向跑的，你知道野兽都怕火。但你走的太远，火堆在天边将将冒头的时候，狼已经把你们的距离缩短一半了。","\n","^你一个趔趄，绊倒在地。","\n","^换做平时，你肯定能立刻爬起来，但今天你没有进食，一旦倒下迟迟缓不过来，四肢像黏在了地面上，抬不起一公分。","\n","ev","str","^战斗","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"fight"},{"#f":5}]}],{"#f":1}],"fight":[["^你忍住胃里翻江倒海的恶心，咬着牙，身上终于积蓄起一点力气。","\n","ev","str","^踹它的腰腹","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^击打它的头","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^掏刀","/str",{"CNT?":"bozi"},{"CNT?":"xiongfu"},"&&","!","/ev",{"*":".^.c-2","flg":5},{"c-0":[{"->":"yaofu"},"\n",{"#f":5}],"c-1":[{"->":"tou"},"\n",{"#f":5}],"c-2":["\n","^你反手握住那把没有刀鞘的匕首，逆着孤狼的力气，往它的身上靠。 ",{"->":"knife"},"\n",{"#f":5}]}],{"#f":1}],"yaofu":["^你曲腿狠狠撞了它的腰部。孤狼吃痛，在你耳边低吼一声，迅速调整好姿势，把利爪支撑在你的大腿上。","\n","^它持续发力，指甲划破了布料，嵌进肉里。","\n","^你痛得连咳几声，只觉得心脏要跳出胸口。 ",{"->":"continue"},"\n",{"#f":1}],"tou":["^你把左手捏成拳头，击打它的眼窝、太阳穴和鼻梁。它瘦骨嶙峋的头骨硌得你生疼，就算眼窝被敲出青紫，也没有松爪的征兆。","\n","^你心里一寒，你或许是它临死前见到的最后一只猎物，它死都不会松口的救命稻草。 ",{"->":"continue"},"\n",{"#f":1}],"knife":[["^它的胸口和侧颈毫无防备。","\n","ev","str","^向它的侧颈刺","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^向它的胸腹刺","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"bozi"},"\n",{"#f":5}],"c-1":[{"->":"xiongfu"},"\n",{"#f":5}]}],{"#f":1}],"bozi":["^鲜血顺着道刀刃和脖颈的间隙喷出，高度足足一米。你的视线被这片猩红遮住了一角，血液的铁锈气熏得你眯起了眼睛。 ",{"->":"continue"},"\n",{"#f":1}],"xiongfu":["^尖刀刺进了孤狼的前胸，温热的血液顺着刀柄流到你的手心，你一时竟难以将刀握好。 ",{"->":"continue"},"\n",{"#f":1}],"continue":[["ev","str","^继续","/str",{"CNT?":"yaofu"},{"CNT?":"xiongfu"},"&&",{"CNT?":"bozi"},"&&","/ev",{"*":".^.c-0","flg":5},"ev","str","^继续","/str",{"CNT?":"tou"},{"CNT?":"xiongfu"},"&&",{"CNT?":"bozi"},"&&","/ev",{"*":".^.c-1","flg":5},"ev","str","^继续","/str",{"CNT?":"yaofu"},{"CNT?":"tou"},"&&",{"CNT?":"xiongfu"},"&&","/ev",{"*":".^.c-2","flg":5},"ev","str","^继续","/str",{"CNT?":"yaofu"},{"CNT?":"tou"},"&&",{"CNT?":"bozi"},"&&","/ev",{"*":".^.c-3","flg":5},"ev","str","^继续","/str",{"CNT?":"yaofu"},{"CNT?":"tou"},"||",{"CNT?":"bozi"},"||",{"CNT?":"xiongfu"},"||","/ev",{"*":".^.c-4","flg":21},"ev","str","^继续","/str",{"CNT?":"yaofu"},{"CNT?":"tou"},"&&",{"CNT?":"yaofu"},{"CNT?":"bozi"},"&&","||",{"CNT?":"yaofu"},{"CNT?":"xiongfu"},"&&","||",{"CNT?":"tou"},{"CNT?":"bozi"},"&&","||",{"CNT?":"tou"},{"CNT?":"xiongfu"},"&&","||",{"CNT?":"bozi"},{"CNT?":"xiongfu"},"&&","||","/ev",{"*":".^.c-5","flg":21},{"c-0":[{"->":"zijiu"},"\n",{"#f":5}],"c-1":[{"->":"zijiu"},"\n",{"#f":5}],"c-2":[{"->":"soujiu"},"\n",{"#f":5}],"c-3":[{"->":"soujiu"},"\n",{"#f":5}],"c-4":[{"->":"fight"},"\n",{"#f":5}],"c-5":[{"->":"fight"},"\n",{"#f":5}]}],{"#f":1}],"soujiu":[["^血腥气似乎让饥饿的野兽更兴奋了。它用利爪划破你的侧颈，牙齿再次向下探了几厘米，僵持着。","\n","^你感觉力气在一点点流失，脚上对着它腹部的踢蹬也愈发无力。","\n","^感受到狼嘴腥臭的前一秒，你聚集起全身干竭的力气，喊喊出了“格林”两个字。","\n","^你的声带何其用力，五脏都在轰鸣。","\n","^这一句呼喊在平原上没有回声，彻底的绝望顿时掩埋了你。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"jixu__"},"\n",{"#f":5}]}],{"#f":1}],"jixu__":["^一支长矛破空而出，直直插入野狼的后背。压在身上的力道小了下去，你终于得以喘息。","\n","^熟悉的身影在长矛飞来的方向出现，下一刻，温热的狼血洒在你的手臂和大腿上。","\n","^格林跑过来，一刀切断了野狼的颈动脉，随后，像拎一袋垃圾似的把它从你身上提起，丢在一边。","\n",{"->":"ending6"},{"#f":1}],"zijiu":[["^你几乎全身湿透，粘稠的血泊环绕着你。","\n","^压在身上的力气渐渐消颓，你将半死的狼踹下身体，坐起身来补了一刀。","\n","^它的瞳孔肉眼可见地涣散，呼吸也慢慢停止了。","\n","^你擦拭着手上的狼血，等着心跳降下来，身上的伤口也由于激素的褪去开始作痛。","\n","^你用水稍稍清理了一下创口，掏出装着药粉的小瓶，将粉末洒在伤口上抹开。很痛，你倒吸了几口凉气。","\n","^视线的右上角突然亮了起来，打断了专心致志疗伤的你。你抬头一看，是格林。他举着火把，闷声看向你伤痕累累的小臂。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"ending6"},{"#f":5}]}],{"#f":1}],"ending6":[["^他面色铁青。","\n","^你注意到他剧烈起伏的胸口，应该是经历了长距离的跑动。","\n","^格林扭头看了看断气的野狼，深吸了一口气，似乎在平复着什么。","\n",["ev",{"^->":"ending6.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"soujiu"},"/ev",{"*":".^.^.c-0","flg":3},{"s":["^“谢谢。”",{"->":"$r","var":true},null]}],"ev","str","^保持沉默","/str",{"CNT?":"soujiu"},"/ev",{"*":".^.c-1","flg":5},["ev",{"^->":"ending6.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"zijiu"},"/ev",{"*":".^.^.c-2","flg":3},{"s":["^“我没事的，都是小伤。”",{"->":"$r","var":true},null]}],"ev","str","^保持沉默","/str",{"CNT?":"zijiu"},"/ev",{"*":".^.c-3","flg":5},{"c-0":["ev",{"^->":"ending6.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->":"xiaoshengshuo"},"\n",{"->":"ending2"},{"#f":5}],"c-1":[{"->":"ending2"},"\n",{"#f":5}],"c-2":["ev",{"^->":"ending6.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n",{"->":"ending3"},{"#f":5}],"c-3":[{"->":"ending3"},"\n",{"#f":5}]}],{"#f":1}],"xiaoshengshuo":["<>","^你生如蚊蚋。","\n",{"->":"ending2"},{"#f":1}],"ending2":[["ev",{"CNT?":"xiaoshengshuo"},"/ev",[{"->":".^.b","c":true},{"b":["^他垂眸看了看你，随后微微点头。",{"->":".^.^.^.4"},null]}],"nop","\n","ev",{"CNT?":"xiaoshengshuo"},"!","/ev",[{"->":".^.b","c":true},{"b":["^你不敢看他阴沉的脸色，喉间似是被什么堵住，一个字也说不出来。",{"->":".^.^.^.11"},null]}],"nop","^“走吧。”他的语气犹如爆炸发生前空气的翕动，说罢便转身，往你来时的方向走去。你愣了一愣，跟上他。","\n","^格林走得很快，偶尔会用余光瞥一下你，以防你跟丢。","\n","^你这才注意到他的腰上挂了两只野兔，很瘦。顺着手臂线条往上，握着火把的那只手是唯一看得清的地方，手上沾着泥土和血渍，本来的肤色完全被遮盖。","\n","^你们回到火堆，他坐下来，拿出小刀处理腰上的战利品。","\n",["ev",{"^->":"ending2.0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“我不该乱跑的。”",{"->":"$r","var":true},null]}],"ev","str","^保持沉默","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"ending2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],{"->":"ending5"},"\n",{"#f":5}],"c-1":[{"->":"ending4"},"\n",{"#f":5}]}],{"#f":1}],"daizaigouhuobian":[["^你双手环膝，静静的看着面前跳动的火舌。","\n","^月已中天，格林才回来。","\n","^他的手上提着两只野兔，后者的脖子上一片腥红。","\n","^你惊讶地望向他，他回了你一个疲惫但得意的微笑。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"ending4"},{"#f":5}]}],{"#f":1}],"ending5":[["^格林处理内脏的手顿了一顿，冰霜般的面色终于有所缓和。","\n","^“你知道的，我承受不了失去你的代价。”他说着，声音却像是从另一个维度传来的。","\n","^情话般的低语却被他说得那样自然，就像亲人之间传达爱的方式。","\n","^你向他施以一个微笑，随后在他身边坐下。","\n","^“想起我来了吗？”格林半开玩笑道。","\n",["ev",{"^->":"ending5.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“当然了。”",{"->":"$r","var":true},null]}],["ev",{"^->":"ending5.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^“或许需要更多信息来确认？”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ending5.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"->":"dangranle"},"\n",{"#f":5}],"c-1":["ev",{"^->":"ending5.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],{"->":"ending7"},"\n",{"#f":5}]}],{"#f":1}],"dangranle":["<>","^我对上他亮晶晶的眼睛，微笑道。","\n",{"->":"ending4"},{"#f":1}],"ending7":["<>","^你淡淡开口，尾音因虚弱显得有些嘶哑，他听后，似是赞赏，又似是安抚地冲你勾了勾嘴角。","\n","^“腰包的第二层，你应该说的是那个。”他用下巴指了指你腰上的皮包，示意你打开看。你低头翻找的时候，他转身用木签插进兔肉，放在火堆上烤。","\n","^包里叠着一张羊皮纸，标题是“信任名单”，标题下密密麻麻写着一堆人名，每个都在右侧画了像。第一面没有格林的名字。你将纸翻了一面，才终于在末尾看见了。","\n","^“记得我们从小一起长大就行了。”他将烤兔肉翻了个面，油脂的芬芳析出。你咽了咽口水，胃里不争气地咕咕叫起来。 ",{"->":"ending4"},"\n",{"#f":1}],"ending3":[["^格林依旧静静地望着你，由于黑暗，眼里看不清任何情绪。","\n","^“我提醒过你的。”他长长的呼出一口气，无奈道。他转身，自顾自往前走，似乎不想再看你一眼。","\n","^他的步子很大，你有点跟不上。他发觉了，于是压小步幅，并把手臂伸出去让你搀扶。","\n","^走出几百米，他转头低声道：“回头让罗亚的医生看看吧。”","\n","^你知道他指的是你的伤。你犹豫了，你本就不喜欢罗亚城神神叨叨的医疗方式。","\n","^他似乎看出了你的想法：“你想让它自己好？”","\n","^你没说话，他当你默认了。他一向尊重你的决定。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"ending4"},"\n",{"#f":5}]}],{"#f":1}],"ending4":[["ev",{"CNT?":"dangranle"},"/ev",[{"->":".^.b","c":true},{"b":["^他看着你的微笑，周身的气场终于变得柔和。“我知道你只是好奇心难抑而已。”他将目光放在你眼下的一块污渍，伸手帮你擦掉。",{"->":".^.^.^.4"},null]}],"nop","\n","^烤兔肉的焦香从火堆上散发开，格林将清理出来的兔内脏埋进土里，掩盖血腥味。","\n","^饥饿像一只睡兽，被肉类的原始香气唤醒，此时在你的胃里张牙舞爪。","\n","^格林把你们面前的两只兔子分成四份，“熟得快。”","\n","^晶莹的油脂滴在火里，换来火势片刻的窜高。","\n","^“给你。”","\n","^他变戏法似的从腰包里掏出几颗栗子递给你，甚至都是开好口的。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"jixu_"},"\n",{"#f":5}]}],{"#f":1}],"jixu_":["^等到你们吃完了迟来的晚饭，已是凌晨。","\n","^格林从包里拿出两条兽皮睡袋，递给你其中一条。“睡吧，不早了。”","\n","^他钻进睡袋里，闭上了眼睛。你也就地躺下，背对着他。","\n",{"->":"xunwen"},{"#f":1}],"xunwen":[["ev","str","^询问狼尸的事","/str",{"CNT?":"dark"},{"CNT?":"qianxi"},{"CNT?":"quzhu"},"&&","!","&&","/ev",{"*":".^.c-0","flg":21},["ev",{"^->":"xunwen.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"qianxi"},{"CNT?":"quzhu"},"!","&&","/ev",{"*":".^.^.c-1","flg":19},{"s":["^“它被驱逐了？”",{"->":"$r","var":true},null]}],["ev",{"^->":"xunwen.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"quzhu"},{"CNT?":"qianxi"},"!","&&","/ev",{"*":".^.^.c-2","flg":19},{"s":["^“迁徙？”",{"->":"$r","var":true},null]}],"ev","str","^询问兔肉的事","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^询问印章的事","/str",{"CNT?":"yinzhang"},"/ev",{"*":".^.c-4","flg":21},"ev","str","^保持沉默","/str","/ev",{"*":".^.c-5","flg":20},{"c-0":[{"->":"langshi"},"\n",{"#f":5}],"c-1":["ev",{"^->":"xunwen.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],{"->":"quzhu"},"\n",{"#f":5}],"c-2":["ev",{"^->":"xunwen.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],{"->":"qianxi"},"\n",{"#f":5}],"c-3":[{"->":"turou"},"\n",{"#f":5}],"c-4":[{"->":"ask_yinzhang"},"\n",{"#f":5}],"c-5":[{"->":"keep_silence_"},"\n",{"#f":5}]}],{"#f":1}],"langshi":[["^“那头狼不会引来它的同伴吗？”你低声问。","\n","^格林翻了个身，面向你的背影，“大概率不会。”","\n","^似乎是猜到了你的疑惑，他解释道：“按照习性，它所处的狼群多半已经迁徙过境了。”","\n",["ev",{"^->":"langshi.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“迁徙？”",{"->":"$r","var":true},null]}],["ev",{"^->":"langshi.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“它被驱逐了？”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"langshi.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->":"qianxi"},"\n",{"#f":5}],"c-1":["ev",{"^->":"langshi.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],{"->":"quzhu"},"\n",{"#f":5}]}],{"#f":1}],"qianxi":[["^“应该是向南迁徙的雪地狼。”话音未落，就听见火里“噼啪”一声，一只蟋蟀纵身而入。","\n","^你回想着，那匹狼的体型的确比荒原狼大，头顶的毛发也茂密的多。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^入睡","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"xunwen_"},"\n",{"#f":5}],"c-1":[{"->":"sleep"},"\n",{"#f":5}]}],{"#f":1}],"quzhu":[["<>","^你回想起那匹狼孤注一掷的撕咬，很难将这等蛮力将其干瘪的肌肉联系在一起。","\n","^“衰老、残疾，或者争夺王位的失败，都会换来驱逐。”格林解释道。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^入睡","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"xunwen_"},"\n",{"#f":5}],"c-1":[{"->":"sleep"},"\n",{"#f":5}]}],{"#f":1}],"turou":[["^“你怎么抓到兔子的？”你回忆着肉类油脂的焦香，问道。","\n","^“有些难，毕竟是冬天。”格林答道，他的语气变得轻快，“我把它们的窝捅了。”","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^入睡","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"xunwen_"},"\n",{"#f":5}],"c-1":[{"->":"sleep"},"\n",{"#f":5}]}],{"#f":1}],"xunwen_":["^你们并肩躺在火堆旁，他一语不发，似是假寐。 ",{"->":"xunwen"},"\n",{"#f":1}],"ask_yinzhang":[["^你转过身去，拿出那枚印章，放在他眼前晃了晃。","\n","^格林抬起眼皮，似乎想仔细看看。你把手里的物什递给他。","\n","^他静静打量着这枚印章，过了一会后还给你，“很漂亮，你打算拿它怎么办？”","\n","ev","str","^留着","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^卖掉","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^不知道","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":[{"->":"dasuanliuzhe"},"\n",{"#f":5}],"c-1":[{"->":"maidiao"},"\n",{"#f":5}],"c-2":[{"->":"buzhidao"},"\n",{"#f":5}]}],{"#f":1}],"dasuanliuzhe":[["^“我还挺喜欢的。”你把印章收好，等着格林的回话。","\n","^他似乎真的有些困了，慢慢点着头闭上了眼睛。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^入睡","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"xunwen_"},"\n",{"#f":5}],"c-1":[{"->":"sleep"},"\n",{"#f":5}]}],{"#f":1}],"maidiao":[["^“能买个好价钱吧。”你感受着印章底部凹陷的花纹，盘算着价格。","\n","^买主下了注的，肯定不希望你们空手而归。","\n","^“他是个识货人。”格林说罢，阖上眼皮，“估计能有三百个佩罗。你说呢？”","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^入睡","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"xunwen_"},"\n",{"#f":5}],"c-1":[{"->":"sleep"},"\n",{"#f":5}]}],{"#f":1}],"buzhidao":[["^“看缘分吧。”你没有想好这东西的去处，默默将它收起。","\n","^格林看了你一会，轻声道了一句“晚安”。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^入睡","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"xunwen_"},"\n",{"#f":5}],"c-1":[{"->":"sleep"},"\n",{"#f":5}]}],{"#f":1}],"keep_silence_":["^格林的呼吸渐渐平缓，似乎是睡着了。 ",{"->":"sleep"},"\n",{"#f":1}],"sleep":[["^你昏沉睡去，耳畔只有篝火燃烧的声音和夜鸟的轻啼。","\n","ev","str","^第二天","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"chapter_two"},{"#f":5}]}],{"#f":1}],"chapter_two":[["^太阳升起来了.","\n","^噩梦走到了尽头，你满头大汗地惊醒。","\n","^格林在不远处煮着野粟粥，将手里的长条状物体往火上一扔，抬头看见了你。","\n","^“做噩梦了吗？”他暂时搁置了早餐，走过来俯身给你擦汗。你看见帕子上湿了一大块。","\n","^“早餐有胃口吃吗？”","\n","^你虚弱地摇了摇头。他安慰性的揉了揉你的额角，返回自己的露天厨房，“待会儿回罗亚吃哪一家？”","\n","^你低头思索了一下，他却看透了你心思一般替你回答了：“伊莎那家吗？”","\n","^你很高兴他在你嗓子哑的难以发音的时候，自问自答地替你说出了心里话。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"luoya"},"\n",{"#f":5}]}],{"#f":1}],"luoya":[["^罗亚是一座再生城，它先前的主人早已在大旱时期搬离，现在那儿的居民，三分之二是八十年前移居而来，剩下的三分之一是旅客。","\n","^格林和你属于后者。你们在城北租了房子，房租一日一结，因为一年中的大部分时候你们都“流浪”在荒原上，在另外两个被干旱渴死的古城的遗址内穿梭，搜寻富人们趋之若鹜的奇珍。","\n","^毫无遮蔽的荒原对人类而言是理想的埋骨地，甚至不需要刨坑，将死尸扔在地上，自会有秃鹫猎狗捡食。但除抛尸外，很少有人愿意提起它。进入荒原，意味着直面迁徙的狼群和鹰隼，甚至枉死的猎人的鬼魂。故你和格林，以及你们的同行，这些拿钱卖命的寻宝者，在“市面”上被人称作替死鬼。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"continue___"},"\n",{"#f":5}]}],{"#f":1}],"continue___":[["^你脑袋里灌了铅似的，随着脚步左晃右晃，几乎要把脖子压断。格林时不时回头看，看到你面色惨白的脱力模样不由得担心起来。","\n","^注意力分了一半给你，他自然难以周全自身，脚下一滑，差点摔倒。你“咚”地一下撞上他的手肘，下意识掐紧手里的东西，他闷哼了一声，没说话。接着，失重感无端漫过了你，你拽停了他，低头看着地面，视线里冒出来片片金星，疼痛和冷汗刺得你浑身颤抖。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"continue____"},"\n",{"#f":5}]}],{"#f":1}],"continue____":[["^恍惚中，你感觉到他用手背试了试你的额头，有些紧张地替你揉了揉太阳穴。","\n","^“有点烫。”由于不适，他的声音在你耳朵里像是隔了一层水膜，消减得只剩单纯的音符。","\n","^他沉默地思索了一会，小心翼翼问道：“我背你？”","\n","ev","str","^点头","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^摇头","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"nod"},{"#f":5}],"c-1":["\n",{"->":"shake"},{"#f":5}]}],{"#f":1}],"nod":["^你点了点头。他得到了准许，向前半步，半蹲下来，手臂向外微张，等待着你将身体的重量放上去。","\n","^你靠上他的肩背，手臂在他脖子前方交叉，右手紧攥着左手腕。你感到粗糙的皮质手套附上了腿窝，除了向上施力的动作之外，没有任何多余的举动。","\n","^格林几乎是毫不费力地将你托举在背上，腰部微微弯折。起身站稳后，他迈步行走起来，步履轻捷。","\n","^他身上熟悉的气息让你安心，甚至有些犯困。可能是发烧的原因————你分析着。","\n","^他身上像个摇篮，晃得你困意增生，你闭着眼假寐，听他的呼吸响起在耳畔。","\n","^“睡吧。”似乎是哈欠声吸引了他的注意，他把你往上挪了挪，说道。","\n","^你无意识应了一声，把脑袋枕在他肩膀上，迷迷糊糊的睡过去了。","\n",{"->":"mache"},{"#f":1}],"shake":[["^你摇摇头，不小心甩动了哪条神经，头又长针入耳般裂痛。","\n","^他伸手，轻轻揉着你太阳穴突突跳动的血管。","\n","^“找地方歇会。”他擦去你脸颊上蹭到的泥土，四处张望。荒原在上午会很热，地面龟裂烫脚，最好的办法就是找一个洞穴，熬过你的高烧，等白天运货的商队经过将你们接走。","\n","^他眼里一亮：“跟我来。”","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"follow"},"\n",{"#f":5}]}],{"#f":1}],"follow":[["^你的手臂被他握在手里，他不敢用力。一前一后走了一会，他将手上姿势改为攥着你的衣袖。走出不远，你们便在半山腰看见了格林发现的洞，半开放式，面西，至少，上午的阳光不会照进来。","\n","^他把身上的外套脱下，铺在地面上，坐下去，然后伸手拍拍身边的位置。","\n","^你坐下的时候，眼球也跟着痛。","\n","^格林屈起手指，用指节给你轻轻揉按发胀的地方。他对此孜孜不倦。","\n","^你忍着难受抬眼看了看他，他的表情祥和得不像是旅途被打断的样子，绿色的虹膜半遮，低下来注视着你，但没和你对上视线。","\n",["ev",{"^->":"follow.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“我是不是拖累你了？”",{"->":"$r","var":true},null]}],"ev","str","^只是看着他","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"follow.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"->":"self_condemn"},"\n",{"#f":5}],"c-1":[{"->":"look_straight"},"\n",{"#f":5}]}],{"#f":1}],"self_condemn":[["^你低声道。","\n","^“为什么这么想？”格林似乎并不惊讶你这么问。","\n","^“按照计划，是三天。”你艰难地回忆着，记忆仍有缺损，好在能拼凑出大概的时间线了。","\n","^嘴边的笑影愈加浓重，格林注视着你，洞穴昏暗的散射光里，他的绿眼睛格外亮。“但是已经五天了。”你掐着指头算每一组日出日落，“买主可能以为我们遇害了。”","\n","^他静静地听你说完，嘴角微勾，不发表任何看法。你阖眼歇着，一抹清凉敷上太阳穴。下一刻，薄荷的香气涌入鼻腔，对抗着沉闷的阵痛。","\n","^“怎么会是拖累。”","\n","^格林的声音很轻，甚至有些自言自语的意味。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"mache"},{"#f":5}]}],{"#f":1}],"look_straight":["^。。","\n",{"->":"mache"},{"#f":1}],"mache":["ev",{"CNT?":"self_condemn"},"/ev",[{"->":".^.b","c":true},{"b":["^洞穴外隐隐传来马蹄声，一阵响过一阵地接近。格林站起身，走到洞外查看情况。你听不清他们的交谈，只看到寥寥几个人影站在洞外，肩颈上晶莹的汗水反射阳光，晃得你睁不开眼。",{"->":"mache.4"},null]}],"nop","\n","ev",{"CNT?":"self_condemn"},"/ev",[{"->":".^.b","c":true},{"b":["^格林回到洞穴，伸手将你扶起。",{"->":"mache.10"},null]}],"nop","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};