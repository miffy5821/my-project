<template>
  <div class="center">
    <div class="tg">
      <div class="tg-icon"><img class="iconTg" src="/static/personal/phone.png" alt=""></div>
      <p class="tgContent">尊敬的澳门银河贵宾，由于线上充值会员多通道拥挤，充值成功率降低，建议贵宾使用公司线下转卡方式充值，
        笔笔入款1.5%,感谢您对我司一直以来的支持，祝您游戏愉快~</p>
    </div>
    <div class="ym">
    </div>
    <div class="deposit">
      <div class="depositName">信息公告</div>
    </div>
    <div class="ifm-data">
      <ul class="ifmBox">
        <li><img class="ifm-img" src="/static/personal/day.png" alt=""><span class="ifm-text">今天</span></li>
        <li><img class="ifm-img" src="/static/personal/day.png" alt=""><span class="ifm-text">3天</span></li>
        <li><img class="ifm-img" src="/static/personal/day.png" alt=""><span class="ifm-text">一周</span></li>
        <li><img class="ifm-img" src="/static/personal/day.png" alt=""><span class="ifm-text">一个月</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'information'
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
  .depositName {
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
  .ifm-data{
    width: 100%;
    height: 35px;
    margin-top: 20px;
    margin-bottom: 15px;
    border-bottom: 1px solid  #eaeaea;
  }
  .ifmBox{
    width: 100%;
    height: 55px;
    line-height: 25px;
    display: flex;
    flex-wrap: wrap;
  }
  .ifmBox li{
    width: 100px;
    height: 25px;
    line-height: 25px;
    font-size: 13px;
    color: gray;
  }
  .ifm-img{
    width: 15px;
    height:15px;
    margin-right: 15px;
  }
  .ifm-text{

  }
</style>

