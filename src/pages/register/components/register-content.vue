<template>
<div class="content">
    <div class="register-content">
      <div class="register-img"><img src="/static/home/register.jpg" alt=""></div>
      <div class="register-box">
        <div class="register-statement">注册澳门银河账户,您将会领略到前所未有的博彩体验.如果您已拥有澳门银河账户,则可直接登录</div>
        <div class="register-">
          <div class="logon-mode">
              <span class="span1">快速注册</span> <span class="span2">手机注册</span>
          </div>
            <div class="register-item">
              <span class="icon-user"></span>
              <input class="user-input" type="text" placeholder="非必填"/>
            </div>
            <div class="register-item">
              <span class="icon-user"></span>
              <input class="user-input" type="text"  placeholder="用户名（请输入5-10个数字或字母）"/>
             </div>
            <div class="register-item">
              <span class="icon-phone"></span>
              <input class="phone-input" placeholder="+86 中国"/><input class="phone"  placeholder="请输入正确的手机号码"/>
            </div>
            <div class="register-item">
              <span class="icon-password"></span><input class="user-input" type=" number"  placeholder="请输入密码"/>
            </div>
            <div class="register-item">
              <span class="icon-verification"></span>
              <input class="user-input"  placeholder="请输入验证码"/>
              <img class="verification-code"/>
            </div>
            <div class="register-item">
              <span class="icon-WeChat"></span><input class="user-input" placeholder="请输入微信号或QQ号"/>
            </div>

        </div>
        <div class="register-details"></div>
        <div class="btn">立即注册</div>
      </div>
    </div>
</div>
</template>
<script>
  export default {
    name: "RegisterContent"
  }
</script>
<style scoped>
  .content{
    width: 100%;
    height: 827px;
    background: gainsboro;
    padding-top: 35px;
  }
  .register-content{
    width: 1120px;
    height: 687px;
    background: white;
    padding: 35px;
    margin:0 auto 30px auto;
  }
  .register-img{
    width: 538px;
    height: 677px;
  }
  img{
    width: 100%;
    height: auto;
  }
  .register-box{
    width: 580px;
    height: 675px;
    margin: -677px 20px 0 538px;
  }
  .register-statement{
    width: 510px;
    height: 52px;
    color: black;
    line-height: 26px;
    font-size: 13px;
    padding: 0 35px;
    margin-top: 35px;
  }
  .register-{
    width: 440px;
    height: 428px;
    padding: 0 70px;
  }
  .logon-mode{
    width: 440px;
    height: 48px;
    border-bottom:1px solid #eaeaea;
    margin-bottom: 30px;
  }
  .register-item{
    width: 440px;
    height: 55px;
    position: relative;
  }
  .icon-user{
    width: 45px;
    height: 42px;
    position: absolute;
    left:0;
    top:5px;
    background:  #c2c2c2 url("/static/home/zhuce_yonghu.png") no-repeat;
    background-size: 20px 20px;
    background-position: 50%;
  }
  .user-input{
    width: 378px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    margin: 5px 0 0 45px;
    padding: 11px 0 11px 15px;
  }
  .icon-phone{
    width: 45px;
    height: 42px;
    position: absolute;
    left:0;
    top:5px;
    background: #c2c2c2 url("/static/home/zhuce_phone.png") no-repeat;
    background-size: 20px 20px;
    background-position: 50%;
  }
  .phone-input{
    width: 80px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    position: absolute;
    left:45px;
    top:5px;
    padding: 11px 0 11px 15px;
  }
  .phone{
    width: 273px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    position: absolute;
    left:150px;
    top:5px;
    padding: 11px 0 11px 15px;
  }
  .icon-password{
    width: 45px;
    height: 42px;
    position: absolute;
    left:0;
    top:5px;
    background: #c2c2c2 url("/static/home/zhuce_yaoqin.png") no-repeat;
    background-size: 20px 20px;
    background-position: 50%;
  }
  .icon-verification{
    width: 45px;
    height: 42px;
    position: absolute;
    left:0;
    top:5px;
    background: #c2c2c2 url("/static/home/zhu_safety.png") no-repeat;
    background-size: 20px 20px;
    background-position: 50%;
  }
  .icon-WeChat{
    width: 45px;
    height: 42px;
    position: absolute;
    left:0;
    top:5px;
    background: #c2c2c2  url("/static/home/zhuce_weixin.png") no-repeat ;
    background-size: 20px 20px;
    background-position: 50%;
  }
  .span1{
    width: 118px;
    height: 49px;
    font-size: 16px;
    line-height: 49px;
    font-weight: 700;
    color: #c8a675;
    padding:20px 27px 13px 27px;
    margin: 18px 35px  10px -60px;
    border-bottom: 3px solid #c8a675;
  }
  .span2{
    width: 118px;
    height: 49px;
    line-height: 49px;
    font-size: 16px;
    padding:20px 27px 13px 27px;
    color: #222222;
  }
  .register-details{
    width: 550px;
    height: 15px;
    padding: 0 15px;
    margin: 20px 0;
    border: 1px solid black;
  }
  .btn{
    width: 470px;
    height: 50px;
    border-radius: 5px;
    background: darkgrey;
    margin: 20px auto;
    border: 1px solid black;
  }
</style>
