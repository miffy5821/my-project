<template>
    <div>
        <div class="ym">
        </div>
        <div class="deposit">
            <div class="depositName">存款专区</div>
        </div>
        <div class="deposit-case">
            <div class="deposit-zone">

                <el-tabs v-model="activeName" @tab-click="handClick">
                    <el-tab-pane
                        v-for="(item,index) in payList"
                        @click='menuShow(item,index)'
                        :label="item.scanname"
                        :name="item.scancode">
                        <span slot="label"><img class="bankCard " :src="item.icon"/> {{item.scanname}}</span>

                        <div class="depositWay-content">

                            <!--&lt;!&ndash;VIP支付 &ndash;&gt;-->
                            <div class="treasure" v-show="currentPayItem.scancode === 'card'">

                                <div class="treasure-ways">
                                    <div class="step">
                                        <el-steps :active="active" finish-status="success">
                                            <el-step title="输入金额"></el-step>
                                            <el-step title="存款成功"></el-step>
                                            <el-step title="生成订单"></el-step>
                                        </el-steps>
                                    </div>
                                </div>
                                <payCountdown></payCountdown>
                                <div v-if="false">
                                    <div class="zfb-way-box">
                                        <div class="zfb-way zfb-way-active" v-for="item in currentPayItem.config"
                                             :key="item.scanname">
                                            <img :src="currentPayItem.icon"/>
                                            <span>{{item.scanname}}</span>
                                        </div>
                                    </div>

                                    <div class="treasure-amount">
                                        <div class="amount-name">
                                            <label>存款名字 ：</label>
                                            <input type="text" class="Distribute" placeholder="请输入存款人姓名"/>
                                        </div>
                                        <div class="amount-name">
                                            <label>存款方式 ：</label>
                                            <el-radio-group v-model="radio1" class="margin-left">
                                                <el-radio-button v-for="item in currentPay.channels" :key="item.desc"
                                                                 :label="item.desc"
                                                                 :value="item.scancode"></el-radio-button>

                                            </el-radio-group>
                                        </div>
                                        <div class="amount-name">
                                            <label>存款金额 ：</label>
                                            <input type="number" class="Distribute" v-model="amount"/>
                                            <div class="ts">单笔限额{{currentPay.minquota}}-{{currentPay.maxquota}}(元)</div>
                                        </div>
                                        <el-button class="btn-next" @click="nextJumpPay">下一步</el-button>
                                    </div>

                                    <div class="tip">
                                        <h2>温馨提示</h2>
                                        <p>为确保您的款项及时到账，请您留意以下几点：</p>
                                        <p> 1.在输入您的存款金额时确保您提交的金额在限额范围之内；</p>
                                        <p> 2.若您支付过程中遇到问题未完成，请重新下单；</p>
                                        <p> 3.支付遇到困难？点击“<span @click="jumpOnlineService()">联系客服</span>”人员获得帮助;</p>
                                    </div>
                                </div>
                            </div>

                            <!--天下尊享支付-->
                            <div class="tx" v-show="currentPayItem.scancode === 'kf'">
                                <div class="tx-top">
                                    <img class="tx-img"
                                         src="https://image.beike188.com/YHHB/user_img/excellent_banner.jpg">
                                    <div class="tx-way-box">
                                        <div class="tx-way " :class="{'tx-way-active': styleActive === 1}"
                                             @click="styleActive = 1">
                                            <img
                                                src="https://line.jzs001.cn/group1/M00/00/7A/Z_QBx18Bp_SAE4gGAAADmClhtIo177.jpg">
                                            <span>VIP支付</span>
                                        </div>
                                        <div class="tx-way" :class="{'tx-way-active': styleActive === 2}"
                                             @click="styleActive = 2">
                                            <img
                                                src="https://line.jzs001.cn/group1/M00/00/7A/Z_QBx18Bp_SAE4gGAAADmClhtIo177.jpg">
                                            <span>数字支付</span>
                                        </div>
                                    </div>
                                    <div class="tx-button">
                                        <button class="tx-btn11" @click="sumitDeposit">去支付</button>
                                    </div>
                                </div>
                                <div class="tip">
                                    <h2>温馨提示</h2>
                                    <p>为确保您的款项及时到账，请您留意以下几点：</p>
                                    <p> 1.在输入您的存款金额时确保您提交的金额在限额范围之内；</p>
                                    <p> 2.若您支付过程中遇到问题未完成，请重新下单；</p>
                                    <p> 3.支付遇到困难？点击“<span @click="jumpOnlineService()">联系客服</span>”人员获得帮助;</p>
                                </div>
                            </div>

                            <div class="treasure" v-show="currentPayItem.scancode === 'ali'  || currentPayItem.scancode === 'ysf'  ||
                     currentPayItem.scancode === 'kj' || currentPayItem.scancode === 'bit'">
                                <div class="treasure-ways">
                                    <div class="step">
                                        <el-steps :active="active" finish-status="success">
                                            <el-step title="输入金额"></el-step>
                                            <el-step title="存款成功"></el-step>
                                        </el-steps>
                                    </div>
                                    <div class="amount-name">
                                        <div class="zfb-way" :class="{'zfb-way-active': index === currentPayIndex}"
                                             v-for="(item,index) in currentPayItem.config"
                                             @click="switchConfig(item,index)"
                                             :key="item.icon">
                                            <img :src="currentPayItem.icon"/>
                                            <span>支付{{index+1}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="amount-box">
                                    <div class="amount-name">
                                        <label>存款金额 ：</label>
                                        <input type="number" v-model="amount" class="Distribute"/>
                                        <div class="ts">单笔限额 {{currentPay.minquota}} - {{currentPay.maxquota}}(元)</div>
                                    </div>
                                    <el-button class="btn-next" :loading="isTransfer" @click="sumitDeposit">下一步
                                    </el-button>
                                </div>
                                <div class="tip">
                                    <h2>温馨提示</h2>
                                    <p>为确保您的款项及时到账，请您留意以下几点：</p>
                                    <p> 1.在输入您的存款金额时确保您提交的金额在限额范围之内；</p>
                                    <p> 2.若您支付过程中遇到问题未完成，请重新下单；</p>
                                    <p> 3.支付遇到困难？点击“<span @click="jumpOnlineService()">联系客服</span>”人员获得帮助;</p>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>
<script>

    import payCountdown from './payCountdown'

    export default {
        name: 'deposit',
        components: {
            payCountdown
        },

        data () {
            return {
                radio1: '支付宝转账',
                active: 1,
                styleActive: 1,
                show: 1,
                menuIndex: 0,
                currentPayItem: '',
                currentPay: '',
                currentPayIndex: 0,
                payList: [],
                activeName: '',
                amount: '', //存款金额
                isTransfer: false
            }
        },

        methods: {
            handClick (tab, event) {
                const index = tab.index;
                this.menuIndex = index;
                this.currentPayItem = this.payList[index];
                if (this.currentPayItem.config.length > 0) {
                    this.currentPay = this.currentPayItem.config[0];
                }

                console.log(tab, event)
            },
            nextJumpPay () {
                if (this.active++ > 1) this.active = 2;
                this.$router.push('/personal/payCountdown')
            },

            next () {
                if (this.active++ > 1) this.active = 2;
            },
            jumpOnlineService () {
                window.open('https://chatlink.mstatik.com/widget/standalone.html?eid=76107099dd1ba17a94453359257851c8');
            },
            getPay () {
                this.axios.post('/api/user/payConfig', {
                    params: {terminal: 0}
                })
                    .then((response) => {
                        const data = response.data;
                        if (data.status === 10000) {

                            const pay = response.data.data;
                            this.payList = pay;
                            this.currentPayItem = this.payList[0];
                            this.activeName = this.currentPayItem.scancode;
                            this.currentPay = this.currentPayItem.config[0];
                            console.log('payList', this.payList);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            switchConfig (item, index) {
                this.currentPay = item;
                this.currentPayIndex = index;
            },
            sumitDeposit () {
                console.log(this.currentPay);

                const {maxquota, minquota, payId, scancode} = this.currentPay;

                if (maxquota && minquota) {
                    if (this.amount < minquota || this.amount > maxquota) {
                        this.$message({
                            message: `金额范围${minquota}~${maxquota}`,
                            type: 'warning'
                        });
                        return;
                    }
                }
                this.isTransfer = true;
                const amount = this.amount;

                this.axios.post('/api/user/pay/online/scan', {
                    payId, scancode, amount
                }).then((response) => {
                    const data = response.data;
                    if (data.status === 10000) {
                        this.amount = '';
                        window.open(data.data.url);
                    }
                }).catch(function (error) {
                    console.log(error);
                }).finally(() => {
                    this.isTransfer = false;
                })

            }
        },
        mounted () {
            this.getPay();
        }
    }
</script>
<style>
    .ym {
        width: 978px;
        height: 20px;
    }

    .deposit {
        width: 998px;
        height: 50px;
    }

    .depositName {
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

    .deposit-case {
        width: 1000px;
        height: 505px;
    }

    .deposit-zone {
        height: 40px;
        width: 900px;
        margin: 0 auto;
    }

    .depositWay {
        width: 900px;
        height: 40px;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
    }

    .depositWay li {
        width: auto;
        height: 38px;
        font-size: 14px;
        line-height: 36px;
        color: darkgray;
        text-align: center;
    }

    .bankCard {
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }

    .cross-line {
        height: 50px;
        width: auto;
        margin-top: 12px;
        color: darkgray;
        padding-left: 18px;
        padding-right: 18px;
    }

    .depositWay-content {
        /*width: 998px;*/
        /*height: 815px;*/
    }

    .step {
        width: 750px;
        height: 20px;
        margin-left: auto;
        margin-right: auto;
        padding: 50px 80px;
        text-align: left;
    }

    .way {
        width: 145px;
        height: 43px;
        text-align: center;
        line-height: 43px;
        border: 1px solid red;
        margin-top: 20px;
        margin-bottom: 30px;
        margin-left: 80px;
    }

    .amount-box {
        width: 1000px;
        height: 195px;
        text-align: center;
        line-height: 195px;
        padding-top: 50px;
        display: flex;
        flex-wrap: wrap;
        background: #eee;
    }

    .Distribute {
        width: 195px;
        height: 35px;
        font-size: 14px;
        padding: 2px 5px 2px 8px;
        border: 1px solid gray;
        border-radius: 5px;
    }

    .Distribute:focus {
        border-shadow: 1px solid #c8a675;
    }

    .ts {
        width: 180px;
        height: 35px;
        color: grey;
        padding-left: 20px;
        font-size: 14px;
        line-height: 35px;
        background: #fef5e3;
        border: 1px solid #f96;
        margin-left: 20px;
    }

    .btn-next {
        width: 210px;
        font-size: 14px;
        height: 40px;
        color: white;
        background-color: #c2a77d;
        border: 1px solid #c2a77d;
        border-radius: 5px;
        margin-left: 310px;
    }

    .tip {
        width: 100%;
        height: 300px;
        padding: 35px;
        text-align: left;
    }

    .tip h2 {
        font-size: 20px;
        color: red;
        margin-bottom: 10px;
    }

    .tip p {
        font-size: 14px;
        color: black;
        margin-top: 10px;
    }

    .tip span {
        color: red;
    }

    .tx {
        width: 998px;
        height: 815px;
    }

    .tx-top {
        width: 100%;
        height: 500px;
        margin-top: 15px;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid #eaeaea;
    }

    .tx-img {
        width: 97%;
        height: 300px;
        margin-right: auto;
        margin-left: auto;
    }

    .tx-way-box {
        width: 500px;
        height: 50px;
        display: flex;
        flex-wrap: wrap;
        margin-left: 80px;
        margin-top: -35px;
    }

    .tx-way {
        width: 100px;
        height: 15px;
        padding: 15px;
        line-height: 15px;
        margin-right: 30px;
        border: 1px dashed #cacaca;
    }

    .tx-way img {
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }

    .tx-way span {
        font-size: 15px;
        color: grey;
    }

    .tx-way-active {
        border: 1px solid red;
    }

    .tx-button {
        width: 800px;
        height: 50px;
        margin-right: auto;
        margin-left: auto;
    }

    .tx-btn11 {
        width: 200px;
        /* height: 10px; */
        color: #fff;
        background-color: #c2a77d;
        border: none;
        padding: 10px 0;
        border-radius: 5px;
        margin-left: auto;
        margin-right: auto;
    }

    .zfb-way-box {
        width: 770px;
        height: 50px;
        display: flex;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
        margin-top: 25px;
    }

    .zfb-way {
        width: 100px;
        height: 15px;
        padding: 15px;
        line-height: 15px;
        margin-right: 20px;
        border: 1px dashed #cacaca;
    }

    .zfb-way img {
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }

    .zfb-way span {
        font-size: 15px;
        color: grey;
    }

    .zfb-way-active {
        border: 1px solid red;
    }

    .treasure-amount {
        width: 1000px;
        height: 245px;
        display: flex;
        flex-wrap: wrap;
        background: #ffffff;
        padding-top: 30px;
    }

    .amount-name {
        padding-left: 200px;
        text-align: left;
        width: 740px;
        height: 60px;
        display: flex;
    }

    label {
        width: 100px;
        height: 24px;
        line-height: 40px;
        text-align: right;
        font-size: 14px;
        padding-left: 10px;
    }

    .margin-left {
        margin-left: -10px;
    }

</style>

