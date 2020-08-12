<template>
  <div>
    <!--<home-header @onLogin="toggleLogin()"></home-header>-->
    <home-swiper></home-swiper>
    <home-plate1></home-plate1>
    <home-plate2></home-plate2>
    <home-plate6></home-plate6>
    <home-plate3></home-plate3>
    <home-plate4></home-plate4>
    <!--<home-footer></home-footer>-->
    <!--<login @onLogin="toggleLogin()" v-if="isShowLogin"></login>-->
  </div>
</template>

<script>
  // import HomeHeader from '../../shared/Header'
  import HomeSwiper from './components/Swiper'
  import HomePlate1 from './components/Plate1'
  import HomePlate2 from './components/Plate2'
  import HomePlate6 from './components/Plate6'
  import HomePlate3 from './components/Plate3'
  import HomePlate4 from './components/Plate4'
  // import homeFooter from '../../shared/footer'
  // import Login from '../login/login'

  export default {
    components: {
      // HomeHeader: HomeHeader,
      HomeSwiper: HomeSwiper,
      HomePlate1: HomePlate1,
      homePlate2: HomePlate2,
      homePlate6: HomePlate6,
      homePlate3: HomePlate3,
      homePlate4: HomePlate4,
      // homeFooter: homeFooter,
      // Login: Login
    },
    data () {
      return {
        isShowLogin: false
      }
    },
    methods:{
      toggleLogin(){
        this.isShowLogin = !this.isShowLogin;
      }
    }
  }
</script>

<style>
</style>
