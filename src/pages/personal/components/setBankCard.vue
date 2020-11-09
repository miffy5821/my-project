<template>
    <div>
        <div class="ym">
        </div>
        <div class="change">
            <div class="changeName">绑定银行卡</div>
        </div>
        <div class="change-case">
            <div class="cw-step">
                <el-steps :active="active" finish-status="success">
                    <el-step title="设定卡片"></el-step>
                    <el-step title="确认信息"></el-step>
                    <el-step title="设定成功"></el-step>
                </el-steps>
            </div>
            <div class="pw">
                <div class="changeWord-item">
                    <label>持卡人:</label>
                    <input type="text" placeholder="请输入持卡人姓名">
                </div>
                <div class="changeWord-item">
                    <label>银行卡号:</label>
                    <input type="text" placeholder="请输入存储银行卡号">
                </div>
                <div class="changeWord-item">
                    <label>选择银行卡:</label>
                    <input type="text" placeholder="请选择银行卡">
                </div>
                <p class="alipay-text">温馨提示：如无开户银行，请选择其他银行，点击提交将银行名填入开户行地址。</p>
                <el-button class="cw-btn" @click="next">确定</el-button><el-button class="cw-btn" @click="next">重置</el-button>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'setBankCard',
        data() {
            return {
                active:0,
                success:'',
            }
        },methods: {
            next() {
                this.active = this.active + 1;
            }
        }
    }
</script>
<style>

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
</style>

