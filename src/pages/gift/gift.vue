<template>
    <div>
        <gift-content></gift-content>
        <exchange v-if="true"></exchange>

    </div>
</template>
<script>
    import giftContent from './components/gift-content';
    import Exchange from './components/exchange';

    export default {
        components: {
            Exchange,
            giftContent: giftContent,
        }
    }
</script>
<style>

</style>
