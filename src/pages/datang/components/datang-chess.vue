<template>
  <div class="dt">
    <div class="txqp-banner"></div>
    <div class="txqp-chess">
        <div class="chess-box">
          <div class="chess"  v-for="item of datangList" :key="item.id">
            <img class="chess-img" :src="item.imgs[0].img"/>
            <div class="chess-text">
                <h4 class="chess-name">{{item.menuNameCn}}</h4>
                 <p class="chess-introduce">{{item.remark}}</p>
              <span class="button" @click="goGames(item)">进入游戏</span>
              <span class="button"  @click="goForward(item)">免费试玩</span>
            </div>
          </div>
<!--          <div class="chess right" >-->
<!--            <img class="chess-img" src="/static/datang/game20.jpg"/>-->
<!--            <div class="chess-text">-->
<!--              <h4 class="chess-name">敬请期待</h4>-->
<!--            </div>-->
<!--          </div>-->
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'datangChess',
      data() {
          return {
              datangList: [],
          }
      },
      computed: {

      },
      methods: {
          goGames(item){
                  this.axios.post('api/game/forward', {params: {gameId: item.gameId, gameCode: item.gameCode, terminal: 0}})
                      .then((resGames) => {

                      console.log(resGames)
                          if (resGames.data.status === 10000) {
                              window.location.href = resGames.data.data.config.transformResponse.url;
                          }
                      })
                  // .catch(function (error) {
                  //     console.log('hi');
                  // });
          },
          goForward(item) {
              this.axios.get('api/unauthor/game/fun/forward', {params: {gameId: item.gameId, gameCode: item.gameCode, terminal: 0}})
                  .then((res) => {
                      if (res.data.status === 10000) {
                          window.location.href = res.data.data.data;
                      }
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
          },
          navDatang() {
              this.axios.get('api/menu', {
                  params: {id: 0, terminal: 0}
              })
                  .then((response) => {
                      const data = response.data;
                      if (data.status === 10000) {

                          const datang = response.data.data[1].subMenus;// 储存所有棋牌游戏数据
                          this.datangList = datang;
                      }
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
          },
      },
      mounted() {
          this.navDatang();
      },
  }
</script>
<style scoped>
  .dt{
  width:100%;
  height:4100px;
  }
  .txqp-banner{
    width: 100%;
    height: 450px;
    background-image: url( '/static/datang/txqp_banner.jpg');
    background-size: cover;
  }
  .txqp-chess{
    width: 100%;
    /*height: 2680px;*/
  }
  .chess-box{
    width: 1230px;
    /*height: 2680px;*/
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
    cursor: pointer;
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
    cursor: pointer;
  }
  .right{
    float: right;
    margin-right: 30px;
  }
</style>
