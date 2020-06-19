<template>
  <div class="plate2-games">
    <div class="content">
      <vue-seamless-scroll :data=" gamesList" :class-option="optionLeft" class="seamless-warp">
        <ul class="item">
          <li v-for="item in gamesList" >
            <div class="games">
              <img class="games-img" :src="item.imgUrl"/>
              <div class="games-int">
                <div class="game-title">{{item.title}}</div>
                <div class="game-kind">{{item.kind}}</div>
                <div class="game-button">进入游戏</div>
              </div>
            </div>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
import vueSeamless from 'vue-seamless-scroll'
export default {
  components: {
    vueSeamless
  },
  name: 'homePlate6',
  data () {
    return {
      gamesList: [{
        id: '0001',
        imgUrl: '/static/home/games1.png',
        title: '9个焰火面',
        kind: 'MG电子'
      }, {
        id: '0002',
        imgUrl: '/static/home/games2.png',
        title: '三卡吹牛',
        kind: 'PD电子'
      },{
        id: '0003',
        imgUrl: '/static/home/games3.png',
        title: '金钱蛙',
        kind: 'PD电子'
      },{
        id: '0004',
        imgUrl: '/static/home/games4.png',
        title: '欢乐帮',
        kind: 'HABA电子'
      },{
        id: '0005',
        imgUrl: '/static/home/games5.png',
        title: '双喜熊猫',
        kind: 'HABA电子'
      },{
        id: '0006',
        imgUrl: '/static/home/games6.png',
        title: '108好汉',
        kind: 'MG电子'
      }]
    }
  },
  computed: {
    optionLeft () {
      return {
        direction: 2,
        limitMoveNum: 2
      }
    }
  }
}
</script>

<style  scoped>
  .plate2-games{
    width: 1143px;
    height: 118px;
    padding: 0 20px 0 35px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid gainsboro;
  }
  .content .seamless-warp{
    width: 1145px;
    height: 118px;
    overflow: hidden;
  }
  .item{
    height: 118px;
    width: 1450px;
  }
  .item li{
    float: left;
  }
  .games{
    width: 240px;
    height: 89px;
    margin-top:15px;
    margin-bottom: auto;
    overflow: hidden;
    float: left;
  }
  .games-img{
    width: 89px;
    height: 89px;
    float: left;
    border-radius: 5px;
    background-size:cover;
  }
  .games-int{
    width: 68px;
    height: 89px;
    display: inline-block;
    position: relative;
    margin-right:50px;
  }
  .game-title{
    position: relative;
    width: auto;
    height: 24px;
    color: black;
    font-weight: bold;
    font-size: 14px;
    top: 10px;
  }
  .game-kind {
    width: 68px;
    height: 17px;
    font-size: 12px;
    position: relative;
    top: 8px;
  }
  .game-button{
    width: 68px;
    height: 22px;
    line-height: 22px;
    position: relative;
    top: 15px;
    color: white;
    background-color: chocolate;
    border-radius:2px;
    font-size: 12px;
  }
</style>
