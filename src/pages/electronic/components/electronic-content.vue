<template>
    <div class="electronic">
        <div class="banner">
            <div class="dynamic-digital">
                <div class="dynamic-border">
                    <div class="center1"></div>
                    <div class="center2"></div>
                    <div class="center3"></div>
                </div>
                <div class="dynamic-text">
                    ￥{{numberFormat(this.moneyCount.toFixed(2))}}
                </div>
                <div class="dynamic-button"></div>
            </div>
        </div>
        <div class="content">
            <div class="electronic-">
                <div class="electronic-nav">
                    <el-tabs v-model="activeName"  class="electronic-box">
                        <el-tab-pane

                            v-for="(item,index) of subGameTitle"
                            @click="changeGameType(item.gameCode)"
                            :key="item.gameCode"
                            :label="item.menuNameCn"
                            :name="item.gameCode"
                        >
                            <span slot="label"><img class="ele-icon" :src="item.icons[0].href"/> {{item.menuNameCn}}</span>
                            <div class="ele-search">
                                <button class="hit">热门游戏</button>
                                <div class="center"></div>
                                <input class="search" placeholder="请输入游戏名称"/>
                                <i class="icon"></i>
                            </div>
                            <div class="games">
                                <div class="games-" v-for="item of currentGameClass" :key="item.id">
                                    <div class="games-box">
                                        <img class="games-img" :src="item.icons[0].href" alt/>
                                    </div>
                                    <p class="games-name">{{item.menuNameCn}}</p>
                                    <div class="games-shadow">
                                        <button class="go-game">进入游戏</button>
                                    </div>
                                </div>
                            </div>
                            <div class="page">
                                <el-pagination
                                    background
                                    layout="prev, pager, next"
                                    :total="total"
                                    :current-page.sync="currentPage"
                                    :page-size="18"
                                    @current-change=" getGame()"
                                >
                                </el-pagination>
                            </div>

                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'electronicContent',
        data () {
            return {
                activeName: '',
                subGameTitle: [], // 所有电子游戏数据
                currentGameClass: '', // 当前游戏
                currentPage: 1,
                pageSize: 18,
                total: 0,
                activeIndex: 0,
                moneyCount: 515122103.85,
                currentGameType: ''
            };
        },
        methods: {
            /**
             * 数值随机累加
             */
            autoAddNumber () {
                setInterval(() => {
                    const addCount = Math.random() * 300;
                    this.moneyCount = this.moneyCount + addCount;
                }, 150)
            },
            /**
             * 千分位 格式化
             * @param value 原始值
             * @returns {string}
             */
            numberFormat (value) {
                if (!value) return ' ';
                const decimal = value.toString().split('.')[1];
                let intPart = Number(value).toFixed(0);// 获取整数部分
                let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
                return intPartFormat + '.' + decimal;
            },

            /**二级菜单栏**/
            sublist () {
                this.axios.get('api/menu', {params: {terminal: 0}})
                    .then((response) => {
                        const resbody = response.data;

                        if (resbody.status === 10000) {
                            const subName = response.data.data[4].subMenus;// 储存所有电子游戏数据
                            this.subGameTitle = subName;
                            this.currentGameType = this.subGameTitle[0].gameCode;
                            console.log('subGameTitle', this.subGameTitle);
                            this.getGame();

                        }
                    }).catch(error => {
                    alert(error);
                })
            },
            getGame () {
                this.axios.get('/api/game/list', {
                    params: {
                        gameType: this.currentGameType,
                        pageNo: this.currentPage,
                        pageSize: 18
                    }
                }).then((response) => {
                    console.log(response);
                    const giftItem = response.data.list;// 储存所有数据
                    this.currentGameClass = giftItem;
                    this.total = response.data.total;
                    console.log('currentGameClass', this.currentGameClass);
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            changeGameType (gameCode) {
                this.currentGameType = gameCode;
                this.currentPage = 1;
                this.getGame();
            },
            switchItem (index) {
                this.activeIndex = index;
            },
            // handleClick(tab, event) {
            //     console.log(tab, event);
        },
        mounted () {
            this.sublist();
            this.autoAddNumber();
        }
    }
</script>
<style scoped>
    .electronic {
        width: 100%;
        background-color: #f9f9f9;
    }

    .banner {
        width: 100%;
        height: 450px;
        background-image: url("/static/electronic/solts_banner.jpg");
        background-size: cover;
    }

    .dynamic-digital {
        width: 1200px;
        height: 250px;
        position: relative;;
        left: 10%;
        top: 18%;
    }

    .dynamic-border {
        width: 600px;
        height: 180px;
        display: flex;
    }

    .center1 {
        height: 180px;
        width: 93px;
        background: url(//image.beike188.com/YHHB/images/slots/dianzi_02L.54e0512.png) no-repeat;
    }

    .center2 {
        height: 3px;
        width: 450px;
        background: url(//image.beike188.com/YHHB/images/slots/dianzi_01.e67c171.png) 0 0/cover no-repeat;
        position: relative;
        top: 38px
    }

    .center3 {
        height: 180px;
        width: 93px;
        background: url(//image.beike188.com/YHHB/images/slots/dianzi_03R.42e0e27.png) no-repeat;
    }

    .dynamic-text {
        position: absolute;
        width: 580px;
        height: 100px;
        top: 20%;
        text-align: center;
        line-height: 100px;
        font-size: 60px;
        color: #ffff73;
    }

    .dynamic-button {
        width: 312px;
        height: 56px;
        background: url(//image.beike188.com/YHHB/images/slots/dianzi_zi.25161e0.png) no-repeat;
        position: relative;
        left: 145px;
        top: -20px;
    }

    .content {
        width: 100%;
        border: 1px solid #eaeaea;
    }

    .electronic- {
        width: 1200px;
        margin: 30px auto;
        border: 1px solid #eaeaea;
    }

    .electronic-nav {
        width: 1200px;
        /*height: 80px;*/
        display: flex;
    }

    .electronic-click img {
        width: 24px;
        height: 24px;
    }

    .electronic-box {
        width:95%;
        margin: 20px auto;

    }

    .ele-icon {
        /*margin-top: 5px;*/
        width: 30px;
        height: 30px;
    }

    .ele-search {
        width: 100%;
        height: 36px;
        padding-top: 10px;
        display: flex;
        margin-bottom: 30px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eaeaea;
    }

    .hit {
        background: #c8a675;
        color: #fff;
        padding: 3px 8px;
        margin-left: 20px;
        font-size: 14px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }

    .center {
        width: 765px;
        height: 36px;

    }

    .search {
        width: 144px;
        height: 22px;
        background-color: #ffffff;
        font-size: 14px;
        color: gray;
        border: 1px solid #eaeaea;
        position: relative;
        left: 50px;
        padding: 4px 7px 4px 12px;
    }

    .icon {
        width: 37px;
        height: 32px;
        background-color: orange;
        display: inline-block;
        padding-left: 5px;
        background-image: url(/static/electronic/search.png);
        background-position: 50%;
        text-align: center;
        position: relative;
        left: 58px;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .games {
        width: 100%;
        height: 618px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

    }

    .games- {
        position: relative;
        /*float: left;*/
        height: 186px;
        width: 170px;
        margin-bottom: 20px;
        background: #4d4d4d;
    }

    .games-:hover .games-shadow {
        opacity: 1;
    }

    .games-img {
        width: 124px;
        min-height: 124px;
        background: #fff;
        border: 1px solid #f0f0f0;
    }

    .games-box {
        position: relative;
        overflow: hidden;
        height: 145px;
        margin: 4px 4px 0;
        padding-top: 12px;
        border-radius: 6px;
        background: #252525;
        text-align: center;
    }

    .games-shadow {
        width: 170px;
        height: 186px;
        /*background: #222222;*/
        border: 1px solid #c8a675;
        background: rgba(0, 0, 0, .7);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        opacity: 0;
    }

    .go-game {
        width: 80px;
        height: 34px;
        /*padding: 5px;*/
        line-height: 34px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        position: absolute;
        top: 80px;
        left: 50px;
        background-color: #c2a77d;
        border: none;
        border-radius: 3px;
    }

    .games-name {
        width: 170px;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        color: white;
        text-align: center;
        /*margin-top: -15px;*/
    }

    .page {
        width: 1200px;
        height: 50px;
        margin-top: 30px;
    }

    .turn-page {
        width: 300px;
        height: 50px;
        margin: 0 auto;
    }

    .pev {
        width: 80px;
        height: 26px;
        line-height: 16px;
        text-align: center;
        color: white;
        font-size: 14px;
        margin-right: 10px;
        background: chocolate;
        border: none;
    }

    .nowPage {
        width: 20px;
        height: 10px;
        line-height: 10px;
        text-align: center;
        font-size: 14px;
        color: darkgray;
    }

    .total {
        width: 20px;
        height: 10px;
        line-height: 10px;
        text-align: center;
        font-size: 14px;
        color: darkgray;
    }

    .next {
        width: 80px;
        height: 26px;
        line-height: 16px;
        text-align: center;
        color: white;
        font-size: 14px;
        margin-left: 10px;
        background: chocolate;
        border: none;
    }
</style>
