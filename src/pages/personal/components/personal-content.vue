<template>
  <div class="personal">
   <div class="personalBox">
     <div class="left">
       <div class="leftLogo"></div>
       <div class="personal-list"></div>
       <div class="app-code">
         <img class="code" src="">
       </div>
     </div>
     <div class="center">
       <div class="tg">
         <div class="tg-icon"><img class="iconTg" src="" alt=""></div>
         <p class="tgContent">尊敬的澳门银河贵宾，由于线上充值会员多通道拥挤，充值成功率降低，建议贵宾使用公司线下转卡方式充值，
           笔笔入款1.5%,感谢您对我司一直以来的支持，祝您游戏愉快~</p>
       </div>
       <div class="ym">
         <h1 class="ymContent">请牢记我们官方唯一的域名导航 www.888y.com</h1>
       </div>
       <div class="switch">
         <button class="switchButton">切换至手动转账</button>
       </div>
       <div class="asset">
        <div class="assetName">我的资产</div>
       </div>
       <div class="asset-case">
         <div class="asset-left">
           <h1>0.00</h1>
           <div>
             <button>提款</button>
             <button>存款</button>
           </div>
           <div ></div>
         </div>
         <div class="asset-right">
           <div>
             <button>刷新</button>
           </div>
           <div>
             <span>中心钱包</span>
             <span>￥0.00</span>
             <span>一键回收</span>
           </div>
           <div>
             <span>积分总额</span>
             <span>0</span>
           </div>
         </div>
       </div>
       <div class="assetDistribute">
         <div class="DistributeName">财产分布</div>
       </div>
       <div class="Distribute">
         <div class="Distribute-ctn"></div>
       </div>
     </div>
   </div>
  </div>
</template>
<script>
  export default {
    name: 'personalContent'
  }
</script>
<style >
  .personal{
    width: 100%;
    height: 1500px;
    display: flex;
    background-color: #eaeaea;
  }
  .personalBox{
    width: 1200px;
    height: 1150px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    border: 1px solid black;
  }
.left{
  width: 196px;
  height: 100%;
  border: 1px solid black;
}
.leftLogo{
  width: 196px;
  height: 160px;
  border-bottom: 1px solid black ;
  margin: 20px 0;
}
.personal-list{
  width: 196px;
  height: 427px;
  padding: 0 0 20px;
  border-bottom: 1px solid black ;
}
.app-code{
  width: 196px;
  height: 234px;
  padding: 20px 0;
}
.code{
  width: 180px;
  height: 180px;
}
  .center{
    width: 1000px;
    height: 1000px;
    border: 1px solid black;
  }
</style>
