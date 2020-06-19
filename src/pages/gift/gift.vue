<template>
  <div>
    <home-header></home-header>
    <gift-content></gift-content>
    <gift-footer></gift-footer>

  </div>
</template>
<script>
  import HomeHeader from './components/Header'
  import giftContent from "./components/gift-content";
  import giftFooter from './components/footer'



  export default {
    components: {
      HomeHeader: HomeHeader,
      giftContent: giftContent,
      giftFooter: giftFooter
    }
  }
</script>
<style>

</style>
