<template>
  <div>
    <home-header></home-header>
    <live-content></live-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import liveContent from "./components/live-content";
  import homeFooter from './components/footer'

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
