<template>
  <div class="login">
    <div class="shadow">
      <div class="loginContent">
        <div class="loginImg">
          <img src="/static/home/logo.png"/>
        </div>
        <el-divider>账号登录密码</el-divider>
        <!--用户名-->
        <div class="login-item">
          <div class="icon-box">
            <img src="/static/home/zhuce_yonghu.png" />
        </div>
          <input type="password" class="wd-input"  placeholder="请输入用户名"/>
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
        <el-button type="submit">立即登录</el-button>
        <div>
          <p>如您没有账户 <span>点击注册>></span></p>
          <p>忘记密码</p>
        </div>
        <div>
          <p>登录时有任何问题，请联系我们24小时 <span>&nbsp;在线客服&nbsp;</span>
            协助解决，本网站采用Global Trust最先进的128/256 bit SSL服务器加密机制</p>
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
        // quickCheck: {
        //   username: "",
        //   password: "",
        // },
        // quickRules: {
        //   username: [
        //     {required: true, message: "请输入用户名", trigger: "blur"}
        //   ],
        //   password: [{required: true, message: "请输入密码", trigger: "blur"}],
        // }
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
    background: rgba(0,0,0, 0.1);
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
    margin-top: 200px;
    background:white;
    border-radius: 5px;
    z-index: 300;
  }
</style>
