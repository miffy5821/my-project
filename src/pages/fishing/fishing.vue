<template>
  <div>
    <home-header></home-header>
    <fishing-content></fishing-content>
    <home-footer></home-footer>
  </div>
</template>
<script>
  import HomeHeader from '../../shared/Header'
  import fishingContent from "./components/fishing-content";
  import homeFooter from '../../shared/footer'
  export default {
    components: {
      HomeHeader: HomeHeader,
      fishingContent: fishingContent,
      homeFooter: homeFooter
    }
  }
</script>
<style>

</style>
