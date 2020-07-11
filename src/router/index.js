import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import datang from '@/pages/datang/datang.vue'
import chess from '@/pages/chess/chess.vue'
import live from '@/pages/live/live.vue'
import electronic from '@/pages/electronic/electronic.vue'
import gaming from '@/pages/gaming/gaming.vue'
import sports from '@/pages/sports/sports.vue'
import lottery from '@/pages/lottery/lottery.vue'
import fishing from '@/pages/fishing/fishing.vue'
import discounts from '@/pages/discounts/discounts.vue'
import gift from '@/pages/gift/gift.vue'
import register from '@/pages/register/register.vue'
import login from '@/pages/login/login.vue'
import personal from '@/pages/personal/personal.vue'
import deposit from '@/pages/personal/components/deposit.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/datang',
    name: 'datang',
    component: datang
  }, {
    path: '/chess',
    name: 'chess',
    component: chess
  },{
    path: '/live',
    name: 'live',
    component: live
  },{
      path: '/electronic',
      name: 'electronic',
      component: electronic
    },{
    path: '/gaming',
    name: 'gaming',
    component: gaming
  },{
    path: '/sports',
    name: 'sports',
    component: sports
  },{
    path: '/lottery',
    name: 'lottery',
    component: lottery
  },{
    path: '/fishing',
    name: 'fishing',
    component: fishing
  },{
    path: '/discounts',
    name: 'discounts',
    component: discounts
  },{
    path: '/gift',
    name: 'gift',
    component: gift
  },{
    path: '/register',
    name: 'register',
    component: register
  },{
    path: '/login',
    name: 'login',
    component: login
  },{
    path: '/personal',
    name: 'personal',
    component: personal,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'conversion',
        component: conversion
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'deposit',
        component: deposit
      },
    ]
  }
  ]
})
