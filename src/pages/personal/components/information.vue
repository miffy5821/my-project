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
        <li class="current"><img class="ifm-img" src="/static/personal/day.png" alt=""><span class="ifm-text">今天</span></li>
        <li><img class="ifm-img" src="/static/personal/day.png" alt=""><span class="ifm-text">3天</span></li>
        <li><img class="ifm-img" src="/static/personal/day.png" alt=""><span class="ifm-text">一周</span></li>
        <li><img class="ifm-img" src="/static/personal/day.png" alt=""><span class="ifm-text">一个月</span></li>
      </ul>
    </div>
    <div class="email">
      <img class="ifm-img" src="/static/personal/xinfeng.png"><span class="ifm-text1 email-current">全部（0）</span>&nbsp;&nbsp;|&nbsp;&nbsp;
      <img class="ifm-img" src="/static/personal/xinfeng.png"><span class="ifm-text1"> 已读（0）</span>&nbsp;&nbsp;|&nbsp;&nbsp;
      <img class="ifm-img" src="/static/personal/xinfeng.png"><span class="ifm-text1">未读（0）</span>
    </div>
    <div class="letter">
      <div class="letter-title">
        <ul>
          <li>类型</li>
          <li>标题</li>
          <li>时间</li>
        </ul>
      </div>
      <div class="ifm-content">
        <img class="letterImg" src="/static/personal/xinfeng.png">
        <p>暂时数据</p>
      </div>
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
    padding-bottom: 8px;
    line-height: 25px;
    font-size: 13px;
    color: gray;
  }
  .current{
    color: #c2a77d;
    border-bottom:3px solid  #c2a77d;
  }
  .ifm-img{
    width: 15px;
    height:15px;
    margin-right: 15px;
  }
  .email{
    width: 900px;
    height: 25px;
    text-align: left;
    padding-left: 20px;
  }
  .ifm-text1{
    color: gray;
    line-height: 25px;
    letter-spacing:5px;
    font-size: 14px;
  }
  .email-current{
    color: #c2a77d;
  }
  .letter{
    width: 980px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
  .letter-title{
    width: 960px;
    height: 25px;
    padding: 10px;
    background: #fafafa;
    border-bottom: 1px solid #e8e8e8;
  }
  .letter-title ul{
    width: 960px;
    height: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #fafafa;
  }
  .letter-title ul li{
    width: 300px;
    height: 25px;
    line-height: 25px;
    text-align: left;
    font-size: 14px;
  }
  .ifm-content {
    width: 945px;
    height: 200px;
    margin:0 20px 20px  0;
    padding:0 16px 16px 16px;
    background: #fff;
    border-left: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
  }

  .letterImg{
    width: 62px;
    height: 40px;
    margin-bottom: 15px;
    margin-top: 50px;
  }
  .ifm-content p{
    width: auto;
    height: 25px;
    text-align: center;
    font-size: 14px;
    color: gray;
  }
</style>

