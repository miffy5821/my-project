<template>
  <div>
    <home-header></home-header>
   <gaming-content></gaming-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from '../../shared/Header'
  import gamingContent from "./components/gaming-content";
  import homeFooter from '../../shared/footer'

  export default {
    components: {
      HomeHeader: HomeHeader,
      gamingContent: gamingContent,
      homeFooter: homeFooter
    }
  }
</script>

<style>
</style>
