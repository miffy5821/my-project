<template>
  <div>
    <home-header></home-header>
   <gaming-content></gaming-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import gamingContent from "./components/gaming-content";
  import homeFooter from './components/footer'

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
