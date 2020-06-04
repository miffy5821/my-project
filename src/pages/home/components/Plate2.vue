<template>
  <div class="plate2">
    <div class="plate2-div">
      <div class="plate2-line"></div>
      <p class="plate2-title">热门游戏 </p>
      <p class="plate2-introduced">多款游戏高额奖金</p>
      <div class="plate2-moro">查看更多</div>
      <div class='plate2-icon'></div>
    </div>
    <div class="plate2-left">
      <div class="ag-fish" ></div>
      <div class="slots1" ></div>
      <div class="slots2" ></div>
    </div>
    <div class="plate2-right">
      <div class="plate2-prize">
        <div class="plate2-line"></div>
        <p class="plate2-title">中奖瞬间 </p>
        <p class="plate2-introduced">惊喜连连 好运连连</p>
      </div>
      <div class="prize">
        <span>游戏名称</span><span> 帐号</span><span>中奖金额</span>
      </div>
      <div class="prize-content">
          <div class="div2">
            <div class="von"><p class="first">幸运牛仔</p><p class="last">l***s</p><p class="next">&yen;1,249</p></div>
            <div class="von"><p class="first">国际足球</p><p class="last">f***7</p><p class="next">&yen;8888</p></div>
            <div class="von"><p class="first">双喜熊猫</p><p class="last">d***w</p><p class="next">&yen;7,511</p></div>
            <div class="von"><p class="first">女巫的财富</p><p class="last">a***2</p><p class="next">&yen;458</p></div>
            <div class="von"><p class="first">神秘的夏洛克</p><p class="last">s***c</p><p class="next">&yen;2,799</p></div>
            <div class="von"><p class="first">奖金21点</p><p class="last">j***i</p><p class="next">&yen;6,414</p></div>
            <div class="von"><p class="first">幸运日</p><p class="last">k***w</p><p class="next">&yen;3,140</p></div>
            <div class="von"><p class="first">王牌和八面</p><p class="last">q***t</p><p class="next">&yen;2,680</p></div>
            <div class="von"><p class="first">百万钞票</p><p class="last">c***g</p><p class="next">&yen;762</p></div>
            <div class="von"><p class="first">海滨嘉年华</p><p class="last">e***c</p><p class="next">&yen;4,910</p></div>
            <div class="von"><p class="first">幸运牛仔</p><p class="last">s***n</p><p class="next">&yen;1,421</p></div>
            <div class="von"><p class="first">欧洲轮盘</p><p class="last">w***b</p><p class="next">&yen;5,018</p></div>
            <div class="von"><p class="first">金字塔女王</p><p class="last">l***p</p><p class="next">&yen;2,207</p></div>
            <div class="von"><p class="first">情圣博士</p><p class="last">e***v</p><p class="next">&yen;1,254</p></div>
            <div class="von"><p class="first">冰解模糊球</p><p class="last">f***5</p><p class="next">&yen;807</p></div>
            <div class="von"><p class="first">权利的游戏</p><p class="last">h***j</p><p class="next">&yen;6,120</p></div>
            <div class="von"><p class="first">小丑扑克</p><p class="last">z***o</p><p class="next">&yen;2,348</p></div>
            <div class="von"><p class="first">红利扑克</p><p class="last">d***v</p><p class="next">&yen;669</p></div>
            <div class="von"><p class="first">50手奖金扑克</p><p class="last">e***g</p><p class="next">&yen;1,576</p></div>
            <div class="von"><p class="first">幸运牛仔</p><p class="last">s***l</p><p class="next">&yen;249</p></div>
            <div class="von"><p class="first">国际足球</p><p class="last">f***q</p><p class="next">&yen;3,641</p></div>
            <div class="von"><p class="first">双喜熊猫</p><p class="last">d***w</p><p class="next">&yen;7,511</p></div>
            <div class="von"><p class="first">女巫的财富</p><p class="last">a***2</p><p class="next">&yen;458</p></div>
            <div class="von"><p class="first">神秘的夏洛克</p><p class="last">s***c</p><p class="next">&yen;2,799</p></div>
            <div class="von"><p class="first">奖金21点</p><p class="last">j***i</p><p class="next">&yen;6,414</p></div>
            <div class="von"><p class="first">幸运日</p><p class="last">k***w</p><p class="next">&yen;3,140</p></div>
            <div class="von"><p class="first">王牌和八面</p><p class="last">q***t</p><p class="next">&yen;680</p></div>
            <div class="von"><p class="first">百万钞票</p><p class="last">c***g</p><p class="next">&yen;1,762</p></div>
          </div>
      </div>
    </div>
    <div class="plate2-games">
      <swiper-slide>
        <div class="games" v-for="item of gamesList" :key="item.id">
          <img class="games-img" :src="item.imgUrl"/>
          <div class="games-int">
            <div class="game-title">{{item.title}}</div>
            <div class="game-kind">{{item.kind}}</div>
            <div class="game-button">进入游戏</div>
          </div>
        </div>
      </swiper-slide>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePlate2',
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
  }
}
</script>

<style scoped>
  .plate2{
    width: 1200px;
    height: 500px;
    margin-right: auto;
    margin-top: 40px;
    margin-left: auto;
  }
  .plate2-div{
    width: 905px;
    height: 20px;
    margin-bottom:8px;
  }
  .plate2-line{
    width: 3px;
    height:18px;
    background-color: orange;
  }
  .plate2-title {
    width:120px;
    height:18px;
    font-size:17px;
    margin-left:-10px;
    margin-top:-18px;
  }
  .plate2-introduced{
    width:180px;
    height:18px;
    font-size:14px;
    margin-left:65px;
    margin-top:-16px;
  }
  .plate2-moro{
    width:80px;
    height:18px;
    font-size:14px;
    margin-left:810px;
    margin-top:-18px;
  }
  .plate2-icon{
    margin-left:885px;
    margin-top:-20px;
    width: 15px;
    height: 15px;
    background-image: url("../../../assets/home-img/icon.png");
  }
  .plate2-left{
    width: 905px;
    height: 330px;
    display: flex;
  }
  .ag-fish{
    width:450px ;
    height:330px ;
    display: inline-block;
    background-image: url("../../../assets/home-img/ag-fish.jpg");
  }
  .slots1{
    width:220px ;
    height:330px ;
    display: inline-block;
    margin-left: 5px;
    background-image: url("../../../assets/home-img/slots.jpg");
  }
  .slots2{
    width:220px ;
    height:330px ;
    margin-left: 5px;
    display: inline-block;
    background-image: url("../../../assets/home-img/slots2.jpg");
  }
  .plate2-right{
    width: 290px;
    height: 398px;
    margin: -360px 0 0 905px ;
  }
  .prize{
    width: 288px;
    height: 40px;
    margin-top: 10px;
    border: 1px solid gainsboro;
    background-color:#f1f3f4;
  }
  .prize span{
    width: auto;
    color:black;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    margin-left: 15px;
    margin-right: 20px;
  }
  .prize-content{
    width: 288px;
    height: 287px;
    border: 1px solid gainsboro;
    border-top:none;
    overflow:hidden;
    margin:auto;
    position:relative;
  }

  .div2{
    width: 240px;
    height: 40px;
    margin-left: 30px;
  }
  .von{
    width: 220px;
    height: 40px;
    font-size: 14px;
    border-bottom: 1px darkgrey dashed;
  }
  .first{
    width: 90px;
    height: 40px;
    line-height: 40px;
    text-align:left;
    display:block;
  }
  .last{
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align:left;
    display:block;
    margin-left: 95px;
  }
  .next{
    width: 70px;
    height: 40px;
    line-height: 40px;
    text-align:left;
    display:block;
    margin-left:160px ;
  }
  @keyframes anis {
    100% {
      transform:translateY(-400px)
    }
  }img {
     position:absolute;
   }
  img {
    animation:anis 20s linear infinite;
  }
  .div2 {
    animation:anis 20s linear infinite;
  }
  .div2:hover {
    animation-play-state:paused;
  }
  .plate2-games{
    width: 1200px;
    height: 120px;
    margin-top: -20px;
    border: 1px solid gainsboro;
  }
  .games{
    width: 240px;
    height: 89px;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
  }
  .games-img{
    width: 89px;
    height: 89px;
    background-image:;
    background-size:cover;
    margin-top: 15px;
  }
  .games-int{
    width: 68px;
    height: 89px;
    display: inline-block;
    padding-left: 10px;
    margin-top: 30px;
  }
  .game-title{
    width: auto;
    height: 24px;
    font-size: 14px;
  }
  .game-kind {
    width: 68px;
    height: 17px;
    font-size: 12px;
  }
  .game-button{
    width: 68px;
    height: 22px;
    line-height: 22px;
    background-color: chocolate;
    border-radius:2px;
    font-size: 12px;
  }
</style>
