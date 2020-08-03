<template>
  <div>
    <home-header></home-header>

    <agency-content></agency-content>

    <home-footer></home-footer>
  </div>



</template>

<script>
  import HomeHeader from '../../shared/Header'
  import agencyContent from './components/agencyContent'
  import homeFooter from '../../shared/footer'

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
