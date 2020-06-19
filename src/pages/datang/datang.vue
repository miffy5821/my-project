<template>
  <div>
    <home-header></home-header>
    <datang-chess></datang-chess>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import datangChess from './components/datang-chess'
  import homeFooter from './components/footer'
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
