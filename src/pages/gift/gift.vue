<template>
    <div>
        <gift-content></gift-content>
    </div>
</template>
<script>
    import giftContent from './components/gift-content';
    import Exchange from './components/exchange';

    export default {
        components: {
            Exchange,
            giftContent: giftContent,
        },
        data() {
            return{
                isShow: true
            }
        }
    }
</script>
<style>

</style>
