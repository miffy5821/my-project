<template>
  <div class="fishing">
    <div class="fishing-box" v-for="item of fishList" :key="item.id">
      <div class="fish"><img  class="fish-img" :src="item.imgUrl"/> </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'fishingContent',
  data() {
    return {
      fishList:[{
        id: '0001',
        imgUrl: '/static/fishing/fish_ag1.png'
      },{
        id: '0002',
        imgUrl: '/static/fishing/fish_gg2.png'
      },{
        id: '0003',
        imgUrl: '/static/fishing/fish_bgby3.png'
      },{
        id: '0004',
        imgUrl: '/static/fishing/fish_bgby4.png'
      },{
        id: '0005',
        imgUrl: '/static/fishing/fish_hjyc5.png'
      },{
        id: '0006',
        imgUrl: '/static/fishing/fish_hjyc6.png'
      },{
        id: '0007',
        imgUrl: '/static/fishing/fish_ypby7.png'
      },{
        id: '0008',
        imgUrl: '/static/fishing/fish_pt8.png'
      },{
        id: '0009',
        imgUrl: '/static/fishing/fish_lwby9.png'
      },{
        id: '0010',
        imgUrl: '/static/fishing/fish_lwby10.png'
      },{
        id: '0011',
        imgUrl: '/static/fishing/fish_csby11.png'
      },{
        id: '0012',
        imgUrl: '/static/fishing/fish_wlby12.png'
      },{
        id: '0013',
        imgUrl: '/static/fishing/fish_bydf13.png'
      },{
        id: '0014',
        imgUrl: '/static/fishing/fish_bydf14.png'
      },{
        id: '0015',
        imgUrl: '/static/fishing/fish_ly15.png'
      },{
        id: '0016',
        imgUrl: '/static/fishing/fish-lw16.jpg'
      }]
    }
  }
}
</script>
<style scoped>
  .fishing{
    width: 100%;
    height: 1420px;
    background: url("/static/fishing/fish_banner.jpg") no-repeat center top;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .fishing-box{
    width: 1050px;
    padding: 0;
    position: relative;
    top:300px;
    overflow: visible;
    margin-right: auto;
    margin-left: auto;
  }
  .fish {
    width: 200px;
    height: 217px;
    float: left;
    margin: 30px;
  }
  .fish-img{
    width: 200px;
    height: 217px;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
</style>
