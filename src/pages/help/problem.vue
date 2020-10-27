<template>
    <div class="content">
    <div class="problem">
         <div class="nav">
             <div class="title">帮助中心</div>
             <ul class="title-menu">
                 <li>常见问题</li>
                 <li>登录注册</li>
                 <li>注册协议</li>
                 <li>存款帮助</li>
                 <li>取款帮助</li>
                 <li>转账帮助</li>
                 <li @click="close()">账户安全</li>
                 <ul class="sub-menu">
                     <li>隐私保护规则</li>
                     <li>投注规则和规定</li>
                     <li>博彩责任</li>
                     <li>规则与条款</li>
                     <li>用户隐私协议</li>
                 </ul>
                 <li>联机问题</li>
                 <li>代理规则</li>
             </ul>

         </div>
         <router-view/>
    </div>
    </div>
</template>

<script>
    export default {
        // name: 'problem'
    }
</script>

<style scoped>
    .content{
        width: 100%;
        height: auto;
        padding: 30px 0;
        background: #f9f9f9;
    }
    .problem {
        width: 1000px;
        height: auto;
        margin: 0 auto;
        border:1px solid gainsboro;
    }
    .nav{
        width: 258px;
        height: 960px;
        border:1px solid gainsboro;
    }
    .title{
        font-size: 18px;
        font-weight: 700;
        text-align: left;
        color: #4f4e4b;
        padding: 26px 25px 20px 45px;
        border-bottom: 1px solid #e8e8e8;
    }
    .title-menu{
        /*padding-left: 21px;*/
        width: 100%;
    }
    .title-menu li{
        height: 40px;
        margin-top: 4px;
        margin-bottom: 4px;
        text-align: left;
        padding: 0 16px 0 45px;
        overflow: hidden;
        font-size: 14px;
        line-height: 40px;
        text-overflow: ellipsis;
    }
    .sub-menu{
        width: 80%;
        padding-left: 30px;
    }
    .sub-menu li{
        height: 40px;
        margin-top: 4px;
        margin-bottom: 4px;
        text-align: left;
        padding: 0 16px 0 45px;
        overflow: hidden;
        font-size: 14px;
        line-height: 40px;
        text-overflow: ellipsis;
    }
</style>
