<template>
  <div class="header">
    <div class="nav">
        <img class="nav-logo" src="../../../assets/home-img/logo.png">
          <ul class="nav-bar-box">
            <router-link to="/">
            <li  class="current-page">首页</li>
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
            <router-link to="/electronic">
            <li>电子</li>
            </router-link>
            <router-link to="/gaming">
            <li>电竞</li>
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
          <span class="left">
             <router-link to="/register">
            注册
            </router-link>
          </span>
          <span class="center">
              <router-link to="/login">
                登录
              </router-link>
          </span>
          <span class="right">
            <router-link to="/personal">
            试玩
          </router-link></span>
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
    height: 25px;
    margin-top: 20px;
    cursor: pointer;
    background-color:#c8a675;
    border-radius: 30px;
  }
  .navLogin span{
    margin: 5px;
  }
  .navLogin a{
    text-decoration: none;
  }
  .left{
    width: 48px;
    height: 25px;
    font-size: 14px;
    margin: 5px;
    margin-left: -10px;
    line-height: 23px;
    text-align: left;
    color: white;
  }
  .left a{
    color: white;
    text-decoration: none;
  }
  .right{
    width: 48px;
    height: 25px;
    font-size: 14px;
    margin: 5px;
    line-height: 23px;
    color: white;
    margin-right: -10px;
    text-align: right;
  }
  .right a{
    color: white;
    text-decoration: none;
  }
  .center{
    width: 58px;
    height: 25px;
    font-size: 14px;
    padding:2px;
    border-radius: 30px;
    text-align: center;
    background: white;
    color:#c8a675 ;
  }


</style>
