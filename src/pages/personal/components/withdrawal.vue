<template>
  <div class="personal">
    <div class="personalBox">
      <div class="left">
        <div class="leftLogo">
          <img class="personal-logo" src="/static/personal/logo.png"/>
          <h3 class="user">ceto5821,欢迎您!</h3>
          <div class="status">
            <p>认证状态：<span class="statusBox"><img class="status-icon" src="/static/personal/phone.png" alt=""></span>
              <span class="statusBox"><img class="status-icon" src="/static/personal/phone.png" alt=""></span></p>
          </div>
        </div>
        <div class="personal-list">
          <ul class="nav">
            <li>
              <router-link to="/personal-content">
                <img class="nav-icon " src="/static/personal/phone.png"/> <span>额度转换</span>
              </router-link>
            </li>
            <li>
              <router-link to="/deposit">
                <img class="nav-icon" src="/static/personal/phone.png"/> <span>存款专区</span>
              </router-link>
            </li>
            <li  class="nav-color">
              <router-link to="/withdrawal">
                <img class="nav-icon" src="/static/personal/phone.png"/> <span  class="active">取款专区</span>
              </router-link>
            </li>
            <li>
              <router-link to="/capital">
                <img class="nav-icon" src="/static/personal/phone.png"/> <span>资金记录</span>
              </router-link>
            </li>
            <li>
              <router-link to="/bet">
                <img class="nav-icon" src="/static/personal/phone.png"/> <span>投注记录</span>
              </router-link>
            </li>
            <li>
              <router-link to="/agency">
                <img class="nav-icon" src="/static/personal/phone.png"/> <span>高级代理人</span>
              </router-link>
            </li>
            <li>
              <router-link to="/personal-data">
                <img class="nav-icon" src="/static/personal/phone.png"/> <span>个人资料</span>
              </router-link>
            </li>
            <li>
              <router-link to="/information">
                <img class="nav-icon" src="/static/personal/phone.png"/> <span>信息公告</span>
              </router-link>
            </li>
            <li>
              <router-link to="/change-password">
                <img class="nav-icon" src="/static/personal/phone.png"/> <span>修改密码</span>
              </router-link>
            </li>
          </ul>

        </div>

        <div class="app-code">
          <img class="code" src="/static/personal/app-code.png">
          <p>扫码下载APP</p>
        </div>
      </div>
      <div class="center">
        <div class="tg">
          <div class="tg-icon"><img class="iconTg" src="/static/personal/phone.png" alt=""></div>
          <p class="tgContent">尊敬的澳门银河贵宾，由于线上充值会员多通道拥挤，充值成功率降低，建议贵宾使用公司线下转卡方式充值，
            笔笔入款1.5%,感谢您对我司一直以来的支持，祝您游戏愉快~</p>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'withdrawal'
  }
</script>
<style>
  .personal {
    width: 100%;
    height: 1500px;
    display: flex;
    cursor:pointer;
    background-color: #f7f6f4;
  }

  .personalBox {
    width: 1200px;
    height: 1150px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    border: 1px solid #eaeaea;
  }

  .left {
    width: 196px;
    height: 100%;
    background: white;
    border: 1px solid #eaeaea;
  }

  .leftLogo {
    width: 196px;
    height: 180px;
    border-bottom: 1px solid #eaeaea;
    margin: 20px 0;
  }

  .personal-logo {
    width: 80px;
    height: 80px;
    border: 4px solid #eaeaea;
    border-radius: 50%;
  }

  .user {
    width: 196px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 16px;
    margin-top: 8px;
    font-weight: 700;
  }

  .status {
    width: 196px;
    height: 25px;
    line-height: 25px;
    margin-top: 8px;
  }

  .status p {
    width: auto;
    height: 25px;
    color: black;
    line-height: 25px;
    font-size: 13px;
  }

  .statusBox {
    width: 18px;
    height: 18px;
    padding: 5px;
    margin-left: 8px;
    background-color: #eaeaea;
    border-radius: 50px;
  }

  .status-icon {
    width: 18px;
    height: 18px;
  }

  .personal-list {
    width: 196px;
    height: 427px;
    cursor:pointer;
    border-bottom: 1px solid #eaeaea;
  }

  .nav {
    width: 196px;
    height: 427px;
    margin-top: -20px;
  }

  .nav li {
    height: 45px;
    width: 196px;
    font-size: 14px;
    line-height: 45px;
  }

  .nav-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .nav-color {

    transition: all .3s;
    background-color: #f2f2f2;
  }
  .active{
    color: #c8a675;
  }

  .app-code {
    width: 196px;
    height: 234px;
    padding: 20px 0;
  }

  .code {
    width: 180px;
    height: 180px;
  }

  .app-code p {
    width: 196px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    color: black;
    text-align: center;
  }

  .center {
    width: 1000px;
    height: 1000px;
    background: white;
    border: 1px solid #eaeaea;
  }

  .tg {
    width: 960px;
    height: 25px;
    display: flex;
    justify-content: center;
    background: #eaeaea;
    padding: 20px 20px;
  }

  .tg-icon {
    width: 30px;
    height: 30px;
    background: #c8a675;
    border-radius: 50%;
  }

  .iconTg {
    width: 20px;
    height: 20px;
    text-align: center;
    padding-top: 5px;
  }

  .tgContent {
    width: 900px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    margin-left: 20px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

</style>
