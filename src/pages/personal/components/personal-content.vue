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
          <div class="personal-list">
            <ul class="nav">
              <li  class="nav-color">
                <router-link to="/personal/conversion">
                  <img class="nav-icon " src="/static/personal/phone.png"/> <span class="active">额度转换</span>
                </router-link>
              </li>
              <li>
                <router-link to="/personal/deposit">
                  <img class="nav-icon" src="/static/personal/phone.png"/> <span>存款专区</span>
                </router-link>
              </li>
              <li>
                <router-link to="/personal/withdrawal">
                  <img class="nav-icon" src="/static/personal/phone.png"/> <span>取款专区</span>
                </router-link>
              </li>
              <li>
                <router-link to="/personal/capital">
                  <img class="nav-icon" src="/static/personal/phone.png"/> <span>资金记录</span>
                </router-link>
              </li>
              <li>
                <router-link to="/personal/bet">
                  <img class="nav-icon" src="/static/personal/phone.png"/> <span>投注记录</span>
                </router-link>
              </li>
              <li>
                <router-link to="/personal/agency">
                  <img class="nav-icon" src="/static/personal/phone.png"/> <span>高级代理人</span>
                </router-link>
              </li>
              <li>
                <router-link to="/personal/personal-data">
                  <img class="nav-icon" src="/static/personal/phone.png"/> <span>个人资料</span>
                </router-link>
              </li>
              <li>
                <router-link to="/personal/information">
                  <img class="nav-icon" src="/static/personal/phone.png"/> <span>信息公告</span>
                </router-link>
              </li>
              <li>
                <router-link to="/personal/change-password">
                  <img class="nav-icon" src="/static/personal/phone.png"/> <span>修改密码</span>
                </router-link>
              </li>
            </ul>
          </div>
          </div>
        <div class="app-code">
          <img class="code" src="/static/personal/app-code.png">
          <p>扫码下载APP</p>
        </div>
      </div>

      <div class="content">
          <router-view></router-view>
          </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'personalContent'
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
  a{
    list-style: none;
    text-decoration: none;
    color:  gray;
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
  /*.text{*/
  /*margin-left: 10px;*/
  /*font-size:14px;*/
  /*height: 45px;*/
  /*line-height: 45px;*/
  /*width: auto;*/
  /*}*/
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

  .ym {
    width: 978px;
    height: 38px;
    margin: 10px;
  }

  .ymContent {
    width: 978px;
    height: 38px;
    text-align: left;
    line-height: 38px;
    font-size: 36px;
    color: red;

  }

  .switch {
    width: 998px;
    height: 35px;
  }

  .switchButton {
    width: 160px;
    height: 30px;
    color: goldenrod;
    border: 1px solid goldenrod;
    border-radius: 5px;
    text-align: center;
    margin-left: 750px;
    background: white;
    font-size: 14px;
  }

  .asset {
    width: 998px;
    height: 50px;
  }

  .assetName {
    height: 40px;
    background: linear-gradient(90deg, #f2f2f2, #fff);
    line-height: 40px;
    padding: 0 30px;
    width: 200px;
    text-align: left;
    padding-left: -30px;
    font-size: 15px;
    font-weight: 700;
    color: #666;
  }

  .asset-case {
    width: 998px;
    height: 160px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  .asset-left {
    width: 400px;
    height: 160px;
    padding: 20px 30px;
    border-right: 1px solid #eaeaea;
  }

  .tex1 {
    width: 380px;
    height: 80px;
    font-size: 50px;
    font-weight: 700;
    padding-left: 10px;
    text-align: left;
    color: black;
  }

  .asset-btn {
    width: 399px;
    height: 40px;
    display: flex;
    justify-content: flex-start;
  }

  .asset-btn1 {
    width: 130px;
    height: 40px;
    margin: 0 10px;
    color: #c8a675;
    padding: 0 15px;
    text-align: center;
    line-height: 40px;
    background: white;
    font-size: 14px;
    border: 1px solid #c8a675;
    border-radius: 5px;
  }

  .btnColor {
    background: #c8a675;
    color: white;
  }

  .asset-right {
    width: 500px;
    height: 160px;
  }

  .asset- {
    width: 500px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
  }

  .asset-btn2 {
    width: 60px;
    height: 35px;
    font-size: 14px;
    background: #c8a675;
    border: none;
    border-radius: 5px;
    margin-right: 20px;
  }

  .asset-wallet {
    width: 238px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    display: flex;
    margin-left: 30px;
    justify-content: flex-start;

  }

  .wallet {
    width: 56px;
    height: 19px;
    margin-right: 20px;
    font-size: 14px;
  }

  .sum {
    width: 42px;
    font-size: 14px;
    height: 19px;
    margin-right: 20px;
  }

  .recycle {
    width: 80px;
    height: 28px;
    line-height: 28px;
    border: 1px solid #c8a675;
    border-radius: 5px;
    font-size: 13px;
    margin-top: 10px;
    color: #c8a675;
  }

  .integral {
    width: 56px;
    height: 19px;
    margin-right: 20px;
    font-size: 14px;
  }

  .total {
    width: 10px;
    height: 19px;
    font-size: 14px;
  }

  .assetDistribute {
    width: 998px;
    height: 300px;
    border: 1px dashed silver;
    margin-top: 60px;
    padding-top: 30px;
  }

  .Distribute {

  }

  .Distribute-ctn {

  }
</style>
