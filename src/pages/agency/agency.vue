<template>
  <div>
    <home-header></home-header>

    <agency-content></agency-content>

    <home-footer></home-footer>
  </div>



</template>

<script>
  import HomeHeader from './components/Header'
  import agencyContent from './components/agencyContent'
  import homeFooter from './components/footer'

  export default {
    components: {
      HomeHeader: HomeHeader,
      agencyContent: agencyContent,
      homeFooter: homeFooter
    }
  }
</script>

<style scoped>
</style>
