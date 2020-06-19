<template>
  <div class="bottom">
    <div class="bottom-content">
      <img class="bottom-logo" src="../../../assets/home-img/logo_button.png" alt="">
      <div class="aboutMe">
        <span>用户协议 | </span>
        <span>关于我们 |</span>
        <span>博彩责任 |</span>
        <span>免责条款 |</span>
        <span>用户隐私 | </span>
        <span>在线客服 |</span>
        <span>帮助中心 |</span>
        <span>代理中心</span>
        <div class="bottom-sm">Copyright © 2017 澳门银河Galaxy Macau All Rights Reserved</div>
      </div>
      <div class="bottom-right">
        <img class="button-img" src="../../../assets/home-img/button-right.png">
        <p class="bottom-p">友情提示：博彩有风险，量力乐其中</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeFooter'
}
</script>

<style scoped>
  .bottom{
    width: 100%;
    height: 144px;
    background-color:#1c171d;
    background-image: url("../../../assets/home-img/bottom-bg.png");
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
</style>
