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
                        @click="menuShow(item,index)"
                        :label="item.scanname"
                        :key="item.scancode"
                        :name="item.scancode">
                        <span slot="label"><img class="bankCard " :src="item.icon"/> {{ item.scanname }}</span>

                        <div class="depositWay-content">

                            <!--&lt;!&ndash;VIP支付 &ndash;&gt;-->
                            <div class="treasure" v-show="currentPayItem.scancode === 'card'">

                                <div class="treasure-ways">
                                    <div class="step">
                                        <el-steps :active="cardActive" finish-status="success">
                                            <el-step title="输入金额"></el-step>
                                            <el-step title="存款成功"></el-step>
                                            <el-step title="生成订单"></el-step>
                                        </el-steps>
                                    </div>
                                </div>
                                <payCountdown v-if="cardActive === 2" @orderChange="orderChange"
                                              :cardMsg="cardMsg"></payCountdown>
                                <div v-if="cardActive === 1">
                                    <div class="zfb-way-box">
                                        <div class="zfb-way zfb-way-active" v-for="item in currentPayItem.config"
                                             :key="item.scanname">
                                            <img :src="currentPayItem.icon"/>
                                            <span>{{ item.scanname }}</span>
                                        </div>
                                    </div>

                                    <div class="treasure-amount">
                                        <div class="amount-name">
                                            <label>存款名字 ：</label>
                                            <el-input v-model="card.username" class="Distribute" placeholder="请输入存款人姓名"
                                                      clearable></el-input>
                                        </div>
                                        <div class="amount-name">
                                            <label>存款方式 ：</label>
                                            <el-radio-group v-model="card.cardType" class="margin-left">
                                                <el-radio-button v-for="item in currentPay.channels" :key="item.desc"
                                                                 :label="item.desc"
                                                                 :value="item.code"></el-radio-button>

                                            </el-radio-group>
                                        </div>
                                        <div class="amount-name">
                                            <label>存款金额 ：</label>
                                            <el-input class="Distribute" type="number" v-model="card.amount"
                                                      placeholder="请输入金额"></el-input>
                                            <div class="ts">单笔限额{{ currentPay.minquota }}-{{ currentPay.maxquota }}(元)
                                            </div>
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
                                <div v-if="cardActive === 3">订单生成成功！</div>
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
                     currentPayItem.scancode === 'kj' || currentPayItem.scancode === 'bit' || currentPayItem.scancode === 'yl'">

                                <div class="no-data" v-if="!currentPayItem.config.length">
                                    <img class="recordImg" src="/static/personal/none.svg"/>
                                    <p>暂无数据</p>

                                </div>

                                <div class="pay-wrapper" v-if="currentPayItem.config.length">
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
                                                <span>支付{{ index + 1 }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="amount-box">
                                        <div class="amount-name">
                                            <label>存款金额 ：</label>
                                            <input type="number" v-model="amount" class="Distribute"/>
                                            <div class="ts">单笔限额 {{ currentPay.minquota }} -
                                                {{ currentPay.maxquota }}(元)
                                            </div>
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
            cardActive: 1,
            styleActive: 1,
            show: 1,
            menuIndex: 0,
            currentPayItem: '',
            currentPay: '',
            currentPayIndex: 0,
            payList: [],
            activeName: '',
            amount: '', //存款金额
            isTransfer: false,
            card: {
                username: '',
                cardType: '支付宝转账',
                amount: ''
            },
            cardMsg: '', // 银行存款返回信息

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

            // if (this.currentPay.config[0].channels) {
            //     this.card.cardType = this.currentPay.config[0].channels[0].code;
            //     console.log(this.this.card.cardType )
            // }
            //
            // console.log('config', this.currentPayItem.config.length);
            // console.log(tab, event)
        },
        nextJumpPay () {
            //console.log('currentPay', this.currentPay);

            const nameReg = /^[\u4E00-\u9FA5]{2,4}$/;

            const {username, cardType, amount} = this.card;

            const {maxquota, minquota} = this.currentPay;

            if (!nameReg.test(username)) {
                this.$alert('用户名为2-4位中文字符');
                return;
            }

            if (!amount) {
                this.$alert('请输入金额');
                return
            }

            if (amount < minquota || amount > maxquota) {
                this.$alert(`金额范围${minquota}~${maxquota}`);
                return;
            }

            this.axios.post('/api/user/pay/scan', {
                username, cardType, amount
            }).then((response) => {
                const data = response.data;
                if (data.status === 10000) {
                    this.cardMsg = data.data;
                    this.cardActive = 2;
                } else {
                    this.$message({
                        message: data.msg,
                        type: 'error'
                    })
                }
            }).catch(function (error) {
                console.log(error);
            });

            // if (this.active++ > 1) this.active = 2;
            // this.$router.push('/personal/payCountdown')

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
            }).then((response) => {
                const data = response.data;
                if (data.status === 10000) {

                    const pay = response.data.data;
                    this.payList = pay;
                    this.currentPayItem = this.payList[0];
                    this.activeName = this.currentPayItem.scancode;
                    this.currentPay = this.currentPayItem.config[0];

                    //console.log('payList', this.payList);
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
            //.log(this.currentPay);

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

        },
        orderChange (active) {
            this.cardActive = active;
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

.step {
    width: 750px;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 80px;
    text-align: left;
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
    width: 205px;
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

.tx-button {
    width: 800px;
    height: 50px;
    margin-right: auto;
    margin-left: auto;
}

.tx-btn11 {
    width: 200px;
    color: #fff;
    background-color: #c2a77d;
    border: none;
    padding: 10px 0;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
}

.no-data {
    height: 495px;
    margin: 0 20px 20px 20px;
    padding: 0 16px 16px 16px;
    background: #fff;
}

.recordImg {
    width: 62px;
    height: 40px;
    margin-bottom: 15px;
    margin-top: 150px;
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

