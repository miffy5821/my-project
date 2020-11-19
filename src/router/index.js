import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import news from '@/pages/news/news.vue'
import vip from '@/pages/vip/vip.vue'
import datang from '@/pages/datang/datang.vue'
import chess from '@/pages/chess/chess.vue'
import live from '@/pages/live/live.vue'
import electronic from '@/pages/electronic/electronic.vue'
import gaming from '@/pages/gaming/gaming.vue'
import sports from '@/pages/sports/sports.vue'
import lottery from '@/pages/lottery/lottery.vue'
import fishing from '@/pages/fishing/fishing.vue'
import discounts from '@/pages/discounts/discounts.vue'
// import exchange from '@/pages/exchange/exchange.vue'
import discountsDetail from '@/pages/discount-detail/discount-detail.vue'
import gift from '@/pages/gift/gift.vue'
import integral from '@/pages/integral/integral.vue'
import orderRecord from '@/pages/orderRecord/orderRecord.vue'
import register from '@/pages/register/register.vue'
//帮助中心
import problem from '@/pages/help/problem.vue'
import commonProblem from '@/pages/help/components/commonProblem.vue'
import loginRegister from  '@/pages/help/components/loginRegister.vue'
import termsConditions from '@/pages/help/components/termsConditions.vue'
import privacyInfo from '@/pages/help/components/privacyInfo.vue'
import registerPact from '@/pages/help/components/registerPact.vue'
import depositLive from '@/pages/help/components/depositLive.vue'
import drawing from '@/pages/help/components/drawing.vue'
import transfer from '@/pages/help/components/transfer.vue'
import betRules from '@/pages/help/components/betRules.vue'
import privacyAgreement from '@/pages/help/components/betRules.vue'
import onlineProblem from '@/pages/help/components/onlineProblem.vue'
import aboutMe from '@/pages/aboutMe/aboutMe.vue'
import gamingDuty from '@/pages/help/components/gamingDuty.vue'
//个人中心
import personal from '@/pages/personal/personal.vue' //个人中心
import deposit from '@/pages/personal/components/deposit.vue'//存款专区
import conversion from '@/pages/personal/components/conversion.vue'//额度转换
import withdrawal from '@/pages/personal/components/withdrawal.vue' //存款专区
import capital from '@/pages/personal/components/capital.vue'//资金记录
import bet from '@/pages/personal/components/bet.vue' //资金记录
import agency from '@/pages/agency/agency.vue'//代理
import personalData from '@/pages/personal/components/personalData.vue' //个人资料
import information from '@/pages/personal/components/information.vue' //信息公告
import changePassword from '@/pages/personal/components/changePassword.vue'//修改密码
import alipay from '@/pages/personal/components/alipay.vue'//设置支付宝
import changeName from '@/pages/personal/components/changeName.vue'//修改用户名
import changePhoneNumber from '@/pages/personal/components/changePhoneNumber.vue'//修改手机号码
import changeWechat from '@/pages/personal/components/changeWechat.vue'//修改微信号
import setQQ from '@/pages/personal/components/setQQ.vue'//设置QQ
import setBankCard from '@/pages/personal/components/setBankCard.vue'//修改银行卡
import setUstd from '@/pages/personal/components/setUstd.vue'//绑定USTD
import WithdrawalsPassword from '@/pages/personal/components/WithdrawalsPassword.vue'//修改提款密码
// import payCountdown from '@/pages/personal/components/payCountdown.vue'


Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/news',
        name: 'news',
        component: news
    }, {
        path: '/vip',
        name: 'vip',
        component: vip
    }, {
        path: '/aboutMe',
        name: 'aboutMe',
        component: aboutMe
    }, {
        path: '/datang',
        name: 'datang',
        component: datang
    }, {
        path: '/chess',
        name: 'chess',
        component: chess
    }, {
        path: '/live',
        name: 'live',
        component: live
    }, {
        path: '/electronic',
        name: 'electronic',
        component: electronic
    }, {
        path: '/gaming',
        name: 'gaming',
        component: gaming
    }, {
        path: '/sports',
        name: 'sports',
        component: sports
    }, {
        path: '/lottery',
        name: 'lottery',
        component: lottery
    }, {
        path: '/fishing',
        name: 'fishing',
        component: fishing
    }, {
        path: '/discounts',
        name: 'discounts',
        component: discounts
    }, {
        path: '/discountsDetail',
        name: 'discountsDetail',
        component: discountsDetail
    }, {
        path: '/gift',
        name: 'gift',
        component: gift
    }, {
        path: '/integral',
        name: 'integral',
        component: integral
    }, {
        path: '/orderRecord',
        name: 'orderRecord',
        component: orderRecord
    }, {
        path: '/register',
        name: 'register',
        component: register
    }, {
        path: '/problem',
        name: 'problem',
        component: problem,
        children: [
            {
                path: 'commonProblem',//常见问题
                name: 'commonProblem',
                component: commonProblem
            },
            {
                path: 'loginRegister',//登录
                name: 'loginRegister',
                component: loginRegister
            },
            {
                path: 'registerPact',//注册registerPact
                name: 'registerPact',
                component: registerPact
            },
            {
                path: 'depositLive',//存款
                name: 'depositLive',
                component: depositLive
            },
            {
                path: 'drawing',//取款
                name: 'drawing',
                component: drawing
            },
            {
                path: 'transfer',//转帐
                name: 'transfer',
                component: transfer
            },
            {
                path: 'privacyInfo',//隐私保护规则
                name: 'privacyInfo',
                component: privacyInfo
            },
            {
                path: 'betRules',//投注规则和规定
                name: 'betRules',
                component: betRules
            },
            {
                path: 'gamingDuty',//博彩责任
                name: 'gamingDuty',
                component: gamingDuty
            },
            {
                path: 'termsConditions',//规则与条款
                name: 'termsConditions',
                component: termsConditions
            },
            {
                path: 'privacyAgreement',//用户隐私协议
                name: 'privacyAgreement',
                component: privacyAgreement
            },
            {
                path: 'onlineProblem',//联机问题
                name: 'onlineProblem',
                component: onlineProblem
            }
        ]
    }, {
        path: '/personal',
        name: 'personal',
        component: personal,
        children: [
            {
                path: 'conversion',//额度转换
                name: 'conversion',
                component: conversion
            },
            {
                path: 'deposit',//存款专区
                name: 'deposit',
                component: deposit
            },
            {
                path: 'withdrawal',//取款专区
                name: 'withdrawal',
                component: withdrawal
            }, {
                path: 'capital',//资金记录
                name: 'capital',
                component: capital
            }, {
                path: 'bet',////投注记录
                name: 'bet',
                component: bet
            }, {
                path: 'personalData',//个人资料
                name: 'personalData',
                component: personalData
            }, {
                path: 'information',//信息公告
                name: 'information',
                component: information
            }, {
                path: 'changePassword',//修改密码
                name: 'changePassword',
                component: changePassword
            }, {
                path: 'alipay',//设置支付宝
                name: 'alipay',
                component: alipay
            },{
                path: 'changeName',//修改用户名
                name: 'changeName',
                component: changeName
            },{
                path: 'changePhoneNumber',//修改手机号码
                name: 'changePhoneNumber',
                component: changePhoneNumber
            },{
                path: 'changeWechat',//修改微信号
                name: 'changeWechat',
                component: changeWechat
            },{
                path: 'WithdrawalsPassword',//修改提款密码
                name: 'WithdrawalsPassword',
                component: WithdrawalsPassword
            },{
                path: 'setQQ',//设置QQ
                name: 'setQQ',
                component: setQQ
            },{
                path: 'setBankCard',//绑定银行卡
                name: 'setBankCard',
                component: setBankCard
            },{
                path: 'setUstd',//绑定USTD
                name: 'setUstd',
                component: setUstd
            },
            // {
            //     path: 'payCountdown',//支付倒计时
            //     name: 'payCountdown',
            //     component: payCountdown
            // }
            ]
    }, {
        path: '/agency',
        name: 'agency',
        component: agency
    }
    ]
})



