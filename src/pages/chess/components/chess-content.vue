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
          chessList: []

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

                          const chess = response.data.data[2].subMenus;// 储存所有棋牌游戏数据
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
  }
  .chess-banner{
    width: 100%;
    height: 450px;
    background-image: url( '/static/chess/chess_banner.jpg');
    background-size: cover;
  }
  .chessContent{
    width: 100%;
  }
  .chess-box{
    width: 1230px;
    display: flex;
    flex-wrap: wrap;
    margin: 60px auto 0 auto;
  }
  .chess-distribute{
    width: 590px;
    height: 230px;
    margin:0  15px 20px 0;
    border:1px solid #e6e2de;
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
