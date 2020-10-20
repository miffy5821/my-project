<template>
    <div class="orderRecord">
        <div class="banner"></div>
        <div class="content">
            <div class="order">订单记录</div>
            <div class="idjh">
                <div class="myIntegral">我的积分：<span>0</span></div>
                <div class="times">
                    <div class="times-text">起止时间：</div>
                    <div class="time-select">
                        <el-date-picker
                            v-model="value1"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <div class="check-btn"> 查询</div>
            </div>
            <div class="orderRecord-title">
                <table>
                    <thead>
                    <tr>
                        <th>商品名称</th>
                        <th>兑换数量</th>
                        <th>生成订单时间</th>
                        <th>收货人手机号</th>
                        <th>收货人姓名</th>
                        <th>发货状态</th>
                        <th>审核</th>
                        <th>备注</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
<!--                       <div class="divImg">-->
                           <img class="imgs" src="">
<!--                       </div>-->
                        <p class="text">暂无数据</p>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'orderRecord'
    }
</script>

<style scoped>
    .orderRecord {
        width: 100%;
        height: 1200px;
        background: #fff;
        border: 1px solid rebeccapurple;
    }

    .banner {
        background: url(//image.beike188.com/YHHB/images/jfsc/banner01.jpg) center no-repeat;
        min-width: 1200px;
        height: 600px;
    }

    .content {
        width: 1200px;
        margin: 30px auto 0;
        border: 1px solid #e8e8e8;
        background: #fff;
        padding-bottom: 10px;
    }

    .order {
        height: 60px;
        width: 1180px;
        line-height: 60px;
        text-align: left;
        padding-left: 20px;
        color: #666;
        font-size: 22px;
        background: #e8e8e8;
        border-bottom: 1px solid #eaeaea;
    }

    .idjh {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 60px;
        height: 70px;
        margin: 20px;
        color: #666;
        background: #e8e8e8;
        border-bottom: 1px solid #eaeaea;
    }

    .myIntegral {
        font-size: 20px;
    }

    .myIntegral span {
        font-size: 30px;
        color: goldenrod;
    }

    .times {
        display: flex;
        height: 70px;
        line-height: 70px;
        width: 550px;
        margin-left: 250px;
    }

    .times-text {
        width: 120px;
        height: 70px;
        line-height: 70px;
    }

    .time-select {
        width: 400px;
        height: 60px;
        line-height: 60px;
    }
    .check-btn{
        padding: 0 45px;
        background: #d8b36a;
        color: #fff;
        line-height: 35px;
        border-color: #d8b36a;
        border-radius: 17px;
    }
    .orderRecord-title table {
        width: 1158px;
        height: 220px;
        margin: 0 auto;
        border-bottom:1px solid #eaeaea;
    }

    .orderRecord-title table > thead {
        width: 1158px;
        /*height: 58px;*/
        background: #e8e8e8;
        /*display: flex;*/
        /*margin: 0 auto;*/
        /*justify-content:space-between;*/
    }

    .orderRecord-title table th {
        /*height: 58px;*/
        /*line-height: 58px;*/
        padding: 16px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        color: #666;
    }
    .divImg{
        /*width:1158px;*/
        height: 40px;
    }
    .imgs{
        width: 62px;
        height: 40px;
        position: relative;
        top: 50px;
        left: 500px;
    }
    .text{
        width:100%;
        text-align: center;
        position: relative;
        top: 60px;
        left: 500px;
    }
</style>
