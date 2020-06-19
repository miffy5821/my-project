<template>
  <div>
    <home-header></home-header>
    <lottery-content></lottery-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import LotteryContent from './components/lottery-content'
  import homeFooter from './components/footer'

  export default {
    components: {
      HomeHeader: HomeHeader,
      LotteryContent: LotteryContent,
      homeFooter: homeFooter
    }
  }
</script>

<style>
</style>
