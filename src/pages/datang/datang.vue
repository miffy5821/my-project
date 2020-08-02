<template>
  <div>
    <home-header></home-header>
    <datang-chess></datang-chess>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from '../../shared/Header'
  import datangChess from './components/datang-chess'
  import homeFooter from '../../shared/footer'
  export default {
    components: {
      HomeHeader: HomeHeader,
      datangChess: datangChess,
      homeFooter: homeFooter
    }
  }
</script>

<style>
</style>
