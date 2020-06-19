<template>
  <div class="sports">
    <div class="sports-banner"></div>
    <div class="sportsContent">
      <div class="sports-box">
        <div class="sports-distribute"  v-for="item of sportsList" :key="item.id">
          <img class="sports-img" :src="item.imgUrl"/>
          <div class="sports-text">
            <p class="sports-name">{{item.sportsName}}</p>
            <p class="sports-introduce">{{item.sportsIntroduce}}</p>
            <span class="button">进入游戏</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sportsContent',
    data () {
      return {
        sportsList: [{
          id: '0001',
          sportsName: '皇冠体育',
          sportsIntroduce: '五大联赛，信誉良好，放心选择',
          imgUrl: '/static/sports/sport_hg.jpg'
        }, {
          id: '0002',
          sportsName: 'AG体育',
          sportsIntroduce: '大额玩家选择，世界杯放心玩',
          imgUrl:'/static/sports/sport_ag.jpg'
        }, {
          id: '0003',
          sportsName: '沙巴体育',
          sportsIntroduce: '每月超过1500场,赛事应有尽有！',
          imgUrl: '/static/sports/sport_ibc.jpg'
        }, {
          id: '0004',
          sportsName: 'IM体育',
          sportsIntroduce: '大额玩家选择，赛事应有尽有！',
          imgUrl: '/static/sports/sport_im.jpg'
        }]
      }
    }
  }
</script>
<style scoped>
  .sports{
    width:100%;
    height:1000px;
  }
  .sports-banner{
    width: 100%;
    height: 450px;
    background-image: url( '/static/sports/sport_banner.jpg');
    background-size: cover;
  }
  .sportsContent{
    width: 100%;
    height: 550px;
  }
  .sports-box{
    width: 1230px;
    height: 550px;
    margin: 70px auto 70px auto;
  }
  .sports-distribute{
    width: 590px;
    height: 230px;
    margin:0  15px 40px 0;
    border:1px solid #e6e2de;
    float: left;
  }
  .sports-img{
    width:332px ;
    height:230px;
    float: left;
  }
  .sports-text{
    width: 260px;
    height: 214px;
    padding: 26px 21px;
    text-align: left;
    margin: 0 0 0 330px;
  }
  .sports-name{
    color: #c8a675;
    font-weight: 700;
    padding-top: 20px;
    font-size: 20px;
  }
  .sports-introduce{
    font-size: 15px;
    font-weight: 600;
    width: 220px;
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
