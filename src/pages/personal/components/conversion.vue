<template>
    <div>
        <div class="ym">
            <p class="ymContent">请牢记我们官方唯一的域名导航 www.888y.com</p>
        </div>
        <div class="switch">
            <button class="switchButton" @click="toggleAuto">{{isAuto?'切换至自动转账':'切换至手动转账'}}</button>
        </div>
        <div class="hand-transfer" v-if="!isAuto">
            <div class="asset">
                <div class="assetName">我的资产</div>
            </div>
            <div class="asset-case">
                <div class="asset-left">
                    <el-switch
                        v-model="switchValue"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        style="margin-left: 250px"
                    >
                    </el-switch>

                    <div class="tex1">￥{{switchValue ? myUser.totalBalance:txtHide}}

                    </div>
                    <div class="asset-btn">
                        <button class="asset-btn1" @click="jumpWithdrawal()">提款</button>
                        <button class="asset-btn1 btnColor" @click="jumpDeposit()">存款</button>
                    </div>
                    <div></div>
                </div>
                <div class="asset-right">
                    <div class="asset-">
                        <el-button class="asset-btn2"
                                   :loading="isRefresh"
                                   size="mini"
                                   @click="refresh()">
                            刷新
                        </el-button>
                    </div>
                    <div class="asset-wallet">
                        <span class="wallet">中心钱包</span>
                        <span class="sum">￥{{ switchValue ? myUser.wallet:txtHide }}</span>
                        <el-button class="recycle"
                                   :loading="testRefresh"
                                   size="mini"
                                   @click="recycle()">
                            一键回收
                        </el-button>
                    </div>
                    <div class="asset-wallet">
                        <span class="integral">积分总额</span>
                        <span class="total">{{switchValue ? myUser.integral:txtHide}}</span>
                    </div>
                </div>
            </div>

            <div class="assetDistribute">
                <div class="assetName">财产分布</div>
                <div class="distribution">
                    <ul class="distribution-ul">
                        <li class="distribution-li" v-for="item in batchList" :key="item.gameCode">
                            <div class="drt-img"
                                 :style="{backgroundImage: 'url(' + item.gameImg + ')', backgroundSize:'contain'}"></div>
                            <div class="drt-text">
                                <p>{{item.gameName}}</p>
                                <p>{{switchValue ? item.balance.toFixed(2) : txtHide}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="auto-transfer" v-if="isAuto">
            <div class="asset">
                <div class="assetName">我的资产</div>
            </div>
            <div class="transfer">
                <div class="transfer-left">
                    <div class="total-num">
                        <p>总资产</p>
                        <h2>￥{{myUser.totalBalance}}</h2>
                    </div>
                    <div class="transfer-left-bottom">
                        <div class="bottom-left">
                            <p>钱包余额</p>
                            <h3>￥{{myUser.wallet}}</h3>

                            <div class="transfer-btn">
                                <button class="transfer-btn1" @click="jumpDeposit()">存款</button>
                                <button class="transfer-btn2" @click="jumpWithdrawal()">提款</button>
                            </div>

                        </div>
                        <div class="bottom-right">
                            <p>积分余额</p>
                            <h3>{{myUser.integral}}</h3>
                        </div>
                    </div>
                </div>
                <div class="transfer-right">
                    <div class="transfer-row">
                        <label>转出 ：</label>
                        <el-select v-model="outValue" placeholder="请选择">
                            <el-option
                                v-for="item in options1"
                                :key="item.gameCode"
                                :label="item.gameName"
                                :value="item.gameCode">
                                <img style="width: 25px;height: 25px;line-height: 33px;float:left;"
                                     :src="item.gameImg"/>
                                <span style="float: left;margin-left: 10px">{{ item.gameName }}</span>
                                <span style="float: right; color: #8492a6; font-size: 13px">¥&nbsp;{{item.balance.toFixed(2) }}</span>

                            </el-option>
                        </el-select>


                    </div>
                    <div class="transfer-row">
                        <label>转入 ：</label>
                        <el-select v-model="inValue" placeholder="请选择">
                            <el-option
                                v-for="item in options1"
                                :key="item.gameCode"
                                :label="item.gameName"
                                :value="item.gameCode">
                                <img style="width: 25px;height: 25px;line-height: 33px;float:left;"
                                     :src="item.gameImg"/>
                                <span style="float: left;margin-left: 10px">{{ item.gameName }}</span>
                                <span style="float: right; color: #8492a6; font-size: 13px">¥&nbsp;{{item.balance.toFixed(2) }}</span>

                            </el-option>
                        </el-select>

                    </div>
                    <div class="transfer-row">
                        <label>金额 ：</label>
                        <input type="number" v-model="amount"/>

                    </div>
                    <el-button class="btn-next" @click="tranferConfirm" :loading="isTransfer">确定转款</el-button>
                </div>

            </div>
            <div class="assetDistribute">
                <div class="assetName">财产分布</div>
                <div class="distribution">
                    <ul class="distribution-ul">
                        <li class="distribution-li" v-for="item in batchList" :key="item.gameCode">
                            <div class="drt-img"
                                 :style="{backgroundImage: 'url(' + item.gameImg + ')', backgroundSize:'contain'}"></div>
                            <div class="drt-hover"></div>
                            <div class="drt-text">
                                <p>{{item.gameName}}</p>
                                <p>{{item.balance}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    const HIDE = '****';

    export default {
        name: 'conversion',
        data () {
            return {
                switchValue: true,
                isAuto: false,
                options1: [],
                inValue: '',
                outValue: '',
                amount: '',
                isTransfer: false,
                priviewUser: '',
                txtHide: '****',
                batchList: [], // 资产分布列表
                isRefresh: false,
                testRefresh: false
            }
        },
        props: ['myUser'],
        methods: {
            getPayCofig () {
                this.axios.get('/api/user/config', {
                    terminal: 1
                })
                    .then((response) => {
                        const data = response.data;
                        if (data.status === 10000) {
                            // console.log(data);
                            this.options1 = response.data.data;
                            console.log('subPay', response.data.data)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            jumpWithdrawal () {
                this.$router.push('/personal/withdrawal')
            },
            jumpDeposit () {
                this.$router.push('/personal/deposit')
            },
            toggleAuto () {
                this.isAuto = !this.isAuto;
            },
            refresh () {
                this.isRefresh = true;
                this.axios.get('/api/user/info')
                    .then((response) => {
                        const data = response.data;
                        if (data.status === 10000) {
                            // console.log(data);
                            //this.myUser = response.data.data;
                            this.myUser = Object.assign(this.myUser, response.data.data);
                            console.log('user', this.myUser)
                        }
                    }).finally(() => {
                    // //定时器
                        this.isRefresh = false;

                });

            },
            recycle () {
                this.testRefresh = true;

                this.axios.post('/api/user/recycle').then(resp => {
                    const data = resp.data;

                    if (data.status === 10000) {
                        this.myUser = Object.assign(this.myUser, data.data);
                    }

                }).finally(() => {
                    this.testRefresh = false;
                });

            },
            tranferConfirm () {
                console.log('inValue', this.inValue);
                console.log('outValue', this.outValue);
                console.log('amount', this.amount);

                if (!this.outValue) {
                    this.$alert('请选择转出平台');
                    return;
                } else if (!this.inValue) {
                    this.$alert('请选择转入平台');
                    return;
                } else if (this.inValue === this.outValue) {
                    this.$alert('同平台间不能转账');
                    return;
                } else if (!this.amount) {
                    this.$alert('金额不能为空或小于1');
                    return;
                }
                const inValue = this.inValue;
                const outValue = this.outValue;
                const amount = this.amount;

                this.isTransfer = true;

                this.axios.post('/api/user/game/transfer', {
                    inValue, outValue, amount
                }).then((response) => {
                    const data = response.data;
                    if (data.status === 10000) {
                        this.amount = '';
                        this.$message({
                            message: data.msg,
                            type: 'success'
                        });
                        this.myUser = data.data;
                    }
                }).catch(function (error) {
                    console.log(error);
                }).finally(() => {
                    this.isTransfer = false;
                })

            },
            batch () {
                this.axios.post('/api/user/batch').then((response) => {
                    const data = response.data;
                    if (data.status === 10000) {

                        this.batchList = data.data;
                    }
                }).catch(function (error) {
                    console.log(error);
                }).finally(() => {
                    this.isTransfer = false;
                })
            }

        },
        mounted () {
            this.getPayCofig();
            this.batch();
        }
    }
</script>
<style scoped>

    .ym {
        width: 978px;
        height: 38px;
        margin: 10px;
    }

    .ymContent {
        width: 978px;
        height: 38px;
        text-align: left;
        line-height: 38px;
        font-size: 36px;
        color: red;

    }

    .switch {
        width: 998px;
        height: 35px;
    }

    .switchButton {
        width: 160px;
        height: 30px;
        color: #c8a675;
        border: 1px solid #c8a675;
        border-radius: 5px;
        text-align: center;
        margin-left: 750px;
        background: white;
        font-size: 14px;
    }

    .asset {
        width: 998px;
        height: 50px;
    }

    .assetName {
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

    .asset-case {
        width: 998px;
        height: 160px;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        /*display: none;*/
    }

    .asset-left {
        width: 400px;
        height: 160px;
        padding: 20px 30px;
        border-right: 1px solid #eaeaea;
    }

    .tex1 {
        width: 380px;
        height: 80px;
        font-size: 50px;
        font-weight: 700;
        padding-left: 10px;
        text-align: left;
        color: black;
    }

    .asset-btn {
        width: 399px;
        height: 40px;
        display: flex;
        justify-content: flex-start;
    }

    .asset-btn1 {
        width: 130px;
        height: 40px;
        margin: 0 10px;
        color: #c8a675;
        padding: 0 15px;
        text-align: center;
        line-height: 40px;
        background: white;
        font-size: 14px;
        border: 1px solid #c8a675;
        border-radius: 5px;
    }

    .btnColor {
        background: #c8a675;
        color: white;
    }

    .asset-right {
        width: 500px;
        height: 160px;
    }

    .asset- {
        width: 500px;
        height: 50px;
        display: flex;
        justify-content: flex-end;
    }

    .asset-btn2 {
        /*width: 60px;*/
        height: 35px;
        font-size: 14px;
        background: #c8a675;
        border: none;
        border-radius: 5px;
        margin-right: 20px;
    }

    .asset-wallet {
        /*width: 238px;*/
        height: 50px;
        font-size: 14px;
        display: flex;
        margin-left: 30px;
        align-items: center;

    }

    .wallet {
        width: 56px;
        height: 19px;
        margin-right: 20px;
        font-size: 14px;
    }

    .sum {
        width: 42px;
        font-size: 14px;
        height: 19px;
        margin-right: 20px;
    }

    .recycle {
        /*width: 80px;*/
        /*height: 28px;*/
        /*line-height: 28px;*/
        border: 1px solid #c8a675;
        /*border-radius: 5px;*/
        /*font-size: 13px;*/
        /*margin-top: 10px;*/
        /*margin-left: 25px;*/
        color: #c8a675;
    }

    .integral {
        width: 56px;
        height: 19px;
        margin-right: 20px;
        font-size: 14px;
    }

    .total {
        width: 10px;
        height: 19px;
        font-size: 14px;
    }

    .assetDistribute {
        width: 998px;
        height: 300px;
        border: 1px dashed silver;
        margin-top: 60px;
        padding-top: 30px;
    }

    .transfer {
        width: 999px;
        height: 262px;
        display: flex;
    }

    .transfer-left {
        position: relative;
        padding: 20px;
        /*width: 520px;*/
        border-right: 1px dashed #eee;
    }

    .total-num {
        width: 76px;
        height: 56px;
        text-align: left;
        margin: 0 auto 25px auto;
    }

    .total-num p {
        line-height: 32px;
        font-size: 16px;
        margin-left: 5px;
    }

    .total-num h2 {
        font-size: 24px;
        font-weight: 600;
    }

    .transfer-left-bottom {
        height: 89px;
        display: flex;
    }

    .bottom-left {
        width: 239px;
        height: 87px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        border-right: 1px solid gainsboro;
    }

    .bottom-left p {
        width: 239px;
        text-align: center;
        font-size: 14px;
    }

    .bottom-left h3 {
        margin-top: 14px;
        width: 239px;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 14px;
    }

    .transfer-btn {
        width: 150px;
        height: 35px;
        display: flex;
        justify-content: space-between;
    }

    .transfer-btn1 {
        height: 30px;
        padding: 5px 15px;
        font-size: 13px;
        background: #c8a675;
        border-radius: 3px;
        border: none;
        color: #fff;
    }

    .transfer-btn2 {
        height: 30px;
        padding: 5px 15px;
        font-size: 13px;
        border-radius: 3px;
        background: #fff;
        border: 1px solid gray;
        color: gray;
    }

    .bottom-right {
        width: 238px;
        height: 87px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .bottom-right p {
        width: 239px;
        text-align: center;
        font-size: 14px;
    }

    .bottom-right h3 {
        /*margin-top: 14px;*/
        width: 239px;
        font-size: 16px;
        font-weight: 700;
        height: 20px;
        margin-bottom: 14px;

    }

    .transfer-right {
        width: 390px;
        height: 233px;
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .transfer-row {
        width: 370px;
        height: 35px;
        /*display: flex;*/
        padding-left: 20px;
        margin-bottom: 7px;
    }

    .transfer-row label {
        height: 35px;
        width: 50px;
        line-height: 44px;
        font-size: 14px;
        text-align: left;
        color: #666;
        vertical-align: middle;
    }

    .transfer-row input {
        width: 208px;
        line-height: 35px;
        padding: 0 0 0 15px;
        color: #495060;
        border-radius: 3px;
        border: 1px solid gainsboro;
    }

    .btn-next {
        margin-left: 70px;
        width: 225px;
        height: 40px;
        color: #fff;
        background: #c8a675;
        font-size: 14px;
        border: 1px solid #c8a675;
    }

    .distribution {
        width: 100%;
        height: 122px;
    }

    .distribution-ul {
        padding: 0 15px 40px 25px;
        display: flex;
    }

    .distribution-li {
        width: 33%;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 14px;
        margin-top: 20px;
        margin-right: 20px;
        transition: .3s ease-in-out;
        position: relative;
        border-radius: 5px;
        display: flex;
        justify-content: left;
    }

    .distribution-li:hover {
        background: #eaeaea;
        background: linear-gradient(180deg, #f9f9f9, #f2f2f2);
        border-radius: 4px;
        transform: translateY(-3px);
    }

    .drt-img {
        width: 66px;
        height: 66px;
        margin-left: 40px;
        text-align: center;
        vertical-align: middle;
        border-radius: 100%;
        border: 3px solid #e7e3e3;
        background-size: contain;
        cursor: pointer;
        /*background-image: url("https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/dt.png");*/
    }

    .drt-img:hover .drt-hover {
        opacity: 1;
    }

    .drt-hover {
        width: 66px;
        height: 66px;
        text-align: center;
        margin-left: 40px;
        vertical-align: middle;
        border-radius: 100%;
        border: 3px solid #e7e3e3;
        background-size: contain;
        position: absolute;
        left: 0;
        top: 10px;
        cursor: pointer;
        opacity: 0;
        background-image: url(//image.beike188.com/YHHB/user_img/recover.png) !important;
    }

    .drt-text {
        height: 60px;
        width: 80px;
        text-align: left;
        margin-left: 15px;
        position: relative;
        padding-top: 17px;
    }

    .drt-text p {
        padding-bottom: 8px;
        font-size: 14px;
    }

</style>
