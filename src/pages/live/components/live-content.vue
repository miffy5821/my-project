<template>
  <div class="live">
    <div class="live-banner"></div>
    <div class="liveContent">
      <div class="live-box">
        <div class="live-distribute"  v-for="item of liveList" :key="item.id">
          <img class="live-img" :src="item.imgs[0].img"/>
          <div class="live-text">
            <p class="live-name">{{item.parentName}}</p>
            <p class="live-js">{{item.menuNameCn}}</p>
            <p class="live-introduce">{{item.remark}}</p>
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
          liveList: []
      }
    },
      methods: {
          navLive() {
              this.axios.get('api/menu', {
                  params: {id: 0, terminal: 0}
              })
                  .then((response) => {
                      const data = response.data;
                      if (data.status === 10000) {

                          const live = response.data.data[3].subMenus;// 储存所有真人游戏数据
                          this.liveList = live;
                          console.log('liveList',this.liveList);
                      }
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
          }
      },
      mounted() {
          this.navLive();
      },
  }
</script>
<style scoped>
  .live{
   width:100%;
   height: auto;
  }
  .live-banner{
    width: 100%;
    height: 450px;
    background-image: url( '/static/live/casino_banner.jpg');
    background-size: cover;
  }
  .liveContent{
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }
  .live-box{
    width: 1230px;
    /*height: 1300px;*/
    display: flex;
    flex-wrap: wrap;
    margin: 70px auto 70px auto;
  }
  .live-distribute{
    width: 590px;
    height: 230px;
    margin:0  15px 40px 0;
    border:1px solid #e6e2de;
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
