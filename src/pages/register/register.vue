<template>
    <div>
        <home-header :isLogin="isLogin"></home-header>
        <register-content @logined="onLogined"></register-content>
        <home-footer></home-footer>
    </div>
</template>

<script>
    import HomeHeader from '../../shared/Header'
    import RegisterContent from './components/register-content'
    import homeFooter from '../../shared/footer'

    export default {
        data () {
            return {
                isLogin: false
            }
        },
        components: {
            HomeHeader: HomeHeader,
            RegisterContent: RegisterContent,
            homeFooter: homeFooter
        },
        methods: {
            onLogined (para) {
                this.isLogin = para;
            }
        }
    }
</script>

<style>
</style>
