<template>
    <div>

        <div class="ym">
        </div>

        <div class="wd">
            <div class="wd-password">提款密码</div>
        </div>
        <div class="wd-case">
            <!--步骤条-->
            <div class="dw-step">
                <el-steps :active="active" finish-status="success">
                    <el-step title="输入金额"></el-step>
                    <el-step title="申请成功"></el-step>
                </el-steps>
            </div>

            <!--设置密码-->
            <!--<div class="wd-pw">-->
            <!--<div class="wd-item">-->
            <!--<label>新密码:</label>-->
            <!--<input type="text" placeholder="4位数字组合">-->
            <!--</div>-->
            <!--<div class="wd-item">-->
            <!--<label>确认密码:</label>-->
            <!--<input type="text" placeholder="请再次输入密码">-->
            <!--</div>-->
            <!--<el-button class="wd-btn" @click="next">下一步</el-button>-->
            <!--</div>-->

            <!--密码修改成功后的提示-->
            <!--<div class="setWord-succeed">-->
            <!--<p class="succeed">提款密码修改成功!</p>-->
            <!--<p class="dw-tx">贴心提醒</p>-->
            <!--<p class="dw-help">当您完成设定后,若有疑问,可联系<span>线上客服</span>获得帮助</p>-->
            <!--</div>-->

            <!--提款专区-->
            <div class="withdrawal-">
                <div class="withdrawal-area">
                    <div class="wd-way">
                        <div class="wd-way1" :class="{'wd-way-current': show === 1}" @click="show = 1">提现到USTD钱包</div>
                        <div class="wd-way1" :class="{'wd-way-current': show === 2}" @click="show = 2">提现到银行卡</div>
                        <div class="wd-way1" :class="{'wd-way-current': show === 3}" @click="show = 3">
                            提现到支付宝
                            <!--                            <el-button type="text" @click="open">提现到支付宝</el-button>-->
                        </div>
                    </div>
                    <div v-show="show === 1">
                        <div class="addBankCard" @click="jumpSetUstd()">
                            <div class="wd-add">+</div>
                            <p>添加USTD钱包</p>
                        </div>
                        <el-divider class="wd-line"></el-divider>
                        <div class="daMaLiang">
                            <p class="">不会操作？请点击查看 <span @click="jumpUstd()">USDT钱包使用</span> 教程</p>
                            <p class="">账户姓名:<span class="daMaLiang-span1">未绑定</span></p>
                            <p class="">可提金额(RMB)：<span class="daMaLiang-span1">0.00元</span></p>
                            <p>完成打码量：<span class="daMaLiang-span2">完成打码量：0</span>/<span
                                class="daMaLiang-span2">要求打码量：0</span></p>
                            <div class="amount-wd">
                                <label>提款金额(RMB) ：</label>
                                <input type="number" class="wd-input" placeholder="请输入金额"/>
                                <div class="ts">单笔提款限额（元）：100-500000</div>
                            </div>
                            <p class="">当前汇率:
                                <span class="daMaLiang-span">1:0</span>
                                <span>| 预计到账币额(USDT):</span>
                                <span class="daMaLiang-span">0</span>
                            </p>
                            <div class="amount-wd">
                                <label>提款密码 ：</label>
                                <input type="password" class="wd-input" placeholder="请输入提款密码"/>
                                <span @click="jumpOnlineService()">忘记密码</span>
                            </div>
                            <el-button class="wd-btn-next" @click="next">下一步</el-button>
                        </div>
                        <div class="tip">
                            <h2>温馨提示</h2>
                            <p>1. USDT钱包账户绑定之后不可修改，如有疑问，请联系<span @click="jumpOnlineService()">在线客服</span></p>

                            <p>2. USDT钱包有可能涉及到矿工费和手续费等，到账金额以实际金额到账为准，如有疑问，请联系<span
                                @click="jumpOnlineService()">在线客服</span></p>

                            <p>3. 为了您的资金安全，绑定USDT钱包时，请填写对应钱包账户名称</p>

                            <p>4. 不会操作？请点击查看 <span @click="jumpUstd()">USDT钱包使用</span> 教程</p>

                            <p>5 USDT钱包提款最多只能绑定<span>3个USDT钱包</span></p>
                        </div>
                    </div>
                    <div v-show="show === 2">
                        <div class="addBankCard" @click="jumpSetBankCard()">
                            <div class="wd-add">+</div>
                            <p>添加银行卡</p>
                        </div>
                        <el-divider class="wd-line"></el-divider>
                        <div class="daMaLiang">
                            <p class="">提现金额：<span class="daMaLiang-span1">0.00元</span></p>
                            <p>完成打码量：<span class="daMaLiang-span2">完成打码量：0</span>/<span
                                class="daMaLiang-span2">要求打码量：0</span></p>
                            <div class="amount-wd">
                                <label>提款金额 ：</label>
                                <input type="number" class="wd-input" placeholder="请输入金额"/>
                                <div class="ts">单笔提款限额（元）：100-500000</div>
                            </div>
                            <div class="amount-wd">
                                <label>提款密码 ：</label>
                                <input type="password" class="wd-input" placeholder="请输入提款密码"/>
                                <span @click="jumpOnlineService()">忘记密码</span>
                            </div>
                            <el-button class="wd-btn-next" @click="next">下一步</el-button>
                        </div>
                    </div>
                    <div v-show="show === 3">
                        <div class="alipay" >
                            <div class="alipay-img"></div>
                            <div class="alipay-text">
                                <label>姓名 ：</label><span>张三</span>
                            </div>
                            <div>
                                <label>账户 ：</label><span>1465****876</span>
                            </div>
                        </div>
                        <el-divider class="wd-line"></el-divider>
                        <div class="daMaLiang">
                            <p class="">提现金额：<span class="daMaLiang-span1">0.00元</span></p>
                            <p>完成打码量：<span class="daMaLiang-span2">完成打码量：0</span>/<span
                                class="daMaLiang-span2">要求打码量：0</span></p>
                            <div class="amount-wd">
                                <label>提款金额 ：</label>
                                <input type="number" class="wd-input" placeholder="请输入金额"/>
                                <div class="ts">单笔提款限额（元）：100-500000</div>
                            </div>
                            <div class="amount-wd">
                                <label>提款密码 ：</label>
                                <input type="password" class="wd-input" placeholder="请输入提款密码"/>
                                <span @click="jumpOnlineService()">忘记密码</span>
                            </div>
                            <el-button class="wd-btn-next" @click="next">下一步</el-button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'withdrawal',
    data() {
        return {
            show: 1,
            active:1
        }
    },
    methods: {
        next() {
            this.active = 2;
        },

        open() {
            this.$alert('你还没有绑定支付宝，是否绑定支付宝？', '信息', {
                confirmButtonText: '前往',
                callback: action => {
                    this.$router.push({path: 'alipay'});
                }
            });
        },
        jumpOnlineService() {
            window.open('https://chatlink.mstatik.com/widget/standalone.html?eid=76107099dd1ba17a94453359257851c8');
        },
        jumpUstd() {
            window.open("http://txwl-usdt.com/YHHB/0/pc/huobi.html");
        },
        jumpSetBankCard() {
            this.$router.push({path: 'setBankCard'});
        },
        jumpSetUstd() {
            this.$router.push({path: 'setUstd'});
        }
    }
}
</script>
<style scoped>
.ym {
    width: 978px;
    height: 38px;
    margin: 10px;
}

.wd {
    width: 998px;
    height: 50px;
}

.wd-password {
    height: 40px;
    background: linear-gradient(90deg, #f2f2f2, #fff);
    line-height: 40px;
    padding: 0 30px;
    width: 200px;
    text-align: left;
    /*padding-left: -30px;*/
    font-size: 15px;
    font-weight: 700;
    color: #666;
}

.wd-case {
    width: 100%;
    height: 660px;
    display: flex;
    flex-wrap: wrap;
}

.dw-step {
    width: 750px;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 80px;
    text-align: left;
}


.wd-item label {
    font-size: 14px;
    color: #222222;
    margin-right: 15px;
    line-height: 40px;
    width: 80px;
    text-align: right;
}

.wd-item input {
    width: 250px;
    height: 25px;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
    color: #d9d9d9;
    font-size: 14px;
    padding: 6px 11px 6px 15px;
}

.dw-help span {
    color: red;
}

.withdrawal- {
    width: 100%;
    height: 520px;
    background: #eee;
}

.withdrawal-area {
    width: 800px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 0 0;
}

.wd-way {
    width: 774px;
    height: 35px;
    display: flex;
    flex-wrap: wrap;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #c8a675;
    border-radius: 5px;
}

.wd-way1 {
    width: 257px;
    height: 35px;
    color: #c8a675;
    text-align: center;
    line-height: 35px;
    font-size: 15px;
    border-style: solid;
    border-right: 1px solid #c8a675;
}

.wd-way2 {
    width: 257px;
    height: 35px;
    color: #c8a675;
    text-align: center;
    line-height: 35px;
    font-size: 15px;

}

.wd-way-current {
    background: #c8a675;
    color: white;
}

.addBankCard {
    width: 180px;
    height: 80px;
    margin-top: 20px;
    margin-left: 70px;
    background: white;
    color: #c8a675;
    border: 1px solid white;
}

.wd-add {
    height: 30px;
    width: 30px;
    line-height: 30px;
    font-size: 16px;
    margin: 8px auto 8px auto;
    border: 1px solid #c8a675;
    border-radius: 50%;
    color: #c8a675;
}

.addBankCard p {
    color: #c8a675;
    font-size: 14px;
}

.wd-line {
    width: 690px;
    margin: 10px auto;
}

.daMaLiang {
    width: 800px;
    height: 280px;
    text-align: left;
    /*display: flex;*/
    /*flex-wrap: wrap;*/
}

.daMaLiang p {
    width: 500px;
    height: 25px;
    line-height: 25px;
    margin-top: 10px;
    margin-left: 80px;
    font-size: 14px;
    color: #222222;
}

.daMaLiang-span1 {
    width: 150px;
    height: 30px;
    padding-left: 20px;
    color: #c8a675;
}

.daMaLiang-span2 {
    width: 150px;
    height: 30px;
    margin-left: 5px;
    padding-right: 10px;
    text-align: left;
    color: #c8a675;
}

.daMaLiang-span {
    font-size: 18px;
    font-weight: 700;
    color: #c8a675;
    margin: 0 10px;
}

.amount-wd {
    width: 100%;
    height: 35px;
    margin-top: 10px;
    margin-left: 80px;
    display: flex;
    /*flex-wrap: wrap;*/
}

.amount-wd label {
    font-size: 14px;
    color: #222222;
    width: auto;
    text-align: left;
    line-height: 35px;
}

.amount-wd input {
    width: 190px;
    height: 32px;
    padding-left: 10px;
    font-size: 14px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
}

.ts {
    width: 280px;
    height: 35px;
    line-height: 35px;
    border: 1px solid #f96;
    border-radius: 5px;
    margin-left: 20px;
    padding-left: 10px;
    font-size: 14px;
    background: #FEF5E3;
    color: #222222;
}

.amount-wd span {
    font-size: 14px;
    color: red;
    line-height: 35px;
    margin-left: 20px;
}

.wd-btn-next {
    width: 200px;
    padding: 5px;
    line-height: 25px;
    color: #fff;
    position: relative;
    left: 155px;
    top: 20px;
    background-color: #c2a77d;
    border-color: #c2a77d;
}

.tip {
    width: 900px;
    height: auto;
    padding: 8px 35px 20px 35px;
    margin: 60px 10px 0 -100px;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
}

.tip h2 {
    font-size: 20px;
    width: 100%;
    color: red;
    margin-bottom: 5px;
}

.tip p {
    width: 100%;
    font-size: 14px;
    color: black;
    margin-top: 10px;
}

.tip span {
    color: red;
}
.alipay{
    width: 640px;
    height: 80px;
    display: flex;
    padding: 0 80px;
    margin-top: 10px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: left;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.alipay-img{
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background-size: cover;
    /*background-repeat: no-repeat;*/
    background:url("https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5Ki0aADrqAAAAJTOT7d78069.png") no-repeat;
}
.alipay-text{
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: left;
    margin-left: 30px;
}
.alipay-text label{
    width: 80px;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
}
.alipay-text span{
    width: 80px;
    height: 40px;
    line-height: 40px;
    font-size: 15px
}
</style>

