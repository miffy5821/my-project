<template>
    <div class="discount-detail">
        <div class="banner">
            <img :src="item.htmlImg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'discountsDetail.vue',
        data () {
            return {
                item: ''
            }
        },
        mounted () {

            this.item = this.$route.query.item;
            console.log(this.item)
        }
    }
</script>

<style scoped>
    .discount-detail {
        height: 100%;
        width: 100%;
    }

    .banner {
        text-align: center;
        min-height: 800px;
    }

    .banner img {
        width: 100%;
    }

</style>
