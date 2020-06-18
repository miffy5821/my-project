<template>
  <div class="swiper">
    <swiper :options="swiperOptions" ref="mySwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <!--<div class="gg">-->
      <!--<div class="notice">-->
        <!--<img class="notice-img" src="../../../assets/home-img/gg.png"/>-->
        <!--<div class="notice-ins">最新公告:</div>-->
        <!--<div class="notice-roll"></div>-->
        <!--<div class="notice-more">查看更多&gt;</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="gg">
      <div class="notice">
        <img class="notice-img" src="../../../assets/home-img/gg.png"/>
        <div class="notice-ins">最新公告:</div>
        <div class="content">
        <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
          <ul class="item">
            <li v-for="item in newsList" v-text="item.title"></li>
          </ul>
        </vue-seamless-scroll>
        </div>
        <div class="notice-more">查看更多&gt;</div>
      </div>
    </div>

  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import vueSeamless from 'vue-seamless-scroll'
  export default {
    name: 'HomeSwiper',
    components: {
      swiper,
      swiperSlide,
      vueSeamless
    },
    // swiperOptions: {
    //   pagination: '.swiper-pagination',
    //   // 设置轮播可循环
    //   loop: true,
    //   // 设置自动轮播
    //   autoplay: {
    //     delay: 3000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false
    //   },
    //   speed: 3000,
    //   //  设置前进后退按钮
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    //   },
    // },
    data() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          // 设置轮播可循环
          loop: true,
          // 设置自动轮播
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          speed: 3000,
          //  设置前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        },
        swiperList: [{
          id: '0001',
          imgUrl: 'https://line.jzs001.cn/group1/M00/00/5E/DsBDFV7Lv_eARKqwAAMapkzSDjc174.jpg'
        }, {
          id: '0002',
          imgUrl: 'https://line.jzs001.cn/group1/M00/00/47/ZxcuGF598suAA3xhAAJrtztaeOo535.jpg'
        }, {
          id: '0003',
          imgUrl: 'https://line.jzs001.cn/group1/M00/00/3D/ZxcuGF5bRJiAaSyDAAJHEk3MwbY300.jpg'
        }, {
          id: '0004',
          imgUrl: 'https://line.jzs001.cn//group1/M00/00/29/DsBDFV43ybGAdf8cAALdvrn3iaY151.jpg'
        }, {
          id: '0005',
          imgUrl: 'https://line.yun-ai.cn/YHH/imgs/1566988876297老银河pc首存轮播.jpg'
        }, {
          id: '0006',
          imgUrl: 'https://line.jzs001.cn/group1/M00/00/42/Z_QBx16RzJSACyj1AASrsn1vpqc011.jpg'
        }, {
          id: '0007',
          imgUrl: 'https://line.yun-ai.cn/YHH/imgs/1562586205334老银河PC-银行卡回馈.png'
        }, {
          id: '0008',
          imgUrl: 'https://line.jzs001.cn/group1/M00/00/14/Z_QBx14F7O6AOKK7AAMrdF6_Y88494.jpg'
        }],
        newsList: [{
          'title': 'A simple, seamless scrolling for Vue.js'
        }, {
          'title': 'https://line.jzs001.cn/group1/M00/00/3D/ZxcuGF5bRJiAaSyDAAJHEk3MwbY300.jpg'
        }, {
          'title': 'https://line.yun-ai.cn/YHH/imgs/1562586205334老银河PC-银行卡回馈.png'
        }, {
          'title': 'https://line.jzs001.cn//group1/M00/00/29/DsBDFV43ybGAdf8cAALdvrn3iaY151.jpg'
        }],
      }
    },
    computed: {
      optionLeft() {
        return {
          direction: 2,
          limitMoveNum: 2
        }
      }
    }
  }
</script>

<style scoped>
  .swiper {
    width: 100%;
    height: 505px;
    overflow: hidden;
  }
  .swiper-img {
    width: 100%;
    height: 450px;
  }

  .gg {
    height: 52px;
    border-bottom: 1px solid gainsboro;
  }

  .notice {
    width: 1200px;
    height: 48px;
    margin-left: auto;
    margin-right: auto;
  }

  .notice-img {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: -1170px;
  }

  .notice-ins {
    width: 80px;
    height: 48px;
    font-size: 15px;
    line-height: 48px;
    margin-left: 40px;
    margin-top: -38px;
  }
  .content{
    width: 1000px;
    height: 48px;
    margin: auto;
  }
  .seamless-warp2 {
    overflow: hidden;
    height: 25px;
    width: 1000px;
    margin-top: -30px;
    margin-left: 20px;
  }
  .item {
    width: 1400px;
    white-space: nowrap;
  }

  .item li{
    font-size: 16px;
    float: left;
    height: 48px;
    line-height: 48px;
    margin-top: -15px;
    margin-left: 15px;
    margin-right: 10px;
  }
  .notice-more {
    width: 80px;
    height: 48px;
    line-height: 48px;
    font-size: 15px;
    margin-top: -65px;
    margin-left: 1125px;
  }
</style>
