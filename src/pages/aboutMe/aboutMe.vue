<template>
    <div class="aboutMe">
        <div class="banner"></div>
        <div class="content">
            <div class="content-box">
                <div class="nav">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="公司简历" name="first">
                            <div class="content-">
                                <div class="title">
                                    <span class="icon"></span>
                                    <p class="titleStyle">公司介绍：</p>
                                </div>
                                <h2>
                                    银河娱乐集团有限公司（下称「银娱」）是亚洲地区其中一所最具规模的综合娱乐渡假发展及营运公司，
                                    为恒生指数成份股之一。集团的附属公司银河娱乐场股份有限公司，于2002年获澳门特区政府授予博彩经营权，
                                    可于澳门开设及经营娱乐场业务。于2004年开始，银娱凭藉发展四间城巿娱乐会进军澳门博彩业市场，
                                    成功在市场上为品牌打好基础，于博彩业发展迅速的澳门大展拳脚。
                                </h2>
                                <div class="center">
                                    <div class="left">
                                        <p>博彩收益计算，澳门是全球最大的博彩娱乐市场，亦是中华人民共和国境内唯一可以合法进行博彩活动的地区。
                                            银娱以「亚洲心」为宗旨，着重最顶级的服务质素，具备集休闲娱乐于一身的世界级设施，
                                            致力配合澳门特区政府实践可持续及适度多元发展的重要方针。</p>
                                        <p>澳门银河全资线上责任博彩888Y.COM，持澳门合法线上责任博彩牌照，受澳门博彩监察协调局监督。
                                            作为澳门的良好 身心健康发展（详见企业社会责任篇幅）。</p>
                                        <p>银娱现拥有及经营位于澳门半岛的旗舰超五星级星际酒店及娱乐场、经营三间城市娱乐会，及位于路氹的
                                            「澳门银河™」是一项集休闲、渡假和娱乐于一身的大型综合渡假城，为澳门创建一个极具亚洲特色的渡假新胜地，
                                            进一步落实集团在澳门及区内的长远发展。</p>
                                        <p>银娱旗下的旗舰项目「澳门银河」新里程及全新的「澳門百老匯™」于2015年5月27日正式开幕。</p>
                                        <p>为成功打造全世界最顶级的综合娱乐渡假城，银娱计划在澳门投资1,000亿港元，「澳门银河」及
                                            「澳門百老匯」的总投资额已达430亿港元，此项目更是澳门自2012年后首个新开幕的综合渡假城，
                                            标志着澳门旅游业发展的新里程。</p>
                                        <p>银娱早前已公布路氹地皮第三及四期的发展蓝图，地盘勘察工程预计于2017年展开。此外，
                                            集团与横琴当局就横琴一幅面积达2.7平方公里的土地订立框架协议，以发展世界级渡假胜地。</p>
                                        <p>此项目将与银娱在澳门的业务相辅相成，令银娱在同业中脱颖而出，并在支持澳门发展成为
                                            世界旅游休闲中心方面扮演重要角色。</p>
                                        <p>银娱一直推动澳门的经济适度及多元发展。银娱承诺继续履行企业社会责任，致力培育本澳人才，
                                            宣扬澳门本地文化和特色，并积极为澳门的长远繁荣稳定作出努力。</p>
                                    </div>
                                    <div class="right">
                                        <img src="//image.beike188.com/YHHB/images/company.3fa58b3.png">
                                    </div>
                                </div>
                                <div class="content-bottom">
                                    <ul>
                                        <li>
                                            <div class="icon-box-img"><img src="//image.beike188.com/YHHB/images/about_01.de69ab8.png"></div>
                                            <h1>企业使命</h1>
                                            <p>我们致力成为亚洲娱乐博彩行业的翘楚，力求为顾客提供超凡的娱乐博彩体验，
                                                使员工作为公司的一份子深感自豪，亦能令与澳门银河业务有关人士称心满意。</p>
                                        </li>
                                        <li>
                                            <div class="icon-box-img"><img src="//image.beike188.com/YHHB/images/about_02.deb01b0.png"></div>
                                            <h1>企业愿景</h1>
                                            <p>本着亚洲信念亚洲心，为顾客提供超凡的娱乐博彩体验，并为行业树立典范。</p>
                                        </li>
                                        <li>
                                            <div class="icon-box-img"><img src="//image.beike188.com/YHHB/images/about_03.dccd099.png"></div>
                                            <h1>企业价值观</h1>
                                            <p>我们积极了解顾客的需求，致力提供超凡的澳门银河体验，对此深感自豪。我们真诚尊重每一位与
                                                澳门银河有关的人士。我们承诺全心全意地做到最好。我们贯彻审慎、高效、坚守诚信和即时应变的处事态度。</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="发展历程" name="second">
                            <div class="content-">
                                <!--<el-radio-group v-model="reverse">-->
                                    <!--<el-radio :label="false"></el-radio>-->
                                <!--</el-radio-group>-->
                                <el-timeline :reverse="reverse" class="text-style">
                                    <el-timeline-item
                                        class="development-path"
                                        v-for="(activity, index) in activities"
                                        :key="index"
                                        :timestamp="activity.timestamp">
                                        {{activity.content}}
                                    </el-timeline-item>
                                </el-timeline>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="旗下会员" name="third">
                            <div class="content-">
                                <div class="members">
                                <div class="members-banner">
                                    <img src="//image.beike188.com/YHHB/images/star.bf78035.jpg">
                                </div>
                                <div class="members-img">
                                    <div class="members-img-left">
                                        <img src="//image.beike188.com/YHHB/images/01-1.2d80a3c.png">
                                    </div>
                                    <div class="members-img-center">
                                        <img src="//image.beike188.com/YHHB/images/01-2.016f45f.png">
                                        <img src="//image.beike188.com/YHHB/images/01-3.55c7fc6.png">
                                    </div>
                                    <div class="members-img-right">
                                        <img src="//image.beike188.com/YHHB/images/01-4.1135a96.png">
                                    </div>
                                </div>
                                <div class="members-text">
                                    <p>星际酒店是银娱旗下首个五星级娱乐酒店项目，座落于澳门核心商业及娱乐区－友谊大马路。这座39层楼高的酒店是以银娱独有之亚洲智慧和经验，
                                        以及「星级」的酒店服务、娱乐设施、酒店客房和食府闻名。</p>
                                    <p>自2006年开幕以来，星际酒店一直深受亚洲以至世界各地的旅客所欢迎。凭着为旅客提供最专业细心的服务，星际酒店精心打造优质享受，
                                        赢得不少著名奖项，包括美国优质服务协会颁发的「五星钻石奖」、被中国饭店业领袖峰会评为「一百佳中国酒店」、
                                        及在《米芝莲指南香港澳门2014》中被誉为「顶级舒适」酒店。</p>
                                </div>
                            </div>
                                <div class="members">
                                    <div class="members-banner">
                                        <img src="//image.beike188.com/YHHB/images/aomen.f474fbe.jpg">
                                    </div>
                                    <div class="members-img">
                                        <div class="members-img-left">
                                            <img src="//image.beike188.com/YHHB/images/02-1.b7b4b97.png">
                                        </div>
                                        <div class="members-img-center">
                                            <img src="//image.beike188.com/YHHB/images/02-2.e95b1eb.png">
                                            <img src="//image.beike188.com/YHHB/images/02-3.86508af.png">
                                        </div>
                                        <div class="members-img-right">
                                            <img src="//image.beike188.com/YHHB/images/02-4.126d403.png">
                                        </div>
                                    </div>
                                    <div class="members-text">
                                        <p>投资超过50亿港元，「澳門百老匯」汇聚澳门特色及亚洲魅力，让宾客零距离感受最地道的风情
                                            ，享受一场色、声、味俱全的狂欢盛宴。</p>
                                        <p>宾客可从「澳门银河™」穿过设计优美并配有空调的行人天桥，只需90秒便能轻松到达澳门
                                            首个汇集精彩街头表演和开放式店铺的步行街 -「澳門百老匯」，享受澳门传统美食，
                                            亲切服务以及精彩表演和热闹气氛。</p>
                                        <p>作为「澳門百老匯」内的一所精品酒店，「百老汇酒店」提供五星级的舒适和贴心服务。
                                            「百老汇酒店」共有320间客房及套房，与珠海横琴仅一河之隔，宾客置身其中可饱览
                                            180度的沿岸动人景致。</p>
                                    </div>
                                </div>
                                <div class="members">
                                    <div class="members-banner">
                                        <img src="//image.beike188.com/YHHB/images/logo.png">
                                    </div>
                                    <div class="members-img">
                                        <div class="members-img-left">
                                            <img src="//image.beike188.com/YHHB/images/03-1.1113615.png">
                                        </div>
                                        <div class="members-img-center">
                                            <img src="//image.beike188.com/YHHB/images/03-2.7691870.png">
                                            <img src="//image.beike188.com/YHHB/images/03-3.895cafa.png">
                                        </div>
                                        <div class="members-img-right">
                                            <img src="//image.beike188.com/YHHB/images/03-4.a4086bf.png">
                                        </div>
                                    </div>
                                    <div class="members-text">
                                        <p>」正式成为澳门唯一拥有六间世界级酒店的综合渡假城，迎合旅客的不同需求。澳门丽思卡尔顿酒店是集团旗下首间全套房式酒店，
                                            设有逾250间套房，为澳门的奢华享受重新定义；亚洲最大的澳门JW万豪酒店提供逾1,000间客房及套房；
                                            全新「百老汇酒店」的320间客房设备齐全、适合家庭旅客。「澳门银河」的餐饮选择将增加至超过120间餐厅、
                                            食肆和酒吧，当中包括8间具米芝莲级的餐厅。此外，「澳门银河」的全新购物热点「时尚汇」包罗超过200家时尚品牌，
                                            并首度把世界流行的高格调下午茶文化引进澳门，让客人尽享购物乐趣，同时品味生活时尚享受。</p>
                                        <p>「澳门银河」最广受欢迎的天浪淘园，总面积扩充至超过75,000平方米，除了现有全球最大规模的空中冲浪池外，
                                            更设有全球最长、575米的空中激流。加上亚洲主题式热带园林、人工沙滩、刺激的滑水梯和瀑布，以及儿童水上游戏专区等，
                                            天浪淘园就是一家大小尽享夏日乐趣的水上乐园。</p>
                                    </div>
                                </div>
                                <div class="members">
                                    <div class="members-banner">
                                        <img src="//image.beike188.com/YHHB/images/aomen.f474fbe.jpg">
                                    </div>
                                    <div class="members-img">
                                        <div class="members-img-left">
                                            <img src="//image.beike188.com/YHHB/images/04-1.0b6b0b7.png">
                                        </div>
                                        <div class="members-img-center">
                                            <img src="//image.beike188.com/YHHB/images/04-2.b88de97.png">
                                            <img src="//image.beike188.com/YHHB/images/04-3.894b49c.png">
                                        </div>
                                        <div class="members-img-right">
                                            <img src="//image.beike188.com/YHHB/images/04-4.9357253.png">
                                        </div>
                                    </div>
                                    <div class="members-text">
                                        <p>2006年由一班精英团队所创建的线上博彩，凭藉专业而极具创意的思维，於短时间内创作出多个业界前所未有的游戏新体验，
                                            使澳门银河团队迅速成为一支独秀的合法博彩游戏娱乐集团。</p>
                                        <p>一直以来，澳门银河团队秉持「只为非同凡享」的态度，发挥无限创意，为玩家带来最高层次的享乐体验。为此，
                                            我们不断征服挑战并迈步向前，研发出更多独一无二的游戏新体验，冲破网上娱乐平台的传统束缚，引领业界不断向前。</p>
                                        <p>澳门银河团队与时并进开拓移动装置游戏平台，让玩家无论身处何地，依然能够随时感受到逼真丶刺激，恍如置身现场的玩乐体验。
                                            我们的团队坚持缔造一个「公平丶公正丶公开丶安全」的线上博彩平台，符合并获得了澳门线上的牌照，
                                            并取得独立的第三方认证机构GLI认证，是最值得信赖的游戏娱乐集团。</p>
                                        <p>我们非常珍视每位客户的意见及建议，如阁下对我们的产品或服务有任何查询，请循以下途径联络我们。</p>
                                    </div>
                                </div>
                                <el-divider></el-divider>
                                <div class="title">
                                    <span class="icon"></span>
                                    <p class="titleStyle">城市娱乐会</p>
                                </div>
                                <p class="dis">此项目将与银娱在澳门的业务相辅相成，令银娱在同业中脱颖而出，并在支持澳门发展成为世界旅游休闲中心方面扮演重要角色。</p>
                                <div class="members-bottom">
                                    <div class="members-bottom-box">
                                        <img src="//image.beike188.com/YHHB/images/05-1.128c6e9.png">
                                        <h3>华都娱乐场Waldo Casino & Hotel</h3>
                                        <p>自二零零四年起，银娱先后分别与华都酒店、总统酒店、利澳酒店以及金都酒店结成合作伙伴，
                                            经营四间城巿娱乐会。二零一三年银娱收购金都酒店并翻新成为「澳門百老匯™」，
                                            现三间城巿娱乐会分别为华都娱乐场、总统娱乐场及利澳娱乐场。</p>
                                    </div>
                                    <div class="members-bottom-box">
                                        <img src="//image.beike188.com/YHHB/images/05-2.9223194.png">
                                        <h3>总统娱乐场President Casino</h3>
                                        <p>总统娱乐场于二零零六年四月开业，位于澳门半岛最繁华的中区，毗邻多间着名娱乐场、购物及商业中心。
                                            由酒店到澳门国际机场之车程仅需二十分钟，往港澳码头只需五分钟车程。</p>
                                    </div>
                                    <div class="members-bottom-box">
                                        <img src="//image.beike188.com/YHHB/images/05-3.f7f105e.png">
                                        <h3>利澳娱乐场 Rio Casino</h3>
                                        <p>利澳娱乐场于二零零六年初开业，位于澳门半岛市中心，距离港澳码头只需十分钟步程，
                                            往澳门国际机场亦只需十五分钟车程，地点优越，交通便利。</p>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HomePlate1 from '../home/components/Plate1';

    export default {
        name: 'aboutMe.vue',
        components: {HomePlate1},
        data () {
            return {
                activeName: 'first',
                reverse: true,
                activities: [{
                    content: '银娱旗下的「澳门银河™」新里程及全新的「澳門百老匯™」正式开幕。',
                    timestamp: '2015年5月27日'
                }, {
                    content: '银娱邀请了本澳的零售及餐饮中小企在「澳門百老匯」内的「百老匯大街」开业，并举行了「澳門百老匯」' +
                        '合作品牌揭幕暨与中小企联营启动礼，标志着大型博企与本澳中小企合作的新里程。',
                    timestamp: '2015年3月'
                }, {
                    content: '银娱公佈两个位于澳门路氹的项目，包括旗舰「澳门银河」综合渡假城迈向新里程及全新的「澳門百老匯」，将于2015年5月27日隆重推出。',
                    timestamp: '2015年1月'
                }, {
                    content: '为庆祝银娱自2004年开始营运至今迈入第十年以及旗舰「澳门银河」踏入开业三周年，吕志和博士宣佈注资十三亿港元成立「银河娱乐基金会」。',
                    timestamp: '2014年7月'
                }, {
                    content: '银娱被纳入为恒生指数成份股。',
                    timestamp: '2014年6月'
                }, {
                    content: '银娱宣佈开展「澳门银河」第二期工程，目标于2015年中前落成之后，将综合渡假城的面积增加接近一倍至1,000,000平方米，' +
                        '为澳门带来刺激的娱乐、休闲、零售及会议展览等设施。',
                    timestamp: '2014年4月'
                }, {
                    content: '澳为庆祝银娱自2004年开始营运至今迈入第十年以及旗舰「澳门银河」踏入开业三周年，吕志和博士宣佈注资十三亿港元成立「银河娱乐基金会」。',
                    timestamp: '2011年5月18日'
                }, {
                    content: '澳门银河全资线上责任博彩，持澳门合法线上责任博彩牌照，受澳门博彩监察协调局监督。',
                    timestamp: '2006年12月8日'
                }, {
                    content: '银娱的旗舰星际酒店及娱乐场隆重开幕，拥有超过500间豪华客房和套房，集休闲、娱乐、酒店及旅游服务于一身，' +
                        '结合完善的星级设施，为客人提供一个充满亚洲魅力的世界级优质旅游娱乐新体验',
                    timestamp: '2006年10月'
                }, {
                    content: '银娱第四间城市娱乐会金都娱乐场开业，是集团首间位于路氹的娱乐场。',
                    timestamp: '2006年9月'
                }, {
                    content: '银娱第三间城巿娱乐会总统娱乐场紧接开业。',
                    timestamp: '2006年4月'
                }, {
                    content: '银娱首间城巿娱乐会华都娱乐场开业，位置邻近港澳码头。华都娱乐场自开业后发展迅速，肯定了银娱的未来发展方针。',
                    timestamp: '2006年2月'
                }, {
                    content: '银娱成为首间在港上市的博彩企业，进一步巩固公司的实力及为未来发展奠立基础。',
                    timestamp: '2005年7月'
                }, {
                    content: '银娱首间城巿娱乐会华都娱乐场开业，位置邻近港澳码头。华都娱乐场自开业后发展迅速，肯定了银娱的未来发展方针。',
                    timestamp: '2004年7月'
                }, {
                    content: '与美国、欧洲及亚洲等地的18家企业比拼下，银娱场股份有限公司最终成功获得澳门政府授予博彩经营权。。',
                    timestamp: '2004年2月'
                }]
            };
          },
        methods: {
            handleClick (tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
    .aboutMe {
        width: 100%;
        height: 100%;
        background: #f3f3f1;
    }

    .banner {
        width: 100%;
        height: 450px;
        background-image: url("//image.beike188.com/YHHB/images/aboutus/5c799b3080899c14fce20fde9c836610.jpg");
    }

    .content {
        width: 1200px;
        height: 100%;
        background: #f3f3f1;
        margin: 0 auto;
        padding-top: 30px;
        padding-bottom: 20px;
        /*box-shadow: 2px 2px 2px 2px #ccc;*/
    }

    .content-box {
        width: 1200px;
        height:100%;
        background: white;
        margin: auto;
        border: 1px solid #f3f3f1;
        box-shadow: 2px 2px 2px 2px #ccc;

    }

    .nav {
        width: 928px;
        padding: 50px 50px 20px 50px;
        margin: auto;
    }

    .content- {
        width: 928px;
        height: auto;
        margin: 30px auto;
        background: white;
    }

    .title {
        width: 928px;
        height: 24px;
        display: flex;
    }

    .icon {
        width: 16px;
        height: 16px;
        line-height: 24px;
        background: rgba(208, 146, 21, .3);
        border-radius: 50px;
    }

    .titleStyle {
        width: 800px;
        height: 18px;
        text-align: left;
        font-size: 16px;
        line-height: 18px;
        margin-left: 10px;
        color: #d09215;
    }

    h2 {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 30px;
        text-indent: 2em;
        font-weight: 700;
        text-align: left;
    }

    .center {
        width: 928px;
        height: 580px;
        display: flex;
        justify-content: space-between;
    }

    .left {
        width: 590px;
        height: 580px;
    }

    .left p {
        line-height: 22px;
        text-align: justify;
        text-indent: 2em;
        font-size: 14px;
        margin-bottom: 10px;
    }

    .right {
        width: 380px;
        height: 540px;
        margin-left: 15px;
    }

    .right img {
        width: 380px;
        height: 540px;
    }
    .content-bottom{
        width: 928px;
        height: 360px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .content-bottom ul{
        width: 928px;
        height: 360px;
        display: flex;
        justify-content: space-around;
    }
    .content-bottom ul li{
        width: 248px;
        height: 360px;
        padding: 0 20px;
        border: 1px solid #f3f3f1;
    }

    .icon-box-img{
        width: 60px;
        height: 60px;
        margin: 30px auto 30px auto;
        background: goldenrod;
        border-radius: 50%;
        position: relative;
    }
    .icon-box-img img{
        width:30px;
        height: 30px;
        position: absolute;
        left: 15px;
        top: 15px;
    }
    .content-bottom h1{
        font-size: 25px;
        color: #d09215;
        text-align: center;
        margin-bottom: 30px;
    }
    .content-bottom p{
        line-height: 22px;
        text-align: justify;
        text-indent: 2em;
        margin-bottom: 10px;

    }
    .text-style{
        text-align: left;
        width: 928px;
        padding: 10px;
    }
    .development-path{
        width: 100%;
        height: 45px;
        margin-bottom: 10px;
        line-height: 20px;
    }

    .members{
        width: 928px;
        height:100%;
    }
    .members-banner{
        width: 928px;
        height: 60px;
        text-align: left;
    }
    .members-banner img{
        width: 134px;
        height: 60px;
    }
    .members-img{
        width: 928px;
        height: 308px;
        margin-bottom: 20px;
        display: flex;
    }
    .members-img-left{
        width: 440px;
        height: 308px;
        margin: 0 10px 10px 0;
    }
    .members-img-left img{
        width: 440px;
        height: 308px;
    }
    .members-img-center{
        width: 230px;
        height: 308px;
        margin: 0 10px 10px 0;
    }
    .members-img-center img{
        width: 230px;
        height: 149px;
    }
    .members-img-right{
        width: 230px;
        height: 308px;
        margin: 0 10px 10px 0;
    }
    .members-img-right img{
        width: 230px;
        height: 308px;
    }
    .members-text{
        width: 928px;
        height: 100%;
    }
    .members-text p{
        width: 928px;
        line-height: 20px;
        font-size: 14px;
        text-indent: 2em;
        text-align: left;
        margin-bottom: 15px;
    }
    .dis{
        width: 928px;
        line-height: 20px;
        font-size: 14px;
        text-indent: 2em;
        text-align: left;
        margin-bottom: 15px;
    }
    .members-bottom{
        width: 928px;
        height:390px;
        display: flex;
        justify-content: space-between;
    }
    .members-bottom-box{
        width: 288px;
        border: 1px solid #dedede;
        margin-top: 16px;
        font-size: 14px;
     }
    .members-bottom-box img{
        width: 288px;
        height: 173px;
    }
    .members-bottom-box h3{
        color: #111;
        font-weight: 700;
        text-indent: 20px;
        text-align: left;
        margin-top: 15px;

    }
    .members-bottom-box p{
        color: #333;
        padding: 10px;
        text-indent: .5em;
        text-align: left;
        line-height: 24px;
    }
</style>
