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
     <div class="center"></div>
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
