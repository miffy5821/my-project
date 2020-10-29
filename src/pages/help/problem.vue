<template>
    <div class="content">
    <div class="problem">
         <div class="nav">
             <div class="title">帮助中心</div>
             <ul class="title-menu">
                 <li>
                     <router-link to="/problem/commonProblem">  常见问题</router-link>
                 </li>
                 <li>
                     <router-link to="/problem/registerPact">登录注册</router-link>
                 </li>
                 <li>
                     <router-link to="/problem/loginRegister">注册协议</router-link>
                 </li>
                 <li>
                     <router-link to="/problem/depositLive"> 存款帮助</router-link>
                 </li>
                 <li>
                     <router-link to="/problem/drawing">取款帮助</router-link>
                 </li>
                 <li>
                     <router-link to="/problem/transfer">转账帮助</router-link>
                 </li>
                 <li >账户安全</li>
                 <ul class="sub-menu">
                     <li>
                         <router-link to="/problem/privacyInfo"> 隐私保护规则</router-link>
                     </li>
                     <li>
                         <router-link to="/problem/betRules"> 投注规则和规定</router-link>
                     </li>
                     <li>
                         <router-link to="/problem/gamingDuty"> 博彩责任</router-link>
                     </li>
                     <li>
                         <router-link to="/problem/termsConditions">规则与条款</router-link>
                     </li>
                     <li>
                         <router-link to="/problem/privacyAgreement">用户隐私协议</router-link>
                     </li>
                 </ul>
                 <li>
                     <router-link to="/problem/onlineProblem">联机问题</router-link>
                 </li>
                 <li>
                     <router-link to="../vip">代理规则</router-link>
                 </li>
             </ul>
         </div>
        <div class="content-right">
            <router-view/>
        </div>

    </div>
    </div>
</template>

<script>
    import commonProblem from './components/commonProblem'
    import loginRegister from  './components/loginRegister.vue'
    import termsConditions from './components/termsConditions.vue'
    import privacyInfo from './components/privacyInfo.vue'
    import registerPact from './components/registerPact.vue'
    import depositLive from './components/depositLive.vue'
    import drawing from './components/drawing.vue'
    import transfer from './components/transfer.vue'
    import betRules from './components/betRules.vue'
    import privacyAgreement from './components/privacyAgreement.vue'
    import onlineProblem from './components/onlineProblem.vue'
    export default {
         name: 'problem',
        components:{
            commonProblem: commonProblem,
            loginRegister: loginRegister,
            termsConditions: termsConditions,
            privacyInfo:  privacyInfo,
            registerPact: registerPact,
            depositLive: depositLive,
            drawing: drawing,
            transfer: transfer,
            betRules: betRules,
            privacyAgreement: privacyAgreement,
            onlineProblem: onlineProblem

        }
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
        border:1px solid #e8e8e8;
        display: flex;
    }
    .nav{
        width: 258px;
        background: white;
        /*border:1px solid gainsboro;*/
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
    .content-right{
        border-left: 1px solid #e8e8e8;
        width: 735px;
        min-height: 516px;
        background:white;
        padding: 30px 56px 38px;
    }
</style>
