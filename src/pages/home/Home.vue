<template>
  <div class="home">
    <home-swiper></home-swiper>
    <home-plate1></home-plate1>
    <home-plate2></home-plate2>
    <home-plate6></home-plate6>
    <home-plate3></home-plate3>
    <home-plate4></home-plate4>

    <!--<login @onLogin="toggleLogin()" v-if="isShowLogin"></login>-->
      <announcement  @onShow="toggleGg()" v-if="isShowGg"></announcement>
  </div>
</template>

<script>
  import HomeSwiper from './components/Swiper'
  import HomePlate1 from './components/Plate1'
  import HomePlate2 from './components/Plate2'
  import HomePlate6 from './components/Plate6'
  import HomePlate3 from './components/Plate3'
  import HomePlate4 from './components/Plate4'
  import announcement from './components/announcement'

  export default {
    components: {
      HomeSwiper: HomeSwiper,
      HomePlate1: HomePlate1,
      homePlate2: HomePlate2,
      homePlate6: HomePlate6,
      homePlate3: HomePlate3,
      homePlate4: HomePlate4,
      announcement: announcement,
    },
    data () {
      return {
        isShowLogin: false,
        isShowGg:true
      }
    },
    methods:{
      toggleLogin(){
        this.isShowLogin = !this.isShowLogin;
      },
      toggleGg(){
          this.isShowGg = !this.isShowGg;
      }
    }
  }
</script>

<style>
.home{
    width: 100%;
    margin-bottom: 80px;
}
</style>
