<template>
<div class="plate1">
  <div class="plate1-information">
    <div class="plate1-line"></div>
    <div class="plate1-title">真人娱乐 </div>
    <div class="plate1-introduced">汇聚全球顶级真人娱乐平台</div>
    <div class="plate1-moro">查看更多</div>
    <img class="plate1-icon" src="../../../assets/home-img/icon.png" />
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
    <div class="cagawan"></div>
    <div class="DS"></div>
    <div class="AG"></div>
    <div class="sunber"></div>
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
      }]
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
  }
  .plate1-line{
    width: 3px;
    height:18px;
    background-color: orange;
  }
  .plate1-title {
    width:120px;
    height:18px;
    font-size:17px;
    margin-left:-10px;
    margin-top:-18px;
  }
  .plate1-introduced{
    width:180px;
    height:18px;
    font-size:14px;
    margin-left:90px;
    margin-top:-16px;
  }
  .plate1-moro{
    width:80px;
    height:18px;
    font-size:14px;
    margin-left:1108px;
    margin-top:-18px;
  }
  .plate1-icon{
    margin-left:1180px;
    margin-top:-36px;
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
    margin-left:610px;
    margin-top: -450px;
  }
  .plate1-right div{
    display: inline-block;
    width: 290px;
    height: 222px;
  }
  .cagawan{
    background-image: url('../../../assets/home-img/live1.png');
    background-size: cover;
  }
  .DS{
    background-image: url('../../../assets/home-img/live2.png');
    background-size: cover;
  }
  .AG{
    background-image: url('../../../assets/home-img/live3.png');
    background-size: cover;
  }
  .sunber{
    background-image: url('../../../assets/home-img/live4.png');
    background-size: cover;
  }
</style>
