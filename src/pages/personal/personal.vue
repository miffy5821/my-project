<template>
    <div>
        <div class="personal">
            <div class="personalBox">
                <div class="left">
                    <div class="leftLogo">
                        <img class="personal-logo" src="/static/personal/logo.png"/>
                        <h3 class="user">{{ user.username }},欢迎您!</h3>
                        <div class="status">
                            <p>认证状态：
                                <span class="statusBox">
                                <!--<img class="status-icon" src="/static/personal/phone.png" alt="">-->
                                <i class="el-icon-mobile-phone status-icon"></i>
                                </span>
                                <span class="statusBox">
                                    <i class="el-icon-bank-card status-icon"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="personal-list">
                        <div class="personal-list">
                            <ul class="nav">
                                <li class="nav-color nav-li" v-for="(item,index) of sliderMenu"
                                    :class="active == index ? 'active':''">
                                    <router-link :to="item.path">
                                        <img class="nav-icon " :src="item.img"/> <span
                                        @click="active = index">{{ item.name }}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="app-code">
                        <img class="code" src="/static/personal/app-code.png">
                        <p>扫码下载APP</p>
                    </div>
                </div>

                <div class="content">
                    <div class="tg">
                        <div class="tg-icon"><img class="iconTg" src="/static/personal/phone.png" alt=""></div>
                        <div class="content-wrapper">
                            <marquee class="item-container" behavior="" onmouseover="this.stop();"
                                     onmouseout="this.start();" direction="left" scrollamount="5"
                                     scrolldelay="10">
                                <span class="tgContent" v-for="item in newsList" v-text="item.data" :key="item.weight">

                                </span>
                            </marquee>
                        </div>

                    </div>
                    <router-view :myUser="user"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import deposit from './components/deposit.vue'//存款专区
import conversion from './components/conversion.vue'////额度转换
import withdrawal from './components/withdrawal.vue' //取款专区
import capital from './components/capital.vue'//资金记录
import bet from './components/bet.vue' //投注记录
// import agency from '@/pages/agency/agency.vue'//代理
import personalData from './components/personalData.vue' //个人资料
import information from './components/information.vue' //信息公告
import changePassword from './components/changePassword.vue'//修改密码
import alipay from './components/alipay.vue'//设置支付宝
import changeName from './components/changeName.vue'//修改用户名
import changePhoneNumber from './components/changePhoneNumber.vue'//修改手机号码
import changeWechat from './components/changeWechat.vue'//修改微信号
import WithdrawalsPassword from './components/WithdrawalsPassword.vue'//修改提款密码
import setQQ from './components/setQQ.vue'//设置QQ
import setBankCard from './components/setBankCard.vue'//修改银行卡
import setUstd from './components/setUstd.vue'//绑定USTD

export default {
    name: 'personal',
    components: {
        deposit: deposit,//存款专区
        conversion: conversion,////额度转换
        withdrawal: withdrawal,//取款专区
        capital: capital,//资金记录
        bet: bet,//投注记录
        personalData: personalData,//个人资料
        information: information,//信息公告
        changePassword: changePassword,//修改密码
        alipay: alipay,//设置支付宝
        changeName: changeName,//修改用户名
        changePhoneNumber: changePhoneNumber,//修改手机号码
        changeWechat: changeWechat,//修改微信号
        WithdrawalsPassword: WithdrawalsPassword,//修改提款密码
        setQQ: setQQ,//设置QQ
        setBankCard: setBankCard,//修改银行卡
        setUstd: setUstd,//绑定USTD
    },
    data () {
        return {
            active: 0,
            user: [],
            sliderMenu: [
                {name: '额度转换', path: '/personal/conversion', img: '/static/personal/phone.png'},
                {name: '存款专区', path: '/personal/deposit', img: '/static/personal/phone.png'},
                {name: '取款专区', path: '/personal/withdrawal', img: '/static/personal/phone.png'},
                {name: '资金记录', path: '/personal/capital', img: '/static/personal/phone.png'},
                {name: '投注记录', path: '/personal/bet', img: '/static/personal/phone.png'},
                {name: '高级代理人', path: '/agency', img: '/static/personal/phone.png'},
                {name: '个人资料', path: '/personal/personalData', img: '/static/personal/phone.png'},
                {name: '信息公告', path: '/personal/information', img: '/static/personal/phone.png'},
                {name: '修改密码', path: '/personal/changePassword', img: '/static/personal/phone.png'},
            ],
            newsList: []
        }
    },
    methods: {
        getUser () {
            this.axios.get('/api/user/info')
                .then((response) => {
                    const data = response.data;
                    if (data.status === 10000) {
                        // console.log(data);
                        this.user = response.data.data;
                        console.log('user', this.user)
                    }
                }).catch(error => {
                this.$alert({
                    message: error
                });
            })
        },
        getConfigs () {
            this.axios.get('/api/config', {
                params: {id: 0, terminal: 0}
            })
                .then((response) => {
                    const data = response.data;
                    if (data.status === 10000) {

                        const configs = response.data.data[3].configs;// 储存所有公告
                        console.log('configs', this.configs)
                        this.newsList = configs;
                        console.log('newsList', this.newsList);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    mounted () {
        this.getUser();
        this.getConfigs();
    }
}
</script>

<style lang="less" scoped>
.personal {
    //width: 100%;
    height: 1050px;
    display: flex;
    cursor: pointer;
    background-color: #f7f6f4;
}

.personalBox {
    width: 1200px;
    height: 1000px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    border: 1px solid #eaeaea;
}

.left {
    width: 196px;
    height: 100%;
    background: white;
    border: 1px solid #eaeaea;
}

.leftLogo {
    width: 196px;
    height: 180px;
    border-bottom: 1px solid #eaeaea;
    margin: 20px 0;
}

.personal-logo {
    width: 80px;
    height: 80px;
    border: 4px solid #eaeaea;
    border-radius: 50%;
}

.user {
    width: 196px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 16px;
    margin-top: 8px;
    font-weight: 700;
}

.status {
    width: 196px;
    height: 25px;
    line-height: 25px;
    margin-top: 8px;
}

.status p {
    width: auto;
    height: 25px;
    color: black;
    line-height: 25px;
    font-size: 13px;
}

.statusBox {
    width: 18px;
    height: 18px;
    padding: 5px;
    margin-left: 8px;
    background-color: #eaeaea;
    border-radius: 50px;
}

.status-icon {
    width: 18px;
    height: 18px;
}

.personal-list {
    width: 196px;
    height: 427px;
    cursor: pointer;
    border-bottom: 1px solid #eaeaea;
}

.nav {
    width: 196px;
    height: 427px;
    background: #fff;
    margin-top: -20px;
}

.nav-li {
    height: 45px;
    width: 149px;
    font-size: 14px;
    line-height: 45px;
    text-align: left;
    padding-left: 50px;
}

a {
    list-style: none;
    text-decoration: none;
    color: gray;
}

.nav-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.nav-color {
    transition: all .3s;
}

.app-code {
    width: 196px;
    height: 234px;
    padding: 20px 0;
}

.code {
    width: 180px;
    height: 180px;
}

.app-code p {
    width: 196px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    color: black;
    text-align: center;
}

.content {
    background: #fff;
}

.tg {
    width: 960px;
    height: 25px;
    display: flex;
    justify-content: center;
    background: #eaeaea;
    padding: 20px 20px;
}

.tg-icon {
    width: 30px;
    height: 30px;
    background: #c8a675;
    border-radius: 50%;
}

.iconTg {
    width: 20px;
    height: 20px;
    text-align: center;
    padding-top: 5px;
}

.content-wrapper {
    width: 900px;
    margin-left: 20px;
    height: 25px;
    overflow: hidden;
}

.clearfix:after {
    content: '.';
    height: 0;
    display: block;
    clear: both;
}

.item-container {
    //animation: 20s wordsLoop linear infinite normal;
    white-space: nowrap;
    height: 25px;
    width: 900px;
}

.tgContent {
    height: 25px;
    //line-height: 25px;
    font-size: 14px;
    white-space: nowrap;

}

@keyframes wordsLoop {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}


.active {
    transition: all .3s;
    background-color: #f2f2f2;

    a {
        span {
            color: #c8a675;
        }
    }

}
</style>

