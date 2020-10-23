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
                                <span class="text1">配送至:</span>
                                <area-cascader :level="1" type="text" placeholder="请选择地区" :data="pcaa"
                                               v-model='selected'></area-cascader>
                            </div>
                            <div class="address-detailed">
                                <span class="text1">详细地址:</span>
                                <textarea v-model="" placeholder="add multiple lines"></textarea>
                            </div>
                            <div class="receiver">
                                <span class="text1">收货人名字:</span>
                                <input v-model="" placeholder="edit me">
                            </div>
                            <div class="phone">
                                <span class="text1">手机号码:</span>
                                <input v-model="" placeholder="edit me">
                            </div>
                            <div class="remarks">
                                <span class="text1">备注:</span>
                                <textarea v-model="" placeholder="add multiple lines"></textarea>
                            </div>
                        </div>
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
    data() {
        return {
            num: 1,
            selected: '',
            pca: pca,
            pcaa: pcaa,
            selected2: ''
        };
    },
    methods: {
        handleChange(value) {
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
    background: orange;
}

.gift-img {
    width: 310px;
    height: 310px;
}

.gift-name {
    width: 300px;
    height: 36px;
    margin-top: 40px;
    color: orange;
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
    background: silver;
}

.content-right {
    width: 340px;
    height: 100%;
    margin-top: 15px;
    padding: 0 10px;
    background: #b3d4fc;
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
    color: orange;
}

.text3 {
    font-size: 14px;
    color: grey;
}

.address-information{

}

.address{

}
.address-detailed{

}
.receiver{

}
.phone{

}
.remarks{

}
</style>
