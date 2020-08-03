<template>
  <div class="login">
    <div class="shadow">
      <div class="loginContent">
        <div class="login-interface">
          <img class="dele-icon" @click="$emit('onLogin')" src="/static/home/dele.png">
          <img src="/static/home/logo.png"/>
        <el-divider>账号登录密码</el-divider>
        <div class="login-area">
        <!--用户名-->
        <div class="login-item">
          <div class="icon-box">
            <img src="/static/home/zhuce_yonghu.png" />
        </div>
          <input type="password"   placeholder="请输入用户名"/>
          <p class="item"></p>
        </div>
         <!--密码-->
        <div class="login-item">
          <div class="icon-box">
            <img src="/static/home/zhu_safety.png" />
          </div>
          <input type="password" class="wd-input"  placeholder="请输入密码"/>
          <p class="item"></p>
        </div>
        </div>
        <button class="login-btn" type="submit">立即登录</button>
        <div class="login-reminder">
          <p>如您没有账户 <span>点击注册>></span></p>
          <p class="text-left"  >忘记密码</p>
        </div>
        </div>
        <div class="login-advisory">
         登录时有任何问题，请联系我们24小时 <span>&nbsp;在线客服&nbsp;</span>
            协助解决，本网站采用Global Trust最先进的128/256 bit SSL服务器加密机制
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {

      };
    }
  }

</script>
<style  scoped>
  /* 最外层设置position定位*/
  .login {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
  /*// 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩*/
  .shadow {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.6);
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center; /*使子项目水平居中*/
  }
  /*// 内容层 z-index要比遮罩大，否则会被遮盖，*/
  .loginContent{
    width: 400px;
    height: 420px;
    background:white;
    margin-top: 200px;
    border-radius: 4px;
    z-index: 300;
  }
  .login-interface{
    width: 300px;
    height: 300px;
    padding: 20px 50px 0 50px;
    background:white;
  }
  .dele-icon{
    width: 20px;
    height: 20px;
    position: relative;
    top:-25px;
    left: 290px;

  }
  .login-area{
    width: 300px;
    height:120px;
    margin-top: 40px;
  }
  .login-item{
    width: 298px;
    height: 40px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;;
  }
  .icon-box{
    width: 40px;
    height: 40px;
    background-color: #c2c2c2;
    border-right:1px solid #d9d9d9;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .icon-box img{
    width: 15px;
    height: 15px;
  }
  .login-item input{
    width: 222px;
    height: 32px;
    padding: 4px 24px 4px 11px;
    border: none;
  }
  .login-item p{
    font-size: 14px;
    color: red;
    margin-top: 8px;
  }
  .login-btn{
    width: 100%;
    height: 40px;
    line-height: 20px;
    padding: 10px 0;
    color: #fff;
    font-size: 14px;
    margin-top: 10px;
    background-color: #c2a77d;
    border:none;
    border-radius: 5px;
    text-align: center;
  }
  .login-reminder{
    width: 300px;
    height: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .login-reminder p{
    font-size: 12px;
  }
  .login-reminder span{
    font-size: 12px;
    color: #439aea;
  }
  .text-left{
    width: 160px;
    font-size: 12px;
    /*color: #439aea;*/
    color:#439aea ;
    text-align: right;
  }
  .login-advisory{
    width: 340px;
    height: 36px;
    line-height: 1.5;
    font-size: 12px;
    background: 0 0/cover #e7e0d4;
    margin-top: 44px;
    padding: 10px 30px;
    color: #837c7c;
    text-align: left;
    border-radius: 0 0 4px 4px;
  }
  .login-advisory span{
    color: #439aea;
    margin-top: 5px;

  }
</style>
