<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-plate1></home-plate1>
    <home-plate2></home-plate2>
    <home-plate3></home-plate3>
    <home-plate4></home-plate4>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomePlate1 from './components/Plate1'
import HomePlate2 from './components/Plate2'
import HomePlate3 from './components/Plate3'
import HomePlate4 from './components/Plate4'
import homeFooter from './components/footer'
    export default {
      components: {
        HomeHeader: HomeHeader,
        HomeSwiper: HomeSwiper,
        HomePlate1: HomePlate1,
        homePlate2: HomePlate2,
        homePlate3: HomePlate3,
        homePlate4: HomePlate4,
        homeFooter: homeFooter
      }
    }
</script>

<style>
</style>
