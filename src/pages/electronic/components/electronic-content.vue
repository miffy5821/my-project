<template>
  <div class="electronic">
    <div class="banner"></div>
    <div class=' content'>
      <div class="electronic-">
        <div class="electronic-nav">
          <ul class="electronic-kind">
            <li v-for="item of navList"
                :key="item.id"
                :class="{'active':item.id === currentGameClass}"
                @click="select(item.id)">
              {{item.navName}}
            </li>

          </ul>
        </div>
        <div class="ele-search">
          <button class="hot">热门游戏</button>
          <input class=" search" placeholder="请输入游戏名称"/>
          <div class="icon"></div>
        </div>
        <div class="games">
          <div class="games-">
            <img class="games-img" src="/static/electronic/xmg1.png" alt="">
            <div class="game-label">新MG</div>
            <p class="games-name">9个烈焰面具</p>
            <div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'electronicContent',
    data() {
      return {
        navList: [{
          id: '0001',
          navName: '新MG电子'
        }, {
          id: '0002',
          navName: 'PP电子'
        }, {
          id: '0003',
          navName: 'SW电子'
        }, {
          id: '0004',
          navName: 'PT电子'
        }, {
          id: '0005',
          navName: 'HABA电子'
        }, {
          id: '0006',
          navName: 'BBIN电子'
        }, {
          id: '0007',
          navName: 'TGB电子'
        }, {
          id: '0008',
          navName: 'YOPLAY电子'
        }, {
          id: '0009',
          navName: 'PS电子'
        }, {
          id: '0010',
          navName: 'JDB电子'
        }, {
          id: '0011',
          navName: 'CQ9电子'
        }, {
          id: '0012',
          navName: 'IG电子'
        }],
        currentGameClass: '0001'
      }
    },
    methods: {
      // changeActive($event) {
      //   $event.currentTarget.className = "active";
      // },
      // removeActive($event) {
      //   $event.currentTarget.className = "";
      // },
      select(code) {
        this.currentGameClass = code;
      }
    },
  }
</script>
<style scoped>
  .electronic {
    width: 100%;
    height: 1680px;
    background-color: #f9f9f9;
  }

  .banner {
    width: 100%;
    height: 450px;
    background-image: url("/static/electronic/solts_banner.jpg");
    background-size: cover;
  }

  .content {
    width: 100%;
    height: 1000px;
    border: 1px solid #eaeaea;
  }

  .electronic- {
    width: 1200px;
    height: 946px;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #eaeaea;
  }

  .electronic-nav {
    width: 1200px;
    height: 80px;
    border-bottom: 1px solid #eaeaea;
  }

  .electronic-kind {
    width: 100%;
    height: 80px;
  }

  .electronic-kind li {
    float: left;
    width: 92px;
    line-height: 80px;
    text-align: center;
    position: relative;
    height: 80px;
    font-size: 14px;
    list-style: none;
    display: inline-block;
  }
  .electronic-kind li:hover{
    color: #c8a675;
    border-bottom: 1px solid #c8a675;
  }
  .active {
    color: #c8a675;
    border-bottom: 1px solid #c8a675;
  }

  .ele-search {
    width: 1200px;
    height: 60px;
    margin-top: 50px;
  }

  .hot {
    width: 98px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    margin-left: 10px;
    color: white;
    font-size: 13px;
    float: left;
    background-color: orange;
    border: none;
  }

  .search {
    width: 144px;
    height: 22px;
    background-color: #FFFFFF;
    font-size: 14px;
    color: #dddee1;
    border: 1px solid #eaeaea;
    float: right;
    margin-right: 42px;
    padding: 4px 7px 4px 12px;
  }

  .icon {
    width: 37px;
    height: 32px;
    background-color: orange;
    display: inline-block;
    float: right;
    padding-left: 5px;
    background-image: url("/static/electronic/search.png");
    text-align: center;
    margin-right: -207px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .games {
    width: 1150px;
    height: 646px;
    padding: 0 25px 0 25px;
  }

  .games- {
    width: 170px;
    height: 190px;
    float: left;
    position: relative;
    cursor: pointer;
  }

  .games-img {
    width: 168px;
    height: 168px;
    border: 1px solid #eaeaea;
  }

  .game-label {
    width: 56px;
    height: 26px;
    position: relative;
    top: -172px;
    z-index: 11;
    color: white;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    background-color: #fd600e;
  }

  .games-name {
    width: 170px;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    text-align: center;
    margin-top: -15px;
  }
</style>
