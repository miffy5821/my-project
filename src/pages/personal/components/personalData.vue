<template>
  <div>
    <div class="ym">
    </div>
    <div class="data">
      <div class="dataName">个人资料</div>
    </div>
    <div class="data-case">
      <div class="data-left"><img class="dataImg" src="/static/personal/logo.png"></div>
      <div  class="data-right">
        <span>rrran123,欢迎您</span><button @click="changePassword()">修改密码</button>
        <div class="data-text" id="data">上次登录时间:2020-07-22 01:01:46</div>
      </div>
    </div>
    <div class="data">
      <div class="dataName">账户安全</div>
    </div>
    <div class="dataBox">
      <table class="data-content">
        <tr>
          <th class="bg-color">真实姓名</th>
          <th class="dd-content">会员<span class="text-color" @click="changeUerName()">修改</span></th>
          <th class="bg-color">手机号码</th>
          <th class="dd-content">189******** <span class="text-color" @click="changePhoneNumber()">修改</span></th>
        </tr>
        <tr>
          <th class="bg-color">微信号</th>
          <th class="dd-content">wei5824
              <span class="text-color" @click="changeWechat()">修改</span></th>
          <th class="bg-color">QQ号</th>
          <th class="dd-content" @click="setQQ()">未设定</th>
        </tr>
        <tr>
          <th class="bg-color" >提款密码</th>
          <th class="dd-content" @click="changeWithdrawalsPassword">立即设定</th>
          <th class="bg-color">默认银行卡</th>
          <th class="dd-content" @click="setBankCard()">暂未绑定银行卡</th>
        </tr>
        <tr>
          <th class="bg-color">支付宝</th>
          <th class="dd-content" @click="setAlipay()">立即绑定</th>
          <th class="bg-color">USTD钱包</th>
          <th class="dd-content" @click="setUstd()">立即绑定</th>
        </tr>
      </table>
    </div>
    <el-divider class="dada-line" ></el-divider>
  </div>
</template>
<script>
  export default {
    name: 'personalData',
    methods:{
        changePassword(){
            this.$router.push('/personal/changePassword')
        },
        changeUerName(){
            this.$router.push('/personal/changeName')
        },
        changeWithdrawalsPassword(){
            this.$router.push('/personal/WithdrawalsPassword')
        },
        changeWechat(){
            this.$router.push('/personal/changeWechat')
        },
        setQQ(){
            this.$router.push('/personal/setQQ')
        },
        setBankCard(){
            this.$router.push('/personal/setBankCard')
        },
        setUstd(){
            this.$router.push('/personal/setUstd')
        },
        setAlipay(){
            this.$router.push('/personal/alipay')
        },
        changePhoneNumber(){
            this.$router.push('/personal/changePhoneNumber')
        },
    }
  }
</script>
<style scoped>

  .ym {
    width: 978px;
    height: 38px;
    margin: 10px;
  }

  .data {
    width: 998px;
    height: 50px;
  }

  .dataName {
    height: 40px;
    background: linear-gradient(90deg, #f2f2f2, #fff);
    line-height: 40px;
    padding: 0 30px;
    width: 200px;
    text-align: left;
    font-size: 15px;
    font-weight: 700;
    color: #666;
  }

  .data-case {
    width: 998px;
    height: 160px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  .data-left{
    width: 100px;
    height: 100px;
    margin-left: 70px;
    margin-top: 40px;
  }
  .dataImg{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid #eaeaea;
  }
  .data-right{
    width: 360px;
    height: 100px;
    padding:15px;
    text-align: left;
    margin-top: 30px;
  }
  .data-right span{
    text-align: center;
    padding: 15px;
    font: inherit;
    vertical-align: baseline;
    color: #404040;
    font-weight: 700;
    font-size: 16px;
  }
  .data-right button{
    width: 90px;
    /* height: 25px; */
    /* line-height: 25px; */
    text-align: center;
    border: none;
    padding: 5px;
    border-radius: 5px;
    background: #c8a675;
    color: white;
    margin-left: 15px;
  }

  .data-text{
    font-size: 14px;
    margin-top: 25px;
    color: #222222;
    margin-left: 15px;
  }
  .dataBox{
    width: 760px;
    height: 200px;
    margin: 50px auto 80px auto;
  }
  .data-content{
    border: 1px solid gray;
  }
  .bg-color{
    width: 92px;
    height: 13px;
    padding: 16px 13px;
    font-size: 14px;
    color: black;
    border: 1px solid #757575;
    text-align: center;
    background:#f2f2f2;
  }
  .dd-content{
    width:234px;
    height: 13px;
    font-size: 14px;
    border: 1px solid #757575;
    padding: 16px 13px;
    cursor: pointer;
    color: #5b9fe2;
    text-align: center;
  }
  .text-color{
    color: #c8a675;
    font-size: 14px;
    margin-left: 15px;
  }

  .dada-line{
    width: 900px;
    height: 2px;
    margin-top: 150px;
    background:  #eaeaea;
    margin-right: auto;
    margin-left: auto;
  }
</style>

