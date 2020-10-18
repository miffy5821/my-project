<template>
    <div class="gift-content">
        <div class="content">
            <div class="banner">
                <swiper :options="swiperGift">
                    <swiper-slide v-for="item of swiperList" :key="item.id">
                        <img class="banner-img" :src="item.imgUrl"/>
                    </swiper-slide>
                    <div class="swiper-pagination pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="integral">
                <div class="title-top">
                    <div class="integral-login">
                        <span class="login-text1">我的积分：</span><span class="login-text2">请登录</span>
                    </div>
                    <div class="title-history">
                        <div class="button" @click="jumpOrderRecord()">
                            <img class="button-img" src="/static/gift/icon1.png"/>
                            <!--<span class="button-text"></span>-->
                            订单记录
                        </div>
                        <div class="button" @click="jump()">
                            <img class="button-img" src="/static/gift/icon2.png"/>
                            <!--<span class="button-text"></span>-->
                            兑换规则
                        </div>
                    </div>
                </div>
                <div class="title-bottom"></div>
                <div class="boutique">
                    <div class="boutique-title">
                        <div class="line"></div>
                        <div class="boutique-text1">精品商店</div>
                        <div class="boutique-text2">/SELECTED COMMODITIES</div>
                    </div>
                    <div class="boutique-swiper">
                        <div class="boutique-img">
                            <img class="jingpin-img" :src="ranksList" alt="">
                            <div class="hover-text" >
                                <div class="product">
                                    <p>空投美女</p>
                                    <p>礼品价值：<span>18000</span></p>
                                    <p>兑换积分：<span>54000积分</span></p>
                                </div>
                                <div class="boutique-button">
                                    <button class="boutique-button-btn">立即兑换</button>
                                </div>
                            </div>
                        </div>
                        <!--左边的内容-->
                        <div class="boutique-right">
                            <!--奖品公布-->
                            <div class="scroll">
                                <div class="redeem">兑换热榜清单</div>

                                <vue-seamless-scroll :data="listData" class="seamless-warp">
                                    <ul class="item">
                                        <li v-for="item in listData">
                                            <div class="title" v-text="item.title"></div>
                                            <div class="data" v-text="item.user"></div>
                                        </li>
                                    </ul>
                                </vue-seamless-scroll>
                            </div>
                        </div>
                    </div>
                    <!--奖品的展示-->
                    <div class="boutique-gift">
                        <div class="boutique-title">
                            <div class="line"></div>
                            <div class="boutique-text1">热门商品</div>
                            <div class="boutique-text2">/SELECTED COMMODITIES</div>
                        </div>
                        <div class="gift">
                            <div class="giftList" v-for="(item,index) in giftList" :key="item.id">
                                <img class="giftImg" :src="item.icon" alt="">
                                <div class="giftText">
                                    <p class="gitfName"> {{ item.pluname }}</p>
                                    <div class="gift-ms"><span class="tex1">礼品价值：</span><strong
                                        class="tex2">{{ item.price }}</strong></div>
                                    <div class="gift-ms"><span class="tex1">积分兑换：</span><strong
                                        class="tex2">{{ item.cprice }}</strong><span class="tex3">立即兑换</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pager">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="89">
                    </el-pagination>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    import vueSeamless from 'vue-seamless-scroll'

    export default {
        components: {
            vueSeamless
        },
        data () {
            return {
                giftList: [],
                ranksList: '',
                listData: [{
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }, {
                    'title': '【阿玛尼手提包】',
                    'user': '***dv***'
                }],

                swiperGift: {
                    pagination: '.swiper-pagination',
                    autoplay: 5000,
                    speed: 5000,
                    loop: true
                },

                swiperIntegral: {
                    pagination: '.swiper-pagination',
                    autoplay: 5000,
                    speed: 5000,
                    loop: true
                },

                swiperList: [{
                    id: '0001',
                    imgUrl: '//image.beike188.com/YHHB/images/jfsc/jfsc_banner01.jpg'
                }, {
                    id: '0002',
                    imgUrl: '//image.beike188.com/YHHB/images/jfsc/jfsc_banner02.jpg'
                }]
            }
        },
        methods: {
            giftBanner (index) {
                this.axios.get('/api/goods/ranks', {
                    params: {id: 0, terminal: 0}
                })
                    .then((response) => {
                        const data = response.data;
                        console.log(response);
                        if (data.status === 10000) {
                            const ranks = response.data.data[0].icon;// 储存所有优惠数据
                            this.ranksList = ranks;
                            console.log('ranksList', this.ranksList);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            getGift () {
                this.axios.get('/api/goods/list', {
                    params: {id: 0, terminal: 0}
                })
                    .then((response) => {
                        const giftItem = response.data.list;// 储存所有优惠数据
                        this.giftList = giftItem;
                        console.log('giftList', this.giftList);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            jump( ){
                this.$router.push('/integral')
                // this.$router.push({ path: '/'});
            },
            jumpOrderRecord( ){
                this.$router.push('/orderRecord')
            }

        },
        mounted () {
            this.giftBanner();
            this.getGift();
            this.giftBanner();
        },
    }
</script>
<style>
    .gift-content {
        width: 100%;
    }

    .content {
        width: 100%;
        background-color: white;
        cursor: pointer;
    }

    .banner {
        width: 100%;
        height: 600px;
    }

    .banner-img {
        width: 100%;
        height: 600px;
    }

    .integral {
        width: 1200px;
        /*height: 1800px;*/
        padding: 15px 0;
        margin: 0 auto;
    }

    .integral .title-top {
        width: 100%;
        height: 60px;
        padding: 0 20px;
        border-bottom: 2px solid #757575;
        display: flex;
        justify-content:space-between;
        align-items: center;
    }

    .integral-login {
        width: 250px;
        /*height: 48px;*/
        display: flex;

    }

    .login-text1 {
        font-family: MicrosoftYaHei;
        font-size: 20px;
        font-weight: 500;
        color: #404040;
    }

    .login-text2 {
        font-family: MicrosoftYaHei;
        font-size: 20px;
        font-weight: 500;
        color: #c8a675;

    }


    .title-history {
        /*height: 48px;*/
        display: flex;
        justify-content: space-between;
        width: 260px;

    }

    .button {
        width: 100px;
        height: 25px;
        line-height: 32px;
        padding: 0 10px 7px 10px;
        border-radius: 30px;
        border: 2px solid #757575;
        font-weight: bold;
        color: #777477;
        font-size: 14px;
    }

    .button-img {
        width: 25px;
        height: 25px;
    }

    .button-text {
        font-size: 16px;
        font-weight: 500;
        color: #777477;
    }

    .boutique {
        width: 1200px;
        /*height: 566px;*/
        margin-top: 40px;

    }

    .boutique-title {
        width: 1163px;
        height: 40px;
        padding: 0 15px 0 22px;
        display: flex;
        flex-wrap: wrap;
    }

    .boutique-text1 {
        font-size: 32px;
        color: #404040;
        font-weight: 500;
        display: flex;
        align-items: center;
        margin-left: 8px;

    }

    .boutique-text2 {
        font-size: 18px;
        color: #757575;
        text-align: center;
        margin-left: 10px;
        display: flex;
        align-items: center;
    }

    .boutique-swiper {
        width: 1200px;
        height: 500px;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .boutique-img {
        width: 870px;
        height: 500px;
    }

    .jingpin-img {
        width: 870px;
        height: 500px;
    }
    .boutique-img:hover .hover-text{
        display: block;
    }

    .hover-text {
        width: 870px;
        height: 120px;
        color: #fff;
        background: #aaa;
        position: relative;
        top: -115px;
        display: none;
        z-index: 999;
    }

    .product {
        width: 250px;
        height: 90px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        margin-left: 20px;
        padding: 15px 0 15px 20px;
    }

    .product p {
        width: 250px;
        height: 20px;
        text-align: left;
        font-size: 24px;
    }

    .product span {
        color: #c19045;
    }

    .boutique-button {
        width: 200px;
        height: 80px;
        padding-right: 50px;
        position: absolute;
        top:25px;
        left: 640px;
        margin-top: auto;
        margin-bottom: auto;
    }

    .boutique-button-btn{
        width: 150px;
        margin-top: 20px;
        padding: 10px 20px;
        color: #c19045;
        font: inherit;
        border: 1px solid #c19045;

    }
    .boutique-button-btn:hover {
        color: #fff;
        background: #c2a77d;
        animation-duration: ;
    }

    .boutique-right {
        width: 311px;
        height: 870px;
    }

    .scroll {
        width: 308px;
        height: 505px;
        margin-right: 2px;
        background: white;
        border: 1px solid darkgrey;
    }

    .redeem {
        width: 298px;
        height: 40px;
        font-size: 25px;
        background: #f7f7f7;
        color: #d8b36a;
        text-align: center;
        font-weight: bold;
        line-height: 40px;
        padding-left: 12px;
        border-bottom: 1px solid darkgrey;
    }

    .item {
        width: 298px;
        overflow: hidden;
    }

    .item li {
        width: 258px;
        height: 37px;
        line-height: 37px;
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
        border-bottom: 1px dotted #aaa;
        /*text-align: left;*/
    }

    .title {
        width: 150px;
        height: 37px;
        line-height: 37px;
        background: white;
        border-bottom: 1px dotted #aaa;
    }

    .data {
        width: 80px;
        height: 37px;
        line-height: 37px;
    }

    @keyframes anis {
        100% {
            transform: translateY(-100%)
        }
    }

    .seamless-warp {
        height: calc(100% - 41px);
        overflow: hidden;
    }

    .boutique-gift {
        width: 1200px;
        margin-top: 50px;

    }

    .line {
        width: 3px;
        background-color: saddlebrown;
    }

    .gift {
        width: 1200px;
        height: 1220px;
        margin-top: 10px;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
    }

    .giftList {
        width: 278px;
        height: 382px;
        margin: 6px 0 0 15px;
        border: 1px solid darkgrey;
        transition: all .3s ease-in-out;
    }

    .giftList:hover {
        transform: translate3d(0,-3px,0);
        box-shadow: 0 2px 20px 0 #666;
    }

    .giftImg {
        margin-top: 2px;
        width: 274px;
        height: 274px;
    }

    .giftText {
        width: 280px;
        margin-top: 8px;
        height: 50px;
    }

    .gitfName {
        font-size: 13px;
        text-align: left;
        padding-left: 20px;
    }

    .gift-ms {
        width: 240px;
        height: 20px;
        display: flex;
        color: coral;
        margin-top: 5px;
        flex-wrap: wrap;
        font-weight: bold;
    }

    .tex1 {
        color: #666666;
        width: 60px;
        height: 20px;
        font-size: 13px;
        text-align: left;
        padding-left: 20px;
        line-height: 20px;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
    }

    .tex2 {
        color: #c8a675;
        width: 40px;
        height: 25px;
        font-size: 14px;
        text-align: right;
        line-height: 25px;
        font-weight: bold;
        padding-left: 20px;
        vertical-align: baseline;
    }

    .tex3 {
        display: inline-block;
        width: 50px;
        height: 15px;
        background: #c8a675;
        color: #ffffff;
        text-align: center;
        line-height: 15px;
        padding: 5px;
        font-size: 12px;
        margin-left: 25px;
        border-radius: 30px;
        float: right;
    }

    .tex3:active {
        transition: all 0.3s;
    }

    .pager{
        width: 1200px;
        height: 62px;
     }
</style>
