<template>
    <div class="header">
        <div class="nav">
            <img class="nav-logo" src="/static/shared/logo.png " alt=''>
            <ul class="nav-bar-box">
                <img class="icon-hot" src="https://image.beike188.com/YHHB/images/hot.gif">
                <li class="nav-bar-box-li" :class="activeClass == index ? 'active':''"
                    @click="getItem(index,routerConfig[item.menuNameEn])"
                    v-for="(item,index) of topNavList.slice(0,11)" :key="index">
                    <router-link :to="routerConfig[item.menuNameEn]">
                        {{ item.menuNameCn }}
                    </router-link>
                    <ol class="lower-nav">
                        <li class="lower-nav-list" v-for="(subItem,index) of item.subMenus.slice(0,8)" :key="index">
                            <img class="lower-nav-list-img" :src="subItem.icons[0] && subItem.icons[0].img"/>
                            <div>{{ subItem.menuNameCn }}</div>
                        </li>
                    </ol>
                </li>

            </ul>
            <div class="navLogin" v-if="!isLogin">
                <div class="left">
                    <router-link to="/register">
                        注册
                    </router-link>
                </div>
                <div class="center" @click="toggleLogin()">
                    登录
                </div>
                <div class="right">
                    <router-link to="/personal">
                        试玩
                    </router-link>
                </div>
            </div>
            <!--登陆后的效果-->
            <div class="login-after" v-if="isLogin">
                <div class="login-after-btn">
                       <span>￥{{total.totalBalance}}</span>
                        <button class="login-after-deposit" @click="jumpDeposit()">
                            存款
                        </button>
                </div>
                <div class="personal-img"
                     v-on:mouseover="mouseover"
                     v-on:mouseleave="mouseleave"
                >

                    <div class="img-login-after"  @click="jumpPersonal()">
                        <i class="el-icon-user" style="margin-top: 5px"></i>
                    </div>
                    <div class="nav-login11" v-if="isShow" v-on:mouseover="mouseover">
                        <ul>
                            <router-link to="/personal/deposit">
                                <li>
                                    存款专区
                                </li>
                            </router-link>
                            <router-link to="/personal/withdrawal">
                                <li>
                                    取款专区
                                </li>
                            </router-link>
                            <router-link to="/personal/capital">
                                <li>
                                    资金记录
                                </li>
                            </router-link>
                            <router-link to="/personal/conversion">
                                <li>
                                    财务转账
                                </li>
                            </router-link>
                            <router-link to="/personal/information">
                                <li>
                                    消息<span>(2)</span>
                                </li>
                            </router-link>
                            <li class="border-line" @click="logout">
                                退出
                            </li>
                        </ul>
                    </div>
                </div>

            </div>


        </div>
        <Login @onToggleLogin="toggleLogin()" @onLoginSuccess="loginSuccess" v-if="isShowLogin"></Login>
    </div>

</template>

<script>
    import Login from '../pages/login/login'

    export default {
        name: 'HomeHeader',

        components: {
            Login: Login
        },
        data () {
            return {
                activeClass: 0, // 0为默认选择第一个，-1为不选择
                isShowLogin: false, // 是否显示登录框,
                topNavList: [],
                total:[],
                routerConfig: {
                    home: '/',
                    DTQP: '/datang',
                    OG: '/OG',
                    chess: '/chess',
                    LIVE: '/LIVE',
                    SLOTS: '/electronic',
                    sport: '/sports',
                    lottery: '/lottery',
                    fish: '/fishing',
                    discount: '/discounts',
                    brand: '###',
                    mall: '/gift',
                    HOT: '/gift',
                    Playforfun: '/'
                },
                isLogin: false, // 是否已登录
                isShow:false,//是否显示
                link: 'https://88y00.com/'
            }
        },
        methods: {
            mouseover () {
                this.isShow = true;
            },
            mouseleave () {
                this.isShow = false;
            },

            getItem (index, path) {
                this.activeClass = index;  // 把当前点击元素的index，赋值给activeClass
                if (path === '###') {
                    window.open(this.link);
                }
            },
            navList () {
                this.axios.get('api/menu', {params: {terminal: 0}})
                    .then((response) => {
                        console.log('response', response);
                        const resbody = response.data;
                        console.log('resbody', resbody);
                        if (resbody.status === 10000) {
                            this.topNavList = resbody.data;
                            console.log('topNavList', this.topNavList);

                        }
                    }).catch(error => {
                    alert(error);
                })
            },

            toggleLogin () {
                this.isShowLogin = !this.isShowLogin;
            },
            loginSuccess () {
                this.isLogin = true;
            },
            logout () {
                this.axios.post('api/gateway/logout')
                    .then((response) => {
                        console.log(response);
                        // const resbody = response.data;
                        if (resbody.status === 10000) {
                            // console.log(resbody.msg);
                            if (this.$router.currentRoute.path !== '/') {
                                this.$router.push('/');
                            }
                            this.$alert(resbody.msg);
                            this.isLogin = false;
                        } else {
                            this.$alert(data.msg);
                        }
                    })
                    .catch(error => {
                        alert(error);
                    })
            },
            getTotalAmount(){
                this.axios.get('/api/user/info')
                    .then((response) => {
                        const data = response.data;
                        if (data.status === 10000) {
                            // console.log(data);
                            this.total = response.data.data;
                            console.log('total', this.total)
                        }
                    }).catch(error => {
                    this.$alert({
                        message: error
                    });
                })
            },
            jumpPersonal(){
                this.$router.push({path: '/personal/conversion'});
            },
            jumpDeposit(){
                this.$router.push({path: '/personal/deposit'});
            }
        },
        mounted () {
            this.navList();
            this.getTotalAmount();
        },
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 78px;
    }

    .nav {
        width: auto;
        height: 78px;
        margin: 0 auto;
        display: flex;
        position: relative;
        justify-content: center;
    }

    .nav-logo {
        width: 232px;
        height: 65px;
        margin-left: 10px;
    }

    .nav-bar-box {
        height: 65px;
        line-height: 65px;
        min-width: 770px;
        list-style: none;
        position: relative;
        margin: 0 40px;
        display: flex;
        justify-content: space-around;
    }

    .icon-hot {
        width: 16px;
        height: 21px;
        position: absolute;
        top: 4%;
        left: 12%;
    }

    .nav-bar-box-li {
        position: relative;
        width: auto;
        transition: all .2s;
        margin: 0 20px 0 0;
    }

    .active {
        color: #c8a675;
        height: 50px;
        border-bottom: 2px solid #c8a675;
    }

    .navLogin {
        width: 148px;
        height: 25px;
        margin-top: 20px;
        cursor: pointer;
        /*display: none;*/
        display: flex;
        flex-wrap: wrap;
        background-color: #c8a675;
        border-radius: 30px;
    }

    .navLogin a {
        text-decoration: none;
    }

    .lower-nav {
        position: absolute;
        cursor: pointer;
        top: 61px;
        left: calc(50% - 80px);
        width: 160px;
        min-height: 368px;
        color: white;
        text-align: center;
        z-index: -100;
    }

    .lower-nav-list {
        width: 160px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        color: white;
        background: black;
        display: flex;
        border: 1px solid #c8a675;
        margin: 0 -1px -1px 0;
        cursor: pointer;
        opacity: 0;
        transform: rotateY(90deg);
        transition: opacity .4s, transform .5s;
        transition-timing-function: ease-in-out;
    }

    .lower-nav-list:nth-child(2) {
        transition-delay: 50ms;
    }

    .lower-nav-list:nth-child(3) {
        transition-delay: 100ms;
    }

    .lower-nav-list:nth-child(4) {
        transition-delay: 150ms;
    }

    .lower-nav-list:nth-child(5) {
        transition-delay: 200ms;
    }

    .lower-nav-list:nth-child(6) {
        transition-delay: 250ms;
    }

    .lower-nav-list:nth-child(7) {
        transition-delay: 300ms;
    }

    .lower-nav-list:nth-child(8) {
        transition-delay: 350ms;
    }

    .lower-nav-list:nth-child(9) {
        transition-delay: 400ms;
    }

    .lower-nav-list:nth-child(10) {
        transition-delay: 450ms;
    }

    .lower-nav-list:hover div {
        color: #c8a675;
    }



    .nav-bar-box-li:hover .lower-nav .lower-nav-list {
        /*color:#c8a675 ;*/
        border: 1px solid #c8a675;
        opacity: 1;
        transform: rotateY(0);

    }

    .nav-bar-box-li:hover .lower-nav {
        z-index: 100;
        /*border: 1px solid #c8a675;*/
        /*opacity: 1;*/
        /*transform: rotateY(0);*/
    }

    .lower-nav-list-img {
        width: 60px;
        height: 35px;
        margin: 8px 6px 0 6px;
        background-size: 100% 100%;
    }

    .left {
        width: 30px;
        height: 25px;
        font-size: 14px;
        padding-left: 10px;
        line-height: 25px;
        text-align: left;
        color: white;
    }

    .left a {
        color: white;
        text-decoration: none;
    }

    .right {
        width: 30px;
        height: 25px;
        font-size: 14px;
        margin-left: 12px;
        line-height: 25px;
        color: white;
        text-align: right;
    }

    .right a {
        color: white;
        text-decoration: none;
    }

    .center {
        width: 40px;
        height: 19px;
        line-height: 19px;
        font-size: 14px;
        padding: 2px 2px 2px 5px;
        margin-top: 1px;
        margin-left: 10px;
        border-radius: 30px;
        text-align: center;
        background: white;
        color: #c8a675;
    }

    .login-after {
        width: 250px;
        height: 30px;
        position: absolute;
        left: 85%;
        top: 20px;
        display: flex;
        flex-wrap: wrap;
    }

    .login-after-btn {
        width: 90px;
        height: 18px;
        cursor: pointer;
        font-size: 13px;
        color: white;
        line-height: 18px;
        text-align: center;
        padding: 5px 1px 5px 15px;
        background-color: #c8a675;
        border-radius: 30px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-between;

    }

    .login-after-deposit {
        width: 50px;
        height: 24px;
        font-size: 13px;
        line-height: 10px;
        text-align: center;
        margin-top: -3px;
        border: 1px solid white;
        border-radius: 30px;
        padding: 5px;
        color: #c8a675 !important;
        text-decoration: none;
        background-color: white;
    }

    .img-login-after {
        width: 30px;
        height: 30px;
        margin-left: 20px;
        background-color: #c8a675;
        border-radius: 50%;
    }

    .personal-img {
        width: 100px;
        height: 100px;
        z-index: 999;
        cursor: pointer;
    }

    .nav-login11 {
        width: 120px;
        height: 230px;
        color: black;
        margin-left: 10px;
        margin-top: 20px;
        background: white;
        border: 1px solid darkgrey;
        border-radius: 5px;
        z-index: 999;
        cursor: pointer;
    }

    .nav-login11 ul {
        width: 120px;
        height: 200px;
        margin-top: 10px;
        /*z-index: 999;*/
    }

    .nav-login11 a {
        color: #1c171d;
        text-decoration: none;
    }

    .nav-login11 ul li {
        width: 120px;
        height: 35px;
        line-height: 35px;
        font-size: 14px;
    }

    .border-line {
        border-top: 1px solid lightgrey;
    }

    .img-login-after:hover ~ .nav-login11 {
        display: block;
    }
</style>
