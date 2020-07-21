<template>
  <div class="center">
    <div class="tg">
      <div class="tg-icon"><img class="iconTg" src="/static/personal/phone.png" alt=""></div>
      <p class="tgContent">尊敬的澳门银河贵宾，由于线上充值会员多通道拥挤，充值成功率降低，建议贵宾使用公司线下转卡方式充值，
        笔笔入款1.5%,感谢您对我司一直以来的支持，祝您游戏愉快~</p>
    </div>
    <div class="ym">
    </div>
    <div class="asset">
      <div class="assetName">个人资料</div>
    </div>
    <div class="asset-case">
      <div class="data-left"><img class="dataImg" src="/static/personal/logo.png"></div>
      <div  class="data-right">
        <span>rrran123,欢迎您</span><button>修改密码</button>
        <div class="data-text" id="data">上次登录时间:2020-07-22 01:01:46</div>
      </div>
    </div>
    <div class="asset">
      <div class="assetName">账户安全</div>
    </div>
    <div>
      <table>
        <tr>
          <th>真实姓名</th>
          <th>会员<span>修改</span></th>
          <th>手机号码</th>
          <th>189******** <span>修改</span></th>
        </tr>
        <tr>
          <th>微信号</th>
          <th>wei5824<span>修改</span></th>
          <th>QQ号</th>
          <th>未设定</th>
        </tr>
        <tr>
          <th>提款密码</th>
          <th>立即设定</th>
          <th>默认银行卡</th>
          <th>暂未绑定银行卡</th>
        </tr>
        <tr>
          <th>支付宝</th>
          <th>立即绑定</th>
          <th>注册时间</th>
          <th>2020.07.20 11：05</th>
        </tr>
      </table>
    </div>
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

  .data-left{

  }
  .dataImg{

  }
  .data-right{

  }
  .data-right span{

  }.data-right button{

   }
  .data-text{

  }
</style>

