<template>
  <div>
    <home-header></home-header>
    <chess-content></chess-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from '../../shared/Header'
  import chessContent from "./components/chess-content";
  import homeFooter from '../../shared/footer'

  export default {
    components: {
      HomeHeader: HomeHeader,
      chessContent: chessContent,
      homeFooter: homeFooter
    }
  }
</script>

<style>
</style>
