<template>
  <div class="center">
    <div class="tg">
      <div class="tg-icon"><img class="iconTg" src="/static/personal/phone.png" alt=""></div>
      <p class="tgContent">尊敬的澳门银河贵宾，由于线上充值会员多通道拥挤，充值成功率降低，建议贵宾使用公司线下转卡方式充值，
        笔笔入款1.5%,感谢您对我司一直以来的支持，祝您游戏愉快~</p>
    </div>
    <div class="ym">
    </div>
    <div class="capital">
      <div class="capitalName">资金记录</div>
    </div>
    <div class="capital-case">
      <div class="block left">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <el-select class="inputWidth" v-model="value" placeholder="近三天">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="inputWidth"  v-model="value" placeholder="全部">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="inputWidth"  v-model="value" placeholder="全部">
        <el-option
          v-for="item in options3"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <button class="button">重置筛选</button>
    </div>
    <div class="queries">
      <ul class="capitalBox">
        <li>订单号</li>
        <li>创建时间</li>
        <li>订单类型</li>
        <li>金额（元）</li>
        <li>订单状态</li>
        <li>备注</li>
      </ul>

    </div>
    <div class="record">
    <img class="recordImg" src="/static/personal/none.svg"/>
      <p>暂无数据</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'capital',
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        options1: [{
          value: '选项1',
          label: '今天'
        }, {
          value: '选项2',
          label: '昨天'
        }, {
          value: '选项3',
          label: '近三天'
        }, {
          value: '选项4',
          label: '近一周'
        }, {
          value: '选项5',
          label: '近一个月'
        }],
        options2: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '成功'
        }, {
          value: '选项3',
          label: '失败'
        }, {
          value: '选项4',
          label: '处理中'
        }],
        options3: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '存款'
        }, {
          value: '选项3',
          label: '提款'
        }, {
          value: '选项4',
          label: '转账'
        }],
        value: '',
        value1: '',
        value2: ''
      };
    }

  }
</script>
<style>
  .center {
    width: 1000px;
    height: 1000px;
    background: white;
    border: 1px solid #eaeaea;
  }

  .tg {
    width: 960px;
    height: 25px;
    display: flex;
    justify-content: center;
    background: #eaeaea;
    padding: 20px 20px;
  }

  .tg-icon {
    width: 30px;
    height: 30px;
    background: #c8a675;
    border-radius: 50%;
  }

  .iconTg {
    width: 20px;
    height: 20px;
    text-align: center;
    padding-top: 5px;
  }

  .tgContent {
    width: 900px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    margin-left: 20px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ym {
    width: 978px;
    height: 20px;
  }


  .capital {
    width: 998px;
    height: 50px;
  }

  .capitalName {
    height: 40px;
    background: linear-gradient(90deg, #f2f2f2, #fff);
    line-height: 40px;
    padding: 0 30px;
    width: 200px;
    text-align: left;
    padding-left: -30px;
    font-size: 15px;
    font-weight: 700;
    color: #666;
  }

  .capital-case {
    width: 939px;
    height:40px;
    margin:20px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    border-radius: 3px;
    background: #eee;
  }

  .left{
    text-align: left;
    width: 350px;
  }

  .inputWidth{
    width: 120px;
  }

  .button{
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 14px;
    padding: 10px;
    margin-left: 15px;
    margin-right: 20px;
    background: goldenrod;
  }
  .queries{
    width: 927px;
    height: 23px;
    padding:16px;
    margin:20px 20px 0 20px;
    background: #fafafa;
    border: 1px solid #e8e8e8;
    transition: background .3s ease;
  }
   .capitalBox{
     width: 893px;
     height: 23px;
     font-weight: 700;
     padding-left: 15px;
     padding-right: 15px;
     color: #909399;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
   }
  .capitalBox li{
    width: auto;
    height: 23px;
    line-height: 25px;
    text-align: center;
    font-size: 14px;
  }
  .record {
    width: 927px;
    height: 495px;
    margin:0 20px 20px  20px;
    padding:0 16px 16px 16px;
    background: #fff;
    border-left: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
  }

  .recordImg{
    width: 62px;
    height: 40px;
    margin-bottom: 15px;
    margin-top: 200px;
  }
  .record p{
    width: auto;
    height: 25px;
    text-align: center;
    font-size: 14px;
    color: gray;
  }
</style>

