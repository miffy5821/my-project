<template>
  <div class="dt">
    <div class="txqp-banner"></div>
    <div class="txqp-chess">
        <div class="chess-box">
          <div class="chess"  v-for="item of datangList" :key="item.id">
            <img class="chess-img" :src="item.imgUrl"/>
            <div class="chess-text">
                <h4 class="chess-name">{{item.chessName}}</h4>
                 <p class="chess-introduce">{{item.chessIntroduce}}</p>
              <span class="button">进入游戏</span>
              <span class="button">免费试玩</span>
            </div>
          </div>
          <div class="chess right" >
            <img class="chess-img" src="/static/datang/game20.jpg"/>
            <div class="chess-text">
              <h4 class="chess-name">敬请期待</h4>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'datangChess',
    data () {
      return{
        datangList: [{
          id: '0001',
          chessName: '大厅',
          chessIntroduce: '独特风格，与众不同',
          imgUrl: '/static/datang/game1.jpg'
        }, {
          id: '0002',
          chessName: '抢庄牛牛',
          chessIntroduce: '经典棋牌玩法，高手在线对决',
          imgUrl: '/static/datang/game2.jpg'
        },{
          id: '0003',
          chessName: '百人龙虎',
          chessIntroduce: '在线匹配，公平对决',
          imgUrl: '/static/datang/game3.jpg'
        },{
          id: '0004',
          chessName: '炸金花',
          chessIntroduce: '超高清画面，畅玩多种玩法',
          imgUrl: '/static/datang/game4.jpg'
        },{
          id: '0005',
          chessName: '金蟾捕鱼',
          chessIntroduce: '群雄逐鱼，一网打尽',
          imgUrl: '/static/datang/game5.jpg'
        },{
            id: '0006',
          chessName: '抢庄炸金花',
          chessIntroduce: '快速抢庄，唯我独尊',
            imgUrl: '/static/datang/game6.jpg'
        },{
          id: '0007',
          chessName: '看牌抢庄牛牛',
          chessIntroduce: '提升魄力，放肆收割',
          imgUrl: '/static/datang/game7.jpg'
        },{
          id: '0008',
          chessName: '红黑大战',
          chessIntroduce: '正宗地方玩法，稳定便捷',
          imgUrl: '/static/datang/game8.jpg'
        },{
          id: '0009',
          chessName: '三公',
          chessIntroduce: '游戏玩法简单，运气十足',
          imgUrl: '/static/datang/game9.jpg'
        },{
          id: '0010',
          chessName: '百人牛牛',
          chessIntroduce: '豪华升级版，简单快速',
          imgUrl: '/static/datang/game10.jpg'
        },{
          id: '0011',
          chessName: '水果机',
          chessIntroduce: '回味经典，超高奖励',
          imgUrl: '/static/datang/game11.jpg'
        },{
          id: '0012',
          chessName: '二八杠',
          chessIntroduce: '万人在线竞技，高手过招刺激',
          imgUrl: '/static/datang/game12.jpg'
        },{
          id: '0013',
          chessName: '十一点',
          chessIntroduce: '以小博大，险中求胜',
          imgUrl: '/static/datang/game13.jpg'
        },{
          id: '0014',
          chessName: '通比牛牛',
          chessIntroduce: '快速游戏，简单刺激',
          imgUrl: '/static/datang/game14.jpg'
        },{
          id: '0015',
          chessName: '至尊五张',
          chessIntroduce: '高手过招，斗智不斗力',
          imgUrl: '/static/datang/game15.jpg'
        },{
            id: '0016',
          chessName: '十三水',
          chessIntroduce: '极具特色，火热开局',
            imgUrl: '/static/datang/game16.jpg'
          },{
          id: '0017',
          chessName: '奔驰宝马',
          chessIntroduce: '流畅画面，风驰电掣',
          imgUrl: '/static/datang/game17.jpg'
        },{
          id: '0018',
          chessName: '抢庄抢三张',
          chessIntroduce: '眼疾手快，力压全场',
          imgUrl: '/static/datang/game18.jpg'
        },{
          id: '0019',
          chessName: '金鲨银鲨',
          chessIntroduce: '简单刺激，运气十足',
          imgUrl: '/static/datang/game19.jpg'
        }]
      }
    },
      methods: {

      },
  }
</script>
<style scoped>
  .dt{
  width:100%;
  height:3250px;
  }
  .txqp-banner{
    width: 100%;
    height: 450px;
    background-image: url( '/static/datang/txqp_banner.jpg');
    background-size: cover;
  }
  .txqp-chess{
    width: 100%;
    height: 2680px;
  }
  .chess-box{
    width: 1230px;
    height: 2680px;
    margin: 150px auto 100px auto;
  }
  .chess{
    width: 590px;
    height: 230px;
    margin:0  15px 40px 0;
    border:1px solid #e6e2de;
    float: left;
  }
  .chess-img{
    width:332px ;
    height:230px;
    float: left;
  }
  .chess-text{
    width: 260px;
    height: 214px;
    padding: 26px 21px;
    text-align: left;
    margin: 0 0 0 330px;
  }
  .chess-name{
    color: chocolate;
    font-weight: 700;
    padding-top: 20px;
    font-size: 20px;
  }
   .chess-introduce{
     font-size: 15px;
     font-weight: 600;
     width: 220px;
     padding-top: 20px;
     height: 70px;
     line-height: 23px;
   }
  .button{
    width: 90px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin-top: 15px;
    padding: 8px 10px;
    background-color: #c8a675;
    border-radius: 5px;
    border: 1px solid #c8a675;
    color: white;
  }
  .right{
    float: right;
    margin-right: 30px;
  }
</style>
