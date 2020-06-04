<template>
  <div class="swiper"  @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <swiper :options="swiperOptions" ref="mySwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="gg">
      <div class="notice">
        <img class="notice-img" src="../../../assets/home-img/gg.png"/>
        <div class="notice-ins">最新公告:</div>
        <div class="notice-roll"></div>
        <div class="notice-more">查看更多&gt;</div>
      </div>
    </div>

  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'HomeSwiper',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          // 设置轮播可循环
          loop: true,
          autoplay: 3000,
          speed: 1000
        },
        // 设置前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 设置自动轮播
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
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
      }
    },
    methods: {
      //通过获得的swiper对象来暂停自动播放
      mouseEnter() {
        this.$refs.mySwiper.autoplay.stop()
      },
      mouseLeave() {
        this.$refs.mySwiper.autoplay.start()
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

  /*.swiper-pagination {*/
  /*background: #fff;*/
  /*}*/
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

  .notice-roll {
    height: 48px;
    width: 1000px;
    margin-left: 120px;
    margin-top: -48px;
  }

  .notice-more {
    width: 80px;
    height: 48px;
    font-size: 15px;
    margin-top: -30px;
    margin-left: 1125px;
  }
</style>
