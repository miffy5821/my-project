<template>
  <div class="lottery">
    <div class="lottery-banner"></div>
      <div class="lotteryContent">
        <div class="lottery-box">
          <div class="lottery-distribute" v-for="item of lotteryList" :key="item.id">
            <img class="lottery-img" :src="item.imgUrl"/>
            <div class="lottery-text">
              <p class="lottery-name">{{item.lotteryName}}</p>
              <p class="lottery-introduce">{{item.lotteryIntroduce}}</p>
              <span class="button">进入游戏</span>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'LotteryContent',
    data () {
      return {
        lotteryList: [{
          id: '0001',
          lotteryName: '官方彩（新）',
          lotteryIntroduce: '官方即时开奖结果，满足客户全方位需求',
          imgUrl: '/static/lottery/lottery-iggx1.jpg'
        }, {
          id: '0002',
          lotteryName: 'IG彩票（新）',
          lotteryIntroduce: '全新IG彩票，玩法多， 赔率高',
          imgUrl:'/static/lottery/lottery-ig2.png'
        }, {
          id: '0003',
          lotteryName: '官方彩',
          lotteryIntroduce: '官方即时开奖结果，满足客户全方位需求',
          imgUrl: '/static/lottery/lottery-igg3.jpg'
        }, {
          id: '0004',
          lotteryName: 'IG彩票',
          lotteryIntroduce: '传统类型彩票，玩法简单， 乐趣多多',
          imgUrl: '/static/lottery/lottery-ig-old4.png'
        },{
          id: '0005',
          lotteryName: 'IG六合彩(新)',
          lotteryIntroduce: '糅合亚洲及欧洲风格，集所有顶级游戏功能设计理念于一体',
          imgUrl: '/static/lottery/lottery-x6hc5.png'
        }, {
          id: '0006',
          lotteryName: 'IG六合彩',
          lotteryIntroduce: '六合中特，多种玩法，超高倍率',
          imgUrl: '/static/lottery/lottery-6hc6.png'
        }, {
          id: '0007',
          lotteryName: 'VR彩票',
          lotteryIntroduce: '独特真人彩票玩法，美女 热线，激情无限',
          imgUrl: '/static/lottery/lottery-vr77.png'
        }, {
          id: '0008',
          lotteryName: 'BCB彩票',
          lotteryIntroduce: '超多玩法，超高倍率',
          imgUrl: '/static/lottery/lottery-bcb8.png'
        }]
      }
    }
  }
</script>
<style scoped>
  .lottery{
    width:100%;
    height:1550px;
  }
  .lottery-banner{
    width: 100%;
    height: 450px;
    background-image: url( '/static/lottery/lottery_banner.jpg');
    background-size: cover;
  }
  .lotteryContent{
    width: 100%;
    height: 1100px;
  }
  .lottery-box{
    width: 1230px;
    height: 1100px;
    margin: 70px auto 70px auto;
  }
  .lottery-distribute{
    width: 590px;
    height: 230px;
    margin:0  15px 40px 0;
    border:1px solid #e6e2de;
    float: left;
  }
  .lottery-img{
    width:332px ;
    height:230px;
    float: left;
  }
  .lottery-text{
    width: 260px;
    height: 214px;
    padding: 26px 21px;
    text-align: left;
    margin: 0 0 0 330px;
  }
  .lottery-name{
    color: #c8a675;
    font-weight: 700;
    padding-top: 20px;
    font-size: 20px;
  }
  .lottery-introduce{
    font-size: 14px;
    width: 220px;
    color: #707070;
    font-weight: 700;
    padding-top: 20px;
    height: 70px;
    word-wrap: normal;
    line-height: 23px;
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
