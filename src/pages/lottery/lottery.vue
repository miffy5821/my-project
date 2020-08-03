<template>
  <div>
    <home-header></home-header>
    <lottery-content></lottery-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from '../../shared/Header'
  import LotteryContent from './components/lottery-content'
  import homeFooter from '../../shared/footer'

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
