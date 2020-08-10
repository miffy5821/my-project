<template>
    <div class="header">
        <div class="nav">
            <img class="nav-logo" src="../assets/home-img/logo.png">
            <ul class="nav-bar-box">
                <router-link to="/">
                    <li class="current-page">首页</li>
                </router-link>
                <router-link to="/datang">
                    <li>大唐棋牌</li>
                </router-link>
                <router-link to="/chess">
                    <li>棋牌</li>
                </router-link>
                <router-link to="/live">
                    <li>真人</li>
                </router-link>
                <router-link to="/electronic">
                    <li>电子</li>
                </router-link>
                <router-link to="/gaming">
                    <li>电竞</li>
                </router-link>
                <router-link to="/sports">
                    <li>体育</li>
                </router-link>
                <router-link to="/lottery">
                    <li>彩票</li>
                </router-link>
                <router-link to="/fishing">
                    <li>扑鱼</li>
                </router-link>
                <router-link to="/discounts">
                    <li><a>优惠</a></li>
                </router-link>
                <li><a>品牌风采</a></li>
                <router-link to="/gift">
                    <li>积分商场</li>
                </router-link>
            </ul>
            <div class="navLogin" v-if="!getIsLogin">
          <span class="left">
             <router-link to="/register">
            注册
            </router-link>
          </span>
                <span class="center" @click="toggleLogin()">
                登录
          </span>
                <span class="right">
            <router-link to="/personal">
            试玩
          </router-link></span>
            </div>

<!--            <div class="login-after" v-if="getIsLogin">-->
            <div class="login-after">
                ￥0.00
                <router-link to="/personal/deposit">
                    <button class="login-after-deposit">
                        存款
                    </button>
                </router-link>
            </div>
            <div class="personal-img" v-show="mouseenter">
                <img src="/static/home/个人.png" class="img-login-after">
            </div>
            <div class="nav-login"   >
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
                    <li class="border-line">
                        退出
                    </li>
                </ul>
            </div>
        </div>
        <Login @onLogin="toggleLogin()" v-if="isShowLogin"></Login>
    </div>

</template>

<script>
    import Login from '../pages/login/login'

    export default {
        name: 'HomeHeader',
        components: {
            Login: Login
        },
        props:['isLogin'],
        data () {
            return {
                isShowLogin: false, // 是否显示登录框
            }
        },
        methods: {
            toggleLogin () {
                this.isShowLogin = !this.isShowLogin;
            },
            mouseenter () {
               this.show=true;
            },
            mouseout (){
            this.show=false;
            }
        },
        computed:{
            getIsLogin(){
                return this.isLogin;
            }
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 78px;
    }

    .nav {
        width: 1200px;
        height: 78px;
        margin: 0 auto;
        display: flex;
    }

    .nav-logo {
        width: 232px;
        height: 65px;
        margin-left: 10px;
    }

    .nav-bar-box {
        width: 808px;
        height: 78px;
        list-style: none;
        margin-top: 25px;
    }

    .nav-bar-box li {
        display: inline-block;
        width: auto;
        height: 35px;
        color: black;
        margin: 0 20px 0 0;
    }

    .current-page {
        color: #c8a675;
        border-bottom: 2px solid #c8a675;
    }

    .navLogin {
        width: 148px;
        height: 25px;
        margin-top: 20px;
        cursor: pointer;
        display: none;
        background-color: #c8a675;
        border-radius: 30px;
    }

    .navLogin span {
        margin: 5px;
    }

    .navLogin a {
        text-decoration: none;
    }

    .left {
        width: 48px;
        height: 25px;
        font-size: 14px;
        margin: 5px;
        line-height: 23px;
        text-align: left;
        color: white;
    }

    .left a {
        color: white;
        text-decoration: none;
    }

    .right {
        width: 48px;
        height: 25px;
        font-size: 14px;
        margin: 5px;
        line-height: 23px;
        color: white;
        text-align: right;
    }

    .right a {
        color: white;
        text-decoration: none;
    }

    .center {
        width: 58px;
        height: 25px;
        font-size: 14px;
        padding: 2px;
        border-radius: 30px;
        text-align: center;
        background: white;
        color: #c8a675;
    }
    .login-after{
        width: 100px;
        height: 18px;
        margin-top: 20px;
        cursor: pointer;
        font-size:13px ;
        color:white;
        line-height: 18px;
        text-align: left;
        padding: 5px 1px 5px 10px;
        background-color: #c8a675;
        border-radius: 30px;
        display: flex;
        flex-wrap: wrap;

    }
    .login-after-deposit{
        width: 50px;
        height: 24px;
        font-size: 13px;
        line-height: 10px;
        text-align: center;
        border: 1px solid white;
        border-radius: 30px;
        padding: 5px;
        margin-left: 11px;
        margin-top: -3px;
        color:#c8a675 !important;
        text-decoration:none;
        background-color: white;
    }
    .img-login-after{
        width: 30px;
        height:30px;
        background-color:#c8a675 ;
        border-radius: 50%;
    }

    .personal-img{
        width: 40px;
        height: 40px;
        position: absolute;
        left:1550px;
        top:30px;
    }
    .nav-login{
        width: 120px;
        height: 230px;
        position: absolute;
        color: black;
        left: 1510px;
        top:85px;
        display: none;
        background: white;
        border: 1px solid darkgrey;
        border-radius: 5px;
        z-index: 99;
    }
    .nav-login ul{
        width: 120px;
        height: 200px;
        margin-top: 10px;
    }
    .nav-login ul li{
        width: 120px;
        height: 35px;
        line-height: 35px;
        font-size: 14px;
        color: #1c171d;
        text-decoration:none;
    }
    .border-line{
        border-top: 1px solid lightgrey;
    }

</style>
