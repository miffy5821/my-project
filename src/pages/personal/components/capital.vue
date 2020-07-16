<template>
  <div class="center">
    <div class="tg">
      <div class="tg-icon"><img class="iconTg" src="/static/personal/phone.png" alt=""></div>
      <p class="tgContent">尊敬的澳门银河贵宾，由于线上充值会员多通道拥挤，充值成功率降低，建议贵宾使用公司线下转卡方式充值，
        笔笔入款1.5%,感谢您对我司一直以来的支持，祝您游戏愉快~</p>
    </div>
    <div class="ym">
      <p class="ymContent">请牢记我们官方唯一的域名导航 www.888y.com</p>
    </div>
    <div class="switch">
      <button class="switchButton">切换至手动转账</button>
    </div>
    <div class="asset">
      <div class="assetName">我的资产</div>
    </div>
    <div class="asset-case">
      <div class="asset-left">
        <div class="tex1">0.00</div>
        <div class="asset-btn">
          <button class="asset-btn1">提款</button>
          <button class="asset-btn1 btnColor">存款</button>
        </div>
        <div></div>
      </div>
      <div class="asset-right">
        <div class="asset-">
          <button class="asset-btn2">刷新</button>
        </div>
        <div class="asset-wallet">
          <span class="wallet">中心钱包</span>
          <span class="sum">￥0.00</span>
          <span class="recycle">一键回收</span>
        </div>
        <div class="asset-wallet">
          <span class="integral">积分总额</span>
          <span class="total">0</span>
        </div>
      </div>
    </div>
    <div class="assetDistribute">
      <div class="assetName">财产分布</div>
    </div>
    <div class="Distribute">
      <div class="Distribute-ctn"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'capial'
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

