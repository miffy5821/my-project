<template>
  <div>
    <home-header></home-header>
    <register-content></register-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from '../../shared/Header'
  import RegisterContent from './components/register-content'
  import homeFooter from '../../shared/footer'

  export default {
    components: {
      HomeHeader: HomeHeader,
      RegisterContent: RegisterContent,
      homeFooter: homeFooter
    }
  }
</script>

<style>
</style>
