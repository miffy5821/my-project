<template>
  <div class="bottom">
    <div class="bottom-content">
      <img class="bottom-logo" src="../assets/home-img/logo_button.png" alt="">
      <div class="aboutMe">
        <span>
            <router-link to="/problem/loginRegister">用户协议</router-link>|
        </span>
        <span>
            <router-link to="../aboutMe">关于我们</router-link> |
        </span>
        <span>
            <router-link to="/problem/gamingDuty">博彩责任</router-link> |
        </span>
        <span>
             <router-link to="/problem/termsConditions">免责条款</router-link>  |
        </span>
        <span>
            <router-link to="/problem/privacyInfo"> 用户隐私</router-link> |
        </span>
        <span>
              <router-link to="/problem/termsConditions">在线客服 </router-link> |
        </span>
        <span class="text1">
              <router-link to="/problem/commonProblem">帮助中心</router-link> |
        </span>
        <span class="text2" @click="jumpVip()">
             代理中心
        </span>
        <div class="bottom-sm">Copyright © 2017 澳门银河Galaxy Macau All Rights Reserved</div>
      </div>
      <div class="bottom-right">
        <img class="button-img" src="../assets/home-img/button-right.png">
        <p class="bottom-p">友情提示：博彩有风险，量力乐其中</p>
      </div>
    </div>
    <div class="code"><img class="codeImg" src="/static/home/code.png" alt=""></div>
    <div class="floatWindow">
      <ul class="floatWindow-box">
        <li>
          <div>
            <div class="fw-qq"></div>
          </div>
        </li>
        <li>
          <div>
            <div class="fw-online" @click="jumpOnlineService()"></div>
          </div>
        </li>
        <li>
          <div>
            <div class="fw-complain"></div>
          </div>
        </li>
        <li>
          <div>
            <div class="fw-consult" @click="jumpConsultingAgent()"></div>
          </div>
        </li>
        <li>
          <div>
              <div class="fw-help" @click="jumpHelp()"></div>
          </div>
        </li>
        <li>
          <div>
            <div class="go-top" @click="goTop()"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'homeFooter',
    // link: 'https://chatlink.mstatik.com/widget/standalone.html?eid=221081',
    methods:{
      jumpHelp(){
          this.$router.push('./problem/commonProblem')
      },
      jumpConsultingAgent(){
          window.open('https://chatlink.mstatik.com/widget/standalone.html?eid=221081');
      },
      jumpOnlineService(){
          window.open('https://chatlink.mstatik.com/widget/standalone.html?eid=76107099dd1ba17a94453359257851c8');
      },
      goTop(){
          document.body.scrollTo(0,0);
      }
    }

}
</script>

<style scoped>
  .bottom{
    width: 100%;
    height: 144px;
    /*margin-top: 90px;*/
    background-color:#1c171d;
    background-image: url("../assets/home-img/bottom-bg.png");
  }
  .bottom-content{
    width: 1200px;
    height: 144px;
    margin-right: auto;
    margin-left: auto;
  }
  .bottom-logo{
    width:160px;
    height:97px;
    margin-top:20px;
    margin-left: -1040px;
  }
  .aboutMe{
    width:650px;
    height:100px;
    margin: -70px 10px auto 200px;
  }
  .aboutMe span{
    font-size:14px;
    color:white;
    padding:3px;

  }
  .text1{
      color: #c8a675!important;
  }
  .text2{
      color: red!important;
  }
  .bottom-sm{
    font-size:14px;
    color:white;
    margin-top:10px;
  }
  .bottom-right{
    width: 230px;
    height: 90px;
    margin-top: -110px;
    margin-left: 970px;
  }
  .button-img{

  }
  .bottom-p{
    color:white;
    margin-top: 10px;
    font-size:14px;
  }
  .code{
    width: 466px;
    height: 200px;
    position: fixed;
    right: -424px;
    top:75%;
    cursor: pointer;
    transition: all  1s ease-in-out;
    z-index: 999;
  }
  .code:hover{
    right: 0;
    z-index: 999;
  }
  .codeImg{
    width: 466px;
    height: 199px;
  }
  .floatWindow{
    width: 50px;
    height: 300px;
    position: fixed;
    cursor:pointer;
    left: 83%;
    top:58%;
    z-index: 2;
  }
  .floatWindow-box{
    width: 50px;
    height: 300px;
  }
  .floatWindow-box li{
    width: 50px;
    height: 50px;
  }
  .fw-qq{
    width: 50px;
    height: 50px;
    margin-left: 3px;
    background-image: url("/static/home/float-qq.png");
  }
  .fw-qq:hover{
    width: 50px;
    height: 50px;
    background-image: url("/static/home/float-qq01.png");
  }
  .fw-online{
    width: 50px;
    height: 50px;
    background-image: url("/static/home/float-all.png");
    background-position: 3px -15px;
  }
  .fw-online:hover{
    width: 50px;
    height: 50px;
    background-image: url("/static/home/float-all01.png");
    background-position: 3px -15px;
  }
  .fw-complain{
     width: 50px;
     height: 50px;
     margin-left:3px;
     background-image: url("/static/home/float-mail.png");
   }
  .fw-complain:hover{
    width: 50px;
    height: 50px;
    background-image: url("/static/home/float-mail01.png");
  }
  .fw-consult{
    width: 50px;
    height: 50px;
    background-image: url("/static/home/float-all.png");
    background-position: 3px -104px;
  }
  .fw-consult:hover{
    width: 50px;
    height: 50px;
    background-image: url("/static/home/float-all01.png");
    background-position: 3px -104px;
  }
  .fw-help{
    width: 50px;
    height: 50px;
    background-image: url("/static/home/float-all.png");
    background-position: 3px -285px;
  }
  .fw-help:hover{
       width: 50px;
       height: 50px;
       background-image: url("/static/home/float-all01.png");
       background-position: 3px -285px;
     }
  .go-top{
    width: 50px;
    height: 50px;
    background-image: url("/static/home/float-all.png");
    background-position: 3px -371px;
  }
  .go-top:hover{
    width: 50px;
    height: 50px;
    background-image: url("/static/home/float-all01.png");
    background-position: 3px -371px;
  }
</style>
