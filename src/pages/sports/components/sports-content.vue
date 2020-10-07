<template>
  <div class="sports">
    <div class="sports-banner"></div>
    <div class="sportsContent">
      <div class="sports-box">
        <div class="sports-distribute"  v-for="item of sportList" :key="item.id">
          <img class="sports-img" :src="item.imgs[0].img"/>
          <div class="sports-text">
            <p class="sports-name">{{item.menuNameCn}}</p>
            <p class="sports-introduce">{{item.remark}}</p>
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
          sportList: []
      }
    },
      methods:{
        navSport() {
            this.axios.get('api/menu', {
                params: {id: 0, terminal: 0}
            })
                .then((response) => {
                    const data = response.data;
                    if (data.status === 10000) {

                        const sport = response.data.data[5].subMenus;// 储存所有体育游戏数据
                        this.sportList = sport;
                        console.log('sportList',this.sportList);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
      },
      mounted() {
          this.navSport();
      }
  }
</script>
<style scoped>
  .sports{
    width:100%;
  }
  .sports-banner{
    width: 100%;
    height: 450px;
    background-image: url( '/static/sports/sport_banner.jpg');
    background-size: cover;
  }
  .sportsContent{
    width: 100%;
  }
  .sports-box{
    width: 1230px;
    margin: 70px auto 70px auto;
    display: flex;
    flex-wrap: wrap;
  }
  .sports-distribute{
    width: 590px;
    height: 230px;
    margin:0  15px 40px 0;
    border:1px solid #e6e2de;
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
