<template>
  <div class="center">
    <div class="tg">
      <div class="tg-icon"><img class="iconTg" src="/static/personal/phone.png" alt=""></div>
      <p class="tgContent">尊敬的澳门银河贵宾，由于线上充值会员多通道拥挤，充值成功率降低，建议贵宾使用公司线下转卡方式充值，
        笔笔入款1.5%,感谢您对我司一直以来的支持，祝您游戏愉快~</p>
    </div>
    <div class="ym">
    </div>
    <div class="data">
      <div class="dataName">个人资料</div>
    </div>
    <div class="data-case">
      <div class="data-left"><img class="dataImg" src="/static/personal/logo.png"></div>
      <div  class="data-right">
        <span>rrran123,欢迎您</span><button>修改密码</button>
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
          <th class="dd-content">会员<span class="text-color">修改</span></th>
          <th class="bg-color">手机号码</th>
          <th class="dd-content">189******** <span class="text-color">修改</span></th>
        </tr>
        <tr>
          <th class="bg-color">微信号</th>
          <th class="dd-content">wei5824<span class="text-color">修改</span></th>
          <th class="bg-color">QQ号</th>
          <th class="dd-content">未设定</th>
        </tr>
        <tr>
          <th class="bg-color">提款密码</th>
          <th class="dd-content">立即设定</th>
          <th class="bg-color">默认银行卡</th>
          <th class="dd-content">暂未绑定银行卡</th>
        </tr>
        <tr>
          <th class="bg-color">支付宝</th>
          <th class="dd-content">立即绑定</th>
          <th class="bg-color">注册时间</th>
          <th class="dd-content">2020.07.20 11：05</th>
        </tr>
      </table>
    </div>
    <el-divider class="dada-line" ></el-divider>
  </div>
</template>
<script>
  export default {
    name: 'personalData'
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

