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
    <div class="code"><img class="codeImg" src="/static/home/code.png" alt=""></div>
    <div class="floatWindow">
      <ul class="floatWindow-box">
        <li>
          <div>
            <div class="fw-qq"><a href="http://wpa.qq.com/msgrd?v=3&uin=781846144&site=qq&menu=yes"></a></div>
          </div>
        </li>
        <li>
          <div>
            <div class="fw-online"><a href="https://chatlink.mstatik.com/widget/standalone.html?eid=205701"></a></div>
          </div>
        </li>
        <li>
          <div>
            <div class="fw-complain"><a href="http://wpa.qq.com/msgrd?v=3&uin=781846144&site=qq&menu=yes"></a></div>
          </div>
        </li>
        <li>
          <div>
            <div class="fw-consult"><a href="https://chatlink.mstatik.com/widget/standalone.html?eid=221081"></a></div>
          </div>
        </li>
        <li>
          <div>
            <div class="fw-help"><a href="https://www.yh345a.com/help/help_all.html#/help_commonProblem"></a></div>
          </div>
        </li>
        <li>
          <div>
            <div class="go-top"><a href=""></a></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="code"><img class="codeImg" src="/static/home/code.png" alt=""></div>
    <div class="floatWindow">
      <ul class="floatWindow-box">
        <li>
          <div>
            <div class="fw-qq"><a href="http://wpa.qq.com/msgrd?v=3&uin=781846144&site=qq&menu=yes"></a></div>
          </div>
        </li>
        <li>
          <div>
            <div class="fw-online"><a href="https://chatlink.mstatik.com/widget/standalone.html?eid=205701"></a></div>
          </div>
        </li>
        <li>
          <div>
            <div class="fw-complain"><a href="http://wpa.qq.com/msgrd?v=3&uin=781846144&site=qq&menu=yes"></a></div>
          </div>
        </li>
        <li>
          <div>
            <div class="fw-consult"><a href="https://chatlink.mstatik.com/widget/standalone.html?eid=221081"></a></div>
          </div>
        </li>
        <li>
          <div>
            <div class="fw-help"><a href="https://www.yh345a.com/help/help_all.html#/help_commonProblem"></a></div>
          </div>
        </li>
        <li>
          <div>
            <div class="go-top"><a href=""></a></div>
          </div>
        </li>
      </ul>
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
    margin-top: 90px;
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
    top:65%;
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
