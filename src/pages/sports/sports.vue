<template>
  <div>
    <home-header></home-header>
    <sports-content></sports-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import sportsContent from "./components/sports-content";
  import homeFooter from './components/footer'

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
