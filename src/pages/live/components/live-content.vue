<template>
  <div class="live">
    <div class="live-banner"></div>
    <div class="liveContent">
      <div class="live-box">
          <div class="live-long">
              <img class="live-long-img" src="https://gamelist.mobanwang.com.cn//menuList/YHHB/0/live/txh.png"/>
              <div class="live-long-text">
                  <!--<p class="live-name">真人</p>-->
                  <p class="live-js">WG视讯</p>
                  <p class="live-introduce">实力品牌 专业玩法</p>
                  <span class="button">进入游戏</span>
              </div>
          </div>
        <div class="live-distribute"  v-for="item of liveList" :key="item.id">
          <img class="live-img" :src="item.imgs[0].img"/>
          <div class="live-text">
            <!--<p class="live-name">{{item.parentName}}</p>-->
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
    /*margin-bottom: 20px;*/
  }
  .live-box{
    width: 1230px;
    /*height: 1300px;*/
    display: flex;
    flex-wrap: wrap;
    margin: 60px auto 0 auto;
  }
  .live-long{
      width: 1200px;
      height: 230px;
      margin-bottom: 18px;
      display: flex;
  }
  .live-long-img{
      width: 930px;
      height: 230px;
  }
  .live-long-text{
      width: 260px;
      height: 177px;
      padding: 26px 21px;
      text-align: left;
      border:1px solid #e6e2de;
  }
  .live-distribute{
    width: 590px;
    height: 230px;
    margin:0  15px 20px 0;
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
      padding-top: 20px;
      font-size: 16px;
      font-weight: 700;
      color: #c8a675;
  }
  .live-introduce{
      height: 70px;
      padding-top: 20px;
      /*margin-bottom: 35px;*/
      font-size: 15px;
      line-height: 23px;
      font-weight: 700;
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
