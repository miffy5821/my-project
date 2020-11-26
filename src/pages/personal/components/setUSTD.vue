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
            <div class="pw" v-if="true">
                <div class="changeWord-item">
                    <label>账户名称:</label>
                    <el-input
                        v-model="input"
                        type="text"
                        class="width"
                        placeholder="请输入USTD账户">
                    </el-input>
                </div>
                <div class="changeWord-item">
                    <label>钱包类型:</label>
                    <el-input
                        v-model="input"
                        type="text"
                        class="width"
                        placeholder="请选择钱包类型">
                    </el-input>
                </div>
                <div class="changeWord-item">
                    <label>钱包地址:</label>
                    <el-input
                        v-model="input"
                        type="text"
                        class="width"
                        placeholder="请输入USTD钱包地址">
                    </el-input>
                </div>
                <div class="changeWord-item">
                    <label>钱包协议:</label>
                    <el-input
                        v-model="input"
                        type="text"
                        class="width"
                        placeholder="请选择钱包协议">
                    </el-input>
                </div>
                <div class="btn">
                    <el-button class="cw-btn" @click="next">确定</el-button>
                    <el-button class="cw-btn" @click="next">重置</el-button>
                </div>
                <div class="tip">
                    <h2>温馨提示</h2>
                    <p>为了保证您的款项正常到账，请您留意以下几点：</p>
                    <p> 1.提交的金额和支付的金额必须一致，否则无法到账，修改支付金额无法查实的，需自行承担资金损失。</p>
                    <p> 2.下单后，请按照界面信息提示进行支付，重复支付无法到账，无法查实需自行承担资金损失。</p>
                    <p> 3.支付过程中遇到问题未完成，请重新下单或更换支付进行支付。</p>
                    <p> 4.支付遇到困难？点击“<span @click="jumpOnlineService">联系客服</span>”人员获得帮助</p>
                </div>
            </div>
            <div class="tips" v-if="false">
                <h1>恭喜您设定成功!</h1>
                <p>贴心提醒</p>
                <p>当您完成设定后,若有疑问,可联系<span @click="jumpOnlineService">线上客服</span>获得帮助</p>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    name: 'setUstd',
    data() {
        return {
            active: 0,
            success: '',
            input: ''
        }
    }, methods: {
        next() {
            this.active = 2;
        },
        jumpOnlineService() {
            window.open('https://chatlink.mstatik.com/widget/standalone.html?eid=76107099dd1ba17a94453359257851c8');
        },
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
    font-size: 15px;
    font-weight: 700;
    color: #666;
}

.change-case {
    width: 1000px;
    height: 505px;

}

.cw-step {
    width: 600px;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 80px;
    text-align: left;
}

.pw{
    width:840px;
    padding:80px 80px 50px 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
.width {
    width: 250px;
}
.btn{
    width: 440px;
    display: flex;
    padding-left: 50px;
    justify-content: center;
}
.cw-btn {
    width: 100px;
    padding: 5px;
    line-height: 25px;
    color: #fff;
    margin-top: 20px;
    margin-left: 30px;
    background-color: #c2a77d;
    border-color: #c2a77d;
}

.tip {
    width: 100%;
    padding:30px;
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

.tip span {
    color: red;
}

.width {
    width: 250px;
}

.btn {
    width: 440px;
    display: flex;
    justify-content: center;
}

.cw-btn {
    width: 100px;
    padding: 5px;
    line-height: 25px;
    color: #fff;
    margin-top: 20px;
    background-color: #c2a77d;
    border-color: #c2a77d;
}

.tips {
    width: 760px;
    height: 300px;
    padding: 80px;
    margin: 0 auto;
    text-align: left;
}

h1 {
    font-size: 18px;
    font-weight: 700;
    padding: 50px 0;
    color: #c83434;
    margin-left: 80px;
}

.tips p {
    font-size: 14px;
    color: black;
    padding: 14px 0;
    margin-left: 80px;
}

.tips span {
    color: red;
}
</style>


