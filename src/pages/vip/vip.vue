<template>
    <div class="vip">
        <div class="content"></div>
        <div class="jump">
            <div class="div-btn">
                <button class="btn1">点击进行在线咨询</button>
            </div>
            <div class="div-btn">
                <button class="btn2">点击登录代理后台</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vip'
    }
</script>

<style scoped>
    .vip{
        width: 100%;
        height: auto;
    }
    .content{
        background: url(https://yhdl888.vip/images/img.jpg) no-repeat center top;
        height:3100px;
    }
    .jump {
        width: 100%;
        height: 350px;
        z-index: 999;
        /*position: relative;*/
        /*top:-400px;*/
    }
    .div-btn{
        width: 100%;
        padding-bottom: 130px;
        text-align: center;
    }
    .btn1{
        text-align: center;
        margin: 0px auto;
        display: block;
        text-decoration: none;
        width: 280px;
        height: 46px;
        background: #0080C0;
        border: none;
        border-radius: 8px;
        line-height: 46px;
        color: #fff;
        font-size: 16px;
    }
    .btn1:hover{
        background: #005f8f;
    }
    .btn2{
        text-align: center;
        margin: 0px auto;
        display: block;
        text-decoration: none;
        width: 280px;
        height: 46px;
        border: none;
        border-radius: 8px;
        line-height: 46px;
        color: #fff;
        font-size: 16px;
        background: red;
    }
    .btn2:hover{
        background: #e54646;
    }
</style>
