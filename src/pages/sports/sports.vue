<template>
  <div>
    <home-header></home-header>
    <sports-content></sports-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from '../../shared/Header'
  import sportsContent from "./components/sports-content";
  import homeFooter from '../../shared/footer'

  export default {
    components: {
      HomeHeader: HomeHeader,
      sportsContent: sportsContent,
      homeFooter: homeFooter
    }
  }
</script>

<style>
</style>
