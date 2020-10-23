<template>
    <div class="exchange">
        <div class="shadow">
            <div class="Content">
                <img class="close-img" @click="$emit('close')"
                     src="https://image.beike188.com/YHHB/images/close.png"/>
                <div class="content-box">
                    <div class="content-left">
                        <div class="gift-box">
                            <img class="gift-img" src=""/>
                        </div>
                        <div class="gift-name">奔驰大G</div>
                        <div class="gift-introduction">

                        </div>
                    </div>
                    <div class="content-right">
                        <h2>商品兑换信息</h2>
                        <div class="gift-information">
                            <div class="gift-information-box">
                                <span class="text1">商品价值:</span>
                                <span class="text2">￥</span>
                            </div>
                            <div class="gift-information-box">
                                <span class="text1">兑换积分:</span>
                                <span class="text2"></span>
                            </div>
                            <div class="gift-information-box">
                                <span class="text3">可用积分:</span>
                                <span class="text2">0</span>
                            </div>
                            <div class="gift-information-box">
                                <span class="text3">兑换数量:</span>
                                <el-input-number v-model="num"
                                                 @change="handleChange"
                                                 :min="1"
                                                 :max="10"
                                                 size="mini"
                                                 label="描述文字">
                                </el-input-number>
                            </div>
                        </div>
                        <h2>地址信息</h2>
                        <div class="address-information">
                            <div class="address">
                                <div class="text4">配送至:</div>
                                <area-cascader :level="1" type="text" placeholder="请选择地区" :data="pcaa"
                                               v-model='selected'></area-cascader>
                            </div>
                            <div class="address address-detailed">
                                <div class="text4">详细地址:</div>
                                <textarea placeholder="建议您如实填写收货地址，例如街道名称，门牌号码，楼层和房间号等信息">
                                </textarea>
                            </div>
                            <div class="address receiver">
                                <div class="text4">收货人名字:</div>
                                <input placeholder="请填写收货人姓名">
                            </div>
                            <div class="address phone">
                                <div class="text4">手机号码:</div>
                                <input placeholder="请填写真实的手机号码">
                            </div>
                            <div class="address remarks">
                                <div class="text4">备注:</div>
                                <textarea placeholder="请填写备注信息"></textarea>
                            </div>
                        </div>
                        <button class="exchange-btn">立即兑换</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import {pca, pcaa} from 'area-data'; // v5 or higher
    export default {
        name: 'exchange',
        data () {
            return {
                num: 1,
                selected: '',
                pca: pca,
                pcaa: pcaa,
                selected2: ''
            };
        },
        methods: {
            handleChange (value) {
                console.log(value);
            }
        }
    }
</script>

<style scoped>
    .exchange {
        width: 100%;
        height: 100%;
        font-size: 16px;
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

    /*// 内容层 z-index要比遮罩大，否则会被遮盖，*/
    .Content {
        width: 720px;
        height: 600px;
        background: white;
        margin-top: 150px;
        border-radius: 4px;
        padding: 20px;
        z-index: 300;
    }

    .content-box {
        min-height: 504px;
        display: flex;
    }

    .close-img {
        width: 20px;
        height: 20px;
        position: relative;
        top: -10px;
        left: 360px;
    }

    .content-left {
        width: 320px;
        height: 100%;
    }

    .gift-box {
        width: 310px;
        height: 310px;
        border-radius: 3px;
    }

    .gift-img {
        width: 310px;
        height: 310px;
        border-radius: 3px;
    }

    .gift-name {
        width: 300px;
        height: 36px;
        margin-top: 30px;
        color: #c8a675;
        text-align: left;
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
    }

    .gift-introduction {
        width: 280px;
        height: 100px;
        padding: 10px;
        color: white;
        border-radius: 3px;
        background: #ddd;
    }

    .content-right {
        width: 340px;
        height: 100%;
        margin-top: 15px;
        padding: 0 10px;
        /*background: #b3d4fc;*/
        color: #666;
    }

    h2 {
        font-size: 18px;
        text-align: left;
        color: grey;
    }

    .gift-information {
        width: 260px;
        height: 110px;
        padding-left: 80px;
        margin-top: 10px;
    }

    .gift-information-box {
        width: 300px;
        height: 26px;
        text-align: left;
    }

    .text1 {
        font-size: 13px;
        color: grey;
    }

    .text2 {
        font-size: 16px;
        color: #c8a675;
    }

    .text3 {
        font-size: 14px;
        color: grey;
    }
    .text4{
        width: 100px;
        font-size: 14px;
        color: grey;
        line-height: 30px;
        text-align: right;
        margin-right: 15px;
    }
    .address-information {
        margin-top: 10px;
        width: 340px;
        /*height: 500px;*/
    }

    .address {
        width: 340px;
        /*height: 40px;*/
        display: flex;
        /*text-align: right;*/
        justify-content: right;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .address-information input{
        width: 186px;
        text-align: left;
        font-family: inherit;
        font-size: 13px;
        color: gainsboro;
        padding: 0 8px;
        border: 1px solid #d9d9d9;
        border-radius: 3px;
    }
    .address-information textarea{
        width: 186px;
        height: 50px;
        text-align: left;
        font-family: inherit;
        font-size: 13px;
        color: gainsboro;
        padding: 5px 8px;
        border: 1px solid #d9d9d9;
        border-radius: 3px;
    }

    .exchange-btn{
        width: 140px;
        height: 40px;
        line-height: 40px;
        background: #c8a675!important;
        border: 1px solid #c8a675;
        border-radius: 3px;
        margin-left: 140px;
        margin-top: 20px;
        color: #fff;
    }
</style>
