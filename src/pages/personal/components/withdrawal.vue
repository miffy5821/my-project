
<template>
  <div class="center">
    <div class="tg">
      <div class="tg-icon"><img class="iconTg" src="/static/personal/phone.png" alt=""></div>
      <p class="tgContent">尊敬的澳门银河贵宾，由于线上充值会员多通道拥挤，充值成功率降低，建议贵宾使用公司线下转卡方式充值，
        笔笔入款1.5%,感谢您对我司一直以来的支持，祝您游戏愉快~</p>
    </div>
    <div class="ym">
    </div>

    <div class="wd">
      <div class="wd-password">提款密码</div>
    </div>
    <div class="wd-case">
      <!--步骤条-->
      <div class="dw-step">
        <el-steps :active="active" finish-status="success">
          <el-step title="设定密码"></el-step>
          <el-step title="设定成功"></el-step>
        </el-steps>
      </div>

      <!--设置密码-->
      <!--<div class="wd-pw">-->
      <!--<div class="wd-item">-->
      <!--<label>新密码:</label>-->
      <!--<input type="text" placeholder="4位数字组合">-->
      <!--</div>-->
      <!--<div class="wd-item">-->
      <!--<label>确认密码:</label>-->
      <!--<input type="text" placeholder="请再次输入密码">-->
      <!--</div>-->
      <!--<el-button class="wd-btn" @click="next">下一步</el-button>-->
    <!--</div>-->

      <!--密码修改成功后的提示-->
      <!--<div class="setWord-succeed">-->
        <!--<p class="succeed">提款密码修改成功!</p>-->
        <!--<p class="dw-tx">贴心提醒</p>-->
        <!--<p class="dw-help">当您完成设定后,若有疑问,可联系<span>线上客服</span>获得帮助</p>-->
      <!--</div>-->

      <!--提款专区-->
      <div class="withdrawal-">
        <div class="withdrawal-area">
          <div class="wd-way">
            <div class="wd-way1 wd-way-current">提现到银行卡</div>
            <div class="wd-way2"> <el-button type="text" @click="open">提现到支付宝</el-button></div>
          </div>
          <div class="addBankCard">
            <div class="wd-add">+</div>
            <p>添加银行卡</p>
          </div>
          <el-divider class="wd-line"></el-divider>
          <div class="daMaLiang">
            <p class="">提现金额：<span class="daMaLiang-span1">0.00元</span></p>
            <p>完成打码量：<span class="daMaLiang-span2">完成打码量：0</span>/<span class="daMaLiang-span2">要求打码量：0</span></p>
            <div class="amount-wd">
              <label>提款金额 ：</label>
              <input type="number" class="wd-input"  placeholder="请输入金额"/>
              <div class="ts">单笔提款限额（元）：100-500000</div>
            </div>
            <div class="amount-wd">
              <label>提款密码 ：</label>
              <input type="password" class="wd-input"  placeholder="请输入提款密码"/>
              <span>忘记密码</span>
            </div>
            <el-button class="wd-btn-next" @click="next">下一步</el-button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'withdrawal',
    data() {
      return {
        active: 1
      }
    },
    methods: {
      next() {
        this.active = 2;
      },

      open() {
        this.$alert('你还没有绑定支付宝，是否绑定支付宝？', '信息', {
          confirmButtonText: '前往',
          callback: action => {
            this.$router.push({path: 'alipay'});
          }
        });
      }

    }
  }
</script>
<style>
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


  .wd{
    width: 998px;
    height: 50px;
  }

  .wd-password{
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

  .wd-case{
    width:100%;
    height: 660px;
    display: flex;
    flex-wrap: wrap;
  }
  .dw-step {
    width: 750px;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 80px;
    text-align: left;
  }
  .wd-pw{
    width:840px;
    height:250px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .wd-item{
    width: calc(100% - 400px);
    height:40px ;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wd-item label{
    font-size: 14px;
    color: #222222;
    margin-right: 15px;
    line-height: 40px;
    width: 80px;
    text-align: right;
  }
  .wd-item input{
    width: 250px;
    height: 25px;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
    color:  #d9d9d9;
    font-size: 14px;
    padding: 6px 11px 6px 15px;
  }
  .wd-btn{
    width: 100px;
    padding: 5px;
    line-height: 25px;
    color: #fff;
    margin-top: 20px;
    margin-left: -80px;
    background-color: #c2a77d;
    border-color: #c2a77d;
  }
  .setWord-succeed{
    width: 500px;
    height: 250px;
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
  }

  .succeed{
    font-size: 20px;
    font-weight: 800;
    text-align: left;
    color:#c8a675;
    margin-top: 25px;
    margin-bottom: 50px;
  }
  .dw-tx{
    font-size: 14px;
    text-align: left;
    color: black;
    margin-bottom: 20px;
  }
  .dw-help{
    font-size: 16px;
    text-align: left;
    color: #c8a675;
  }
  .dw-help span{
    color: red;
  }
  .withdrawal- {
    width: 100%;
    height: 500px;
    background: #eee;
  }
  .withdrawal-area{
    width: 800px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 0 50px;
  }
  .wd-way{
    width: 700px;
    height: 35px;
    display: flex;
    flex-wrap: wrap;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #c8a675;
    border-radius: 5px;
  }
  .wd-way1 {
    width: 350px;
    height: 35px;
    color: #c8a675;
    text-align: center;
    line-height: 35px;
    font-size: 15px;
  }
  .wd-way2 {
    width: 350px;
    height: 35px;
    color: #c8a675;
    text-align: center;
    line-height: 35px;
    font-size: 15px;
  }

  .wd-way-current{
    background: #c8a675;
    color: white;
  }
  .addBankCard{
    width: 180px;
    height: 80px;
    margin-top: 20px;
    margin-left: 70px;
    background: white;
    color: #c8a675;
    border: 1px solid white;
  }
  .wd-add{
    height: 30px;
    width: 30px;
    line-height: 30px;
    font-size: 16px;
    margin:8px auto 8px auto ;
    border: 1px solid #c8a675;
    border-radius: 50%;
    color: #c8a675;
  }
  .addBankCard p{
    color: #c8a675;
    font-size: 14px;
  }
  .wd-line{
    width: 690px;
    margin-right: auto;
    margin-left: auto;
  }
  .daMaLiang{
    width: 800px;
    height: 280px;
    text-align: left;
    /*display: flex;*/
    /*flex-wrap: wrap;*/
  }
  .daMaLiang p{
    width: 500px;
    height: 30px;
    margin-top: 10px;
    margin-left:80px;
    font-size: 14px;
    color: #222222;
  }
  .daMaLiang-span1{
    width: 150px;
    height: 30px;
    padding-left: 20px;
    color:#c8a675 ;
  }
  .daMaLiang-span2{
    width: 150px;
    height: 30px;
    padding-left: 5px;
    padding-right: 10px;
    color:#c8a675 ;
  }
  .amount-wd{
    width: 750px;
    height: 50px;
    margin-top: 10px;
    margin-left: 80px;
    display: flex;
    flex-wrap: wrap;
  }
  .amount-wd label{
    font-size: 14px;
    color: #222222;
    line-height: 35px;
  }
  .amount-wd input{
    width: 190px;
    height: 32px;
    padding-left: 10px;
    font-size: 14px;
    border: 1px solid #eaeaea ;
    border-radius: 5px;
  }
  .ts{
    width: 280px;
    height: 35px;
    line-height: 35px;
    border: 1px solid #f96;
    border-radius: 5px;
    margin-left: 20px;
    padding-left: 10px;
    font-size: 14px;
    background: #FEF5E3;
    color: #222222;
  }
  .amount-wd span{
    font-size: 14px;
    color: red;
    line-height: 35px;
    margin-left: 20px;
  }
  .wd-btn-next{
    width: 140px;
    padding: 5px;
    line-height: 25px;
    color: #fff;
    position: relative;
    left: 350px;
    top: 10px;
    background-color: #c2a77d;
    border-color: #c2a77d;
  }
</style>

