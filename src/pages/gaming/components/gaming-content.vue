<template>
  <div class="gaming">
    <div class="gaming-banner"></div>
    <div class="gamingContent">
      <div class="gaming-box">
        <div class="gaming-distribute"  v-for="item of gamingList" :key="item.id">
          <img class="gaming-img" :src="item.imgUrl"/>
          <div class="gaming-text">
            <p class="gaming-name">{{item.gamingName}}</p>
            <p class="gaming-introduce">{{item.gamingIntroduce}}</p>
            <span class="button">进入游戏</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'gamingContent',
    data () {
      return {
        gamingList: [{
          id: '0001',
          gamingName: '雷火电竞',
          gamingIntroduce: '最新的电子竞技、比赛资讯',
          imgUrl: '/static/gaming/gaming_lh.png'
        }, {
          id: '0002',
          gamingName: 'RG电竞',
          gamingIntroduce: '有着丰富热门电竞赛事玩法和最佳水位',
          imgUrl:'/static/gaming/gaming-ray.jpg'
        }, {
          id: '0003',
          gamingName: 'IM电竞',
          gamingIntroduce: '信誉良好，放心选择',
          imgUrl: '/static/gaming/gaming_im.jpg'
        }, {
          id: '0004',
          gamingName: '敬请期待',
          gamingIntroduce: '更多比赛，正在上线中',
          imgUrl: '/static/gaming/jqqd.jpg'
        }]
      }
    }
  }
</script>
<style scoped>
  .gaming{
    width:100%;
    height:1000px;
  }
  .gaming-banner{
    width: 100%;
    height: 450px;
    background-image: url( '/static/gaming/gaming_banner.jpg');
    background-size: cover;
  }
  .gamingContent{
    width: 100%;
    height: 550px;
  }
  .gaming-box{
    width: 1230px;
    height: 550px;
    margin: 70px auto 70px auto;
  }
  .gaming-distribute{
    width: 590px;
    height: 230px;
    margin:0  15px 40px 0;
    border:1px solid #e6e2de;
    float: left;
  }
  .gaming-img{
    width:332px ;
    height:230px;
    float: left;
  }
  .gaming-text{
    width: 260px;
    height: 214px;
    padding: 26px 21px;
    text-align: left;
    margin: 0 0 0 330px;
  }
  .gaming-name{
    color: chocolate;
    font-weight: 700;
    padding-top: 20px;
    font-size: 20px;
  }
  .gaming-introduce{
    font-size: 15px;
    font-weight: 600;
    padding-top: 20px;
    width: 220px;
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
