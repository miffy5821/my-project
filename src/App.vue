<template>
    <div id="app">
        <home-header></home-header>
        <router-view/>
        <home-footer></home-footer>
    </div>
</template>

<script>
    import HomeHeader from './shared/Header'
    import homeFooter from './shared/footer'

    export default {
        name: 'App',
        components: {
            HomeHeader: HomeHeader,
            homeFooter: homeFooter
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 10px;
    }
</style>
