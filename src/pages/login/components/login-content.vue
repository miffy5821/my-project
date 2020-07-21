<template>
  <div class="login">
    <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
    <div class="login-cover "></div>
    <!-- transition 这里可以加一些简单的动画效果 -->
    <transition name="drop">
      <!--style 通过props 控制内容的样式  -->
      <div class="login-content" >
        <div class="login_head">
          <!--弹窗头部 title-->
          <slot name="header">提示信息</slot>
        </div>
        <div class="login_main">
          <!--弹窗的内容-->
          <slot name="main">弹窗内容</slot>
        </div>
        <!--弹窗关闭按钮-->
        <div  class="foot_close">
          <div class="close_img"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'LoginContent'
  }

</script>
<style  scoped>
  /* 最外层设置position定位*/
  .login {
    width: 100%;
    height: 100%;
    position: relative;
    color: #2e2c2d;
    background-color: darkgray;
    font-size: 16px;
  }
  /*// 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩*/
  .login-cover {
    background: rgba(0,0,0, 0.8);
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  /*// 内容层 z-index要比遮罩大，否则会被遮盖，*/
  .login-content{
    position: fixed;
    top: 35%;
    // 移动端使用felx布局
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 300;
  }
</style>
