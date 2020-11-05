<template>
    <div>
        <gift-content></gift-content>
        <!--<exchange @close="toggleChange()" v-if="isShow"></exchange>-->

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

        },
        methods:{
            toggleChange(){
                this.isShow = false;
            }
        }
    }
</script>
<style>

</style>
