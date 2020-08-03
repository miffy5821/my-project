<template>
  <div>
    <home-header></home-header>
    <discounts-content></discounts-content>
    <home-footer></home-footer>
  </div>
</template>
<script>
  import HomeHeader from '../../shared/Header'
  import discountsContent from "./components/discounts-content";
  import homeFooter from '../../shared/footer'

  export default {
    components: {
      HomeHeader: HomeHeader,
      discountsContent: discountsContent,
      homeFooter: homeFooter
    }
  }
</script>
<style>

</style>
