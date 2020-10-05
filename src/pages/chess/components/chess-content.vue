<template>
  <div class="chess">
    <div class="chess-banner"></div>
    <div class="chessContent">
      <div class="chess-box">
        <div class="chess-distribute"  v-for="item of chessList" :key="item.id">
          <img class="chess-img" :src="item.imgs[0].img"/>
          <div class="chess-text">
            <h4 class="chess-name">{{item.menuNameCn}}</h4>
            <p class="chess-introduce">{{item.remark}}</p>
            <span class="button">进入游戏</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'chessContent',
    data () {
      return {
          chessList: ''
        // chessList: [{
        //   id: '0001',
        //   chessName: '欢乐棋牌',
        //   chessIntroduce: '流畅画面，超多玩法',
        //   imgUrl: '/static/chess/chess1.png'
        // }, {
        //   id: '0002',
        //   chessName: '开元棋牌',
        //   chessIntroduce: '棋牌游戏，火热战局，等您来战！',
        //   imgUrl: '/static/chess/chess2.jpg'
        // }, {
        //   id: '0003',
        //   chessName: '乐游棋牌',
        //   chessIntroduce: '与时俱进，强势来袭!',
        //   imgUrl: '/static/chess/chess3.jpg'
        // }, {
        //   id: '0004',
        //   chessName: '新世界棋牌',
        //   chessIntroduce: '大额玩法，强势来袭!',
        //   imgUrl: '/static/chess/chess4.png'
        // }, {
        //   id: '0005',
        //   chessName: 'VG棋牌',
        //   chessIntroduce: '劲爆够劲，其乐无穷！',
        //   imgUrl: '/static/chess/chess5.jpg'
        // }, {
        //   id: '0006',
        //   chessName: '德胜棋牌',
        //   chessIntroduce: '大吉大利，旗开德胜！',
        //   imgUrl: '/static/chess/chess6.jpg'
        // }]
      }
    },
      methods: {
          navChess() {
              this.axios.get('api/menu', {
                  params: {id: 0, terminal: 0}
              })
                  .then((response) => {
                      const data = response.data;
                      if (data.status === 10000) {

                          const chess = response.data.data[3].subMenus;// 储存所有棋牌游戏数据
                          this.chessList = chess;
                          console.log(this.chessList)
                      }
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
          },
      },
      mounted() {
          this.navChess();
      },
  }
</script>
<style scoped>
  .chess{
    width:100%;
    height:1350px;
  }
  .chess-banner{
    width: 100%;
    height: 450px;
    background-image: url( '/static/chess/chess_banner.jpg');
    background-size: cover;
  }
  .chessContent{
    width: 100%;
    height: 880px;
  }
  .chess-box{
    width: 1230px;
    height:880px;
    margin: 130px auto 100px auto;
  }
  .chess-distribute{
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
    width: 230px;
    font-size: 15px;
    font-weight: 600;
    padding-top: 20px;
    height: 70px;
    line-height: 23px;
    margin-right: 15px;
    word-wrap:break-word;
    /*word-break:break-all;*/
    overflow: hidden;
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
</style>
