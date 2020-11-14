<template>
    <div>
        <div class="ym">
        </div>
        <div class="bet">
            <div class="betName">投资记录</div>
        </div>
        <div class="bet-case">
            <div class="block left11">
                <el-date-picker
                    v-model="value1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </div>
            <el-select class="inputWidth" v-model="value" placeholder="快捷选时">
                <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <button class="btn11" @click="showSubGame= true">选择游戏平台</button>
            <el-divider class="bet-line"></el-divider>

            <p class="tex121">当前平台:<span class="tex22">请先选择需要查看的游戏平台</span></p>
            <div class="list-games" v-if="false">
                <diV class="xx-title">
                    <span>请选择查询游戏平台：</span>
                    <i class="el-icon-close xx-title-icon" @click.stop="showSubGame= !showSubGame"></i>
                </diV>
                <ul class="games-box">
                    <li class="games-">
                        <diV class="game-title">视讯</diV>
                        <diV class="game-sub">
                            <span class="active">全部</span>
                            <span>AG视讯</span>
                            <span>卡卡湾视讯</span>
                            <span>DS视讯</span>
                            <span>欧博视讯</span>
                            <span>OG视讯</span>
                            <span>BG视讯</span>
                            <span>BBIN视讯</span>
                            <span>WN视讯</span>
                            <span>WG视讯</span>

                        </diV>
                    </li>
                    <li class="games-">
                        <diV class="game-title">电子</diV>
                        <diV class="game-sub">
                            <span>全部</span>
                            <span>XIN电子</span>
                            <span>PP电子</span>
                            <span>AG电子</span>
                            <span>PT电子</span>
                            <span>BBIN电子</span>
                            <span>YOPLAY电子</span>
                            <span>PS电子</span>
                            <span>JDB电子</span>
                            <span>CQ9电子</span>
                            <span>SW电子</span>
                            <span>HABA电子</span>
                            <span>IG电子</span>
                            <span>MG电子</span>
                        </diV>
                    </li>
                    <li class="games-">
                        <diV class="game-title">棋牌</diV>
                        <diV class="game-sub">
                            <span>全部</span>
                            <span>大唐棋牌</span>
                            <span>欢乐棋牌</span>
                            <span>开元棋牌</span>
                            <span>乐游棋牌</span>
                            <span>得胜棋牌</span>
                        </diV>
                    <li class="games-">
                        <diV class="game-title">彩票</diV>
                        <diV class="game-sub">
                            <span>全部</span>
                            <span>BG彩票</span>
                            <span>IG彩票（新）</span>
                            <span>IG彩票</span>
                            <span>VR彩票</span>
                            <span>GR彩票</span>
                            <span>GG彩票</span>

                        </diV>
                    </li>
                    <li class="games-">
                        <diV class="game-title">捕鱼</diV>
                        <diV class="game-sub">
                            <span>全部</span>
                            <span>AG捕鱼</span>
                            <span>GG捕鱼</span>
                            <span>CQ9捕鱼</span>
                            <span>JDB捕鱼</span>
                            <span>BG捕鱼</span>
                            <span>SW捕鱼</span>

                        </diV>
                    </li>
                    <li class="games-">
                        <diV class="game-title">体育</diV>
                        <diV class="game-sub">
                            <span>全部</span>
                            <span>皇冠体育</span>
                            <span>AG体育</span>
                            <span>沙巴体育</span>
                            <span>IM体育</span>

                        </diV>
                    </li>
                    <li class="games-">
                        <diV class="game-title">电竞</diV>
                        <diV class="game-sub">
                            <span>全部</span>
                            <span>雷火电竞</span>
                            <span>IM电竞</span>

                        </diV>
                    </li>
                </ul>
            </div>
        </div>

        <div class="queries">
            <ul class="betBox">
                <li>游戏平台</li>
                <li>日期</li>
                <li>下注金额</li>
                <li>派金金额</li>
                <li>输赢金额</li>
                <li>有效投注</li>
            </ul>

        </div>
        <div class="record">
            <img class="recordImg" src="/static/personal/none.svg"/>
            <p>暂无数据</p>
        </div>
        <div>
            <p class="tex11">当前页总投注：总计0元&nbsp;&nbsp;|&nbsp;&nbsp;当前页派彩： 总计0元&nbsp;&nbsp;|&nbsp;&nbsp;当前页输赢： 总计0元&nbsp;&nbsp;|&nbsp;&nbsp;当前页有效投注：
                总计0元</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'capital',
        data () {
            return {
                showSubGame: false,
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick (picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick (picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick (picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                options1: [{
                    value: '选项1',
                    label: '今天'
                }, {
                    value: '选项2',
                    label: '昨天'
                }, {
                    value: '选项3',
                    label: '近三天'
                }, {
                    value: '选项4',
                    label: '近一周'
                }, {
                    value: '选项5',
                    label: '近一个月'
                }],
                value: '',
                value1: ''
            };
        }

    }
</script>
<style scoped>

    .ym {
        width: 978px;
        height: 20px;
    }

    .bet {
        width: 998px;
        height: 50px;
    }

    .betName {
        height: 40px;
        background: linear-gradient(90deg, #f2f2f2, #fff);
        line-height: 40px;
        padding: 0 30px;
        width: 200px;
        text-align: left;
        padding-left: -30px;
        font-size: 15px;
        font-weight: 700;
        color: #666;
    }

    .bet-case {
        width: 939px;
        height: 90px;
        margin: 20px;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-radius: 3px;
        background: #eee;
        position: relative;
    }

    .left11 {
        width: 350px;
    }

    .bet-line {
        color: #e8e8e8;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .inputWidth {
        width: 120px;
    }

    .btn11 {
        width: 110px;
        height: 40px;
        border: none;
        border-radius: 3px;
        color: white;
        font-size: 14px;
        padding: 10px;
        margin-left: 15px;
        margin-right: 20px;
        background: goldenrod;
    }

    .queries {
        width: 927px;
        height: 23px;
        padding: 16px;
        margin: 20px 20px 0 20px;
        background: #fafafa;
        border: 1px solid #e8e8e8;
        transition: background .3s ease;
    }

    .betBox {
        width: 893px;
        height: 23px;
        font-weight: 700;
        padding-left: 15px;
        padding-right: 15px;
        color: #909399;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .betBox li {
        width: auto;
        height: 23px;
        line-height: 25px;
        text-align: center;
        font-size: 14px;
    }

    .record {
        width: 927px;
        height: 495px;
        margin: 0 20px 20px 20px;
        padding: 0 16px 16px 16px;
        background: #fff;
        border-left: 1px solid #e8e8e8;
        border-right: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
    }

    .recordImg {
        width: 62px;
        height: 40px;
        margin-bottom: 15px;
        margin-top: 200px;
    }

    .tex121 {
        width: 800px;
        height: 25px;
        text-align: left;
        line-height: 25px;
        font-size: 14px;
        color: black;
    }

    .tex22 {
        line-height: 25px;
        font-size: 14px;
        margin-left: 10px;
        color: #c8a675;
    }

    .tex11 {
        width: auto;
        height: 25px;
        font-size: 14px;
        text-align: center;
        color: gray;
    }

    .list-games {
        position: absolute;
        width: 900px;
        height: 400px;
        left: 10px;
        top: 60px;
        /*width: 100%;*/
        /*height: 0;*/
        font-family: Microsoft YaHei;
        padding: 10px 16px;
        transition: all .5s;
        border: 1px solid #eaeaea;
        background: #fff;
        box-shadow: 0 2px 5px #757575;
        border-radius: 5px;
        z-index: 10;
    }

    .xx-title {
        overflow: hidden;
        line-height: 36px;
        padding-bottom: 5px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e0e0e0;
    }

    .xx-title span {
        overflow: hidden;
        line-height: 36px;
        padding-bottom: 5px;
    }

    .xx-title-icon {
        margin: 13px;
        cursor: pointer;
        color: inherit;
        font-style: normal;
        text-align: center;
        text-transform: none;
        vertical-align: -.125em;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    .games-box {
        padding: 20px 0 10px;
        font-size: 14px;
        display: flex;
        flex-wrap: wrap;
    }

    .games- {
        width: 100%;
        overflow: hidden;
        margin-bottom: 8px;
        display: flex;
        justify-content: left;
    }

    .game-title {
        width: 80px;
        display: inline-block;
        padding: 4px 9px;
        border-radius: 3px;
        margin: 4px 5px;
    }

    .game-sub {
        width: calc(100% - 88px);
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
    }


    .game-sub span {
        width: auto;
        display: inline-block;
        padding: 4px 9px;
        border-radius: 3px;
        margin: 4px 5px;
        cursor: pointer;
    }
    .game-sub span:hover{
        background: #c8a675;
        color: #fff;
    }

    .active{
        background: #c8a675;
        color: #fff;
    }
</style>


