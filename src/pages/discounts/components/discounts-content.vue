<template>
  <div class="discounts">
    <div class="discounts-banner"></div>
    <div class="discounts-box">
      <div class="discount" @click="jump(item)" v-for="item of discountList" :key="item.id">
<!--          <router-link ：to='#'> <img class="discount-img" :src="item.bigImg"/></router-link>-->
          <img class="discount-img" :src="item.bigImg"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'discountsContent',
    data () {
      return {
        discountList: []
      }
    },
      methods: {
          navDiscounts() {
              this.axios.get('/api/config', {
                  params: {id: 0, terminal: 0}
              })
                  .then((response) => {
                      const data = response.data;
                      if (data.status === 10000) {

                          const discounts = response.data.data[1].configs;// 储存所有优惠数据
                          this.discountList = discounts;
                          console.log('discountList',this.discountList);
                      }
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
          },
          jump(item){
              console.log('item',item);
              this.$router.push({ path: '/discountsDetail', query: { item }});
          }
      },
      mounted() {
        this.navDiscounts();
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
