<template>
  <div class="electronic">
    <div class="banner"></div>
    <div class="content">
      <div class="electronic-">
        <div class="electronic-nav">
          <ul class="electronic-kind">
            <li
              v-for="(item) of navList"
              :key="item.key"
              :class="{'active':item.key === currentGameClass}"
              @click="select(item.key)"
            >{{item.name}}</li>
          </ul>
        </div>
        <div class="ele-search" v-if="currentGameClass == 'PT'">
          <button
            v-for="item in subGameTitle"
            :key="item.key"
            @click="subSelect(item)"
            class="submenu hot"
          >{{item}}</button>

          <input class="search" placeholder="请输入游戏名称" />
          <div class="icon"></div>
        </div>
        <div class="games">
          <div class="games-" v-for="item of currentPageData" :key="item.id">
            <img class="games-img" :src="item.url" alt />
            <div class="game-label">新MG</div>
            <p class="games-name">{{item.gamename }}</p>
            <div></div>
          </div>
        </div>
        <div class="page">
          <div class="turn-page">
            <button class="pev" @click="pages(false)">上一页</button>
            <span class="nowPage">{{currentPage}}</span>/
            <span class="total">{{pageCount}}</span>
            <button class="next" @click="pages(true)" >下一页</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "electronicContent",
  data() {
    return {
      gameList: [], //所有电子游戏数据
      navList: [], // 一级目录
      currentGameClass: "PT", // 当前一级游戏
      MGData: [],
      subGameTitle: [], // 二级目录
      currentData: [],
      currentPage: 1,
      pageSize: 24,
      currentPageData:[] ,// 当前页数据
      pageCount:0
    };
  },
  methods: {
    /**
     * 一级目录选择时触发
     * key 一级游戏的属性名 对应游戏类型
     */
    select(key) {
      this.currentPage = 1;
      this.currentGameClass = key; // 记录当前点击的一级目录游戏
      if (key === "PT") {
        let ptData = this.gameList["PT"]; // 获取pt 的数据
        this.subGameTitle = Object.keys(ptData); // 获取pt 子分类的属性名
        this.subSelect(this.subGameTitle[0]);
        return;
      }
      this.currentData = this.gameList[key];
      this.slicePage();

    },
    subSelect(key) {
      this.currentPage = 1;
      this.currentData = this.gameList[this.currentGameClass][key];
      this.slicePage();
    },
    pages(isNext) {
      this.pageCount = Math.ceil(this.currentData.length / this.pageSize);
      if(isNext){
        if(this.currentPage >= this.pageCount) return;
        this.currentPage+=1;

      }else{
        if(this.currentPage <=1) return;
        this.currentPage -=1;
      }
      this.slicePage();

    },
    slicePage(){
      this.pageCount = Math.ceil(this.currentData.length / this.pageSize);
      const start = (this.currentPage -1) * this.pageSize;
      const end = start + this.pageSize;

      this.currentPageData = this.currentData.slice(start,end);
    }
  },
  mounted() {
    this.axios
      .get("api//unauthor/sys/menu", {
          params: {id: 0, terminal: 0}
      })
      .then(resp => {
        console.log(resp);
        this.gameList = resp.data.subMenus; // 储存所有电子游戏数据
        const games = Object.keys(resp.data.subMenus); // 获取一级目录游戏
        // const data = games.map(item => {
        //   // 改变数组的么一个元素，拼接name
        //   return {
        //     key: item,
        //     name: item + "电子"
        //   };
        // });
        //
        // this.navList = data; // 赋值一级游戏
        // console.log("games", data);

        this.select(games[0]);
        // this.currenPageData = this.currentData.slice(0,this.pageSize);
        this.slicePage();

      })
      .catch(error => {
        this.$notify.error({
          title: "提示",
          message: error
        });
      });
  }
};
</script>
<style scoped>
.electronic {
  width: 100%;
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
  border: 1px solid #eaeaea;
}

.electronic- {
  width: 1200px;
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

  width: 92px;
  line-height: 80px;
  text-align: center;
  position: relative;
  height: 80px;
  font-size: 14px;
  list-style: none;
  display: inline-block;
}
.electronic-kind li:hover {
  color: #c8a675;
  border-bottom: 1px solid #c8a675;
}
.active {
  color: #c8a675;
  border-bottom: 1px solid #c8a675;
}

.ele-search {
  width: 1200px;
  height: 36px;
  margin-top: 50px;
  display: flex;
  margin-bottom: 50px;
}

.submenu {
  width: 75px;
  height: 36px;
  line-height: 16px;
  text-align: center;
  color: white;
  font-size: 12px;
  margin-left: 10px;
  background: silver;
  border: none;
}

.hot {
  background-color: orange;
  border: none;
}

.search {
  width: 144px;
  height: 22px;
  background-color: #ffffff;
  font-size: 14px;
  color: #dddee1;
  border: 1px solid #eaeaea;
  position: relative;
  left: 50px;
  padding: 4px 7px 4px 12px;
}

.icon {
  width: 37px;
  height: 32px;
  background-color: orange;
  display: inline-block;
  padding-left: 5px;
  background-image: url(/static/electronic/search.png);
  background-position: 50%;
  text-align: center;
  position: relative;
  left: 58px;
  background-size: contain;
  background-repeat: no-repeat;
}

.games {
  width: 1150px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  padding: 0 25px 0 25px;
}

.games- {
  width: 170px;
  height: 190px;
  margin-bottom: 20px;
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
.page {
  width: 1200px;
  height: 50px;
  margin-top: 30px;
}
.turn-page {
  width: 300px;
  height: 50px;
  margin: 0 auto;
}
.pev {
  width: 80px;
  height: 26px;
  line-height: 16px;
  text-align: center;
  color: white;
  font-size: 14px;
  margin-right: 10px;
  background: chocolate;
  border: none;
}
.nowPage {
  width: 20px;
  height: 10px;
  line-height: 10px;
  text-align: center;
  font-size: 14px;
  color: darkgray;
}
.total {
  width: 20px;
  height: 10px;
  line-height: 10px;
  text-align: center;
  font-size: 14px;
  color: darkgray;
}
.next {
  width: 80px;
  height: 26px;
  line-height: 16px;
  text-align: center;
  color: white;
  font-size: 14px;
  margin-left: 10px;
  background: chocolate;
  border: none;
}
</style>
