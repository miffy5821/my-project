<template>
  <div class="discounts">
    <div class="discounts-banner"></div>
    <div class="discounts-box">
      <div class="discount" v-for="item of discountList" :key="item.id">
        <img class="discount-img" :src="item.imgUrl"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'discountsContent',
    data () {
      return {
        discountList: [{
          id: "0001",
          imgUrl: "/static/discounts/discounts1.jpg"
        },{
          id: "0002",
          imgUrl: "/static/discounts/discounts2.jpg"
        },{
          id: "0003",
          imgUrl: "/static/discounts/discounts3.jpg"
        },{
          id: "0004",
          imgUrl: "/static/discounts/discounts4.jpg"
        },{
          id: "0005",
          imgUrl: "/static/discounts/discounts5.jpg"
        },{
          id: "0006",
          imgUrl: "/static/discounts/discounts6.jpg"
        },{
          id: "0007",
          imgUrl: "/static/discounts/discounts7.jpg"
        },{
          id: "0008",
          imgUrl: "/static/discounts/discounts8.jpg"
        },{
          id: "0009",
          imgUrl: "/static/discounts/discounts9.jpg"
        },{
          id: "0010",
          imgUrl: "/static/discounts/discounts10.jpg"
        },{
          id: "0011",
          imgUrl: "/static/discounts/discounts11.jpg"
        },{
          id: "0012",
          imgUrl: "/static/discounts/discounts12.jpg"
        },{
          id: "0013",
          imgUrl: "/static/discounts/discounts13.jpg"
        },{
          id: "0014",
          imgUrl: "/static/discounts/discounts14.jpg"
        },{
          id: "0015",
          imgUrl: "/static/discounts/discounts15.jpg"
        },{
          id: "0016",
          imgUrl: "/static/discounts/discounts16.jpg"
        },{
          id: "0017",
          imgUrl: "/static/discounts/discounts17.jpg"
        },{
          id: "0018",
          imgUrl: "/static/discounts/discounts18.jpg"
        },{
          id: "0019",
          imgUrl: "/static/discounts/discounts19.jpg"
        },{
          id: "0020",
          imgUrl: "/static/discounts/discounts20.jpg"
        },{
          id: "0021",
          imgUrl: "/static/discounts/discounts21.jpg"
        },{
          id: "0022",
          imgUrl: "/static/discounts/discounts22.jpg"
        },{
          id: "0023",
          imgUrl: "/static/discounts/discounts23.jpg"
        },{
          id: "0024",
          imgUrl: "/static/discounts/discounts24.jpg"
        },{
          id: "0025",
          imgUrl: "/static/discounts/discounts25.jpg"
        },{
          id: "0026",
          imgUrl: "/static/discounts/discounts26.jpg"
        },{
          id: "0027",
          imgUrl: "/static/discounts/discounts27.jpg"
        },{
          id: "0028",
          imgUrl: "/static/discounts/discounts28.jpg"
        },{
          id: "0029",
          imgUrl: "/static/discounts/discounts29.jpg"
        },
        ]
      }
    }
  }
</script>
<style scoped>
  .discounts {
    width: 100%;
    background-color: #f9f9f9;
  }
  .discounts-banner{
    width: 100%;
    height: 450px;
    background: url("/static/discounts/pro_banner.jpg") center no-repeat;
  }
  .discounts-box{
    width: 1170px;
    margin-left: auto;
    margin-top: 30px;
    margin-right: auto;
    background-color: white;
      display: flex;
      flex-wrap: wrap;
    padding: 10px 0 50px 20px;
  }
  .discount{
    width: 390px;
    height: 290px;
    float: left;
  }
  .discount-img{
    width: 368px;
    height: 268px;
    margin: 22px 22px 0 0;
  }
</style>
