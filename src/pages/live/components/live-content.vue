<template>
  <div class="live">
    <div class="live-banner"></div>
    <div class="liveContent">
      <div class="live-box">
        <div class="live-distribute"  v-for="item of liveList" :key="item.id">
          <img class="live-img" :src="item.imgUrl"/>
          <div class="live-text">
            <p class="live-name">{{item.liveName}}</p>
            <p class="live-js">{{item.liveIntro}}</p>
            <p class="live-introduce">{{item.liveIntroduce}}</p>
            <span class="button">进入游戏</span>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
  export default {
    name: 'liveContent',
    data () {
      return {
        liveList: [{
          id: '0001',
          liveName: 'OG真人',
          liveIntro: '感受刺激 体验心跳',
          liveIntroduce: '糅合亚洲及欧洲风格，集所有顶级游戏功能设计理念于一体',
          imgUrl: '/static/live/live-og1.jpg'
        }, {
          id: '0002',
          liveName: 'WM视讯',
          liveIntro: '不一样的极致娱乐体验',
          liveIntroduce: '美女主播 提供最佳品质',
          imgUrl:'/static/live/live-wm2.jpg'
        }, {
          id: '0003',
          liveName: 'BG视讯',
          liveIntro: '老牌旗舰 玩法齐全',
          liveIntroduce: '专属品牌百家乐 创新极限由你定义',
          imgUrl: '/static/live/live-bg3.jpg'
        }, {
          id: '0004',
          liveName: 'HBO视讯',
          liveIntro: '多种娱乐,优质的投注方式',
          liveIntroduce: '感受刺激 玩法齐全',
          imgUrl: '/static/live/live-hbo4.jpg'
        }, {
          id: '0005',
          liveName: 'AG国际厅',
          liveIntro: '美女主播 热线传情',
          liveIntroduce: '全球首创6张牌先发，VIP包桌独享，先发牌后下注，公平公正',
          imgUrl: '/static/live/live-agg5.jpg'
        }, {
          id: '0006',
          liveName: 'AG极速厅',
          liveIntro: '极速玩法 趣味多多',
          liveIntroduce: '全球首创6张牌先发，VIP包桌独享，先发牌后下注，公平公正',
          imgUrl: '/static/live/live-agj6.jpg'
        },{
          id: '0007',
          liveName: 'BBIN真人',
          liveIntro: '老牌旗舰 玩法齐全',
          liveIntroduce: '专属品牌百家乐 创新极限由你定义',
          imgUrl:'/static/live/live-bbin7.jpg'
        },{
          id: '0008',
          liveName: '申博视讯',
          liveIntro: '多款百家乐 一次拥有',
          liveIntroduce: '多种游戏星级玩法，体验无穷',
          imgUrl:'/static/live/live-sun8.jpg'
        },{
          id: '0009',
          liveName: '欧博视讯',
          liveIntro: '挑选好路 直接入座',
          liveIntroduce: '全球知名实力博彩平台，精彩游戏等你来',
          imgUrl: '/static/live/live-abg9.jpg'
        },{
          id: '0010',
          liveName: 'Cagayan88 视讯',
          liveIntro: '美女主播 多元化玩法',
          liveIntroduce: '美女主播热线传情，赢钱机会绝不错过',
          imgUrl: '/static/live/live-caganya10.jpg'
        },{
          id: '0011',
          liveName: 'DS真人',
          liveIntro: '专业游戏研发 提供最佳品质',
          liveIntroduce: '专属品牌百家乐 创新极限由你定义',
          imgUrl: '/static/live/live-ds11.jpg'
        }]
      }
    }
  }
</script>
<style scoped>
  .live{
    width:100%;
    height:2100px;
  }
  .live-banner{
    width: 100%;
    height: 450px;
    background-image: url( '/static/live/casino_banner.jpg');
    background-size: cover;
  }
  .liveContent{
    width: 100%;
    height: 1650px;
  }
  .live-box{
    width: 1230px;
    height: 1650px;
    margin: 70px auto 70px auto;
  }
  .live-distribute{
    width: 590px;
    height: 230px;
    margin:0  15px 40px 0;
    border:1px solid #e6e2de;
    float: left;
  }
  .live-img{
    width:332px ;
    height:230px;
    float: left;
  }
  .live-text{
    width: 260px;
    height: 214px;
    padding: 26px 21px;
    text-align: left;
    margin: 0 0 0 330px;
  }
  .live-name{
   color: black;
    font-weight: 700;
    padding-top: 20px;
    font-size: 14px;
  }
  .live-js{
    padding-top: 15px;
    font-size: 14px;
    color: #c8a675;;
    font-weight: 700;
  }
  .live-introduce{
    font-size: 14px;
    padding-top: 15px;
    width: 220px;
    height: 70px;
    color: #666;;
    line-height: 20px;
  }
  .button{
    width: 90px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    padding: 8px 10px;
    background-color: #c8a675;
    border-radius: 5px;
    border: 1px solid #c8a675;
    color: white;
  }
</style>
