<template>
  <div class="content">
    <div class="register-content">
      <div class="register-img">
        <img src="/static/home/register.jpg" alt />
      </div>
      <div class="register-box">
        <div class="register-statement">注册澳门银河账户,您将会领略到前所未有的博彩体验.如果您已拥有澳门银河账户,则可直接登录</div>
        <div class="register-">
          <div class="logon-mode">
            <span class="span1" :class="{'active': show === 1}" @click="show = 1">快速注册</span>
            <span class="span1" :class="{'active': show === 2}" @click="show = 2">手机注册</span>
          </div>
          <el-form
            :model="quickCheck"
            :rules="quickRules"
            ref="quickCheck"
            class="register-kszc"
            v-show="show === 1"
          >
            <div class="register-item">
              <div class="icon-box">
                <img src="/static/home/zhuce_yonghu.png" />
              </div>
              <div class="divInput">
                <el-form-item prop="refrerrCode">
                  <el-input v-model="quickCheck.refrerrCode" type="text" placeholder="非必填"></el-input>
                </el-form-item>
              </div>
            </div>
            <!-- // <p class="item">{{message}}</p> -->

            <div class="register-item">
              <div class="icon-box">
                <img src="/static/home/zhuce_yonghu.png" />
              </div>
              <div class="divInput">
                <el-form-item prop="username">
                  <el-input
                    type="text"
                    v-model="quickCheck.username"
                    placeholder="用户名（请输入5-10位数字或字母）"
                  ></el-input>
                </el-form-item>
              </div>
              <p class="item"></p>
            </div>

            <div class="register-item">
              <div class="icon-box">
                <img src="/static/home/zhuce_phone.png" />
              </div>
              <div class="register-phone">
                <span class="phone-input" >+86 中国</span>
                <el-form-item prop="phoneNumber">
                  <el-input
                    class="phone"
                    type="number"
                    v-model="quickCheck.phoneNumber"
                    placeholder="请输入正确的手机号码"
                  ></el-input>
                </el-form-item>
              </div>
              <p class="item"></p>
            </div>

            <div class="register-item">
              <div class="icon-box">
                <img src="/static/home/zhu_safety.png" />
              </div>
              <div class="divInput">
                <el-form-item prop="password">
                  <el-input
                    type="password"
                    v-model="quickCheck.password"
                    placeholder="密码（请输入6-8位数字或者字母、下划线）"
                  ></el-input>
                </el-form-item>
              </div>
              <p class="item"></p>
            </div>

            <div class="register-item">
              <div class="icon-box">
                <img src="/static/home/zhuce_yaoqin.png" class="icon" />
              </div>
              <div class="verification">
                <el-form-item prop="verifyCode">
                  <el-input type="text" v-model="quickCheck.verifyCode" placeholder="请输入验证码"></el-input>
                </el-form-item>

                <img src class="verification-code" />
              </div>
              <p class="item"></p>
            </div>

            <div class="register-item">
              <div class="icon-box">
                <img src="/static/home/zhuce_weixin.png" />
              </div>
              <div class="divInput">
                <el-form-item prop="wecaht">
                  <el-input type="text" v-model="quickCheck.wecaht" placeholder="请输入微信号或者QQ号"></el-input>
                </el-form-item>
              </div>
              <p class="item"></p>
            </div>
            <div class="register-details">
              <input class="radio" type="radio" />
              <span class="text">我已经届满合法博彩年龄,且同意各项 开户条约。</span>
            </div>
            <div class="btn" @click="quickRegister()">立即注册</div>
          </el-form>
          <!--<div class="register-sjzc" v-show="show === 2">-->
            <el-form
              :model="phoneRegisteredCheck"
              :rules="phoneRegisteredRules"
              ref="phoneRegisteredCheck"
              class="register-sjzc"
              v-show="show === 2"
            >
            <div class="register-item">
              <div class="icon-box">
                <img src="/static/home/zhuce_phone.png" />
              </div>
              <div class="register-phone">
                <span class="phone-input">+86 中国</span>
                <el-form-item prop="phoneNumber">
                  <el-input
                    class="phone"
                    type="number"
                    v-model=" phoneRegisteredCheck.phoneNumber"
                    placeholder="请输入正确的手机号码"
                  ></el-input>
                </el-form-item>
              </div>
              <p class="item"></p>
            </div>
            <div class="register-item">
              <div class="icon-box">
                <img src="/static/home/zhuce_yaoqin.png" class="icon" />
              </div>
              <div class="ks-verification">
                <el-form-item prop="verifyCode">
                  <el-input type="text" v-model="phoneRegisteredCheck.verifyCode" placeholder="请输入验证码"></el-input>
                </el-form-item>
              </div>
              <img src class="verification-code" />
              <p class="item"></p>
            </div>
            <div class="register-item">
              <div class="icon-box">
                <img src="/static/home/zhuce_weixin.png" />
              </div>
              <div class="divInput">
                <el-form-item prop="wecaht">
                  <el-input type="text" v-model="phoneRegisteredCheck.wecaht" placeholder="请输入微信号或者QQ号"></el-input>
                </el-form-item>
              </div>
              <p class="item"></p>
            </div>
            <div class="register-item">
              <div class="icon-box">
                <img src="/static/home/zhuce_yonghu.png" />
              </div>
              <div class="divInput">
                <el-form-item prop="refrerrCode">
                  <el-input v-model="phoneRegisteredCheck.refrerrCode" type="text" placeholder="非必填"></el-input>
                </el-form-item>
              </div>
              <p class="item"></p>
            </div>
            <div class="register-details">
              <input class="radio" type="radio" />
              <span class="text">我已经届满合法博彩年龄,且同意各项 开户条约。</span>
            </div>
            <div class="btn">立即注册</div>
            </el-form>
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "RegisterContent",
    data() {
      return {
        show: 1,
        quickCheck: {
          refrerrCode: "",
          username: "",
          password: "",
          phoneNumber: "",
          verifyCode: "",
          wecaht: ""
        },
        quickRules: {
          refrerrCode: [
            { required: true, message: "请输入邀请码",pattern:/^[a-zA-Z][a-zA-Z0-9_-]{5,16}$/, trigger: "blur" }
          ],
          username: [
            { required: true, message: "请输入用户名",pattern:/^[a-zA-Z0-9_-]{4,16}$/, trigger: "blur" }
          ],
          password: [{ required: true, message: "请输入密码",pattern:/^[a-zA-Z][a-zA-Z0-9_-]{6,15}$/, trigger: "blur" }],
          phoneNumber: [
            { required: true, message: "请输入手机号码", pattern: /^1[34578]\d{11}$/,trigger: "blur" }
          ],
          verifyCode: [
            { required: true, message: "验证码不能为空", pattern:/^[a-zA-Z][a-zA-Z0-9_-]{4,6}$/,trigger: "blur" }
          ],
          wecaht: [
            { required: true, message: "请输入微信或者qq号码",pattern:/^[a-zA-Z][a-zA-Z0-9_-]{5,15}$/, trigger: "blur" }
          ]
        },
        phoneRegisteredCheck:{
          phoneNumber: "",
          verifyCode: "",
          wecaht: "",
          refrerrCode: ""
        },
        phoneRegisteredRules: {
          phoneNumber: [
            { required: true, message: "请输入手机号码", pattern: /^1[34578]\d{11}$/,trigger: "blur" }
          ],
          verifyCode: [
            { required: true, message: "验证码不能为空", pattern:/^[a-zA-Z][a-zA-Z0-9_-]{4,6}$/, trigger: "blur" }
          ],
          wecaht: [
            { required: true, message: "请输入微信或者qq号码", pattern:/^[a-zA-Z][a-zA-Z0-9_-]{5,15}$/, trigger: "blur" }
          ],
          refrerrCode: [
            { required: true, message: "请输入邀请码",pattern:/^[a-zA-Z][a-zA-Z0-9_-]{5,16}$/, trigger: "blur" }
          ],
        }
      };
    },
    methods: {
      quickRegister() {
        console.log("quickCheck", this.quickCheck);
      },
      phoneRegister() {
        console.log(" phoneRegisteredCheck", this. phoneRegisteredCheck);
      }
    }
  };
</script>
<style scoped>
  .content {
    width: 100%;
    height: 827px;
    background: gainsboro;
    padding-top: 35px;
  }
  .register-content {
    width: 1120px;
    height: 687px;
    background: white;
    padding: 35px;
    margin: 0 auto 30px auto;
  }
  .register-img {
    width: 538px;
    height: 677px;
  }
  .register-box {
    width: 580px;
    height: 675px;
    margin: -677px 20px 0 538px;
  }
  .register-statement {
    width: 510px;
    height: 52px;
    color: black;
    line-height: 26px;
    font-size: 13px;
    padding: 0 35px;
    margin-top: 35px;
  }

  .register- {
    width: 440px;
    height: 480px;
    padding: 0 70px;
  }
  .logon-mode {
    width: 440px;
    height: 48px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 30px;
  }
  .register-kszc {
    width: 540px;
    height: 550px;
    cursor: pointer;
    margin: 0 auto 10px auto;
  }
  .register-sjzc {
    width: 540px;
    height: 350px;
    cursor: pointer;
    margin: 0 auto 10px auto;
  }
  .register-item {
    width: 420px;
    height: 70px;
    display: flex;
  }
  .icon-box {
    width: 45px;
    height: 42px;
    background: #c2c2c2;
  }
  .icon-box img {
    width: 20px;
    height: 20px;
    margin-top: 10px;
    background: #c2c2c2;
  }
  .divInput {
    width: 378px;
    height: 42px;
  }
  .divInput input {
    width: 378px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    padding: 11px 0 11px 15px;
  }

  .item {
    width: auto;
    height: 20px;
    line-height: 20px;
    text-align: center;
    padding-top: 5px;
    color: red;
    font-size: 13px;
  }

  .verification {
    width: 375px;
    height: 42px;
    display: flex;
    justify-content: space-between;
    /* margin: -43px 0 0 43px; */
  }
  .verification input {
    width: 200px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    padding: 11px 0 11px 15px;
  }
  .verification-code {
    width: 155px;
    height: 40px;
    margin-right: 0;
    /* margin-left: 285px; */
    /* margin-top: -45px; */
    border: 1px solid black;
  }
  .register-phone {
    width: 397px;
    height: 42px;
    /* margin: -43px 0 0 44px; */
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-between;
  }
  .phone-input {
    width: 70px;
    height: 18px;
    line-height: 18px;
    font-size: 16px;
    border: 1px solid #c2c2c2;
    padding: 11px 17px 11px 15px;
  }
 .ks-verification {
       width: 230px;
       height: 42px;
       display: flex;
      justify-content: space-between;

       }
  .ks-verification input {
      width: 190px;
      height: 16px;
      line-height: 16px;
      font-size: 16px;
      padding: 11px 0 11px 15px;
     }
  .phone {
    width: 245px;
    height: 15px;
    line-height: 16px;
    font-size: 16px;
    padding: 11px 0 11px 15px;
    margin-right: 0;
    /* padding: 11px 0 11px 17px; */
  }

  .active {
    width: 118px;
    height: 49px;
    font-size: 16px;
    line-height: 49px;
    font-weight: 700;
    color: #c8a675;
    padding: 20px 27px 13px 27px;
    border-bottom: 3px solid #c8a675;
  }
  .span1 {
    width: 118px;
    height: 49px;
    line-height: 49px;
    font-size: 16px;
    padding: 20px 27px 13px 27px;
    color: #222222;
  }
  .register-details {
    width: 450px;
    height: 15px;
    padding: 0 15px;
    margin-left: -90px;
  }
  .radio {
    width: 15px;
    height: 15px;
  }
  .text {
    width: auto;
    height: 15px;
    font-size: 13px;
    line-height: 15px;
  }
  .btn {
    width: 470px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    color: #6c6c6c;
    background: #ddd;
    cursor: pointer;
    margin: 20px 0 20px -13px;
  }
</style>
