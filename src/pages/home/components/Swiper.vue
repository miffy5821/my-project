<template>
    <div class="swiper">
        <swiper :options="swiperOptions" ref="mySwiper">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.data"/>
            </swiper-slide>
            <div class="swiper-pagination pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="gg">
            <div class="notice">
                <img class="notice-img" src="../../../assets/home-img/gg.png"/>
                <div class="notice-ins" @click="jumpPersonal()">最新公告:</div>
                <div class="content">
                    <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
                        <ul class="item">
                            <li v-for="(item,index) in newsList" v-text="item.data" @click="open(index)"></li>
                        </ul>
                    </vue-seamless-scroll>
                </div>
                <div class="notice-more" @click="jumpMore()">查看更多&gt;</div>
            </div>
        </div>

    </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper';
import vueSeamless from 'vue-seamless-scroll'

export default {
    name: 'HomeSwiper',
    status: '',
    msg: '',
    description: '',
    type: '1-轮播图',
    typeName: '轮播图',
    configs: '',
    components: {
        swiper,
        swiperSlide,
        vueSeamless
    },
    data() {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                // 设置轮播可循环
                loop: true,
                // 设置自动轮播
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                speed: 3000,
                //  设置前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
            },
            swiperList: [],
            newsList: [],

        }
    },
    methods: {
        swiperImg() {
            this.axios.get('/api/config', {
                params: {id: 0, terminal: 0}
            })
                .then((response) => {
                    const data = response.data;
                    if (data.status === 10000) {

                        const swiper = response.data.data[0].configs;// 储存所有轮播图
                        this.swiperList = swiper;
                        console.log('swiperList', this.swiperList);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        open(index) {
            this.$alert(this.newsList[index].data, '重要通知', {
                confirmButtonText: '确定',
                callback: action => {
                }
            });
        },
        getConfigs() {
            this.axios.get('/api/config', {
                params: {id: 0, terminal: 0}
            })
                .then((response) => {
                    const data = response.data;
                    if (data.status === 10000) {

                        const configs = response.data.data[3].configs;// 储存所有公告
                        console.log('configs',this.configs)
                        this.newsList = configs;
                        console.log('newsList', this.newsList);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        jumpMore(){
            this.$router.push('/news')
        },
        jumpPersonal(){
            this.$router.push('/personal/conversion')
        }
    },

    mounted () {
        this.swiperImg();
        this.getConfigs();
    },
    computed: {
        optionLeft() {
            return {
                direction: 2,
                limitMoveNum: 2
            }
        }
    },

}


</script>

<style scoped>
.swiper {
    width: 100%;
    height: 505px;
    overflow: hidden;
}

.swiper-img {
    width: 100%;
    height: 450px;
}

.gg {
    height: 52px;
    border-bottom: 1px solid gainsboro;
}

.notice {
    width: 1200px;
    height: 48px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content:space-between;
}

.notice-img {
    width: 30px;
    height: 30px;
    margin-top: 8px;
}

.notice-ins {
    width: 80px;
    height: 48px;
    font-size: 14px;
    line-height: 48px;
}

.content {
    width: 1000px;
    height: 48px;
    margin: auto;
}

.seamless-warp2 {
    overflow: hidden;
    height: 48px;
    width: auto;
}

.item {
    width: 1400px;
    height: 48px;
    display: flex;
}

.item li {
    font-size: 15px;
    height: 48px;
    width: auto;
    line-height: 48px;
}

.notice-more {
    width: 80px;
    height: 48px;
    line-height: 48px;
    font-size: 13px;
}
</style>
