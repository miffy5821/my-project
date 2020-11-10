<template>
    <div>

        <div class="ym">
        </div>
        <div class="change">
            <div class="changeName">绑定USTD</div>
        </div>
        <div class="change-case">
            <div class="cw-step">
                <el-steps :active="active" finish-status="success">
                    <el-step title="绑定钱包"></el-step>
                    <el-step title="绑定成功"></el-step>
                </el-steps>
            </div>
            <div class="pw">
                <div class="changeWord-item">
                    <label>账户名称:</label>
                    <input type="text" placeholder="请输入USTD账户">
                </div>
                <div class="changeWord-item">
                    <label>钱包类型:</label>
                    <input type="text" placeholder="请选择钱包类型">
                </div>
                <div class="changeWord-item">
                    <label>钱包地址:</label>
                    <input type="text" placeholder="请输入USTD钱包地址">
                </div>
                <div class="changeWord-item">
                    <label>钱包协议:</label>
                    <input type="text" placeholder="请选择钱包协议"><el-icon-question></el-icon-question>
                </div>
                <el-button class="cw-btn" @click="next">确定</el-button><el-button class="cw-btn" @click="next">重置</el-button>
            </div>

        </div>
        <div class="tip">
            <h2>温馨提示</h2>
            <p>为了保证您的款项正常到账，请您留意以下几点：</p>
            <p> 1.提交的金额和支付的金额必须一致，否则无法到账，修改支付金额无法查实的，需自行承担资金损失。</p>
            <p> 2.下单后，请按照界面信息提示进行支付，重复支付无法到账，无法查实需自行承担资金损失。</p>
            <p> 3.支付过程中遇到问题未完成，请重新下单或更换支付进行支付。</p>
            <p> 4.支付遇到困难？点击“<a>联系客服</a>”人员获得帮助</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'setUstd',
        data() {
            return {
                active:0,
                success:'',
            }
        },methods: {
            next() {
                this.active = 2;
            }
        }
    }
</script>
<style scoped>
    .ym {
        width: 978px;
        height: 20px;
    }


    .change {
        width: 998px;
        height: 50px;
    }

    .changeName {
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

    .change-case {
        width: 1000px;
        height:505px;

    }

    .cw-step{
        width:600px;
        height: 20px;
        margin-left: auto;
        margin-right: auto;
        padding: 50px 80px;
        text-align: left;
    }

    .pw{
        width:840px;
        height: 300px;
        padding: 80px;
        text-align: center;
    }

    .changeWord-item{
        width: calc(100% - 400px);
        height:40px ;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .changeWord-item label{
        font-size: 14px;
        color: #222222;
        margin-right: 15px;
        line-height: 40px;
        width: 80px;
        text-align: right;
    }
    .changeWord-item input{
        width: 250px;
        height: 25px;
        border-radius: 3px;
        border: 1px solid #d9d9d9;
        color:  #d9d9d9;
        font-size: 14px;
        padding: 6px 11px 6px 15px;
    }
    .alipay-text{
        font-size: 14px;
        color: red;
        margin-top: 15px;
        text-align: center;
    }
    .cw-btn{
        width: 100px;
        padding: 5px;
        line-height: 25px;
        color: #fff;
        margin-top: 20px;
        margin-left: -80px;
        background-color: #c2a77d;
        border-color: #c2a77d;
    }
    .tip {
        width: 998px;
        height: 485px;
        padding: 35px;
        text-align: left;
    }

    .tip h2 {
        font-size: 20px;
        color: red;
        margin-bottom: 10px;
    }

    .tip p {
        font-size: 15px;
        color: black;
        margin-top: 10px;
    }

    .tip a {
        color: red;
    }

</style>


