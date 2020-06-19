<template>
  <div class="header">
    <div class="nav">
      <img class="nav-logo" src="../../../assets/home-img/logo.png">
      <ul class="nav-bar-box">
        <router-link to="/home">
          <li>首页</li>
        </router-link>
        <router-link to="/datang">
          <li>大唐棋牌</li>
        </router-link>
        <router-link to="/chess">
          <li>棋牌</li>
        </router-link>
        <router-link to="/live">
          <li>真人</li>
        </router-link>
        <li><a>电子</a></li>
        <router-link to="/gaming">
          <li class="current-page">电竞</li>
        </router-link>
        <router-link to="/sports">
          <li>体育</li>
        </router-link>
        <router-link to="/lottery">
          <li>彩票</li>
        </router-link>
        <router-link to="/fishing">
          <li>扑鱼</li>
        </router-link>
        <router-link to="/discounts">
          <li><a>优惠</a></li>
        </router-link>
        <li><a>品牌风采</a></li>
        <router-link to="/gift">
          <li>积分商场</li>
        </router-link>
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
    height: 30px;
    color:black;
    margin: 0 20px 0 0;
  }
  .current-page{
    color: #c8a675;
    height: 30px;
    border-bottom:2px solid #c8a675;
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
