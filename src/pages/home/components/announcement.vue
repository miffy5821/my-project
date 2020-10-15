<template>
    <div class="shadow">
        <div class="announcement">
            <div class="top">
                <h2>平台公告</h2>
                <img class="top-img" @click="$emit('closeAn')"
                     src="https://image.beike188.com/YHHB/images/close.png"/>
            </div>
            <div class="center">
                <div class="left">
                    <ul class="left-ul">
                        <li class="left-ul-li"
                            v-for="(item,index) of listMenu" :key="item.id"
                            @click="switchItem(index)" :class="activeIndex === index ? 'active':''">
                            {{item.title}}
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <img class="right-img"
                         :src="listMenu && listMenu[activeIndex].data"/>
                </div>

            </div>
            <div class="button">
                <div class="pst">
                    <el-checkbox v-model="checked">不再提示</el-checkbox>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'announcement.vue',

        data () {
            return {
                checked: false,
                listMenu: [],
                activeIndex: 0
            }
        },
        methods: {
            getMenu () {
                this.axios.get('/api/config', {params: {terminal: 0}})
                    .then((response) => {
                        const menu = response.data;
                        console.log('menu', menu);
                        if (menu.status === 10000) {
                            const menuData = response.data.data[2].configs;
                            this.listMenu = menuData;
                            console.log('listMenu', this.listMenu);

                        }
                    }).catch(error => {
                    alert(error);
                })
            },
            switchItem (index) {
                this.activeIndex = index;
            }
        },
        mounted () {
            this.getMenu();
        }
    }
</script>

<style scoped>
    .announcement {
        width: 951px;
        height: 634px;
        background: #fff;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-left: -475px;
        margin-top: -360px;
        z-index: 999999;
    }

    /*// 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩*/
    .shadow {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center; /*使子项目水平居中*/
    }

    .top {
        height: 50px;
        line-height: 50px;
        background: #fff;
        font-size: 22px;
        font-weight: 500;
        text-align: center;
        color: #000;
        /*margin-bottom: 1px;*/
        border-bottom: 1px solid #dddee1;
    }

    .top h2 {
        width: 951px;
        height: 46px;
        text-align: center;
        line-height: 46px;
    }

    .top-img {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 920px;
        top: 10px;
    }

    .center {
        width: 950px;
        height: 535px;
        display: flex;
    }

    .left {
        height: 462px;
        /*overflow-y: scroll;*/
    }

    .left-ul {
        width: 268px;
    }

    .left-ul-li {
        text-align: center;
        width: 242px;
        white-space: normal;
        padding: 12px 13px !important;
        margin: 0 !important;
        background: #b6976b;
        color: #fff;
    }

    .active {
        background: #c8a675;
    }

    .right {
        width: 720px;
        height: 535px;
        text-align: left;
    }

    .right-img {
        width: 648px;
        height: 462px;
        margin-left: 10px;
    }

    .button {
        width: 951px;
        height: 46px;
        /*background: #cccccc;*/
        border-top: 1px solid #dddee1;
    }

    .pst {
        width: 150px;
        height: 50px;
        position: relative;
        top: 15px;
        left: 800px;
    }
</style>
