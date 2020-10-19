<template>
  <div class="plate3">
    <div class="plate3-information">
      <div class="plate3-line"></div>
      <div class="plate3-title">精选大促  </div>
      <div class="plate3-introduced">各种优惠为您撑腰</div>
      <div class="plate3-moro" @click="jumpDiscounts()">查看更多</div>
      <img class="plate3-icon" @click="jumpDiscounts()"
           src="../../../assets/home-img/icon.png" />
    </div>
    <div class="plate3-left">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="plate3-right">
      <div class="moro1"></div>
      <div class="moro2"></div>
      <div class="moro3"></div>
      <div class="moro4"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homePlate3',
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
          imgUrl: '/static/home/jp-slideshow1.jpg'
        }, {
          id: '0002',
          imgUrl: '/static/home/jp-slideshow2.jpg'
        },{
          id: '0003',
          imgUrl: '/static/home/jp-slideshow3.jpg'
        },{
          id: '0004',
          imgUrl: '/static/home/jp-slideshow4.jpg'
        },{
          id: '0005',
          imgUrl: '/static/home/jp-slideshow5.jpg'
        },{
          id: '0006',
          imgUrl: '/static/home/jp-slideshow6.jpg'
        }]
      }
    },
      methods:{
        jumpDiscounts(){
            this.$router.push('/discounts')
        }

      }

  }
</script>

<style scoped>
  .plate3{
    width: 1200px;
    height: 478px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }
  .plate3-information{
    width: 1200px;
    height: 18px;
      display: flex;
  }
  .plate3-line{
    width: 3px;
    height:18px;
    background-color: orange;
  }
  .plate3-title {
      color: #6c6c6c;
      width: auto;
      font-size: 18px;
      font-weight: 400;
      margin-left:10px;
  }
  .plate3-introduced{
      color: #666;
      line-height: 18px;
      margin-left: 20px;
      font-size: 14px;
      font-weight: 100;
  }
  .plate3-moro{
      width:80px;
      height:18px;
      font-size:13px;
      line-height: 18px;
      margin-left: 880px;
  }
  .plate3-moro:hover{
      color: orange;
  }
  .plate3-icon{
      line-height: 18px;
      width: 15px;
      height: 15px;
  }
  .plate3-left{
    width: 600px;
    height: 450px;
    margin-top: 10px;
    margin-right: 10px;
    background-size: cover;
  }
  .swiper-img{
    width: 100%;
    height: 450px;
  }
  .plate3-right{
    width: 585px;
    height: 450px;
    margin-left:610px;
    margin-top: -450px;
  }
  .plate3-right div{
    display: inline-block;
    width: 290px;
    height: 222px;
  }
  .moro1{
    background-image: url('../../../assets/home-img/more1.jpg');
    background-size: cover;
  }
  .moro2{
    background-image: url('../../../assets/home-img/more2.jpg');
    background-size: cover;
  }
  .moro3{
    background-image: url('../../../assets/home-img/more3.jpg');
    background-size: cover;
  }
  .moro4{
    background-image: url('../../../assets/home-img/more4.jpg');
    background-size: cover;
  }
</style>
