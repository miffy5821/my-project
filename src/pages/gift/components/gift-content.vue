<template>
  <div class="gift-content">
  <div class="content">
    <!--左边的内容-->
    <div class="content-left">
      <!--奖品公布-->
      <div class="scroll">
        <div class="redeem">兑换排行榜</div>
        <!--<div class="scroll-wrapper">-->
          <!--<ul class="gift-scroll div2">-->
            <!--<li v-for="item of 22" :key="item"><span class="giftName">【阿玛尼手提包】</span><span class="prize-winner">***dv***</span></li>-->
          <!--</ul>-->
          <!--<ul class="gift-scroll div2" >-->
            <!--<li v-for="item of 22" :key="item"><span class="giftName">【阿玛尼手提包】</span><span class="prize-winner">***dv***</span></li>-->
          <!--</ul>-->
        <!--</div>-->
        <vue-seamless-scroll :data="listData" class="seamless-warp">
          <ul class="item">
            <li v-for="item in listData">
              <span class="title" v-text="item.title"></span><span class="date" v-text="item.user"></span>
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>

      <!--人气推荐-->
      <div class="hot">
        <div class="gift-hot">人气推荐</div>
        <img class="hotImg" src="/static/gift/gift3.png"/>
        <p class="hotName">空投美女</p>
        <div class="hot-text"><span class="tex5">¥18000</span><span class="tex5">54000积分</span></div>
      </div>
    </div>
    <!--右边的内容-->
    <div class="content-right">
      <!--顶部介绍-->
      <div class="gift-herder">
        <div class="line"></div>
        <div class="gift-">热门礼品</div>
        <button class="gift-check">查看订单记录</button>
        <button class="gift-regulation">兑奖规则</button>
      </div>
      <!--奖品的展示-->
      <div class="gift">
        <div class="giftList" v-for="item of giftList" :key="item.id">
          <img class="giftImg" :src="item.imgUrl" alt="">
          <div class="giftText">
            <span class="tex1">{{item.giftName}}</span><strong class="tex2">{{item.giftIntegral}}</strong>
            <span class="tex3">{{item.giftValve}}</span><span class="tex4">立即兑换</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import vueSeamless from 'vue-seamless-scroll'
  export default {
    components: {
      vueSeamless
    },
    name: 'giftContent',
    data () {
      return {
        listData: [{
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        },{
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }, {
          'title': '【阿玛尼手提包】',
          'user': '***dv***'
        }],
        giftList: [{
          id: "0001",
          imgUrl: "/static/gift/gift1.jpg",
          giftName: "宝马5系",
          giftIntegral: "1980000积分",
          giftValve: "礼品价值：¥660000"
        },{
          id: "0002",
          imgUrl: "/static/gift/gift2.jpg",
          giftName: "欧米茄手表",
          giftIntegral: "108000积分",
          giftValve: "礼品价值：¥36000"
        },{
          id: "0003",
          imgUrl: "/static/gift/gift3.png",
          giftName: "空投美女",
          giftIntegral: "54000积分",
          giftValve: "礼品价值：¥18000"
        },{
          id: "0004",
          imgUrl: "/static/gift/gift4.jpg",
          giftName: "Apple MacBook Pro",
          giftIntegral: "36000积分",
          giftValve: "礼品价值：¥12000"
        },{
          id: "0005",
          imgUrl: "/static/gift/gift5.jpg",
          giftName: "苹果（Apple）iMac ME",
          giftIntegral: "28888积分",
          giftValve: "礼品价值：¥8288"
        },{
          id: "0006",
          imgUrl: "/static/gift/gift6.jpg",
          giftName: "iPhone 11 Pro MAX",
          giftIntegral: "32888积分",
          giftValve: "礼品价值：¥10888"
        },{
          id: "0007",
          imgUrl: "/static/gift/gift7.jpg",
          giftName: "iPad Pro",
          giftIntegral: "36888积分",
          giftValve: "礼品价值：¥10988"
        },{
          id: "0008",
          imgUrl: "/static/gift/gift8.jpg",
          giftName: "华为 Mate20 RS",
          giftIntegral: "54000积分",
          giftValve: "礼品价值：¥18000"
        },{
          id: "0009",
          imgUrl: "/static/gift/gift9.jpg",
          giftName: "联想 YOGA3 YOGA 13.3英寸",
          giftIntegral: "26666积分",
          giftValve: "礼品价值：¥7899"
        },{
          id: "0010",
          imgUrl: "/static/gift/gift10.jpg",
          giftName: "iPhone 11",
          giftIntegral: "18888积分",
          giftValve: "礼品价值：¥5999"
        },{
          id: "0011",
          imgUrl: "/static/gift/gift11.jpg",
          giftName: "小米电视 255英寸(家庭影院版)",
          giftIntegral: "13888积分",
          giftValve: "礼品价值：¥4499"
        }]
      }
    }
  }
</script>
<style>
  .gift-content{
    width: 100%;
    height: 1049px;
  }
  .content {
    width: 1010px;
    height: 1049px;
    margin: 10px auto 50px auto;
    background-color: white;
    cursor:pointer;
  }

  .content-left {
    width: 212px;
    height: 1008px;
    float: left;
  }
  .scroll {
    width: 212px;
    height: 683px;
    border:1px solid darkgrey;
  }
  .redeem{
    width: 200px;
    height: 40px;
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    line-height: 40px;
    padding-left: 12px;
    background-color:#ece9e9;
    border-bottom:1px solid darkgrey;
  }
  .item{
    width: 212px;
    overflow: hidden;
  }
  .item li{
    width: 210px;
    height:37px;
    line-height: 37px;
    text-align: left;
  }
  .title{
    width: auto;
    height:37px;
    line-height: 37px;
    text-align: left;
  }
  .date{
    height:37px;
    line-height: 37px;
    float: right;
    margin-right:8px;
  }
  @keyframes anis {
    100% {
      transform: translateY(-100%)
    }
  }
  .seamless-warp {
    height: calc(100% - 41px);
    overflow: hidden;
  }
  /*.scroll-wrapper:hover .div2 {*/
    /*animation-play-state:paused;*/
  /*}*/
  /*.div2 {*/
    /*animation:anis 30s linear infinite;*/
  /*}*/
  .hot {
    width: 212px;
    height: 313px;
    margin-top: 10px;
    border:1px solid darkgrey;
  }
  .gift-hot{
    width: 200px;
    height: 40px;
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    line-height: 40px;
    padding-left: 12px;
    background-color:#ece9e9;
    border-bottom:1px solid darkgrey;
  }
  .hotImg{
    width: 200px;
    height: 200px;
    padding: 5px;
  }
  .hotName{
    width: 200px;
    height: 20px;
    font-size: 14px;
    color: darkgrey;
    line-height: 20px;
    text-align: center;
    margin-top: 7px;
  }
  .hot-text{
    width: 200px;
    margin-top: 5px;
    height: 20px;
  }
  .tex5{
    width: auto;
    height: 20px;
    color: #c8a675;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    margin-left: 20px;
  }
  .content-right{
    width: 782px;
    height: 1049px;
    margin-left:5px;
    float: right;
  }
  .gift-herder{
    width: 780px;
    height: 41px;
    display: flex;
  }
  .line{
    width: 2px;
    height: 41px;
    background-color: saddlebrown;
  }
  .gift-{
    width: 492px;
    height: 39px;
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    line-height: 39px;
    padding-left: 12px;
    background-color:#ece9e9;
    border:1px solid darkgrey;
  }
  .gift-check{
    width: 115px;
    height: 35px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background: #6c6c6c;
    border-radius: 5px;
    padding: 5px;
    margin-top: 2px;
    margin-left: 18px;
  }
  .gift-regulation{
    width:93px;
    height: 35px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background: #6c6c6c;
    border-radius: 5px;
    padding: 5px;
    margin-top: 2px;
    margin-left: 32px;
  }
  .gift{
    width:780px;
    margin-top: 10px;
    height: 980px;
    overflow: hidden;
  }
  .giftList{
    width:238px;
    height:312px;
    float: left;
    margin: 0 12px 18px 8px;
    border:1px solid darkgrey;
  }
  .giftList:hover{
    border:1px solid goldenrod;
  }
  .giftImg{
    width:238px;
    height:240px;
  }
  .giftText{
    width:220px;
    margin-top: 12px;
    height:50px;
  }
  .tex1{
    color: #666666;
    width: 100px;
    height: 25px;
    font-size: 14px;
    text-align: left;
    padding-left: 10px;
    line-height: 25px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
  }
  .tex2{
    color: #c8a675;
    width: 90px;
    height: 25px;
    font-size: 14px;
    text-align: right;
    line-height: 25px;
    font-weight: bold;
    float: right;
    vertical-align: baseline;
     }
  .tex3{
    color: #c8a675;
    display: inline-block;
    font-weight: bold;
    font-size: 14px;
    padding-left: 10px;
    height: 23px;
    line-height: 23px;
    width: 133px;
  }
  .tex4{
    display: inline-block;
    width: 77px;
    height: 23px;
    background: #c8a675;
    color: #ffffff;
    text-align: center;
    line-height: 23px;
    font-size: 12px;
    border-radius: 30px;
    float: right;
  }
  .tex4:active{
    transition: all 0.3s;
  }
</style>
