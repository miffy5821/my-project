<template>
<div class="plate1">
  <div class="plate1-information">
    <div class="plate1-line"></div>
    <div class="plate1-title">真人娱乐 </div>
    <div class="plate1-introduced">汇聚全球顶级真人娱乐平台</div>
    <div class="plate1-moro" @click="jumpLive()">查看更多</div>
    <img class="plate1-icon" @click="jumpLive()"
         src="../../../assets/home-img/icon.png" />
  </div>
  <div class="plate1-left">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination pagination" slot="pagination"></div>
    </swiper>
  </div>
  <div class="plate1-right">
    <div CLASS="plate1-right-div"  v-for="item of live" :key="item.id">
        <img class="liveImg" :src="item.imgUrl" />
        <div class="mask" v-for="item of markList" :key="item.id">
            <h3>{{item.gameName}}</h3>
            <p>{{item.gameIntroduce}}</p>
            <button>
                <router-link :to="item.gameUrl" >开始游戏</router-link>
            </button>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'homePlate1',
  data () {
    return{
      swiperOptions: {
        pagination: '.swiper-pagination',
        autoplay: 2000,
        speed: 1000,
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '/static/home/banner-slideshow1.jpg'
      }, {
        id: '0002',
        imgUrl: '/static/home/banner-slideshow2.jpg'
      },{
        id: '0003',
        imgUrl: '/static/home/banner-slideshow3.jpg'
      },{
        id: '0004',
        imgUrl: '/static/home/banner-slideshow4.jpg'
      }],
        live: [{
            id: '0001',
            imgUrl: 'https://gamelist.mobanwang.com.cn//menuList/YHHB/0/recommend/recommend02/txh.png'
        }, {
            id: '0002',
            imgUrl: 'https://gamelist.mobanwang.com.cn//menuList/YHHB/0/recommend/recommend02/cg.png'
        },{
            id: '0003',
            imgUrl: 'https://gamelist.mobanwang.com.cn//menuList/YHHB/0/recommend/recommend02/ds.png'
        },{
            id: '0004',
            imgUrl: 'https://gamelist.mobanwang.com.cn//menuList/YHHB/0/recommend/recommend02/ag.png'
        }],
      markList: [{
          id: '0001',
          gameName: 'WG视讯',
          gameIntroduce: '实力品牌 专业玩法',
          gameUrl: '/static/home/banner-slideshow1.jpg'
      }, {
          id: '0002',
          gameName: '卡卡湾视讯',
          gameIntroduce: '美女主播 多元化玩法',
          gameUrl: '/static/home/banner-slideshow1.jpg'
      },{
          id: '0003',
          gameName: 'DS视讯',
          gameIntroduce: '专业游戏研发 提供最佳品质',
          gameUrl: '/static/home/banner-slideshow1.jpg'
      },{
          id: '0004',
          gameName: 'AG国际厅',
          gameIntroduce: '美女主播 热线传情',
          gameUrl: '/static/home/banner-slideshow1.jpg'
      }]
    }
  },
    methods: {
      jumpLive() {
          this.$router.push('/live')
      }
    }
}
</script>

<style scoped>
  .plate1{
    width: 1200px;
    height: 478px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }
  .plate1-information{
    width: 1200px;
    height: 18px;
    display: flex;
  }
  .plate1-line{
    width: 3px;
    height:18px;
    background-color: orange;
  }
  .plate1-title {
      color: #6c6c6c;
      font-size: 18px;
      font-weight: 400;
      margin-left:10px;
  }
  .plate1-introduced{
      color: #666;
      line-height: 18px;
      margin-left: 20px;
      font-size: 14px;
      font-weight: 100;
  }
  .plate1-moro{
    width:80px;
    height:18px;
    font-size:13px;
    line-height: 18px;
      margin-left: 828px;
  }
  .plate1-moro:hover{
      color: orange;
  }
  .plate1-icon{
    line-height: 18px;
    width: 15px;
    height: 15px;
  }
  .plate1-left{
    width: 600px;
    height: 450px;
    margin-top: 10px;
    margin-right: 10px;
    /*background-image: url('../../../assets/home-img/banner-slideshow1.jpg');*/
    background-size: cover;
  }
  .swiper-img{
    width: 100%;
    height: 450px;
  }
  .plate1-left img{
    width: 605px;
    height: 448px;

  }
  .plate1-right{
    width: 585px;
    height: 450px;
    display: flex;
    flex-wrap: wrap;
    margin-left:610px;
    margin-top: -450px;
  }
  .plate1-right-div{
    position: relative;
    width: 280px;
    height: 222px;
    margin-right: 5px;
  }
  .plate1-right-div:hover .mask {
      opacity: 1;
  }
  .liveImg{
      width: 280px;
      height: 222px;
  }
  .mask{
      width: 280px;
      height: 222px;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(101, 101, 101, 0.6);
      color: #ffffff;
      opacity: 0;
  }
  .mask h3 {
      text-align: left;
      width: 280px;
      margin-top: 40px;
      padding-left: 20px;
      font-size: 16px;
      font-weight: 600;
  }
  .mask p{
      width: 280px;
      text-align: left;
      margin-top: 50px;
      padding-left: 20px;
      font-size: 16px;
  }
  .mask button{
      background: #c19045;
      /*margin-left: 10px 0;*/
  }
  .mask a{
      width: 80px;
      height: 20px;
      padding: 10px;
      margin-top: 100px;
      text-align: center;
      color: white;

  }
</style>
