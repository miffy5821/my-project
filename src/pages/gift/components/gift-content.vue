<template>
  <div class="gift-content">
  <div class="content">
      <div class="banner">
          <img class="banner-img" src="" alt="">
      </div>
     <div class="integral">
          <div class="title">
              <div class="login">
                  <span class="login-text1">我的积分：</span><span class="login-text2">请登录</span>
              </div>
              <div class="blank"></div>
              <div class="title-button">
                  <div class="button">
                      <img class="button-img" src="/static/gift/icon1.png" />
                      <span class="button-text">订单记录</span>
                  </div>
                  <div class="button">
                      <img class="button-img" src="/static/gift/icon2.png" />
                      <span class="button-text">兑换规则</span>
                  </div>
              </div>
          </div>
         <div class="boutique">
             <div class="boutique-title">
                 <div class="line"></div>
                 <div class="boutique-text1">精品商店</div>
                 <div class="boutique-text2">/SELECTED COMMODITIES</div>
             </div>
             <div class="boutique-swiper">
                 <div class="boutique-img">
                     <img class="jingpin-img" src="" alt="">
                     <div class="hover-text">
                         <div class="product">
                             <p>空投美女</p>
                             <p>礼品价值：<span>18000</span></p>
                             <p>兑换积分：<span>54000积分</span></p>
                         </div>
                         <div class="boutique-button">
                             <button>立即兑换</button>
                         </div>
                     </div>
                 </div>
                 <div class="redeem">兑换热榜清单</div>

                 <vue-seamless-scroll :data="listData" class="seamless-warp">
                 <ul class="item">
                 <li v-for="item in listData">
                 <span class="title" v-text="item.title"></span><span class="date" v-text="item.user"></span>
                 </li>
                 </ul>
                 </vue-seamless-scroll>
                 </div>
             </div>
         </div>
     </div>



    <!--&lt;!&ndash;左边的内容&ndash;&gt;-->
    <!--<div class="content-left">-->
      <!--&lt;!&ndash;奖品公布&ndash;&gt;-->
      <!--<div class="scroll">-->
        <!--<div class="redeem">兑换排行榜</div>-->
       <!---->
        <!--<vue-seamless-scroll :data="listData" class="seamless-warp">-->
          <!--<ul class="item">-->
            <!--<li v-for="item in listData">-->
              <!--<span class="title" v-text="item.title"></span><span class="date" v-text="item.user"></span>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</vue-seamless-scroll>-->
      <!--</div>-->

      <!--&lt;!&ndash;人气推荐&ndash;&gt;-->
      <!--<div class="hot">-->
        <!--<div class="gift-hot">人气推荐</div>-->
        <!--<img class="hotImg" src="/static/gift/gift3.png"/>-->
        <!--<p class="hotName">空投美女</p>-->
        <!--<div class="hot-text"><span class="tex5">¥18000</span><span class="tex5">54000积分</span></div>-->
      <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash;右边的内容&ndash;&gt;-->
    <!--<div class="content-right">-->
      <!--&lt;!&ndash;顶部介绍&ndash;&gt;-->
      <!--<div class="gift-herder">-->
        <!--<div class="line"></div>-->
        <!--<div class="gift-">热门礼品</div>-->
        <!--<button class="gift-check">查看订单记录</button>-->
        <!--<button class="gift-regulation">兑奖规则</button>-->
      <!--</div>-->
      <!--&lt;!&ndash;奖品的展示&ndash;&gt;-->
      <!--<div class="gift">-->
        <!--<div class="giftList" v-for="(item,index) in giftList" :key="item.id">-->
          <!--<img class="giftImg" :src="item.icon" alt="">-->
          <!--<div class="giftText">-->
              <!--<p class="gitfName"> {{item.pluname}}</p>-->
              <!--<div class="gift-ms"><span class="tex1">礼品价值：</span><strong class="tex2">{{item.price}}</strong></div>-->
              <!--<div class="gift-ms"><span class="tex1">积分兑换：</span><strong class="tex2">{{item.cprice}}</strong><span class="tex3">立即兑换</span></div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
  </div>
</template>
<script>
  import vueSeamless from 'vue-seamless-scroll'
  export default {
    components: {
      vueSeamless
    },
    data () {
      return {
          giftList: [],
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
      }
    },
      methods: {
          gift(index) {
              this.axios.get('api/unauthor/mail/goods/ranks', {params: {terminal: 0}})
                  .then((response) => {
                      console.log(response);
                      const resbody = response.data;
                      if (resbody.status === 10000) {
                          this.giftList = resbody.data;
                          console.log(this.giftList);
                      } else  {
                          return ;
                      }
                  }).catch(error => {
                  alert(error);
              })
          },
      },
      mounted() {
          this.gift();
      },
  }
</script>
<style>
  .gift-content{
    width: 100%;
  }
  .content {
    width: 100%;
    background-color: white;
    cursor:pointer;
  }
  .banner {
      width: 100%;
      height: 600px;
      background: antiquewhite;
  }
  .banner-img{
      width: 100%;
      height: 100%;
  }
  .integral{
      width: 1200px;
      height: 1500px;
      padding: 15px 0;
      margin: 0 auto;
      background: aquamarine;
  }
  .title{
      width: 1163px;
      height: 60px;
      padding: 0 15px 0 22px;
      border-bottom: 2px solid  #757575;
      background: azure;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
  }
  .login{
      width: 168px;
      height: 48px;
  }
  .login-text1{
      display: inline-block;
      font-family: MicrosoftYaHei;
      font-size: 20px;
      font-weight: 500;
      color: #404040;
  }
  .login-text2{
      font-size: 20px;
      color: #c8a675;

  }
  .blank{
      width: 735px;
      height: 48px;
  }
  .title-button{
      width: 260px;
      height: 48px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  }
  .button{
      width: 100px;
      height: 25px;
      padding: 0 10px 7px 10px;
      border-radius: 30px;
      border: 2px solid #757575;
  }
  .button-img{
      width: 25px;
      height: 25px;
  }
  .button-text{
      font-size: 16px;
      font-weight: 500;
      color: #777477;
  }
  .boutique{
      width: 1200px;
      height: 566px;
      margin-top: 40px;
      background: cadetblue;
  }
  .boutique-title{
      width: 1163px;
      height: 40px;
      padding: 0 15px 0 22px;
      display: flex;
      flex-wrap: wrap;
  }
  .boutique-text1{
      font-size: 32px;
      display: inline-block;
      color: #404040;
      font-weight: 500;
      text-align: center;
      margin-left: 8px;
  }
  .boutique-text2{
      font-size: 18px;
      color: #757575;
      text-align: center;
      margin-left: 10px;
  }
  .boutique-swiper{
      width: 1200px;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content:space-between;
  }
  .boutique-img{
      width: 870px;
      height: 500px;
  }
  .jingpin-img{
      width: 870px;
      height: 500px;
  }
  .hover-text{
      width: 870px;
      height: 120px;
      background: crimson;
      position: relative;
      top:-115px;
      z-index: 999;

  }
  .product{
      width: 250px;
      height: 90px;
      display: flex;
      flex-wrap: wrap;
      align-content:space-between;
      padding: 15px 0 15px 20px;
  }
  .product p{
      width: 250px;
      height: 20px;
      text-align: left;
      font-size: 24px;
  }
  .boutique-button{
      width: 120px;
      height: 120px;
  }
  .boutique-button button{

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
    border: none;
    margin-top: 2px;
    margin-left: 18px;
  }
  .gift-regulation{
    width:93px;
    height: 35px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    border: none;
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
    height:320px;
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
    width:280px;
    margin-top: 8px;
    height:50px;
  }
  .gitfName{
      font-size: 13px;
      text-align: left;
      padding-left: 20px;
  }
  .gift-ms{
      width: 240px;
      height: 20px;
      display: flex;
      margin-top: 5px;
      flex-wrap: wrap;
      font-weight: bold;
  }
  .tex1{
    color: #666666;
    width: 60px;
    height: 20px;
    font-size: 13px;
    text-align: left;
    padding-left: 20px;
    line-height: 20px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
  }
  .tex2{
    color: #c8a675;
    width:40px;
    height: 25px;
    font-size: 14px;
    text-align: right;
    line-height: 25px;
    font-weight: bold;
    padding-left: 20px;
    vertical-align: baseline;
     }
  .tex3{
    display: inline-block;
    width: 50px;
    height:15px;
    background: #c8a675;
    color: #ffffff;
    text-align: center;
    line-height: 15px;
      padding: 5px;
    font-size: 12px;
    margin-left: 25px;
    border-radius: 30px;
    float: right;
  }
  .tex3:active{
    transition: all 0.3s;
  }
</style>
