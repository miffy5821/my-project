<template>
    <div>
        <div class="personal">
            <div class="personalBox">
                <div class="left">
                    <div class="leftLogo">
                        <img class="personal-logo" src="/static/personal/logo.png"/>
                        <h3 class="user">ceto5821,欢迎您!</h3>
                        <div class="status">
                            <p>认证状态：<span class="statusBox"><img class="status-icon" src="/static/personal/phone.png"
                                                                 alt=""></span>
                                <span class="statusBox"><img class="status-icon" src="/static/personal/phone.png"
                                                             alt=""></span></p>
                        </div>
                    </div>
                    <div class="personal-list">
                        <div class="personal-list">
                            <ul class="nav">
                                <li class="nav-color" v-for="item of sliderMenu">
                                    <router-link :to="item.path">
                                        <img class="nav-icon " :src="item.img"/> <span class="active">{{item.name}}</span>
                                    </router-link>
                                </li>
<!--                                <li>-->
<!--                                    <router-link to="/personal/deposit">-->
<!--                                        <img class="nav-icon" src="/static/personal/phone.png"/> <span>存款专区</span>-->
<!--                                    </router-link>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <router-link to="/personal/withdrawal">-->
<!--                                        <img class="nav-icon" src="/static/personal/phone.png"/> <span>取款专区</span>-->
<!--                                    </router-link>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <router-link to="/personal/capital">-->
<!--                                        <img class="nav-icon" src="/static/personal/phone.png"/> <span>资金记录</span>-->
<!--                                    </router-link>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <router-link to="/personal/bet">-->
<!--                                        <img class="nav-icon" src="/static/personal/phone.png"/> <span>投注记录</span>-->
<!--                                    </router-link>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <router-link to="/agency">-->
<!--                                        <img class="nav-icon" src="/static/personal/phone.png"/> <span>高级代理人</span>-->
<!--                                    </router-link>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <router-link to="/personal/personalData">-->
<!--                                        <img class="nav-icon" src="/static/personal/phone.png"/> <span>个人资料</span>-->
<!--                                    </router-link>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <router-link to="/personal/information">-->
<!--                                        <img class="nav-icon" src="/static/personal/phone.png"/> <span>信息公告</span>-->
<!--                                    </router-link>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <router-link to="/personal/changePassword">-->
<!--                                        <img class="nav-icon" src="/static/personal/phone.png"/> <span>修改密码</span>-->
<!--                                    </router-link>-->
<!--                                </li>-->
                            </ul>
                        </div>
                    </div>
                    <div class="app-code">
                        <img class="code" src="/static/personal/app-code.png">
                        <p>扫码下载APP</p>
                    </div>
                </div>

                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import personal from '@/pages/personal/personal.vue' //个人中心
import deposit from './components/deposit.vue'//存款专区
import conversion from './components/conversion.vue'////额度转换
import withdrawal from './components/withdrawal.vue' //取款专区
import capital from './components/capital.vue'//资金记录
import bet from './components/bet.vue' //投注记录
// import agency from '@/pages/agency/agency.vue'//代理
import personalData from './components/personalData.vue' //个人资料
import information from './components/information.vue' //信息公告
import changePassword from './components/changePassword.vue'//修改密码
import alipay from './components/alipay.vue'

export default {
    name: 'personal',
    components: {
        deposit: deposit,//c
        conversion: conversion,////额度转换
        withdrawal: withdrawal,//取款专区
        capital: capital,//资金记录
        bet: bet,//投注记录
        personalData: personalData,//个人资料
        information: information,//信息公告
        changePassword: changePassword,//修改密码
        alipay: alipay
              },
    data(){
        return{
            sliderMenu: [
                {name: '额度转换', path: '/personal/conversion',img:'/static/personal/phone.png'},
                {name: '存款专区', path: '/personal/deposit',img:'/static/personal/phone.png'},
                {name: '取款专区', path: '/personal/withdrawal',img:'/static/personal/phone.png'},
                {name: '资金记录', path: '/personal/capital',img:'/static/personal/phone.png'},
                {name: '投注记录', path: '/personal/bet',img:'/static/personal/phone.png'},
                {name: '高级代理人', path: '/agency',img:'/static/personal/phone.png'},
                {name: '个人资料', path: '/personal/personalData',img:'/static/personal/phone.png'},
                {name: '信息公告', path: '/personal/information',img:'/static/personal/phone.png'},
                {name: '修改密码', path: '/personal/changePassword',img:'/static/personal/phone.png'},
            ]
        }
    }
}
</script>

<style>
.personal {
    width: 100%;
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
    background: #fffff;
    margin-top: -20px;
}

.nav li {
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
    background-color: #f2f2f2;
}

/*.active{*/
/*  color: #c8a675;*/
/*}*/
/*!*.text{*!*/
/*margin-left: 10px;*/
/*font-size:14px;*/
/*height: 45px;*/
/*line-height: 45px;*/
/*width: auto;*/
/*}*/
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

</style>

