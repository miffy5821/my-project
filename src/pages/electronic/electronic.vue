<template>
  <div>
    <home-header></home-header>
    <electronic-content></electronic-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import electronicContent from './components/electronic-content';
  import homeFooter from './components/footer'

  export default {
    components: {
      HomeHeader: HomeHeader,
      electronicContent: electronicContent,
      homeFooter: homeFooter
    }
  }
</script>

<style>
</style>
