<template>
  <div>
    <home-header></home-header>

   <personal-content></personal-content>

    <home-footer></home-footer>
  </div>



</template>

<script>
  import HomeHeader from './components/Header'
  import  personalContent from './components/personal-content'
  import homeFooter from './components/footer'

  export default {
    components: {
      HomeHeader: HomeHeader,
      personalContent:  personalContent,
      homeFooter: homeFooter
    }
  }
</script>

<style >
 </style>
