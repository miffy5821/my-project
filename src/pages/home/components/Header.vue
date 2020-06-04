<template>
  <div class="header">
    <div class="nav">
        <img class="nav-logo" src="../../../assets/home-img/logo.png">
          <ul class="nav-bar-box">
            <li><a>首页</a></li>
            <li><a>大唐棋牌</a></li>
            <li><a>棋牌</a></li>
            <li><a>真人</a></li>
            <li><a>电子</a></li>
            <li><a>电竞</a></li>
            <li><a>体育</a></li>
            <li><a>彩票</a></li>
            <li><a>扑鱼</a></li>
            <li><a>优惠</a></li>
            <li><a>品牌风采</a></li>
            <li><a>积分商场</a></li>
          </ul>
        <div class="navLogin">
          <span>注册</span><span>登录</span><span>试玩</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeHeader'
}
</script>

<style scoped>
  .header{
    width: 100%;
    height: 78px;
  }
  .nav{
    width: 1200px;
    height: 78px;
    margin: 0 auto;
    display: flex;
  }
  .nav-logo{
    width: 232px;
    height: 65px;
    margin-left: 10px;
  }
  .nav-bar-box{
    width: 808px;
    height: 78px;
    list-style: none;
    margin-top: 25px;
  }
  .nav-bar-box li{
    display: inline-block;
    width: auto;
    height: 78px;
    margin: 0 20px 0 0;
  }
  .navLogin{
    width: 148px;
    height: 23px;
    margin-top: 20px;
    background-color: orange;
    border: 1px solid black;
    border-radius: 30px;
  }


</style>
