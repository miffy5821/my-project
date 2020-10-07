<template>
  <div class="lottery">
    <div class="lottery-banner"></div>
      <div class="lotteryContent">
        <div class="lottery-box">
          <div class="lottery-distribute" v-for="item of lotteryList" :key="item.id">
            <img class="lottery-img" :src="item.imgs[0].img"/>
            <div class="lottery-text">
              <p class="lottery-name">{{item.menuNameCn}}</p>
              <p class="lottery-introduce">{{item.remark}}</p>
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
        lotteryList: []
      }
    },
      methods: {
        navLottery() {
            this.axios.get('api/menu', {
                params: {id: 0, terminal: 0}
            })
                .then((response) => {
                    const data = response.data;
                    if (data.status === 10000) {

                        const lottery = response.data.data[6].subMenus;// 储存所有真人游戏数据
                        this.lotteryList = lottery;
                        console.log('lotteryList',this.lotteryList);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
      },
      mounted() {
      this.navLottery()
      }
  }
</script>
<style scoped>
  .lottery{
    width:100%;
  }
  .lottery-banner{
    width: 100%;
    height: 450px;
    background-image: url( '/static/lottery/lottery_banner.jpg');
    background-size: cover;
  }
  .lotteryContent{
    width: 100%;
  }
  .lottery-box{
    width: 1230px;
    margin: 70px auto 70px auto;
      display: flex;
      flex-wrap: wrap;
  }
  .lottery-distribute{
    width: 590px;
    height: 230px;
    margin:0  15px 40px 0;
    border:1px solid #e6e2de;
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
