<template>
  <div>
    <home-header></home-header>
    <live-content></live-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from '../../shared/Header'
  import liveContent from "./components/live-content";
  import homeFooter from '../../shared/footer'

  export default {
    components: {
      HomeHeader: HomeHeader,
      liveContent: liveContent,
      homeFooter: homeFooter
    }
  }
</script>

<style>
</style>
