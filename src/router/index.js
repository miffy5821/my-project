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
import personal from '@/pages/personal/personal.vue'
import problem from '@/pages/help/problem.vue'
import deposit from '@/pages/personal/components/deposit.vue'
import conversion from '@/pages/personal/components/conversion.vue'
import withdrawal from '@/pages/personal/components/withdrawal.vue'
import capital from '@/pages/personal/components/capital.vue'
import bet from '@/pages/personal/components/bet.vue'
import agency from '@/pages/agency/agency.vue'
import personalData from '@/pages/personal/components/personalData.vue'
import information from '@/pages/personal/components/information.vue'
import changePassword from '@/pages/personal/components/changePassword.vue'
import alipay from '@/pages/personal/components/alipay.vue'

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
        component: problem
        // children: [
        //     {
        //         path: 'commonProblem',//常见问题
        //         name: 'commonProblem',
        //         component: commonProblem
        //     }, {
        //         path: 'loginRegister',//登录
        //         name: 'loginRegister',
        //         component: loginRegister
        //     }, {
        //         path: 'registerPact',//注册
        //         name: 'registerPact',
        //         component: registerPact
        //     }, {
        //         path: 'deposit',//存款
        //         name: 'deposit',
        //         component: deposit
        //     }, {
        //         path: 'drawing',//取款
        //         name: 'drawing',
        //         component: drawing
        //     }, {
        //         path: 'transfer',//转帐
        //         name: 'transfer',
        //         component: transfer
        //     }, {
        //         path: 'privacyInfo',//隐私保护规则
        //         name: 'privacyInfo',
        //         component: privacyInfo
        //     }, {
        //         path: 'betRules',//投注规则和规定
        //         name: 'betRules',
        //         component: betRules
        //     }, {
        //         path: 'gamingDuty',//博彩责任
        //         name: 'gamingDuty',
        //         component: gamingDuty
        //     }, {
        //         path: 'termsConditions',//规则与条款
        //         name: 'termsConditions',
        //         component: termsConditions
        //     }, {
        //         path: 'privacyAgreement',//用户隐私协议
        //         name: 'privacyAgreement',
        //         component: privacyAgreement
        //     },
        //     {
        //         path: 'onlineProblem',//联机问题
        //         name: 'onlineProblem',
        //         component: onlineProblem
        //     }]
    }, {
        path: '/personal',
        name: 'personal',
        component: personal,
        children: [
            {
                path: 'conversion',
                name: 'conversion',
                component: conversion
            },
            {
                path: 'deposit',
                name: 'deposit',
                component: deposit
            },
            {
                path: 'withdrawal',
                name: 'withdrawal',
                component: withdrawal
            }, {
                path: 'capital',
                name: 'capital',
                component: capital
            }, {
                path: 'bet',
                name: 'bet',
                component: bet
            }, {
                path: 'personalData',
                name: 'personalData',
                component: personalData
            }, {
                path: 'information',
                name: 'information',
                component: information
            }, {
                path: 'changePassword',
                name: 'changePassword',
                component: changePassword
            }, {
                path: 'alipay',
                name: 'alipay',
                component: alipay
            },]
    }, {
        path: '/agency',
        name: 'agency',
        component: agency
    }
    ]
})



