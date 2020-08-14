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
                <div class="notice-ins">最新公告:</div>
                <div class="content">
                    <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
                        <ul class="item">
                            <li v-for="(item,index) in newsList" v-text="item.data"  @click="open(index)"></li>
                        </ul>
                    </vue-seamless-scroll>
                </div>
                <div class="notice-more">查看更多&gt;</div>
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
                speed:3000,
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
            this.axios.get('api/unauthor/webcom/config', {params: {terminal: 0}})
                .then((response) => {
                    console.log(response);
                    const resbody = response.data;
                    if (resbody.status === 10000) {
                        const data = resbody.data;
                        for (let i = 0; i < data.length; i++) {
                            if (data[i].type === '1') {
                                this.swiperList = data[i].configs;
                                console.log(this.swiperList);
                            }else if (data[i].type === '6') {
                                this.newsList = data[i].configs
                                console.log(this.newsList );
                            }
                        }
                    } else  {
                        this.$alert(data.msg);
                    }
                }).catch(error => {
                alert(error);
            })
        },
        open(index) {
            this.$alert(this.newsList[index].data, '重要通知', {
                dangerouslyUseHTMLString: true
            });
        }
    },
    mounted() {
        this.swiperImg();
    },
    computed: {
        optionLeft() {
            return {
                direction: 2,
                limitMoveNum: 2
            }
        }
    }
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
}

.notice-img {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: -1170px;
}

.notice-ins {
    width: 80px;
    height: 48px;
    font-size: 15px;
    line-height: 48px;
    margin-left: 40px;
    margin-top: -38px;
}

.content {
    width: 1000px;
    height: 48px;
    margin: auto;
}

.seamless-warp2 {
    overflow: hidden;
    height: 25px;
    width: 1000px;
    margin-top: -30px;
    margin-left: 20px;
}

.item {
    width: 1400px;
    white-space: nowrap;
}

.item li {
    font-size: 16px;
    float: left;
    height: 48px;
    line-height: 48px;
    margin-top: -15px;
    margin-left: 15px;
    margin-right: 10px;
}

.notice-more {
    width: 80px;
    height: 48px;
    line-height: 48px;
    font-size: 15px;
    margin-top: -65px;
    margin-left: 1125px;
}
</style>
