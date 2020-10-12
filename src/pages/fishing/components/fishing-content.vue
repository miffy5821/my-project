<template>
  <div class="fishing">
    <div class="fishing-box" >
      <!--<div class="fish">-->
          <img v-for="item of fishList" :key="item.id" class="fish-img" :src="item.imgs[0].img"/>
      <!--</div>-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'fishingContent',
  data() {
    return {
      fishList:[]
    }
  },
    methods:{
       navFish() {
           this.axios.get('api/menu', {
               params: {id: 0, terminal: 0}
           })
               .then((response) => {
                   const data = response.data;
                   if (data.status === 10000) {

                       const fish = response.data.data[7].subMenus;// 储存所有真人游戏数据
                       this.fishList = fish;
                       console.log('fishList',this.fishList);
                   }
               })
               .catch(function (error) {
                   console.log(error);
               });
       }
    },
    mounted() {
      this.navFish()
    }
}
</script>
<style scoped>
  .fishing{
    width: 100%;
    background: url("/static/fishing/fish_banner.jpg") no-repeat center top;
    overflow: hidden;
      transition-property: all;
      transition-duration: 0.5s;
      transition-timing-function: ease;
      transition-delay: 0s;
      /*!*display: flex;*!*/
      /*flex-wrap: wrap;*/
      /*align-content:center;*/
  }
  .fishing-box{
    width: 1050px;
    margin-top: 380px;
    /*overflow: visible;*/
    margin-right: auto;
    margin-left: auto;
    opacity: .8;
      transition-property: all;
      transition-duration: 0.5s;
      transition-timing-function: ease;
      transition-delay: 0s;
    display: flex;
    flex-wrap: wrap;
  }
  .fish {
    width: 200px;
    height: 217px;
    margin: 30px;
  }
  .fish-img{
    width: 200px;
    height: 217px;
    margin: 30px;
    /*opacity: .8;*/
      /*transition-property: all;*/
      /*transition-duration: 0.5s;*/
      /*transition-timing-function: ease;*/
      /*transition-delay: 0s;*/
    vertical-align: baseline;
    animation: 4s linear infinite fishAnimate;
  }
  .fish-img:hover{
    opacity: 1;
    animation-play-state: paused;
}
  @keyframes fishAnimate{
       50%{transform:translateY(-20%);}
       100%{transform:translateZ(0);}
   }
</style>
